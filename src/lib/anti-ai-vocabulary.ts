/**
 * Anti-AI Vocabulary Registry & Sanitizer
 * 
 * Strict blacklist of clichéd AI buzzwords and automated phrasing.
 * Ensures 100% authentic, human journalistic voice across CelebEdge.
 */

export const BANNED_AI_WORDS_AND_PHRASES: string[] = [
  "a deep dive into",
  "a guide to",
  "adopt",
  "adopting",
  "an in-depth look at",
  "an in-depth look into",
  "as we look ahead",
  "battle-tested",
  "beacon",
  "bulletproof",
  "complete",
  "comprehensive",
  "comprehensive guide",
  "comprehensive guide to",
  "consumption",
  "cornerstone",
  "crucial",
  "crucial component",
  "deep dive",
  "delve",
  "delve into",
  "delving",
  "demystifying",
  "digital",
  "discover",
  "discover verified facts",
  "dive into",
  "elevate",
  "embark",
  "enterprise-grade",
  "evolution",
  "explore",
  "extracting",
  "find",
  "find verified facts",
  "foster",
  "furthermore",
  "game-changer",
  "guide",
  "harness",
  "helpful background",
  "helpful background details and common queries",
  "high-fidelity",
  "in conclusion",
  "in this article",
  "in this article, we explore",
  "in today's digital era",
  "in today's fast-paced",
  "in today's fast-paced digital world",
  "in-depth",
  "it is crucial to",
  "it is important to note",
  "it is important to remember",
  "key insights",
  "landscape",
  "learn",
  "learn how",
  "learn more",
  "learn more details",
  "learn more now",
  "learn more today",
  "leverage",
  "look no further",
  "media",
  "modern",
  "modern teams adopting",
  "moreover",
  "navigating",
  "navigating the",
  "orchestrate",
  "paradigm shift",
  "pipelines",
  "pivotal",
  "plethora",
  "powerhouse",
  "realm",
  "robust",
  "seamless",
  "seamlessly",
  "tapestry",
  "technical",
  "testament",
  "the ultimate",
  "ultimate",
  "ultimate guide",
  "ultra-high",
  "uncover",
  "unleash",
  "unlock",
  "unpacking",
  "verified",
  "vital",
  "vital role"
];

/**
 * Editorial Replacements: Human, journalistic alternatives
 */
export const HUMAN_REPLACEMENTS: Record<string, string> = {
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
  "vital": "essential",
};

/**
 * Checks if a string contains any banned AI phrases or words.
 */
export function checkAiVocabulary(text: string): { hasAiWords: boolean; matches: string[] } {
  if (!text) return { hasAiWords: false, matches: [] };
  const matches: string[] = [];

  for (const banned of BANNED_AI_WORDS_AND_PHRASES) {
    const regex = new RegExp(`\\b${banned.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, "i");
    if (regex.test(text)) {
      matches.push(banned);
    }
  }

  return {
    hasAiWords: matches.length > 0,
    matches: Array.from(new Set(matches)),
  };
}

/**
 * Automatically sanitizes text by replacing clichéd AI phrases with human journalistic alternatives.
 */
export function sanitizeAiVocabulary(text: string): string {
  if (!text) return text;
  let result = text;

  // Replace longest phrases first
  const sortedKeys = Object.keys(HUMAN_REPLACEMENTS).sort((a, b) => b.length - a.length);

  for (const key of sortedKeys) {
    const replacement = HUMAN_REPLACEMENTS[key];
    const regex = new RegExp(`\\b${key.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, "gi");
    result = result.replace(regex, (match) => {
      // Preserve capitalization if first letter was uppercase
      if (match[0] === match[0].toUpperCase()) {
        return replacement.charAt(0).toUpperCase() + replacement.slice(1);
      }
      return replacement;
    });
  }

  return result;
}
