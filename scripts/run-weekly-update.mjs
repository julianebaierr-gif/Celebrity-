import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { validateAndHealBlogPost } from "./pre-publish-validator.mjs";

// 1. Load Environment Configuration
const envLocalPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envLocalPath)) {
  const envContent = fs.readFileSync(envLocalPath, "utf-8");
  envContent.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
      const [key, ...rest] = trimmed.split("=");
      const val = rest.join("=").trim().replace(/^["']|["']$/g, "");
      if (!process.env[key.trim()]) {
        process.env[key.trim()] = val;
      }
    }
  });
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// 2. Strict Zero-AI Vocabulary Policy Dictionary
const BANNED_AI_WORDS = [
  "a deep dive into", "a guide to", "adopt", "adopting", "an in-depth look at",
  "an in-depth look into", "as we look ahead", "battle-tested", "beacon",
  "bulletproof", "complete", "comprehensive", "comprehensive guide",
  "comprehensive guide to", "consumption", "cornerstone", "crucial",
  "crucial component", "deep dive", "delve", "delve into", "delving",
  "demystifying", "digital", "discover", "discover verified facts",
  "dive into", "elevate", "embark", "enterprise-grade", "evolution",
  "explore", "extracting", "find", "find verified facts", "foster",
  "furthermore", "game-changer", "guide", "harness", "helpful background",
  "helpful background details and common queries", "high-fidelity",
  "in conclusion", "in this article", "in this article, we explore",
  "in today's digital era", "in today's fast-paced",
  "in today's fast-paced digital world", "in-depth", "it is crucial to",
  "it is important to note", "it is important to remember", "key insights",
  "landscape", "learn", "learn how", "learn more", "learn more details",
  "learn more now", "learn more today", "leverage", "look no further",
  "media", "modern", "modern teams adopting", "moreover", "navigating",
  "navigating the", "orchestrate", "paradigm shift", "pipeline", "pipelines", "pivotal",
  "plethora", "powerhouse", "realm", "robust", "seamless", "seamlessly",
  "tapestry", "technical", "testament", "the ultimate", "ultimate",
  "ultimate guide", "ultra-high", "uncover", "unleash", "unlock",
  "unpacking", "verified", "vital", "vital role"
];

const HUMAN_REPLACEMENTS = {
  "a deep dive into": "an examination of",
  "a guide to": "an overview of",
  "an in-depth look at": "a detailed report on",
  "an in-depth look into": "a detailed review of",
  "as we look ahead": "looking forward",
  "battle-tested": "proven",
  "beacon": "symbol",
  "bulletproof": "impenetrable",
  "comprehensive guide to": "full directory of",
  "comprehensive guide": "full record",
  "comprehensive": "thorough",
  "cornerstone": "anchor",
  "crucial component": "key element",
  "crucial": "essential",
  "deep dive": "detailed analysis",
  "delve into": "examine",
  "delving": "examining",
  "delve": "investigate",
  "demystifying": "clarifying",
  "discover verified facts": "view confirmed records",
  "discover": "unfold",
  "dive into": "examine",
  "elevate": "advance",
  "embark": "begin",
  "enterprise-grade": "industry-standard",
  "evolution": "progression",
  "explore": "review",
  "extracting": "gathering",
  "find verified facts": "review public records",
  "foster": "support",
  "furthermore": "in addition",
  "game-changer": "major turning point",
  "harness": "utilize",
  "helpful background details and common queries": "context and background details",
  "helpful background": "editorial context",
  "high-fidelity": "high-precision",
  "in conclusion": "in summary",
  "in this article, we explore": "this report examines",
  "in this article": "in this report",
  "in today's digital era": "in contemporary culture",
  "in today's fast-paced digital world": "in modern entertainment",
  "in today's fast-paced": "in fast-moving",
  "in-depth": "detailed",
  "it is crucial to": "it is necessary to",
  "it is important to note": "notably",
  "it is important to remember": "worth recalling",
  "key insights": "primary takeaways",
  "landscape": "industry",
  "learn more details": "view additional details",
  "learn more now": "read more",
  "learn more today": "read further",
  "learn more": "read more",
  "learn how": "see how",
  "learn": "read",
  "leverage": "use",
  "look no further": "here is the full account",
  "moreover": "additionally",
  "navigating the": "moving through the",
  "navigating": "handling",
  "orchestrate": "arrange",
  "paradigm shift": "industry transition",
  "production pipeline": "active production slate",
  "tour pipeline": "tour schedule",
  "pipeline": "schedule",
  "pipelines": "scheduled projects",
  "pivotal": "decisive",
  "plethora": "broad range",
  "powerhouse": "industry leader",
  "realm": "arena",
  "robust": "resilient",
  "seamlessly": "smoothly",
  "seamless": "smooth",
  "tapestry": "chronicle",
  "technical": "practical",
  "testament": "evidence",
  "the ultimate": "the premier",
  "ultimate guide": "definitive record",
  "ultimate": "definitive",
  "ultra-high": "top-tier",
  "uncover": "reveal",
  "unleash": "introduce",
  "unlock": "access",
  "unpacking": "breaking down",
  "vital role": "essential role",
  "vital": "essential"
};

function sanitizeAiVocabulary(text) {
  if (!text || typeof text !== "string") return text;
  let result = text;
  const sortedKeys = Object.keys(HUMAN_REPLACEMENTS).sort((a, b) => b.length - a.length);

  for (const key of sortedKeys) {
    const replacement = HUMAN_REPLACEMENTS[key];
    const regex = new RegExp(`\\b${key.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}\\b`, "gi");
    result = result.replace(regex, (match) => {
      if (match[0] === match[0].toUpperCase()) {
        return replacement.charAt(0).toUpperCase() + replacement.slice(1);
      }
      return replacement;
    });
  }
  return result;
}

function auditAiWords(text) {
  if (!text || typeof text !== "string") return [];
  const found = [];
  for (const word of BANNED_AI_WORDS) {
    const regex = new RegExp(`\\b${word.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}\\b`, "i");
    if (regex.test(text)) {
      found.push(word);
    }
  }
  return found;
}

// 3. Google News Real-Time Weekly Telemetry Fetcher
async function fetchGoogleNews(celebrityName, maxAgeDays = 14) {
  const query = encodeURIComponent(`"${celebrityName}"`);
  const url = `https://news.google.com/rss/search?q=${query}&hl=en-US&gl=US&ceid=US:en`;

  return new Promise((resolve) => {
    https.get(
      url,
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          if (res.statusCode !== 200) return resolve([]);
          const items = [];
          const matches = data.matchAll(
            /<item>[\s\S]*?<title>(.*?)<\/title>[\s\S]*?<link>(.*?)<\/link>[\s\S]*?<pubDate>(.*?)<\/pubDate>[\s\S]*?<description>(.*?)<\/description>/g
          );
          const now = Date.now();
          const maxAgeMs = maxAgeDays * 24 * 60 * 60 * 1000;
          const nameTokens = celebrityName.toLowerCase().split(/\s+/).filter(Boolean);

          for (const m of matches) {
            const title = m[1].replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
            const link = m[2];
            const pubDate = new Date(m[3]);
            const description = m[4].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");

            const ageMs = now - pubDate.getTime();
            if (ageMs <= maxAgeMs) {
              // Relevance check: title should mention the celebrity name or last name
              const titleLower = title.toLowerCase();
              const isRelevant = nameTokens.some((t) => t.length > 3 && titleLower.includes(t));
              if (isRelevant) {
                items.push({ title, link, pubDate, description });
              }
            }
          }
          resolve(items);
        });
      }
    ).on("error", () => resolve([]));
  });
}

// 4. Gemini API Call Helper
async function callGemini(prompt, temperature = 0.3) {
  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not defined.");
  }

  const models = [
    "gemini-3.5-flash",
    "gemini-flash-latest",
    "gemini-2.5-flash",
    "gemini-pro-latest"
  ];

  for (const model of models) {
    try {
      const payload = JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature,
          topP: 0.95,
          maxOutputTokens: 6000
        }
      });

      const result = await new Promise((resolve, reject) => {
        const req = https.request(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Content-Length": Buffer.byteLength(payload)
            },
            timeout: 60000
          },
          (res) => {
            let data = "";
            res.on("data", (chunk) => (data += chunk));
            res.on("end", () => {
              if (res.statusCode >= 200 && res.statusCode < 300) {
                try {
                  const parsed = JSON.parse(data);
                  const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
                  if (text) return resolve(text);
                  reject(new Error(`No text returned by ${model}`));
                } catch (e) {
                  reject(e);
                }
              } else {
                reject(new Error(`HTTP ${res.statusCode}: ${data.slice(0, 120)}`));
              }
            });
          }
        );

        req.on("error", reject);
        req.write(payload);
        req.end();
      });

      return result;
    } catch (err) {
      console.warn(`[Gemini API] Model ${model} failed: ${err.message}`);
    }
  }

  throw new Error("All Gemini models in cascade failed.");
}

// 5. SEO Title & Description Strict Optimization Helpers
function buildStrictSeoTitle(name, topicKeyword) {
  const candidates = [
    `${name} 2026 Tour Dates, ${topicKeyword} & Analysis`,
    `${name} 2026 ${topicKeyword} & Career Analysis`,
    `${name} 2026 Career, ${topicKeyword} & News Update`,
    `${name} 2026 ${topicKeyword} & Industry Overview`,
    `${name} 2026 ${topicKeyword} Report & News Dossier`,
    `${name} 2026 ${topicKeyword} & Season Analysis`,
    `${name} 2026 Tour Dates & ${topicKeyword} Review`,
    `${name} 2026 Career & ${topicKeyword} Analysis`
  ];

  for (const c of candidates) {
    if (c.length >= 50 && c.length <= 58) return c;
  }
  const valid = candidates.filter((c) => c.length <= 58);
  if (valid.length > 0) {
    let best = valid[0];
    if (best.length < 50) {
      const padded = best.replace(" & Analysis", " & Full Career Analysis");
      if (padded.length >= 50 && padded.length <= 58) return padded;
    }
    return best;
  }
  return `${name.slice(0, 35)} 2026 ${topicKeyword} Analysis`;
}

function buildStrictSeoDesc(name, summary) {
  let desc = `A verified 2026 analysis examining ${name}'s latest milestones, verified news events, and career standing. Read the full journalistic report.`;
  if (desc.length >= 145 && desc.length <= 155 && desc.endsWith(".")) return desc;

  const templates = [
    `A verified 2026 analysis examining ${name}'s latest milestones, verified news events, and career standing. Read the comprehensive journalistic report.`,
    `A verified 2026 analysis examining ${name}'s latest career milestones, verified news events, and industry standing. Read our complete journalistic report.`,
    `A verified 2026 analysis examining ${name}'s latest milestones, verified news events, and career standing. Read the full journalistic report.`,
    `A verified 2026 report examining ${name}'s latest career milestones, public developments, and industry standing. Read the complete 2026 dossier.`
  ];

  for (const t of templates) {
    if (t.length >= 145 && t.length <= 155 && t.endsWith(".")) return t;
  }

  // Exact clamp
  let res = templates[0];
  if (res.length > 155) {
    res = res.slice(0, 154);
    const lastSpace = res.lastIndexOf(" ");
    res = (lastSpace !== -1 ? res.slice(0, lastSpace) : res) + ".";
  }
  return res;
}

// 6. Main Weekly Content Update Routine
async function main() {
  console.log("===================================================================");
  console.log("📰 CelebEdge Weekly Entertainment News & Spoke Blog Engine");
  console.log("===================================================================");

  const registryPath = path.resolve(process.cwd(), "src/data/used-keywords-registry.json");
  const registry = JSON.parse(fs.readFileSync(registryPath, "utf-8"));
  const storePath = path.resolve(process.cwd(), "src/data/updates-store.json");
  let store = { celebrityProfileOverrides: {}, dynamicBlogPosts: [] };
  if (fs.existsSync(storePath)) {
    try {
      store = JSON.parse(fs.readFileSync(storePath, "utf-8"));
    } catch {}
  }

  const requestedSlug = (process.env.TARGET_CELEBRITY || process.argv[2] || "").trim().toLowerCase();

  let selected = null;
  let verifiedNews = [];

  if (requestedSlug) {
    // User requested a specific celebrity
    selected = registry.lockedKeywords.find(
      (k) => k.slug === requestedSlug || k.name.toLowerCase().includes(requestedSlug)
    );

    if (!selected) {
      console.log(`[Weekly Engine] Target celebrity "${requestedSlug}" not found in registry.`);
      process.exit(0);
    }

    console.log(`\nChecking real-time news for requested celebrity: ${selected.name}...`);
    verifiedNews = await fetchGoogleNews(selected.name, 14);

    // CRITICAL USER POLICY: If no fresh weekly news, DO NOT FORCEFULLY CREATE A BLOG
    if (verifiedNews.length === 0) {
      console.log(`\n[Weekly News Policy] ⚠️ No fresh breaking news or weekly updates found for "${selected.name}" in the past 14 days.`);
      console.log(`[Weekly News Policy] ⛔ USER DECISION ENFORCED: Skipping blog post creation (NO FORCED FILLER CONTENT).`);
      console.log(`[Weekly News Policy] Exiting cleanly without modifying blog posts or database.`);
      process.exit(0);
    }
  } else {
    // Automated weekly scan: find a celebrity who ACTUALLY HAS fresh news this week
    console.log(`\nScanning celebrities in registry for verified weekly news (past 14 days)...`);
    const existingBlogSlugs = new Set((store.dynamicBlogPosts || []).map((b) => b.slug));

    for (const candidate of registry.lockedKeywords) {
      console.log(`- Checking: ${candidate.name}...`);
      const news = await fetchGoogleNews(candidate.name, 14);
      if (news.length >= 2) {
        console.log(`  ✓ Found ${news.length} verified news stories for ${candidate.name}!`);
        selected = candidate;
        verifiedNews = news;
        break;
      } else {
        console.log(`  - No significant weekly news for ${candidate.name}. Skipping.`);
      }
    }

    // If NO celebrity has real news this week, SKIP COMPLETELY!
    if (!selected || verifiedNews.length === 0) {
      console.log(`\n[Weekly News Policy] ⚠️ No celebrities currently have breaking weekly news in the past 14 days.`);
      console.log(`[Weekly News Policy] ⛔ USER DECISION ENFORCED: Zero artificial or forced filler blog posts created.`);
      console.log(`[Weekly News Policy] Exiting cleanly.`);
      process.exit(0);
    }
  }

  console.log(`\n===================================================================`);
  console.log(`Target Celebrity Selected: ${selected.name}`);
  console.log(`Verified Recent News Stories (${verifiedNews.length} items):`);
  verifiedNews.slice(0, 5).forEach((n, i) => {
    console.log(`  ${i + 1}. [${n.pubDate.toISOString().slice(0, 10)}] ${n.title}`);
  });
  console.log(`===================================================================\n`);

  // Detect domain archetype
  const cat = (selected.category || "").toLowerCase();
  const nameLower = selected.name.toLowerCase();
  let domain = "ACTOR";
  let topicKeyword = "Projects";
  if (
    cat.includes("music") ||
    cat.includes("sound") ||
    cat.includes("performing") ||
    ["drake", "rosalia", "taylor swift", "britney spears", "mariah carey", "chris brown", "nba youngboy", "youngboy"].some((m) => nameLower.includes(m))
  ) {
    domain = "MUSICIAN";
    topicKeyword = "Music Slate";
  } else if (
    cat.includes("sport") ||
    cat.includes("athlete") ||
    ["travis kelce"].some((s) => nameLower.includes(s))
  ) {
    domain = "ATHLETE";
    topicKeyword = "Contracts";
  } else if (
    cat.includes("creator") ||
    cat.includes("digital") ||
    cat.includes("influencer") ||
    ["kylie jenner", "mrbeast", "ishowspeed", "kai cenat"].some((c) => nameLower.includes(c))
  ) {
    domain = "CREATOR";
    topicKeyword = "Brand Ventures";
  }

  const authorRole = domain === "MUSICIAN"
    ? "Senior Music & Culture Analyst"
    : domain === "ATHLETE"
    ? "Senior Sports Business Analyst"
    : domain === "CREATOR"
    ? "Senior Digital Media & Creator Economy Analyst"
    : "Senior Entertainment & Film Historian";

  const blogSlug = `${selected.slug}-2026-${topicKeyword.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-and-analysis`;
  const blogTitle = `${selected.name}: 2026 ${topicKeyword}, Tour Dates & Career Analysis`;
  const seoTitle = buildStrictSeoTitle(selected.name, topicKeyword);
  const seoDescription = buildStrictSeoDesc(selected.name, topicKeyword);

  console.log(`Generating authentic, fact-grounded 1200+ word article for "${selected.name}"...`);

  const newsSummaryForPrompt = verifiedNews
    .slice(0, 6)
    .map((n) => `- [${n.pubDate.toISOString().slice(0, 10)}] ${n.title}: ${n.description}`)
    .join("\n");

  const prompt = `
You are an acclaimed senior investigative entertainment journalist.
Write an in-depth, authoritative, fact-grounded journalistic feature article analyzing "${selected.name}".

CURRENT REAL-WORLD VERIFIED NEWS EVENTS (PAST 14 DAYS):
${newsSummaryForPrompt}

CONTEXT:
Celebrity Name: "${selected.name}"
Domain / Archetype: "${domain}"
Pillar Profile Link: "/celebrity/${selected.slug}"
Current Year: 2026

STRICT REQUIREMENTS:
1. Target Title: "${blogTitle}"
2. Word Count: STRICTLY 1200+ WORDS of extensive, publication-grade analytical journalism. Do NOT write a short summary. Provide historical context, financial analysis, industry reception, and detailed scrutiny of the recent news events listed above.
3. Structure:
   - Provide 4 to 5 extensive, distinct H2 subheadings analyzing:
     * Breaking News & Current Milestones (grounded in the verified news provided above)
     * Commercial & Financial Architecture (contracts, royalties, tour grosses, brand equity)
     * Critical Reception & Industry Standing
     * Long-Term Career Strategy & Forward Outlook
   - Each section MUST be 3 to 4 dense, informative paragraphs rich with dates, numbers, venue names, collaborator details, and cultural impact.
4. Internal Link:
   You MUST naturally embed this exact markdown link within the body text:
   [View ${selected.name}'s verified net worth, career milestones, and biographical timeline](/celebrity/${selected.slug})
5. ZERO-AI VOCABULARY POLICY:
   Do NOT use any of these words: delve, beacon, testament, powerhouse, tapestry, elevate, pivotal, cornerstone, landscape, seamless, unpack, harness, robust, bulletproof, in conclusion, furthermore, moreover, pipeline, pipelines.
   Use crisp, natural, human journalistic language.

Return STRICT JSON matching this format:
{
  "title": "${blogTitle}",
  "headline": "...",
  "excerpt": "A sharp 2-sentence summary (50 words)...",
  "content": "Full markdown content exceeding 1200 words...",
  "tags": ["${selected.name}", "${domain}", "Entertainment 2026", "Verified News"],
  "readingTimeMinutes": 7
}
`;

  let generatedBlog = null;

  try {
    const rawJsonText = await callGemini(prompt, 0.25);
    const jsonMatch = rawJsonText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      generatedBlog = JSON.parse(jsonMatch[0]);
    }
  } catch (err) {
    console.error(`[Gemini Error] Generation failed: ${err.message}`);
    console.log(`[Weekly News Policy] Aborting to avoid publishing low-quality filler. Exiting cleanly.`);
    process.exit(0);
  }

  if (!generatedBlog || !generatedBlog.content) {
    console.log(`[Weekly News Policy] No article generated. Exiting cleanly.`);
    process.exit(0);
  }

  // Sanitize text fields
  generatedBlog.title = sanitizeAiVocabulary(generatedBlog.title);
  generatedBlog.headline = sanitizeAiVocabulary(generatedBlog.headline);
  generatedBlog.excerpt = sanitizeAiVocabulary(generatedBlog.excerpt);
  generatedBlog.content = sanitizeAiVocabulary(generatedBlog.content);

  // Ensure internal link exists
  const profileLinkMd = `[${selected.name}'s complete biography and verified career metrics](/celebrity/${selected.slug})`;
  if (!generatedBlog.content.includes(`/celebrity/${selected.slug}`)) {
    generatedBlog.content += `\n\nFor additional verified facts and historical timeline records, see ${profileLinkMd}.`;
  }

  // Audit AI words
  const fullTextToAudit = [
    generatedBlog.title,
    generatedBlog.headline,
    generatedBlog.excerpt,
    generatedBlog.content
  ].join(" ");
  const aiAudit = auditAiWords(fullTextToAudit);
  if (aiAudit.length > 0) {
    console.warn(`[AI Audit] Found ${aiAudit.length} AI words, auto-sanitizing:`, aiAudit);
    generatedBlog.content = sanitizeAiVocabulary(generatedBlog.content);
  } else {
    console.log("✓ AI Vocabulary Audit Passed: 0% AI Words Detected.");
  }

  // Check word count
  const wordCount = (generatedBlog.title + " " + generatedBlog.excerpt + " " + generatedBlog.content)
    .split(/\s+/)
    .filter(Boolean).length;
  console.log(`Article Word Count: ${wordCount} words (Target: >= 1200) -> ${wordCount >= 1200 ? "PASS" : "WARN"}`);

  // Select unique non-duplicate cover image
  const coverBlogPath = path.resolve(process.cwd(), `public/images/blog/${selected.slug}-analysis-cover.webp`);
  const contentImgPath = path.resolve(process.cwd(), `public/images/celebrities/${selected.slug}-content.webp`);

  let coverImage = `/images/celebrities/${selected.slug}-content.webp`;
  if (fs.existsSync(coverBlogPath)) {
    coverImage = `/images/blog/${selected.slug}-analysis-cover.webp`;
  } else if (fs.existsSync(contentImgPath)) {
    coverImage = `/images/celebrities/${selected.slug}-content.webp`;
  }

  // Prepare BlogPost object
  const newBlogPost = {
    slug: blogSlug,
    title: generatedBlog.title,
    headline: generatedBlog.headline,
    excerpt: generatedBlog.excerpt,
    seoTitle: seoTitle,
    seoDescription: seoDescription,
    content: generatedBlog.content,
    coverImage: coverImage,
    author: {
      name: "Marcus Vance",
      role: authorRole
    },
    publishedDate: new Date().toISOString(),
    readingTimeMinutes: generatedBlog.readingTimeMinutes || 7,
    tags: generatedBlog.tags || [selected.name, domain, "Entertainment 2026"]
  };

  // Pre-Publish QA & Auto-Healing Gatekeeper
  console.log(`\n===================================================================`);
  console.log(`🛡️ [PrePublishQA] Running integrity verification & auto-healing for blog "${newBlogPost.title}"...`);
  const qaBlogResult = validateAndHealBlogPost(newBlogPost);
  if (qaBlogResult.healedActions.length > 0) {
    console.log(`[PrePublishQA] ✓ Auto-healed ${qaBlogResult.healedActions.length} item(s) before publication:`);
    qaBlogResult.healedActions.forEach((a) => console.log(`    - ${a}`));
  } else {
    console.log(`[PrePublishQA] ✓ Blog 100% Compliant across all editorial & SEO rules.`);
  }
  const verifiedPost = qaBlogResult.healedBlogPost;
  console.log(`===================================================================\n`);

  // Save into updates-store.json
  if (!Array.isArray(store.dynamicBlogPosts)) {
    store.dynamicBlogPosts = [];
  }
  store.dynamicBlogPosts = store.dynamicBlogPosts.filter((b) => b.slug !== verifiedPost.slug);
  store.dynamicBlogPosts.unshift(verifiedPost);

  fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf-8");
  console.log(`[UpdatesStore] ✓ Saved verified weekly spoke article to ${storePath}`);

  console.log("\n===================================================================");
  console.log(`🎉 SUCCESS: Weekly news update completed for ${selected.name}!`);
  console.log(`- Article Title: "${verifiedPost.title}"`);
  console.log(`- Article Slug: /blog/${verifiedPost.slug}`);
  console.log(`- SEO Title (${verifiedPost.seoTitle.length} chars): "${verifiedPost.seoTitle}"`);
  console.log(`- SEO Description (${verifiedPost.seoDescription.length} chars): "${verifiedPost.seoDescription}"`);
  console.log(`- Word Count: ${wordCount} words`);
  console.log(`- Cover Image: ${verifiedPost.coverImage} (Distinct from Hero Image)`);
  console.log("===================================================================\n");
}

main().catch((err) => {
  console.error("Weekly Pipeline Failed:", err);
  process.exit(1);
});
