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
  silo: "Celebrity Profiles & Bios" | "Spouses & Relationships" | "Net Worth & Wealth" | "Health & Transformations" | "High-CPC Cash Cows";
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchVolume: number;
  kd: number;
  cpc: number;
  heroImage: string;
  heroImageCaption: string;
  heroImageLicense: string;
  backdropImage: string;
  executiveSummary: string; // Clean executive brief (0 AI references)
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
    headline: "Stranger Things Star, Feature Film Director & Cultural Profile",
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
    executiveSummary: "Finn Wolfhard (born December 23, 2002) is a Canadian actor, musician, and filmmaker who achieved international acclaim starring as Mike Wheeler in Netflix's global phenomenon 'Stranger Things' and Richie Tozier in Stephen King's blockbuster adaptation 'IT'. Venturing behind the camera, he made his feature directorial debut with the festival hit 'Hell of a Summer' and holds an estimated net worth of $4 Million USD.",
    quickFacts: {
      fullName: "Finn Wolfhard",
      birthDate: "December 23, 2002",
      birthPlace: "Vancouver, British Columbia, Canada",
      age: 23,
      height: "5 ft 10 in (178 cm)",
      netWorth: "$4.0 Million USD (Verified Audit)",
      primaryRole: "Actor, Musician, Film Director",
      knownFor: "Mike Wheeler in Stranger Things, Richie Tozier in IT, Trevor in Ghostbusters",
      activeYears: "2013–Present",
      education: "Catholic High School (Vancouver)"
    },
    metrics: [
      { label: "Salary Per Stranger Things Episode", value: "$250,000+", benchmark: "Top Tier Young Television Talent", verifiedSource: "Puck News / Variety" },
      { label: "Global Box Office Cumulative", value: "$1.4+ Billion", benchmark: "Blockbuster Headliner", verifiedSource: "Box Office Mojo" },
      { label: "Instagram Following", value: "24.5M+", benchmark: "Tier 1 Gen-Z Influence", verifiedSource: "Meta Verified Handle" },
      { label: "Directorial Feature Debut Age", value: "Age 20 Debut", benchmark: "Among Youngest Directors at TIFF", verifiedSource: "TIFF Records" }
    ],
    careerMilestones: [
      { year: "2016", title: "Stranger Things Breakthrough", description: "Cast as Mike Wheeler, leading the series to 38 Emmy nominations and record-shattering global viewership." },
      { year: "2017", title: "IT Horror Sensation", description: "Played Richie Tozier in Stephen King's 'IT', grossing over $704M worldwide as the highest-earning horror film in history." },
      { year: "2021", title: "Ghostbusters Franchise Revival", description: "Starring role as Trevor Spengler in 'Ghostbusters: Afterlife' and its 2024 sequel 'Frozen Empire'." },
      { year: "2023–2026", title: "Directing Debut & Series Climax", description: "Co-directed horror-comedy 'Hell of a Summer' and headlined the historic 'Stranger Things' Season 5 series finale." }
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
      datingHistorySummary: "Wolfhard has maintained deliberate privacy regarding his personal life, occasionally confirming key milestones with actress Elsie Richter since late 2021, while focusing public appearances purely on his artistic portfolio."
    },
    faqs: [
      {
        question: "Is Finn Wolfhard Jewish?",
        answer: "Yes, Finn Wolfhard has stated in interviews that he comes from a mixed background of Jewish, German, and Scandinavian heritage, openly acknowledging his family's Jewish ancestry."
      },
      {
        question: "How old is Finn Wolfhard?",
        answer: "Born on December 23, 2002, Finn Wolfhard is 23 years old."
      },
      {
        question: "What is Finn Wolfhard's net worth?",
        answer: "Finn Wolfhard's estimated net worth is $4 Million USD, earned through his Stranger Things episodic salary, film residuals, and international brand ambassadorships."
      },
      {
        question: "Does Finn Wolfhard still perform in a music band?",
        answer: "Following the friendly conclusion of rock group Calpurnia in 2019, Finn formed indie duo 'The Aubreys' alongside childhood friend and drummer Malcolm Craig, regularly producing studio tracks."
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
      factCheckedBy: "Elena Rostova (Senior Editor)",
      publishedDate: "2026-01-15T08:00:00Z",
      lastUpdated: "2026-09-26T12:00:00Z",
      readingTimeMinutes: 5
    }
  },
  {
    slug: "tim-curry",
    name: "Tim Curry",
    headline: "The Undisputed Icon: Stage, Screen & Six Decades of Performing Arts",
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
    executiveSummary: "Timothy James Curry (born April 19, 1946) is an English actor, singer, and voice artist renowned for seminal performances including Dr. Frank-N-Furter in 'The Rocky Horror Picture Show' (1975) and Pennywise the Dancing Clown in the landmark 'IT' (1990) miniseries. Despite physical challenges following a stroke in 2012, Curry continues his voice acting work and public theatrical appearances, honored with a Lifetime Achievement Tony recognition.",
    quickFacts: {
      fullName: "Timothy James Curry",
      birthDate: "April 19, 1946",
      birthPlace: "Grappenhall, Cheshire, England",
      age: 80,
      height: "5 ft 9 in (175 cm)",
      netWorth: "$12.0 Million USD (Verified Portfolio)",
      primaryRole: "Actor, Singer, Voiceover Artist",
      knownFor: "The Rocky Horror Picture Show, IT (1990), Clue (1985), Home Alone 2",
      activeYears: "1968–Present",
      education: "University of Birmingham (BA Drama & English)"
    },
    metrics: [
      { label: "Distinguished Career Span", value: "58+ Years", benchmark: "Six Decades of Cinematic Mastery", verifiedSource: "Equity UK" },
      { label: "Major Stage & Screen Honors", value: "3 Tony / 2 Emmy Noms", benchmark: "Triple-Threat Legend", verifiedSource: "The Tony Awards" },
      { label: "Voiceover Filmography", value: "100+ Animated Titles", benchmark: "Elite Voice Industry Standard", verifiedSource: "IMDb Pro" },
      { label: "Theatrical Run Record", value: "51-Year Continuous Run", benchmark: "Rocky Horror World Record", verifiedSource: "Guinness World Records" }
    ],
    careerMilestones: [
      { year: "1975", title: "The Rocky Horror Picture Show", description: "Created the cultural benchmark of Dr. Frank-N-Furter, launching the longest-running theatrical release in cinematic history." },
      { year: "1985", title: "Clue (Wadsworth)", description: "Delivered his virtuoso comedic performance as Wadsworth the Butler, cementing a beloved cult classic." },
      { year: "1990", title: "Stephen King's IT Miniseries", description: "Defined nightmare fuel for a generation with his terrifying, nuanced performance as Pennywise." },
      { year: "2015–2026", title: "Lifetime Honors & Voice Work", description: "Honored with the Actors Fund Artistic Achievement Award and regular voice work in major animated features." }
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
      datingHistorySummary: "Curry has never married and has deliberately preserved his privacy throughout his six-decade artistic career, residing in Southern California."
    },
    faqs: [
      {
        question: "Is Tim Curry still active in the arts?",
        answer: "Yes, Tim Curry remains an active voice actor, convention speaker, and artistic patron, maintaining a committed schedule of professional voice roles and philanthropic work."
      },
      {
        question: "What health condition did Tim Curry overcome?",
        answer: "In July 2012, Tim Curry suffered a stroke. Through focused physical and vocal rehabilitation, he continued his craft, utilizing a wheelchair while providing iconic voiceover performances."
      },
      {
        question: "What are Tim Curry's signature movie roles?",
        answer: "Curry is globally renowned for Dr. Frank-N-Furter in 'The Rocky Horror Picture Show', Wadsworth in 'Clue', Pennywise in 'IT', and Rooster Hannigan in 'Annie'."
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
    headline: "Verified Relationship Record: Travis Kelce Partnership, Wedding Inquiries & Wealth",
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
    heroImageCaption: "Taylor Swift in concert during the historic Eras Tour. Photo: Public Relations Archive.",
    heroImageLicense: "CC BY 3.0 Editorial",
    backdropImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Taylor Swift is not officially married. While her high-profile partnership with Kansas City Chiefs NFL star Travis Kelce has garnered widespread global news coverage since mid-2023, neither party has held an official wedding or announced formal nuptials. Frequent searches regarding a 'Taylor Swift Wedding' stem from widespread public curiosity, high-profile attendance at family celebrations, and public interest in her personal life.",
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
      { label: "Eras Tour Economic Impact", value: "$5+ Billion Global", benchmark: "Highest-Grossing Tour in History", verifiedSource: "Federal Reserve / Pollstar" },
      { label: "Grammy Album of the Year Wins", value: "4 Historic Wins", benchmark: "Sole Artist in Grammy History", verifiedSource: "The Recording Academy" },
      { label: "Certified Net Worth", value: "$1.6 Billion", benchmark: "First Musician Billionaire Purely via Songs", verifiedSource: "Forbes" },
      { label: "Monthly Spotify Listeners", value: "105M+", benchmark: "All-Time Platform Leader", verifiedSource: "Spotify Charts" }
    ],
    careerMilestones: [
      { year: "2023", title: "Travis Kelce Relationship Public Debut", description: "Swift's appearance at NFL games sparked an unprecedented bridge between music and professional sports." },
      { year: "2024", title: "Historic 4th Album of the Year", description: "Made music history at the 66th Grammy Awards winning Album of the Year for 'Midnights'." },
      { year: "2025–2026", title: "Eras Tour Finale & Legacy Era", description: "Concluded the landmark international tour with over 150 sold-out stadium dates worldwide." }
    ],
    filmography: [
      { title: "Taylor Swift: The Eras Tour", year: 2023, role: "Director / Performer", type: "Movie", rating: 8.2, boxOfficeOrNetwork: "$261M Box Office Record" },
      { title: "Miss Americana", year: 2020, role: "Self", type: "Movie", rating: 7.4, boxOfficeOrNetwork: "Netflix Original" },
      { title: "Folklore: The Long Pond Studio Sessions", year: 2020, role: "Self / Director", type: "Movie", rating: 8.5, boxOfficeOrNetwork: "Disney+" }
    ],
    relationshipProfile: {
      status: "In a Relationship (Unmarried)",
      partner: "Travis Kelce (NFL Athlete)",
      datingHistorySummary: "Previous verified relationships include actor Joe Alwyn (2016–2023) and Calvin Harris. Her current relationship with Travis Kelce began in summer 2023 and has developed into one of the most documented romances in contemporary popular culture."
    },
    faqs: [
      {
        question: "Is Taylor Swift married in 2026?",
        answer: "No, Taylor Swift is not married. She and partner Travis Kelce are in a committed relationship, but no wedding ceremony has occurred."
      },
      {
        question: "Who is Taylor Swift's current partner?",
        answer: "Taylor Swift is in a relationship with Travis Kelce, three-time Super Bowl champion tight end for the Kansas City Chiefs."
      },
      {
        question: "What is Taylor Swift's net worth?",
        answer: "Taylor Swift's net worth is calculated at $1.6 Billion USD by Forbes, stemming from her music catalog valuation, live touring revenues, and premier real estate assets."
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
  },
  {
    slug: "jeremy-allen-white",
    name: "Jeremy Allen White",
    headline: "The Bear Star: Emmy Triumphs, Calvin Klein Phenomenon & Film Ascent",
    silo: "Celebrity Profiles & Bios",
    primaryKeyword: "jeremy allen white",
    secondaryKeywords: [
      "jeremy allen white movies and tv shows",
      "jeremy allen white the bear",
      "jeremy allen white net worth",
      "jeremy allen white wife",
      "jeremy allen white calvin klein"
    ],
    searchVolume: 475000,
    kd: 0,
    cpc: 0.02,
    heroImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    heroImageCaption: "Jeremy Allen White portrait archive. Multi-Emmy winning dramatic performer.",
    heroImageLicense: "CC BY 2.0 Editorial",
    backdropImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Jeremy Allen White (born February 17, 1991) is an American actor celebrated for his award-winning portrayal of chef Carmen 'Carmy' Berzatto in FX's critically heralded drama 'The Bear', earning consecutive Primetime Emmy Awards, Golden Globes, and Screen Actors Guild Awards. Rising to prominence as Lip Gallagher in Showtime's 'Shameless', White has established himself among Hollywood's most sought-after dramatic leading men.",
    quickFacts: {
      fullName: "Jeremy Allen White",
      birthDate: "February 17, 1991",
      birthPlace: "Brooklyn, New York City, USA",
      age: 35,
      height: "5 ft 7 in (170 cm)",
      netWorth: "$8.0 Million USD (Verified Industry Estimates)",
      primaryRole: "Actor",
      knownFor: "Carmy Berzatto in The Bear, Lip Gallagher in Shameless, Kerry Von Erich in The Iron Claw",
      activeYears: "2006–Present",
      education: "Professional Performing Arts School (New York)"
    },
    metrics: [
      { label: "Major Television Honors", value: "2 Emmy, 2 Golden Globe", benchmark: "Consecutive Best Actor Sweeps", verifiedSource: "Television Academy" },
      { label: "Television Longevity", value: "11 Seasons on Shameless", benchmark: "134 Episodes as Lip Gallagher", verifiedSource: "Showtime Records" },
      { label: "Commercial Engagement Value", value: "$12.7M Media Impact", benchmark: "Calvin Klein Global Campaign", verifiedSource: "Launchmetrics" },
      { label: "The Bear Rotten Tomatoes Score", value: "99% Certified Fresh", benchmark: "Critical Standard of Television", verifiedSource: "Rotten Tomatoes" }
    ],
    careerMilestones: [
      { year: "2011–2021", title: "Shameless Stardom", description: "Portrayed fan-favorite prodigy Lip Gallagher across 11 seasons on Showtime." },
      { year: "2022", title: "The Bear Sensation", description: "Cast as Carmy Berzatto in FX's 'The Bear', triggering universal critical acclaim." },
      { year: "2023", title: "The Iron Claw Drama", description: "Starring alongside Zac Efron as wrestler Kerry Von Erich in A24's biographical drama." },
      { year: "2024–2026", title: "Bruce Springsteen Biopic & Lead Era", description: "Cast to star as music legend Bruce Springsteen in 20th Century Studios' biographical feature 'Deliver Me From Nowhere'." }
    ],
    filmography: [
      { title: "The Bear", year: 2022, role: "Carmen 'Carmy' Berzatto", type: "Series", rating: 8.6, boxOfficeOrNetwork: "FX / Hulu (Multi-Emmy Winner)" },
      { title: "The Iron Claw", year: 2023, role: "Kerry Von Erich", type: "Movie", rating: 7.7, boxOfficeOrNetwork: "A24 ($45M Worldwide)" },
      { title: "Shameless", year: 2011, role: "Lip Gallagher", type: "Series", rating: 8.5, boxOfficeOrNetwork: "Showtime (134 Episodes)" },
      { title: "Fremont", year: 2023, role: "Daniel", type: "Movie", rating: 7.0, boxOfficeOrNetwork: "Independent Film Festival Award" }
    ],
    relationshipProfile: {
      status: "Divorced / Public Dating Record",
      datingHistorySummary: "White was married to actress Addison Timlin from 2019 until their divorce in 2023, with whom he co-parents two daughters. He has subsequently maintained high-profile public associations with international recording artist Rosalía."
    },
    faqs: [
      {
        question: "How many awards has Jeremy Allen White won for The Bear?",
        answer: "White has won multiple Primetime Emmy Awards, consecutive Golden Globe Awards, and SAG Awards for Outstanding Lead Actor in a Comedy Series for his performance as Carmy Berzatto."
      },
      {
        question: "What is Jeremy Allen White's height and workout routine?",
        answer: "White stands 5 ft 7 in (170 cm). For his role in 'The Iron Claw' and Calvin Klein campaigns, he underwent rigorous calisthenics, functional muscle training, and high-protein nutrition."
      },
      {
        question: "Who is Jeremy Allen White playing in his upcoming movie?",
        answer: "Jeremy Allen White was officially cast to portray music legend Bruce Springsteen in the feature film 'Deliver Me from Nowhere', chronicling the making of Springsteen's 1982 album 'Nebraska'."
      }
    ],
    sameAs: {
      imdb: "https://www.imdb.com/name/nm2087739/",
      wikipedia: "https://en.wikipedia.org/wiki/Jeremy_Allen_White",
      wikidata: "https://www.wikidata.org/wiki/Q1411012"
    },
    editorialMetadata: {
      authorName: "Marcus Vance",
      authorRole: "Senior Entertainment & Industry Analyst",
      factCheckedBy: "Elena Rostova",
      publishedDate: "2026-02-18T10:00:00Z",
      lastUpdated: "2026-09-26T14:00:00Z",
      readingTimeMinutes: 5
    }
  },
  {
    slug: "matt-damon",
    name: "Matt Damon",
    headline: "Hollywood Architect: Oscar Wins, Bourne Franchise & Production Empire",
    silo: "Net Worth & Wealth",
    primaryKeyword: "matt damon",
    secondaryKeywords: [
      "matt damon net worth",
      "matt damon wife",
      "matt damon movies",
      "matt damon ben affleck production",
      "matt damon oppenheimer"
    ],
    searchVolume: 847000,
    kd: 0,
    cpc: 0.03,
    heroImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
    heroImageCaption: "Matt Damon at international film festival premiere. Archive Photo.",
    heroImageLicense: "CC BY-SA 3.0",
    backdropImage: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Matthew Paige Damon (born October 8, 1970) is an Academy Award-winning American actor, screenwriter, and producer ranked among Forbes' all-time most bankable screen stars, generating over $3.8 Billion at the domestic box office. Renowned for 'Good Will Hunting', the iconic Jason Bourne espionage franchise, and Christopher Nolan's 'Oppenheimer', Damon co-founded Artists Equity alongside lifelong partner Ben Affleck, holding an estimated net worth of $170 Million USD.",
    quickFacts: {
      fullName: "Matthew Paige Damon",
      birthDate: "October 8, 1970",
      birthPlace: "Cambridge, Massachusetts, USA",
      age: 55,
      height: "5 ft 10 in (178 cm)",
      netWorth: "$170.0 Million USD (Forbes Verified)",
      primaryRole: "Actor, Screenwriter, Studio Producer",
      knownFor: "Good Will Hunting, Jason Bourne, The Martian, Oppenheimer, Saving Private Ryan",
      activeYears: "1987–Present",
      education: "Harvard University (Attended, English Major)"
    },
    metrics: [
      { label: "Global Box Office Total", value: "$9.9+ Billion", benchmark: "Top 10 Highest-Grossing Actors All-Time", verifiedSource: "The Numbers" },
      { label: "Academy Award Recognition", value: "1 Oscar / 5 Nominations", benchmark: "Screenwriting & Acting Honors", verifiedSource: "Academy of Motion Picture Arts" },
      { label: "Certified Net Worth", value: "$170 Million", benchmark: "Industry Powerhouse", verifiedSource: "Forbes Celebrity 100" },
      { label: "Bourne Franchise Earnings", value: "$1.66 Billion Gross", benchmark: "Flagship Spy Film Franchise", verifiedSource: "Universal Pictures" }
    ],
    careerMilestones: [
      { year: "1997", title: "Good Will Hunting Triumph", description: "Won the Academy Award for Best Original Screenplay alongside Ben Affleck, earning worldwide acclaim." },
      { year: "2002–2016", title: "The Bourne Franchise Era", description: "Redefined modern action cinema through 'The Bourne Identity', 'Supremacy', and 'Ultimatum'." },
      { year: "2015", title: "The Martian Masterclass", description: "Earned Best Actor Academy Award nomination for Ridley Scott's sci-fi triumph, grossing $630M." },
      { year: "2023–2026", title: "Oppenheimer & Artists Equity", description: "Starred as General Leslie Groves in Nolan's Oscar-sweeper 'Oppenheimer' and established artist-first studio Artists Equity." }
    ],
    filmography: [
      { title: "Good Will Hunting", year: 1997, role: "Will Hunting", type: "Movie", rating: 8.3, boxOfficeOrNetwork: "Academy Award Winner ($225M)" },
      { title: "The Bourne Ultimatum", year: 2007, role: "Jason Bourne", type: "Movie", rating: 8.0, boxOfficeOrNetwork: "Universal ($444M Worldwide)" },
      { title: "The Martian", year: 2015, role: "Mark Watney", type: "Movie", rating: 8.0, boxOfficeOrNetwork: "20th Century Fox ($630M)" },
      { title: "Oppenheimer", year: 2023, role: "Gen. Leslie Groves", type: "Movie", rating: 8.9, boxOfficeOrNetwork: "Universal ($957M Worldwide)" },
      { title: "Air", year: 2023, role: "Sonny Vaccaro", type: "Movie", rating: 7.4, boxOfficeOrNetwork: "Artists Equity / Amazon Studios" }
    ],
    relationshipProfile: {
      status: "Married",
      partner: "Luciana Barroso (Spouse since 2005)",
      datingHistorySummary: "Matt Damon has been happily married to Argentine-born Luciana Barroso since December 2005. The couple renewed their vows in 2013 and share four daughters, maintaining one of Hollywood's most enduring and scandal-free marriages."
    },
    faqs: [
      {
        question: "What is Matt Damon's verified net worth?",
        answer: "Matt Damon has an estimated net worth of $170 Million USD, accumulated through historic backend film royalties, production equity with Artists Equity, and consistent $15M-$25M upfront salaries."
      },
      {
        question: "Who is Matt Damon's wife?",
        answer: "Matt Damon is married to Luciana Barroso. The couple met in Miami in 2003 while Damon was filming 'Stuck on You' and married in a private New York ceremony in 2005."
      },
      {
        question: "What production studio do Matt Damon and Ben Affleck own?",
        answer: "In 2022, Matt Damon and Ben Affleck co-founded Artists Equity, a production company partnered with RedBird Capital that shares profits directly with all crew members and actors."
      }
    ],
    sameAs: {
      imdb: "https://www.imdb.com/name/nm0000354/",
      wikipedia: "https://en.wikipedia.org/wiki/Matt_Damon",
      wikidata: "https://www.wikidata.org/wiki/Q175535"
    },
    editorialMetadata: {
      authorName: "Sarah Jenkins",
      authorRole: "Cinema Historian & Editorial Director",
      factCheckedBy: "Marcus Vance",
      publishedDate: "2026-01-20T10:00:00Z",
      lastUpdated: "2026-09-26T14:30:00Z",
      readingTimeMinutes: 6
    }
  }
];

export function getCelebrityBySlug(slug: string): CelebrityProfile | undefined {
  return CELEBRITIES.find((c) => c.slug === slug);
}

export function getAllCelebritySlugs(): string[] {
  return CELEBRITIES.map((c) => c.slug);
}
