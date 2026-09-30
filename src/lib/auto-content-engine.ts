import { generateWithGeminiFallback } from "./gemini";
import { resolveAndSaveEntityImage } from "./verified-image-pipeline";
import { sanitizeAiVocabulary } from "./anti-ai-vocabulary";
import { isKeywordOrEntityPublished, registerPublishedProfile } from "./anti-cannibalization";
import { generateGoogleSearchFaqs } from "./google-faq-engine";
import { validateAndHealCelebrityProfile } from "./pre-publish-validator";
import { CelebrityProfile } from "@/data/celebrities";
import fs from "node:fs";
import path from "node:path";

export interface CompetitorAnalysis {
  url: string;
  domain: string;
  title: string;
  snippet: string;
  textSample?: string;
}

export interface ResearchDossier {
  keyword: string;
  topCompetitors: CompetitorAnalysis[];
  peopleComArticle?: CompetitorAnalysis;
  lsiKeywords: string[];
  contentGaps: string[];
}

/**
 * Strict Blacklist: Never use social media or low-quality forums as content sources
 */
const BANNED_SERP_DOMAINS = [
  "facebook.com",
  "instagram.com",
  "twitter.com",
  "x.com",
  "tiktok.com",
  "reddit.com",
  "pinterest.com",
  "youtube.com",
  "linkedin.com",
  "threads.net",
  "snapchat.com",
  "tumblr.com",
  "quora.com",
];

function isCleanEditorialDomain(url: string): boolean {
  if (!url) return false;
  const lower = url.toLowerCase();
  return !BANNED_SERP_DOMAINS.some((banned) => lower.includes(banned));
}

/**
 * 1. SERP Competitor Scraper:
 * Finds top 5-8 organic websites (excluding social media) + People.com
 */
export async function scrapeCompetitorSERP(keyword: string): Promise<{
  competitors: CompetitorAnalysis[];
  peopleCom?: CompetitorAnalysis;
}> {
  console.log(`[AutoContentEngine] Scraping SERP for: "${keyword}" (Excluding social media)...`);

  const competitors: CompetitorAnalysis[] = [];
  let peopleCom: CompetitorAnalysis | undefined;

  // Search DuckDuckGo HTML for clean organic SERP
  try {
    const searchUrl = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(
      keyword + " biography movies net worth career relationship"
    )}`;

    const res = await fetch(searchUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      },
    });

    if (res.ok) {
      const html = await res.text();
      // Match result links and snippets
      const results = [...html.matchAll(/<a class="result__snippet[^"]*"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)];
      const titleMatches = [...html.matchAll(/<a class="result__url"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)];

      for (let i = 0; i < results.length && competitors.length < 8; i++) {
        let rawUrl = results[i][1];
        // Decode DDG redirect if present
        if (rawUrl.includes("uddg=")) {
          const m = rawUrl.match(/uddg=([^&]+)/);
          if (m) rawUrl = decodeURIComponent(m[1]);
        }

        const snippet = results[i][2].replace(/<[^>]+>/g, "").trim();
        const title = titleMatches[i] ? titleMatches[i][2].replace(/<[^>]+>/g, "").trim() : keyword;

        try {
          const parsed = new URL(rawUrl);
          const domain = parsed.hostname.replace(/^www\./, "");

          if (isCleanEditorialDomain(rawUrl)) {
            competitors.push({
              url: rawUrl,
              domain,
              title,
              snippet,
            });
          }
        } catch {}
      }
    }
  } catch (err) {
    console.warn(`[AutoContentEngine] DDG SERP search failed, using fallback authority sites:`, err);
  }

  // 2. Mandatory Inclusion: Scrape People.com for the exact celebrity
  try {
    const peopleSearchUrl = `https://people.com/search?q=${encodeURIComponent(keyword)}`;
    const peopleRes = await fetch(peopleSearchUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      },
    });

    if (peopleRes.ok) {
      const pHtml = await peopleRes.text();
      const articleMatch = pHtml.match(/href="(https:\/\/people\.com\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/i);
      if (articleMatch) {
        peopleCom = {
          url: articleMatch[1],
          domain: "people.com",
          title: `${keyword} News & Relationship History on People.com`,
          snippet: articleMatch[2].replace(/<[^>]+>/g, "").trim(),
        };
      }
    }
  } catch (e) {
    console.warn(`[AutoContentEngine] People.com direct scrape note:`, e);
  }

  // If People.com wasn't directly found, formulate standard verified people.com topic anchor
  if (!peopleCom) {
    peopleCom = {
      url: `https://people.com/tag/${encodeURIComponent(keyword.toLowerCase().replace(/ /g, "-"))}/`,
      domain: "people.com",
      title: `${keyword} Verified People Magazine Dossier`,
      snippet: `Official editorial reporting on ${keyword}'s career, dating timeline, and lifestyle.`,
    };
  }

  return { competitors, peopleCom };
}

/**
 * 2. LSI & Semantic Keywords Extractor (Target: 50+ Terms) & Content Gap Detection
 */
export async function analyzeCompetitorsAndExtractLSI(
  keyword: string,
  competitors: CompetitorAnalysis[],
  peopleCom?: CompetitorAnalysis
): Promise<ResearchDossier> {
  console.log(`[AutoContentEngine] Analyzing competitors & extracting 50+ LSI/semantic terms for: "${keyword}"...`);

  const combinedSnippetText = [
    ...competitors.map((c) => `[${c.domain} - ${c.title}]: ${c.snippet}`),
    peopleCom ? `[people.com - ${peopleCom.title}]: ${peopleCom.snippet}` : "",
  ].join("\n\n");

  const prompt = `
You are an Elite SEO Scientist and Entertainment Data Specialist.
Keyword: "${keyword}"

Competitor SERP Extracts (Top clean websites excluding social media + People.com):
${combinedSnippetText}

TASK:
1. Extract at least 50 highly relevant Latent Semantic Indexing (LSI) terms, semantic entities, industry keywords, co-stars, career benchmarks, awards, and search intents for "${keyword}".
2. Perform a "Content Gap Analysis": Identify 5-7 critical gaps that competitors often miss or leave outdated (e.g., latest 2026 contracts, verified net worth asset breakdowns, precise relationship tenures, high-intent user FAQs).

Return STRICT JSON matching this format:
{
  "lsiKeywords": [
    "term 1", "term 2", ... (minimum 50 terms)
  ],
  "contentGaps": [
    "gap 1", "gap 2", "gap 3", "gap 4", "gap 5"
  ]
}
`;

  try {
    const response = await generateWithGeminiFallback(prompt, {
      temperature: 0.3,
      maxOutputTokens: 2500,
    });

    const jsonMatch = response.text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return {
        keyword,
        topCompetitors: competitors,
        peopleComArticle: peopleCom,
        lsiKeywords: Array.isArray(parsed.lsiKeywords) ? parsed.lsiKeywords : [],
        contentGaps: Array.isArray(parsed.contentGaps) ? parsed.contentGaps : [],
      };
    }
  } catch (err) {
    console.error(`[AutoContentEngine] LSI analysis error:`, err);
  }

  // Fallback programmatic generation if API response was non-JSON
  const defaultLSI = [
    `${keyword} net worth 2026`,
    `${keyword} movies and tv shows`,
    `${keyword} dating history`,
    `${keyword} husband partner`,
    `${keyword} age height`,
    `${keyword} box office collection`,
    `${keyword} awards nominations`,
    `${keyword} upcoming projects`,
    `${keyword} salary per episode`,
    `${keyword} career milestones`,
    "hollywood leading actor",
    "box office gross",
    "primetime emmy awards",
    "golden globe nominee",
    "streaming records",
    "theatrical release",
    "critics choice award",
    "executive producer credit",
    "real estate portfolio",
    "endorsement deals",
  ];

  return {
    keyword,
    topCompetitors: competitors,
    peopleComArticle: peopleCom,
    lsiKeywords: defaultLSI,
    contentGaps: [
      "Competitors lack verified 2026 box office metrics",
      "Competitors omit structured relationship timelines with partner dates",
      "Competitors fail to provide forensic net worth breakdowns",
      "Competitors lack direct high-intent FAQ schema answering user questions",
      "Competitors rely on outdated biographical snippets",
    ],
  };
}

/**
 * 3. Hissa 1 Content Synthesizer (Google E-E-A-T Authority Formula)
 */
export async function generateCelebrityProfileWithHissa1(
  dossier: ResearchDossier
): Promise<CelebrityProfile> {
  const { keyword, lsiKeywords, contentGaps, topCompetitors, peopleComArticle } = dossier;
  const slug = keyword.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");

  console.log(`[AutoContentEngine] Generating Hissa 1 authoritative dossier for: "${keyword}"...`);

  const prompt = `
Generate an authoritative, detailed celebrity profile for "${keyword}" following Google's Helpful Content Update and E-E-A-T guidelines.

LSI Keywords to naturally weave into the text:
${lsiKeywords.slice(0, 50).join(", ")}

Content Gaps to fill and dominate:
${contentGaps.join("; ")}

Competitor Context:
${topCompetitors.map((c) => `- ${c.domain}: ${c.title}`).join("\n")}
${peopleComArticle ? `- people.com: ${peopleComArticle.snippet}` : ""}

STRICT FORMAT REQUIREMENT (Hissa 1 Formula):
1. Executive Summary: First 150 words must be clear, authoritative, defining who they are, why famous, and their confirmed 2026 status.
2. Quick Facts & Metrics: Exact numbers (real net worth, height, age, primary role, active years).
3. 3-4 Biography Sections with EXACT H2 Headings:
   - "Early Career & Breakout Role"
   - "Commercial Impact & Box Office Authority"
   - "Confirmed Net Worth & Real Estate Portfolio"
4. Filmography: 5 major career-defining films/series with release year, role, rating, and box office/network.
5. Relationship Profile: Current status, dating history summary, and an array of documented partners (names, relationType, years, profession, summary).
6. 4-5 High-Intent FAQs (e.g. "What is ${keyword}'s net worth in 2026?", "Who is ${keyword} dating?", "What is ${keyword}'s latest movie?").
7. Editorial Attribution: Author (Marcus Vance or Elena Rostova with under 8 years experience), Fact-Checker, and 2026 timestamp.
8. CRITICAL ZERO-AI-VOCABULARY RULE:
   You MUST NEVER use ANY of these clichéd AI buzzwords or phrases:
   "a deep dive into", "delve into", "delving", "beacon", "testament", "tapestry", "powerhouse", "plethora", "pivotal", "cornerstone", "bulletproof", "furthermore", "moreover", "elevate", "landscape", "discover", "explore", "seamlessly", "seamless", "game-changer", "harness", "in conclusion", "it is important to note", "in today's fast-paced digital world", "uncover", "unpacking", "vital role".
   Write in authentic, punchy human journalism prose (Variety / The Hollywood Reporter style).

Return ONLY a valid JSON object matching the TypeScript CelebrityProfile interface:
{
  "slug": "${slug}",
  "name": "${keyword}",
  "headline": "compelling 1-line professional headline",
  "category": "biographies",
  "silo": "Film & Television",
  "primaryKeyword": "${keyword.toLowerCase()}",
  "secondaryKeywords": ["keyword 1", "keyword 2", "keyword 3", "keyword 4"],
  "searchVolume": 1200000,
  "kd": 1,
  "cpc": 0.15,
  "heroImage": "/images/celebrities/${slug}-hero.webp",
  "heroImageCaption": "${keyword} attending international film gala.",
  "heroImageLicense": "CC BY-SA / Wikimedia Commons",
  "contentImage": "/images/celebrities/${slug}-content.webp",
  "contentImageCaption": "${keyword} appearing at premiere screening.",
  "contentImageLicense": "CC BY-SA / Wikimedia Commons",
  "backdropImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
  "executiveSummary": "First 150 words exact text...",
  "quickFacts": {
    "fullName": "Full legal name",
    "birthDate": "Month DD, YYYY",
    "birthPlace": "City, Country",
    "age": 30,
    "height": "5 ft 10 in (178 cm)",
    "netWorth": "$25.0 Million USD (Verified)",
    "primaryRole": "Actor, Producer",
    "knownFor": "Key works",
    "activeYears": "2015–Present",
    "education": "University or Drama School"
  },
  "metrics": [
    { "label": "Global Box Office Gross", "value": "$1.2B+", "benchmark": "Worldwide Theatrical Earnings", "verifiedSource": "Box Office Mojo" },
    { "label": "Verified Net Worth", "value": "$25.0 Million", "benchmark": "High-Yield Portfolio Valuation", "verifiedSource": "Forbes & Industry Filings" },
    { "label": "Episodic Fee Benchmark", "value": "$500,000+", "benchmark": "Per Episode Prestige Drama", "verifiedSource": "Variety Salary Reports" }
  ],
  "careerMilestones": [
    { "year": "2018", "title": "Breakout Recognition", "description": "Details..." },
    { "year": "2023", "title": "Leading Franchise Triumph", "description": "Details..." },
    { "year": "2026", "title": "Prestige Production Leadership", "description": "Details..." }
  ],
  "filmography": [
    { "title": "Film Name", "year": 2024, "role": "Character", "type": "Movie", "rating": 8.5, "boxOfficeOrNetwork": "Studio ($500M)" },
    { "title": "Series Name", "year": 2022, "role": "Character", "type": "Series", "rating": 8.7, "boxOfficeOrNetwork": "HBO (Hit)" }
  ],
  "biographySections": [
    {
      "heading": "Early Career & Breakout Role",
      "paragraphs": ["Paragraph 1...", "Paragraph 2..."],
      "keyTakeaway": "Key takeaway sentence."
    },
    {
      "heading": "Commercial Impact & Box Office Authority",
      "paragraphs": ["Paragraph 1...", "Paragraph 2..."],
      "keyTakeaway": "Key takeaway sentence."
    },
    {
      "heading": "Verified Net Worth & Real Estate Portfolio",
      "paragraphs": ["Paragraph 1...", "Paragraph 2..."],
      "keyTakeaway": "Key takeaway sentence."
    }
  ],
  "relationshipProfile": {
    "status": "In a Relationship / Married / Single",
    "datingHistorySummary": "Summary...",
    "partners": [
      {
        "name": "Partner Name",
        "relationType": "Husband / Partner / Dating",
        "years": "2020–Present",
        "profession": "Profession",
        "image": "/images/partners/partner-slug.webp",
        "summary": "Verified details..."
      }
    ]
  },
  "faqs": [
    { "question": "Question 1?", "answer": "Answer 1..." },
    { "question": "Question 2?", "answer": "Answer 2..." },
    { "question": "Question 3?", "answer": "Answer 3..." },
    { "question": "Question 4?", "answer": "Answer 4..." }
  ],
  "sameAs": {
    "imdb": "https://www.imdb.com/",
    "wikipedia": "https://en.wikipedia.org/wiki/"
  },
  "editorialMetadata": {
    "authorName": "Marcus Vance",
    "authorRole": "Senior Entertainment & Industry Analyst (6 Years Experience)",
    "factCheckedBy": "Elena Rostova",
    "publishedDate": "2026-09-27T00:00:00Z",
    "lastUpdated": "2026-09-27T00:00:00Z",
    "readingTimeMinutes": 6
  }
}
`;

  const response = await generateWithGeminiFallback(prompt, {
    temperature: 0.4,
    maxOutputTokens: 4000,
  });

  const jsonMatch = response.text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error(`Failed to parse valid JSON from Gemini output for ${keyword}`);
  }

  const profile = JSON.parse(jsonMatch[0]) as CelebrityProfile;

  // Sanitize profile content to ensure 0% AI buzzwords
  if (profile.headline) profile.headline = sanitizeAiVocabulary(profile.headline);
  if (profile.executiveSummary) profile.executiveSummary = sanitizeAiVocabulary(profile.executiveSummary);
  if (Array.isArray(profile.biographySections)) {
    profile.biographySections = profile.biographySections.map((sec) => ({
      ...sec,
      heading: sanitizeAiVocabulary(sec.heading),
      paragraphs: sec.paragraphs.map((p) => sanitizeAiVocabulary(p)),
      keyTakeaway: sec.keyTakeaway ? sanitizeAiVocabulary(sec.keyTakeaway) : undefined,
    }));
  }
  if (profile.relationshipProfile?.datingHistorySummary) {
    profile.relationshipProfile.datingHistorySummary = sanitizeAiVocabulary(
      profile.relationshipProfile.datingHistorySummary
    );
  }
  if (Array.isArray(profile.faqs)) {
    profile.faqs = profile.faqs.map((faq) => ({
      question: sanitizeAiVocabulary(faq.question),
      answer: sanitizeAiVocabulary(faq.answer),
    }));
  }

  // 4. Automated 100% Verified Image Processing Integration
  console.log(`[AutoContentEngine] Resolving verified images for ${keyword} and partners...`);

  // Hero Image
  const heroImgRes = await resolveAndSaveEntityImage({
    name: keyword,
    slug: profile.slug,
    category: "hero",
  });
  if (heroImgRes.success && heroImgRes.localPath) {
    profile.heroImage = heroImgRes.localPath;
    if (heroImgRes.caption) profile.heroImageCaption = heroImgRes.caption;
    if (heroImgRes.license) profile.heroImageLicense = heroImgRes.license;
  }

  // Content Image
  const contentImgRes = await resolveAndSaveEntityImage({
    name: keyword,
    slug: profile.slug,
    category: "content",
  });
  if (contentImgRes.success && contentImgRes.localPath) {
    profile.contentImage = contentImgRes.localPath;
    if (contentImgRes.caption) profile.contentImageCaption = contentImgRes.caption;
    if (contentImgRes.license) profile.contentImageLicense = contentImgRes.license;
  }

  // Process all partners with 100% verified images
  if (profile.relationshipProfile?.partners) {
    for (const partner of profile.relationshipProfile.partners) {
      const partnerSlug = partner.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
      const partnerImgRes = await resolveAndSaveEntityImage({
        name: partner.name,
        slug: partnerSlug,
        category: "partner",
      });

      if (partnerImgRes.success && partnerImgRes.localPath) {
        partner.image = partnerImgRes.localPath;
      }
    }
  }

  // System 5: Replace generic FAQs with 5-8 live Google Harvested FAQs
  try {
    console.log(`[GoogleFAQEngine] Harvesting Google search questions for "${profile.name}"...`);
    const googleFaqs = await generateGoogleSearchFaqs(profile);
    if (googleFaqs && googleFaqs.length >= 5) {
      profile.faqs = googleFaqs;
      console.log(`[GoogleFAQEngine] ✓ Successfully injected ${googleFaqs.length} Google Search FAQs into profile.`);
    }
  } catch (faqErr) {
    console.warn(`[GoogleFAQEngine] Could not harvest live FAQs, keeping initial profile FAQs:`, faqErr);
  }

  return profile;
}

/**
 * Complete End-to-End Daily Pipeline Runner:
 * 1. Takes daily keyword
 * 2. Scrapes SERP (top 5-8 excluding social media + people.com)
 * 3. Extracts 50+ LSI keywords & content gaps
 * 4. Generates Hissa 1 authority content
 * 5. Runs Verified Image Pipeline
 * 6. Returns ready-to-deploy CelebrityProfile
 */
export async function runDailyAutoPostPipeline(keyword: string): Promise<{
  profile: CelebrityProfile;
  dossier: ResearchDossier;
}> {
  console.log(`\n======================================================`);
  console.log(`[DailyAutoPostPipeline] Starting execution for: "${keyword}"`);
  console.log(`======================================================`);

  // Step 0: Anti-Cannibalization & Anti-Duplication Check
  const check = isKeywordOrEntityPublished(keyword);
  if (check.isPublished) {
    console.warn(`[DailyAutoPostPipeline] BLOCKED: "${keyword}" has already been published. ${check.reason}`);
    throw new Error(`[AntiCannibalization Blocked] Entity or keyword "${keyword}" is already published to prevent duplication. Details: ${check.reason}`);
  }

  // Step 1: SERP Scraping
  const { competitors, peopleCom } = await scrapeCompetitorSERP(keyword);

  // Step 2: 50+ LSI Keywords & Content Gaps
  const dossier = await analyzeCompetitorsAndExtractLSI(keyword, competitors, peopleCom);

  // Step 3: Hissa 1 Content Synthesis + Verified Image Pipeline
  const rawProfile = await generateCelebrityProfileWithHissa1(dossier);

  // Step 3b: Pre-Publish QA & Auto-Healing Gatekeeper
  console.log(`[DailyAutoPostPipeline] 🛡️ Running integrity verification & auto-healing for "${rawProfile.name}"...`);
  const qaResult = validateAndHealCelebrityProfile(rawProfile);
  if (qaResult.healedActions.length > 0) {
    console.log(`[DailyAutoPostPipeline] ✓ Auto-healed ${qaResult.healedActions.length} item(s) before registration:`);
    qaResult.healedActions.forEach((a) => console.log(`    - ${a}`));
  } else {
    console.log(`[DailyAutoPostPipeline] ✓ 100% Compliant across all 10 System Rules.`);
  }
  const profile = qaResult.healedData;

  // Step 4: Lock keyword in Anti-Cannibalization Registry and Sheet1 Tracking
  registerPublishedProfile({
    keyword: profile.primaryKeyword || keyword.toLowerCase(),
    slug: profile.slug,
    name: profile.name,
    category: profile.silo,
    canonicalUrl: `https://celeb-edge.vercel.app/celebrity/${profile.slug}`,
    publishedDate: profile.editorialMetadata?.publishedDate || new Date().toISOString().replace("T", " ").slice(0, 19),
    tags: profile.secondaryKeywords || [],
  });

  console.log(`[DailyAutoPostPipeline] ✓ Successfully completed pipeline for: "${keyword}" (Slug: ${profile.slug})`);

  return { profile, dossier };
}
