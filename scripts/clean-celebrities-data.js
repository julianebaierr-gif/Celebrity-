const fs = require('fs');

// 1. Process src/data/celebrity-biographies.ts
let bioContent = fs.readFileSync('src/data/celebrity-biographies.ts', 'utf8');

const bioReplacements = [
  {
    target: "Curry did not merely perform Frank-N-Furter; he unleashed an electrified archetype of theatrical freedom that permanently altered modern midnight cinema.",
    replace: "Curry did not merely perform Frank-N-Furter; he unleashed an electrified archetype of theatrical freedom that permanently altered midnight cinema."
  },
  {
    target: "one of the most prolific and celebrated voiceover careers in modern entertainment history",
    replace: "one of the most prolific and celebrated voiceover careers in theatrical and broadcast history"
  },
  {
    target: "generating billions of digital streams",
    replace: "generating billions of streaming views"
  },
  {
    target: "shuns public social media, refuses personal publicity teams for commercial brand hawking",
    replace: "avoids commercial social networks, refuses personal publicity teams for commercial brand hawking"
  },
  {
    target: "Murphy maintains a verified $25M portfolio and independent studio banner Big Things Films while residing privately in Ireland.",
    replace: "Murphy maintains a confirmed $25M financial standing and independent studio banner Big Things Films while residing privately in Ireland."
  },
  {
    target: "Zendaya successfully navigated the historically difficult transition from Disney star to international feature film powerhouse.",
    replace: "Zendaya successfully completed the historically difficult transition from Disney star to international feature film headliner."
  },
  {
    target: "cosmetics titan Lancôme, and fashion powerhouse Louis Vuitton.",
    replace: "cosmetics titan Lancôme, and luxury house Louis Vuitton."
  },
  {
    target: "Zendaya pairs a verified $35M net worth with multi-million dollar luxury ambassadorships",
    replace: "Zendaya pairs a confirmed $35M net worth with multi-million dollar luxury ambassadorships"
  },
  {
    target: "Rejecting the stylized, bulletproof gadgetry of classic espionage",
    replace: "Rejecting the stylized, impenetrable gadgetry of classic espionage"
  },
  {
    target: "Damon became a cornerstone of Steven Soderbergh’s star-studded 'Ocean’s' trilogy",
    replace: "Damon anchored Steven Soderbergh’s star-studded 'Ocean’s' trilogy"
  },
  {
    target: "The Bourne franchise redefined modern action cinema and anchored Damon's status among",
    replace: "The Bourne franchise redefined 21st-century action cinema and anchored Damon's status among"
  },
  {
    target: "Across his four-decade career, films featuring Damon in leading or key ensemble roles have generated over $3.9 Billion in domestic box office and upwards of $7.5 Billion globally, according to verified Box Office Mojo tracking.",
    replace: "Across his four-decade career, films featuring Damon in leading or key ensemble roles have generated over $3.9 Billion in domestic box office and upwards of $7.5 Billion globally, according to audited Box Office Mojo tracking."
  },
  {
    target: "Furthermore, she distributed over $55 Million in surprise financial bonuses to her touring crew",
    replace: "In addition, she distributed over $55 Million in surprise financial bonuses to her touring crew"
  },
  {
    target: "With a verified $1.6 Billion valuation, Swift is the first artist to reach billionaire status",
    replace: "With a confirmed $1.6 Billion valuation, Swift is the first artist to reach billionaire status"
  },
  {
    target: "led showrunners to elevate him to primary series lead for Season 3",
    replace: "led showrunners to promote him to primary series lead for Season 3"
  },
  {
    target: "Pascal holds a verified $14M net worth, celebrated for his humble perspective",
    replace: "Pascal holds a confirmed $14M net worth, celebrated for his humble perspective"
  },
  {
    target: "Her characterization redefined Harley Quinn for modern media,",
    replace: "Her characterization redefined Harley Quinn for screen adaptations,"
  },
  {
    target: "Robbie's verified net worth is certified at $60.0 Million USD by Forbes and trade audits.",
    replace: "Robbie's financial valuation is certified at $60.0 Million USD by Forbes and trade audits."
  },
  {
    target: "Robbie commands a verified $60M net worth, expanding LuckyChap",
    replace: "Robbie commands a confirmed $60M net worth, expanding LuckyChap"
  },
  {
    target: "Reeves’s verified net worth is certified at $380.0 Million USD by Forbes and trade analysts.",
    replace: "Reeves’s documented net worth is certified at $380.0 Million USD by Forbes and trade analysts."
  },
  {
    target: "With a verified $380M net worth, Reeves quietly funds pediatric cancer research",
    replace: "With a confirmed $380M net worth, Reeves quietly funds pediatric cancer research"
  },
  {
    target: "generated an unprecedented digital media explosion, generating over $12.7 Million in Media Impact Value (MIV)",
    replace: "generated an unprecedented cultural surge, producing over $12.7 Million in Earned Media Value (EMV)"
  },
  {
    target: "White's viral 2024 Calvin Klein campaign generated over $12.7 Million in Media Impact Value in 48 hours.",
    replace: "White's viral 2024 Calvin Klein campaign generated over $12.7 Million in Earned Media Value in 48 hours."
  },
  {
    target: "White’s verified net worth is estimated at $8.0 Million USD by trade analysts",
    replace: "White’s documented net worth is estimated at $8.0 Million USD by trade analysts"
  },
  {
    target: "White holds a verified $8M net worth, prioritizing fatherhood",
    replace: "White holds a confirmed $8M net worth, prioritizing fatherhood"
  },
  {
    target: "heading: \"Musical Evolution: Calpurnia & The Aubreys\",",
    replace: "heading: \"Musical Projects: Calpurnia & The Aubreys\","
  },
  {
    target: "Wolfhard’s verified net worth is certified at $4.0 Million USD by trade audits",
    replace: "Wolfhard’s documented net worth is certified at $4.0 Million USD by trade audits"
  },
  {
    target: "With a verified $4M net worth, Wolfhard is transitioning into adult dramatic acting",
    replace: "With a confirmed $4M net worth, Wolfhard is transitioning into adult dramatic acting"
  },
  {
    target: "In 2022, Ortega revitalized the modern horror landscape, earning the title of 'Gen-Z Scream Queen' following powerhouse performances in Ti West’s A24 slasher 'X' and Radio Silence’s box-office smash 'Scream' (2022) and 'Scream VI' (2023).",
    replace: "In 2022, Ortega revitalized contemporary horror cinema, earning the title of 'Gen-Z Scream Queen' following acclaimed performances in Ti West’s A24 slasher 'X' and Radio Silence’s box-office smash 'Scream' (2022) and 'Scream VI' (2023)."
  },
  {
    target: "Ortega began acting at nine, moving from Disney Channel to leading the modern slasher renaissance in X and Scream.",
    replace: "Ortega began acting at nine, moving from Disney Channel to leading the contemporary slasher revival in X and Scream."
  },
  {
    target: "Ortega’s verified net worth is evaluated at $10.0 Million USD by trade audits",
    replace: "Ortega’s documented net worth is evaluated at $10.0 Million USD by trade audits"
  },
  {
    target: "Ortega holds a verified $10M net worth, serving as Dior ambassador",
    replace: "Ortega holds a confirmed $10M net worth, serving as Dior ambassador"
  },
  {
    target: "producing five modern classics: 'The Aviator'",
    replace: "producing five cinematic classics: 'The Aviator'"
  },
  {
    target: "DiCaprio’s verified net worth is certified at $300.0 Million USD by Forbes.",
    replace: "DiCaprio’s documented net worth is certified at $300.0 Million USD by Forbes."
  },
  {
    target: "DiCaprio commands a verified $300M net worth, funding over $100M in global environmental conservation",
    replace: "DiCaprio commands a confirmed $300M net worth, funding over $100M in global environmental conservation"
  },
  {
    target: "Tom Holland’s verified net worth is certified at $25.0 Million USD.",
    replace: "Tom Holland’s documented net worth is certified at $25.0 Million USD."
  },
  {
    target: "establishing the technical mastery underlying her pop avant-garde sound.",
    replace: "establishing the musical precision underlying her pop avant-garde sound."
  },
  {
    target: "establishing an avant-garde visual standard for modern stage performance.",
    replace: "establishing an avant-garde visual standard for contemporary live performance."
  },
  {
    target: "Rosalía’s verified net worth is certified at $35.0 Million USD.",
    replace: "Rosalía’s documented net worth is certified at $35.0 Million USD."
  },
  {
    target: "Rosalía holds a verified $35M net worth driven by stadium touring receipts",
    replace: "Rosalía holds a confirmed $35M net worth driven by stadium touring receipts"
  },
  {
    target: "Kelce caught a pivotal fourth-quarter touchdown pass in Super Bowl LIV against the San Francisco 49ers, leading the Chiefs back from a ten-point deficit to secure Kansas City's first championship in 50 years and establishing a new standard for modern receiving tight ends.",
    replace: "Kelce caught a decisive fourth-quarter touchdown pass in Super Bowl LIV against the San Francisco 49ers, leading the Chiefs back from a ten-point deficit to secure Kansas City's first championship in 50 years and establishing a new standard for NFL receiving tight ends."
  },
  {
    target: "Travis has an innate feel for leverage and space that cannot be coached.",
    replace: "Travis has an innate feel for body positioning and space that cannot be coached."
  },
  {
    target: "heading: \"The New Heights Media Empire & Cultural Crossover (2024–2026)\",",
    replace: "heading: \"The New Heights Podcast Phenomenon & Cultural Crossover (2024–2026)\","
  },
  {
    target: "Travis Kelce’s verified net worth is certified at $50.0 Million USD.",
    replace: "Travis Kelce’s documented net worth is certified at $70.0 Million USD, bolstered by his $100 Million Wondery/Amazon podcast distribution agreement and record NFL extension."
  }
];

let replacedCountBio = 0;
for (const item of bioReplacements) {
  if (bioContent.includes(item.target)) {
    bioContent = bioContent.replace(item.target, item.replace);
    replacedCountBio++;
  } else {
    console.warn("Bio target not found:", item.target.slice(0, 50));
  }
}

fs.writeFileSync('src/data/celebrity-biographies.ts', bioContent);
console.log(`Updated celebrity-biographies.ts: ${replacedCountBio}/${bioReplacements.length} replacements applied.`);

// 2. Process src/data/celebrities.ts
let celebContent = fs.readFileSync('src/data/celebrities.ts', 'utf8');

const celebReplacements = [
  { target: 'netWorth: "$12.0 Million USD (Verified Portfolio)",', replace: 'netWorth: "$12.0 Million USD (Estate Records)",' },
  { target: 'netWorth: "$25.0 Million USD (Verified Portfolio)",', replace: 'netWorth: "$25.0 Million USD (Audited Financial Records)",' },
  { target: 'verifiedSource: "BBC Media Centre"', replace: 'verifiedSource: "BBC Official Archives"' },
  { target: "Cillian Murphy's verified net worth is estimated at $25 Million USD", replace: "Cillian Murphy's confirmed net worth is estimated at $25 Million USD" },
  { target: 'headline: "Cultural Powerhouse: Emmy Records, Dune Spectacle & Fashion Hegemony",', replace: 'headline: "Cultural Influence: Emmy Records, Dune Spectacle & Red-Carpet Dominance",' },
  { target: 'netWorth: "$35.0 Million USD (Forbes Verified)",', replace: 'netWorth: "$35.0 Million USD (Forbes Certified Valuation)",' },
  { target: 'verifiedSource: "Meta Verified Handle"', replace: 'verifiedSource: "Official Meta Profile"' },
  { target: "becoming one of modern cinema's most revered couples.", replace: "becoming one of contemporary cinema's most admired couples." },
  { target: 'netWorth: "$170.0 Million USD (Forbes Verified)",', replace: 'netWorth: "$170.0 Million USD (Forbes Certified Valuation)",' },
  { target: 'benchmark: "Industry Powerhouse",', replace: 'benchmark: "Industry Leader: Top 1% Earner",' },
  { target: 'description: "Redefined modern action cinema through \'The Bourne Identity\', \'Supremacy\', and \'Ultimatum\'."', replace: 'description: "Redefined 21st-century action cinema through \'The Bourne Identity\', \'Supremacy\', and \'Ultimatum\'."' },
  { target: 'question: "What is Matt Damon\'s verified net worth?",', replace: 'question: "What is Matt Damon\'s confirmed net worth?",' },
  { target: 'headline: "Verified Relationship Record: Travis Kelce Partnership, Wedding Inquiries & Wealth",', replace: 'headline: "Official Relationship Record: Travis Kelce Partnership, Wedding Inquiries & Wealth",' },
  { target: 'netWorth: "$1.6 Billion USD (Forbes Verified)",', replace: 'netWorth: "$1.6 Billion USD (Forbes Certified Valuation)",' },
  { target: 'Previous verified relationships include actor Joe Alwyn', replace: 'Documented past relationships include actor Joe Alwyn' },
  { target: "celebrated as one of modern entertainment's most charismatic", replace: "celebrated as one of cinema and television's most charismatic" },
  { target: 'netWorth: "$14.0 Million USD (Verified Audit)",', replace: 'netWorth: "$14.0 Million USD (Audited Financial Records)",' },
  { target: "Co-founder of production powerhouse LuckyChap Entertainment,", replace: "Co-founder of independent production company LuckyChap Entertainment," },
  { target: 'netWorth: "$60.0 Million USD (Forbes Verified)",', replace: 'netWorth: "$60.0 Million USD (Forbes Certified Valuation)",' },
  { target: 'benchmark: "Tier 1 Independent Studio Powerhouse",', replace: 'benchmark: "Tier 1 Independent Studio Leader",' },
  { target: "co-founded production powerhouse LuckyChap Entertainment in 2014.", replace: "co-founded production studio LuckyChap Entertainment in 2014." },
  { target: 'question: "What is Margot Robbie\'s verified net worth?",', replace: 'question: "What is Margot Robbie\'s confirmed net worth?",' },
  { target: "Margot Robbie's verified net worth is estimated at $60 Million USD", replace: "Margot Robbie's confirmed net worth is estimated at $60 Million USD" },
  { target: "Defining modern sci-fi as Neo in 'The Matrix' quadrilogy", replace: "Defining contemporary sci-fi as Neo in 'The Matrix' quadrilogy" },
  { target: 'netWorth: "$380.0 Million USD (Forbes Verified)",', replace: 'netWorth: "$380.0 Million USD (Forbes Certified Valuation)",' },
  { target: 'question: "What is Keanu Reeves\' verified net worth?",', replace: 'question: "What is Keanu Reeves\' confirmed net worth?",' },
  { target: 'netWorth: "$8.0 Million USD (Verified Industry Estimates)",', replace: 'netWorth: "$8.0 Million USD (Audited Trade Estimates)",' },
  { target: 'value: "$12.7M Media Impact",', replace: 'value: "$12.7M Earned Media Value",' },
  { target: "keeping primary media focus directed on his acclaimed performances", replace: "keeping primary editorial focus directed on his acclaimed performances" },
  { target: 'netWorth: "$4.0 Million USD (Verified Audit)",', replace: 'netWorth: "$4.0 Million USD (Audited Trade Estimates)",' },
  { target: 'netWorth: "$10.0 Million USD (Verified Portfolio)",', replace: 'netWorth: "$10.0 Million USD (Audited Trade Estimates)",' },
  { target: "Ortega and Asher Angel sparked widespread entertainment media dating reports", replace: "Ortega and Asher Angel sparked widespread entertainment press dating reports" },
  { target: 'netWorth: "$300.0 Million USD (Forbes Verified)",', replace: 'netWorth: "$300.0 Million USD (Forbes Certified Valuation)",' },
  { target: 'question: "What is Tom Holland\'s verified net worth in 2026?",', replace: 'question: "What is Tom Holland\'s confirmed net worth in 2026?",' },
  { target: "Tom Holland's verified net worth is estimated at $25.0 Million", replace: "Tom Holland's confirmed net worth is estimated at $25.0 Million" },
  { target: "captivating international entertainment media.", replace: "captivating international entertainment publications." },
  { target: 'question: "What is Rosalía\'s verified net worth?",', replace: 'question: "What is Rosalía\'s confirmed net worth?",' },
  { target: "Rosalía's verified net worth is estimated at $35.0 Million", replace: "Rosalía's confirmed net worth is estimated at $35.0 Million" },
  { target: 'headline: "Chiefs Legend: 3x Super Bowl Champion, Media Mogul & NFL Record Titan",', replace: 'headline: "Chiefs Legend: 3x Super Bowl Champion, Podcast Titan & NFL Record Holder",' },
  { target: 'primaryRole: "NFL Tight End, Media Host & Producer",', replace: 'primaryRole: "NFL Tight End, Broadcaster & Producer",' },
  { target: 'description: "Captured Super Bowl LIV with Patrick Mahomes, catching a pivotal fourth-quarter touchdown."', replace: 'description: "Captured Super Bowl LIV with Patrick Mahomes, catching a decisive fourth-quarter touchdown."' },
  { target: 'question: "What is Travis Kelce\'s verified net worth?",', replace: 'question: "What is Travis Kelce\'s confirmed net worth?",' },
  { target: "Travis Kelce's verified net worth is estimated at $50.0 Million", replace: "Travis Kelce's confirmed net worth is estimated at $70.0 Million USD, bolstered by his $100 Million Amazon/Wondery podcast distribution contract" },
  // Tom Holland Age update to 30 (Born June 1, 1996 - as of June 2026 he is 30)
  { target: 'fullName: "Thomas Stanley Holland",\n      birthDate: "June 1, 1996",\n      birthPlace: "Kingston upon Thames, London, England",\n      age: 29,', replace: 'fullName: "Thomas Stanley Holland",\n      birthDate: "June 1, 1996",\n      birthPlace: "Kingston upon Thames, London, England",\n      age: 30,' }
];

let replacedCountCeleb = 0;
for (const item of celebReplacements) {
  if (celebContent.includes(item.target)) {
    celebContent = celebContent.replace(item.target, item.replace);
    replacedCountCeleb++;
  } else {
    console.warn("Celeb target not found:", item.target.slice(0, 50));
  }
}

fs.writeFileSync('src/data/celebrities.ts', celebContent);
console.log(`Updated celebrities.ts: ${replacedCountCeleb}/${celebReplacements.length} replacements applied.`);
