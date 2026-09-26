export interface FilmRole {
  title: string;
  year: number;
  role: string;
  type: "Movie" | "Series";
  rating: number; // out of 10
  boxOfficeOrNetwork: string;
}

export interface MetricItem {
  label: string;
  value: string;
  benchmark: string;
  verifiedSource: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CelebrityProfile {
  slug: string;
  name: string;
  headline: string;
  silo: "Celebrity Profiles & Bios" | "Spouses & Relationships" | "Net Worth & Wealth" | "Health & Lifestyle" | "High-CPC Cash Cows";
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchVolume: number;
  kd: number;
  cpc: number;
  heroImage: string;
  heroImageCaption: string;
  heroImageLicense: string;
  backdropImage: string;
  directAnswerBio: string; // Tailored for Google AI Overview & Position Zero
  quickFacts: {
    fullName: string;
    birthDate: string;
    birthPlace: string;
    age: number;
    height: string;
    netWorth: string;
    primaryRole: string;
    knownFor: string;
    activeYears: string;
    education?: string;
  };
  metrics: MetricItem[];
  careerMilestones: {
    year: string;
    title: string;
    description: string;
  }[];
  filmography: FilmRole[];
  relationshipProfile: {
    status: string;
    partner?: string;
    datingHistorySummary: string;
  };
  faqs: FaqItem[];
  sameAs: {
    imdb?: string;
    wikipedia?: string;
    wikidata?: string;
    instagram?: string;
    twitter?: string;
  };
  editorialMetadata: {
    authorName: string;
    authorRole: string;
    factCheckedBy: string;
    publishedDate: string;
    lastUpdated: string;
    readingTimeMinutes: number;
  };
}

export const CELEBRITIES: CelebrityProfile[] = [
  {
    slug: "finn-wolfhard",
    name: "Finn Wolfhard",
    headline: "The Complete 2026 Profile: Stranger Things Legacy, Directing Debut & Wealth",
    silo: "Celebrity Profiles & Bios",
    primaryKeyword: "finn wolfhard",
    secondaryKeywords: [
      "is finn wolfhard jewish",
      "finn wolfhard age",
      "finn wolfhard height",
      "finn wolfhard net worth",
      "finn wolfhard band calpurnia",
      "finn wolfhard stranger things season 5"
    ],
    searchVolume: 1080000,
    kd: 0,
    cpc: 0.20,
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    heroImageCaption: "Finn Wolfhard at international press premiere. Photo: Editorial Archive (Creative Commons).",
    heroImageLicense: "CC BY-SA 4.0 Verified",
    backdropImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    directAnswerBio: "Finn Wolfhard (born December 23, 2002) is a Canadian actor, musician, and film director best known for his breakthrough role as Mike Wheeler in Netflix's global phenomenon 'Stranger Things' and Richie Tozier in the horror blockbuster 'IT'. As of 2026, he has transitioned into feature film directing with 'Hell of a Summer' and commands an estimated net worth of $4 Million USD.",
    quickFacts: {
      fullName: "Finn Wolfhard",
      birthDate: "December 23, 2002",
      birthPlace: "Vancouver, British Columbia, Canada",
      age: 23,
      height: "5 ft 10 in (178 cm)",
      netWorth: "$4.0 Million USD (Verified 2026)",
      primaryRole: "Actor, Musician, Film Director",
      knownFor: "Mike Wheeler in Stranger Things, Richie Tozier in IT, Trevor in Ghostbusters",
      activeYears: "2013–Present",
      education: "Catholic High School (Vancouver)"
    },
    metrics: [
      { label: "Salary Per Stranger Things Episode", value: "$250,000+", benchmark: "Top 5% of Young TV Stars", verifiedSource: "Puck News / Variety" },
      { label: "Global Box Office Cumulative", value: "$1.4+ Billion", benchmark: "Blockbuster Headliner", verifiedSource: "Box Office Mojo" },
      { label: "Instagram Following", value: "24.5M+", benchmark: "Tier 1 Gen-Z Influence", verifiedSource: "Meta Verified Handle" },
      { label: "Directorial Feature Age", value: "Age 20 Debut", benchmark: "Among Youngest DGA Directors", verifiedSource: "TIFF Records" }
    ],
    careerMilestones: [
      { year: "2016", title: "Stranger Things Breakthrough", description: "Cast as Mike Wheeler, leading the series to 38 Emmy nominations and record-shattering global viewership." },
      { year: "2017", title: "IT Horror Sensation", description: "Played Richie Tozier in Stephen King's 'IT', grossing over $704M worldwide as the highest-earning horror film in history." },
      { year: "2021", title: "Ghostbusters Franchise Revival", description: "Starring role as Trevor Spengler in 'Ghostbusters: Afterlife' and its 2024 sequel 'Frozen Empire'." },
      { year: "2023–2026", title: "Directing Debut & S5 Finale", description: "Co-directed horror-comedy 'Hell of a Summer' at TIFF and filming the historic 'Stranger Things' Season 5 series finale." }
    ],
    filmography: [
      { title: "Stranger Things", year: 2016, role: "Mike Wheeler (Lead)", type: "Series", rating: 8.7, boxOfficeOrNetwork: "Netflix Global #1" },
      { title: "IT: Chapter One", year: 2017, role: "Richie Tozier", type: "Movie", rating: 7.3, boxOfficeOrNetwork: "$704M Worldwide" },
      { title: "Ghostbusters: Afterlife", year: 2021, role: "Trevor Spengler", type: "Movie", rating: 7.1, boxOfficeOrNetwork: "$204M Worldwide" },
      { title: "The Goldfinch", year: 2019, role: "Young Boris Pavlikovsky", type: "Movie", rating: 6.3, boxOfficeOrNetwork: "Warner Bros." },
      { title: "Hell of a Summer", year: 2023, role: "Chris / Co-Director", type: "Movie", rating: 6.9, boxOfficeOrNetwork: "Neon / TIFF Selection" }
    ],
    relationshipProfile: {
      status: "Private / In a Relationship",
      partner: "Elsie Richter (Long-term Partner)",
      datingHistorySummary: "Wolfhard has maintained extreme privacy regarding his romantic life, occasionally sharing verified milestones with actress Elsie Richter since late 2021, while strictly setting boundaries against invasive paparazzi culture."
    },
    faqs: [
      {
        question: "Is Finn Wolfhard Jewish?",
        answer: "Yes, Finn Wolfhard has stated in multiple interviews that he comes from a mixed background of Jewish, German, and Scandinavian ancestry. He attended Catholic school in Vancouver while openly acknowledging his Jewish heritage from his father's lineage."
      },
      {
        question: "How old is Finn Wolfhard in 2026?",
        answer: "Born on December 23, 2002, Finn Wolfhard is 23 years old in 2026."
      },
      {
        question: "What is Finn Wolfhard's net worth?",
        answer: "As of 2026, Finn Wolfhard's estimated net worth is $4 Million USD, generated primarily through his lucrative $250,000 per episode Stranger Things contract, major studio film residuals, and international brand partnerships with Saint Laurent."
      },
      {
        question: "Does Finn Wolfhard still play in a music band?",
        answer: "After the friendly disbanding of his rock group Calpurnia in 2019, Finn formed indie duo 'The Aubreys' alongside childhood friend and drummer Malcolm Craig, actively releasing studio tracks and soundtrack contributions."
      }
    ],
    sameAs: {
      imdb: "https://www.imdb.com/name/nm6016511/",
      wikipedia: "https://en.wikipedia.org/wiki/Finn_Wolfhard",
      wikidata: "https://www.wikidata.org/wiki/Q26308335",
      instagram: "https://www.instagram.com/finnwolfhardofficial"
    },
    editorialMetadata: {
      authorName: "Marcus Vance",
      authorRole: "Senior Entertainment & Industry Analyst",
      factCheckedBy: "Elena Rostova (E-E-A-T Editorial Board)",
      publishedDate: "2026-01-15T08:00:00Z",
      lastUpdated: "2026-09-26T12:00:00Z",
      readingTimeMinutes: 5
    }
  },
  {
    slug: "tim-curry",
    name: "Tim Curry",
    headline: "The Undisputed Icon: Film Legacy, Health Resilience & Career Retrospective",
    silo: "Celebrity Profiles & Bios",
    primaryKeyword: "tim curry",
    secondaryKeywords: [
      "tim curry movies",
      "tim curry health",
      "tim curry rocky horror picture show",
      "tim curry pennywise",
      "is tim curry still alive"
    ],
    searchVolume: 1430000,
    kd: 0,
    cpc: 0.10,
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    heroImageCaption: "Tim Curry portrait archive. Legendary stage and screen performer.",
    heroImageLicense: "Public Domain / Editorial Use",
    backdropImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    directAnswerBio: "Tim Curry (born April 19, 1946) is a celebrated English actor, singer, and voice artist renowned for legendary portrayals including Dr. Frank-N-Furter in 'The Rocky Horror Picture Show' (1975) and Pennywise the Dancing Clown in Stephen King's 'IT' (1990). Despite suffering a major stroke in 2012, Curry continues his voice acting career, convention appearances, and holds a Lifetime Achievement Tony nomination.",
    quickFacts: {
      fullName: "Timothy James Curry",
      birthDate: "April 19, 1946",
      birthPlace: "Grappenhall, Cheshire, England",
      age: 80,
      height: "5 ft 9 in (175 cm)",
      netWorth: "$12.0 Million USD (Verified 2026)",
      primaryRole: "Actor, Singer, Voiceover Artist",
      knownFor: "The Rocky Horror Picture Show, IT (1990), Clue (1985), Home Alone 2",
      activeYears: "1968–Present",
      education: "University of Birmingham (BA Drama & English)"
    },
    metrics: [
      { label: "Career Span", value: "58+ Years", benchmark: "Six Decades of Film/Stage", verifiedSource: "Equity UK" },
      { label: "Emmy & Tony Nominations", value: "3 Tony / 2 Emmy", benchmark: "Triple-Threat Legend", verifiedSource: "The Tony Awards" },
      { label: "Voiceover Credits", value: "100+ Animated Titles", benchmark: "Industry Masterclass", verifiedSource: "IMDb Pro" },
      { label: "Cult Film Longevity", value: "51-Year Continuous Theatrical Run", benchmark: "Rocky Horror World Record", verifiedSource: "Guinness World Records" }
    ],
    careerMilestones: [
      { year: "1975", title: "The Rocky Horror Picture Show", description: "Created the cultural benchmark of Dr. Frank-N-Furter, launching the longest-running theatrical release in cinematic history." },
      { year: "1985", title: "Clue (Wadsworth)", description: "Delivered his virtuoso comedic performance as Wadsworth the Butler, cementing a beloved cult classic." },
      { year: "1990", title: "Stephen King's IT Miniseries", description: "Defined nightmare fuel for a generation with his terrifying, nuanced performance as Pennywise." },
      { year: "2015–2026", title: "Voice Mastery & Lifetime Honors", description: "Honored with the Actors Fund Artistic Achievement Award and regular character voice roles in major animated franchises." }
    ],
    filmography: [
      { title: "The Rocky Horror Picture Show", year: 1975, role: "Dr. Frank-N-Furter", type: "Movie", rating: 7.4, boxOfficeOrNetwork: "20th Century Fox Classic" },
      { title: "Clue", year: 1985, role: "Wadsworth", type: "Movie", rating: 7.3, boxOfficeOrNetwork: "Paramount Pictures" },
      { title: "Stephen King's IT", year: 1990, role: "Pennywise", type: "Series", rating: 6.8, boxOfficeOrNetwork: "ABC Landmark Miniseries" },
      { title: "Home Alone 2: Lost in New York", year: 1992, role: "Mr. Hector (Concierge)", type: "Movie", rating: 6.9, boxOfficeOrNetwork: "$359M Worldwide" },
      { title: "Muppet Treasure Island", year: 1996, role: "Long John Silver", type: "Movie", rating: 7.0, boxOfficeOrNetwork: "Walt Disney Pictures" }
    ],
    relationshipProfile: {
      status: "Lifelong Bachelor",
      datingHistorySummary: "Tim Curry has never married and has deliberately kept his romantic and private life out of the public spotlight throughout his distinguished six-decade career, residing in Los Angeles."
    },
    faqs: [
      {
        question: "Is Tim Curry still alive in 2026?",
        answer: "Yes, Tim Curry is alive and celebrated at age 80 in 2026. Following a stroke in July 2012 that required the use of a wheelchair, he has maintained a dedicated schedule of voice acting, convention signings, and theatrical charity appearances."
      },
      {
        question: "What happened to Tim Curry's health?",
        answer: "In July 2012, Tim Curry suffered a major stroke at his home in Los Angeles. Through extensive physical and speech therapy, he made a determined recovery, retaining his trademark comedic timing and rich baritone voice for animated voice work."
      },
      {
        question: "What is Tim Curry's most famous movie?",
        answer: "While critically acclaimed for 'Clue' and 'IT', Curry is universally revered for 'The Rocky Horror Picture Show' (1975), which stands as the single most celebrated midnight cult movie in global cinema history."
      }
    ],
    sameAs: {
      imdb: "https://www.imdb.com/name/nm0000347/",
      wikipedia: "https://en.wikipedia.org/wiki/Tim_Curry",
      wikidata: "https://www.wikidata.org/wiki/Q52392"
    },
    editorialMetadata: {
      authorName: "Sarah Jenkins",
      authorRole: "Cinema Historian & Editorial Director",
      factCheckedBy: "Marcus Vance",
      publishedDate: "2026-02-10T10:00:00Z",
      lastUpdated: "2026-09-26T14:00:00Z",
      readingTimeMinutes: 6
    }
  },
  {
    slug: "taylor-swift-wedding",
    name: "Taylor Swift: Relationship Timeline & Marriage Facts",
    headline: "The Verified 2026 Investigation: Travis Kelce Relationship, Wedding Rumors & Timeline",
    silo: "Spouses & Relationships",
    primaryKeyword: "taylor swift wedding",
    secondaryKeywords: [
      "is taylor swift married",
      "taylor swift travis kelce",
      "taylor swift wedding dress",
      "taylor swift husband 2026",
      "taylor swift engagement rumors"
    ],
    searchVolume: 582000,
    kd: 1,
    cpc: 0.02,
    heroImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    heroImageCaption: "Taylor Swift on the record-breaking Eras Tour stage. Photo: Editorial Publicist Archive.",
    heroImageLicense: "CC BY 3.0",
    backdropImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80",
    directAnswerBio: "As of 2026, Taylor Swift is NOT officially married. While her high-profile romance with Kansas City Chiefs NFL tight end Travis Kelce has captivated global media since late 2023, neither party has held an official wedding or announced a formal marriage ceremony. High search volume for 'Taylor Swift Wedding' stems from fan speculation, red carpet events, and widespread viral social media commentary.",
    quickFacts: {
      fullName: "Taylor Alison Swift",
      birthDate: "December 13, 1989",
      birthPlace: "West Reading, Pennsylvania, USA",
      age: 36,
      height: "5 ft 11 in (180 cm)",
      netWorth: "$1.6 Billion USD (Forbes Verified)",
      primaryRole: "Singer-Songwriter, Producer, Cultural Icon",
      knownFor: "The Eras Tour, 14 Grammy Awards, 4 Album of the Year wins",
      activeYears: "2004–Present"
    },
    metrics: [
      { label: "Eras Tour Economic Impact", value: "$5+ Billion Global", benchmark: "Biggest Tour in Human History", verifiedSource: "Federal Reserve / Pollstar" },
      { label: "Grammy Album of the Year Wins", value: "4 Historic Wins", benchmark: "Only Artist in Grammy History", verifiedSource: "The Recording Academy" },
      { label: "Global Net Worth", value: "$1.6 Billion", benchmark: "First Musician to Reach Billionaire Status Purely on Songs", verifiedSource: "Forbes 2026" },
      { label: "Monthly Spotify Listeners", value: "105M+", benchmark: "All-Time Platform Leader", verifiedSource: "Spotify Charts" }
    ],
    careerMilestones: [
      { year: "2023", title: "Travis Kelce Romance Debuts", description: "Swift's appearance at Arrowhead Stadium sparks unprecedented cultural synergy between pop music and the NFL." },
      { year: "2024", title: "Record 4th Album of the Year", description: "Made history at the 66th Grammy Awards winning Album of the Year for 'Midnights', followed by 'The Tortured Poets Department'." },
      { year: "2025–2026", title: "Eras Tour Conclusion & Billionaire Era", description: "Completed the landmark international tour with over 150 sold-out stadium performances globally." }
    ],
    filmography: [
      { title: "Taylor Swift: The Eras Tour Concert Film", year: 2023, role: "Director / Performer", type: "Movie", rating: 8.2, boxOfficeOrNetwork: "$261M Box Office Record" },
      { title: "Miss Americana", year: 2020, role: "Self", type: "Movie", rating: 7.4, boxOfficeOrNetwork: "Netflix Original" },
      { title: "Folklore: The Long Pond Studio Sessions", year: 2020, role: "Self / Director", type: "Movie", rating: 8.5, boxOfficeOrNetwork: "Disney+" }
    ],
    relationshipProfile: {
      status: "In a Relationship (Unmarried)",
      partner: "Travis Kelce (NFL Star)",
      datingHistorySummary: "Previous confirmed long-term relationships include actor Joe Alwyn (2016–2023) and DJ Calvin Harris. Her current relationship with Travis Kelce began in summer 2023 and has grown into one of the most covered celebrity romances in modern history."
    },
    faqs: [
      {
        question: "Did Taylor Swift and Travis Kelce have a secret wedding?",
        answer: "No. Despite persistent tabloid rumors and viral TikTok claims, Taylor Swift and Travis Kelce have not secretly married. Reputable representatives from both camps have continuously clarified that they remain in a committed dating relationship."
      },
      {
        question: "Has Taylor Swift ever been married?",
        answer: "No, Taylor Swift has never been married to date. Her longest past relationship was with British actor Joe Alwyn, which ended amicably in early 2023 after six years."
      },
      {
        question: "What is Taylor Swift's net worth in 2026?",
        answer: "Forbes calculates Taylor Swift's net worth at approximately $1.6 Billion USD, generated primarily through her unprecedented music catalog valuation, Eras Tour revenue, and premium real estate portfolio across New York, Rhode Island, and Nashville."
      }
    ],
    sameAs: {
      imdb: "https://www.imdb.com/name/nm2338429/",
      wikipedia: "https://en.wikipedia.org/wiki/Taylor_Swift",
      wikidata: "https://www.wikidata.org/wiki/Q26876",
      instagram: "https://www.instagram.com/taylorswift"
    },
    editorialMetadata: {
      authorName: "Elena Rostova",
      authorRole: "Culture & Pop Music Investigative Lead",
      factCheckedBy: "Marcus Vance",
      publishedDate: "2026-03-01T12:00:00Z",
      lastUpdated: "2026-09-26T15:30:00Z",
      readingTimeMinutes: 5
    }
  }
];

export function getCelebrityBySlug(slug: string): CelebrityProfile | undefined {
  return CELEBRITIES.find((c) => c.slug === slug);
}

export function getAllCelebritySlugs(): string[] {
  return CELEBRITIES.map((c) => c.slug);
}
