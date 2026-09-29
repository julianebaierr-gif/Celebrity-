import fs from "fs";

// Patterns that trigger Google's top People-Also-Ask & User Questions
const QUESTION_TRIGGERS = [
  (name) => `is ${name}`,
  (name) => `how old is ${name}`,
  (name) => `what is ${name}`,
  (name) => `who is ${name}`,
  (name) => `does ${name}`,
  (name) => `why did ${name}`,
  (name) => `what happened to ${name}`,
  (name) => `${name} net worth`,
  (name) => `${name} married`,
  (name) => `${name} movies`
];

async function fetchGoogleQuestionsForName(name) {
  const cleanName = name.toLowerCase().trim();
  const rawQuestions = new Set();

  for (const trigger of QUESTION_TRIGGERS) {
    const query = trigger(cleanName);
    try {
      const url = `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}`;
      const res = await fetch(url);
      if (res.ok) {
        const json = await res.json();
        const suggestions = json[1] || [];
        for (const item of suggestions) {
          const s = item.trim().toLowerCase();
          // Filter out low quality, explicit, or unrelated
          if (
            s.includes(cleanName) &&
            !s.includes("nude") &&
            !s.includes("leak") &&
            !s.includes("fake") &&
            !s.includes("meme")
          ) {
            rawQuestions.add(s);
          }
        }
      }
    } catch (err) {
      // Ignore network glitch
    }
  }

  return Array.from(rawQuestions);
}

async function run() {
  const celebrities = ["Tim Curry", "Zendaya", "Cillian Murphy", "Taylor Swift", "Travis Kelce"];
  for (const celeb of celebrities) {
    console.log(`\n=================== ${celeb.toUpperCase()} ===================`);
    const qs = await fetchGoogleQuestionsForName(celeb);
    console.log(`Total harvested: ${qs.length}`);
    console.log("Top 10 samples:");
    qs.slice(0, 10).forEach((q, idx) => console.log(` [${idx+1}] ${q}`));
  }
}

run();
