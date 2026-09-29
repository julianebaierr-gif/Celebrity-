import { createJiti } from "jiti";
import path from "path";
import fs from "fs";

const jiti = createJiti(path.resolve(process.cwd(), "package.json"));
const { CELEBRITIES } = jiti("./src/data/celebrities.ts");

console.log(`\n========================================================`);
console.log(`🔍 TOTAL CELEBRITIES IN SYSTEM: ${CELEBRITIES.length}`);
console.log(`========================================================\n`);

const AI_WORDS = ["delve", "tapestry", "beacon", "testament", "powerhouse", "elevate", "pivotal", "cornerstone", "landscape"];

const auditReport = [];

CELEBRITIES.forEach((c, index) => {
  const issues = [];
  const warnings = [];

  // 1. Basic Identity & Quick Facts
  if (!c.slug) issues.push("Missing slug");
  if (!c.name) issues.push("Missing name");
  if (!c.category) issues.push("Missing category");
  if (!c.headline) issues.push("Missing headline");
  
  const qf = c.quickFacts || {};
  if (!qf.fullName) issues.push("Missing quickFacts.fullName");
  if (!qf.birthDate) issues.push("Missing quickFacts.birthDate");
  if (!qf.birthPlace || qf.birthPlace === "United States") {
    warnings.push(`birthPlace is generic: "${qf.birthPlace}"`);
  }
  if (qf.birthPlace && qf.birthPlace.includes("Public Record")) {
    issues.push("quickFacts.birthPlace contains placeholder 'Confirmed Public Record'");
  }
  if (!qf.age || typeof qf.age !== "number" || qf.age <= 0) issues.push(`Invalid age: ${qf.age}`);
  if (!qf.height || qf.height.includes("undefined")) issues.push("Missing quickFacts.height");
  if (qf.height && qf.height.includes("Studio Measurements")) {
    issues.push("quickFacts.height contains placeholder 'Confirmed Studio Measurements'");
  }
  if (!qf.netWorth) issues.push("Missing quickFacts.netWorth");
  if (!qf.primaryRole) issues.push("Missing quickFacts.primaryRole");
  if (!qf.knownFor) issues.push("Missing quickFacts.knownFor");
  if (!qf.activeYears) issues.push("Missing quickFacts.activeYears");
  if (!qf.education) issues.push("Missing quickFacts.education");
  if (qf.education && qf.education.includes("Professional Performing Arts & Creative Training")) {
    issues.push("quickFacts.education contains placeholder string");
  }

  // 2. Executive Summary Check
  if (!c.executiveSummary) {
    issues.push("Missing executiveSummary");
  } else {
    if (c.executiveSummary.length < 150) warnings.push(`Short executiveSummary (${c.executiveSummary.length} chars)`);
    // Check if ends in cut-off sentence
    const trimmed = c.executiveSummary.trim();
    if (!trimmed.endsWith(".") && !trimmed.endsWith("!") && !trimmed.endsWith("\"")) {
      issues.push("executiveSummary does not end with terminal punctuation (truncated?)");
    }
    // Check if contains dangling word followed by period like "fo." or "independen."
    if (/\b(fo|independen|cosmetic|nominations fo)\.\b/i.test(trimmed)) {
      issues.push("executiveSummary contains hanging truncated word");
    }
  }

  // 3. SEO Keywords & Search Metrics (LSI / Semantic)
  if (!c.primaryKeyword) issues.push("Missing primaryKeyword");
  if (!c.secondaryKeywords || c.secondaryKeywords.length < 3) {
    warnings.push(`Low secondaryKeywords count: ${c.secondaryKeywords?.length || 0}`);
  }
  if (!c.searchVolume || c.searchVolume <= 0) warnings.push(`Search volume: ${c.searchVolume}`);

  // 4. Metrics & Benchmarks
  if (!c.metrics || c.metrics.length < 3) {
    issues.push(`Insufficient metrics: ${c.metrics?.length || 0} (minimum 3 required)`);
  }

  // 5. Career Milestones
  if (!c.careerMilestones || c.careerMilestones.length < 2) {
    issues.push(`Insufficient careerMilestones: ${c.careerMilestones?.length || 0}`);
  } else {
    c.careerMilestones.forEach((m, mIdx) => {
      if (!m.year || !m.title || !m.description) {
        issues.push(`Milestone #${mIdx + 1} has missing fields`);
      }
      if (m.title.includes("Early Breakthrough Recognition (2015)")) {
        issues.push(`Milestone #${mIdx + 1} uses placeholder title`);
      }
    });
  }

  // 6. Filmography / Discography
  if (!c.filmography || c.filmography.length < 2) {
    warnings.push(`Low filmography items: ${c.filmography?.length || 0}`);
  } else {
    c.filmography.forEach((f, fIdx) => {
      if (!f.title || !f.year || !f.role) {
        issues.push(`Filmography item #${fIdx + 1} has missing fields`);
      }
      const placeholderPhrases = [
        "Breakout Feature Film", "Breakthrough Studio Album", "Global Arena Headlining Tour",
        "Billboard Chart-Topping LP", "Academy-Nominated Drama", "Global Streaming Phenomenon",
        "Flagship Reality Franchise", "Championship Campaign", "Historic Repeat Title Season"
      ];
      if (placeholderPhrases.some((p) => f.title.includes(p))) {
        issues.push(`Filmography item #${fIdx + 1} uses placeholder title ("${f.title}")`);
      }
    });
  }

  // 7. Relationships
  const rel = c.relationshipProfile;
  if (!rel) {
    warnings.push("Missing relationshipProfile");
  } else {
    if (!rel.status) warnings.push("Missing relationshipProfile.status");
    if (rel.status && rel.status.includes("Confirmed Personal Record")) {
      issues.push("relationshipProfile.status contains placeholder 'Confirmed Personal Record'");
    }
    if (!rel.datingHistorySummary) warnings.push("Missing relationshipProfile.datingHistorySummary");
  }

  // 8. FAQs Check
  if (!c.faqs || c.faqs.length < 4) {
    issues.push(`Insufficient FAQs: ${c.faqs?.length || 0} (minimum 4 required)`);
  } else {
    c.faqs.forEach((faq, fIdx) => {
      if (!faq.question || !faq.answer) {
        issues.push(`FAQ #${fIdx + 1} missing question or answer`);
      }
      if (faq.answer.includes("anchored by four decades") && qf.age && qf.age < 40) {
        issues.push(`FAQ #${fIdx + 1} has false "four decades" boilerplate`);
      }
      if (faq.answer.includes("delivering landmark contributions to popular culture")) {
        issues.push(`FAQ #${fIdx + 1} has generic boilerplate answer`);
      }
      if (faq.answer.includes("consistent artistic dedication")) {
        issues.push(`FAQ #${fIdx + 1} has generic boilerplate answer`);
      }
    });
  }

  // 9. Biography Sections (Deep Content Gap / Content Architecture)
  if (!c.biographySections || c.biographySections.length === 0) {
    warnings.push("Missing biographySections");
  } else {
    c.biographySections.forEach((sec, sIdx) => {
      if (!sec.heading || !sec.paragraphs || sec.paragraphs.length === 0) {
        issues.push(`Biography section #${sIdx + 1} has empty heading or paragraphs`);
      }
    });
  }

  // 10. AI Words Audit
  const fullText = JSON.stringify(c);
  AI_WORDS.forEach(w => {
    const regex = new RegExp(`\\b${w}\\b`, 'gi');
    let m;
    while ((m = regex.exec(fullText)) !== null) {
      warnings.push(`AI word '${w}': ...${fullText.slice(Math.max(0, m.index - 30), m.index + 40)}...`);
    }
  });

  if (issues.length > 0 || warnings.length > 0) {
    console.log(`\n❌ [${c.slug}] (${c.name}):`);
    if (issues.length > 0) console.log("   ISSUES:", issues);
    if (warnings.length > 0) console.log("   WARNINGS:", warnings);
  } else {
    console.log(`✓ [${c.slug}] (${c.name}): 100% PERFECT`);
    console.log(`   • Primary KW: "${c.primaryKeyword}" (Vol: ${c.searchVolume.toLocaleString()}/mo, KD: ${c.kd}, CPC: $${c.cpc})`);
    console.log(`   • LSI Semantic KWs (${c.secondaryKeywords?.length}): ${c.secondaryKeywords?.join(" | ")}`);
    console.log(`   • Deep Bio Sections (${c.biographySections?.length}): ${c.biographySections?.map(b => b.heading).slice(0, 3).join(" -> ")}...`);
    console.log(`   • Verified Net Worth: ${qf.netWorth} | Age: ${qf.age} | Born: ${qf.birthDate} in ${qf.birthPlace}`);
    console.log(`   • Filmography/Works: ${c.filmography?.length} items | Milestones: ${c.careerMilestones?.length} | PAA FAQs: ${c.faqs?.length}`);
    console.log("");
  }
});
