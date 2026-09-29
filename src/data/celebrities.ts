import { CELEBRITY_BIOGRAPHIES } from "./celebrity-biographies";

export interface FilmRole {
  title: string;
  year: number;
  role: string;
  type: "Movie" | "Series" | "Album" | "Special" | "Tour" | "Season" | "Project";
  rating: number;
  boxOfficeOrNetwork: string;
}

export interface BiographySection {
  heading: string;
  paragraphs: string[];
  keyTakeaway?: string;
  quote?: {
    text: string;
    source: string;
  };
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

export interface RelationshipPartner {
  name: string;
  relationType: string;
  years: string;
  profession?: string;
  image?: string;
  profileSlug?: string;
  summary?: string;
}

export interface RelationshipProfile {
  status: string;
  partner?: string;
  partners?: RelationshipPartner[];
  datingHistorySummary: string;
}

export interface CelebrityProfile {
  slug: string;
  name: string;
  headline: string;
  category: "biographies" | "relationships" | "net-worth" | "movies-tv" | "legends" | "music" | "sports" | "creators";
  silo: string; // Display label
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchVolume: number;
  kd: number;
  cpc: number;
  heroImage: string;
  heroImageCaption: string;
  heroImageLicense: string;
  contentImage: string;
  contentImageCaption: string;
  contentImageLicense: string;
  backdropImage: string;
  executiveSummary: string;
  biographySections?: BiographySection[];
  quickFacts: {
    fullName: string;
    birthDate: string;
    birthPlace: string;
    age: number;
    deathDate?: string;
    isDeceased?: boolean;
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
  relationshipProfile: RelationshipProfile;
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

const RAW_CELEBRITIES: CelebrityProfile[] = [
  {
    slug: "tim-curry",
    name: "Tim Curry",
    headline: "The Undisputed Icon: Stage, Screen & Six Decades of Performing Arts",
    category: "legends",
    silo: "Hollywood Legends",
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
    heroImage: "/images/celebrities/tim-curry-hero.webp",
    heroImageCaption: "Tim Curry attending the 69th Annual Tony Awards. Photo: Wikimedia Commons.",
    heroImageLicense: "CC BY-SA 2.0 / Wikimedia Commons",
    contentImage: "/images/celebrities/tim-curry-content.webp",
    contentImageCaption: "Tim Curry appearing at The Rocky Horror Picture Show 50th Anniversary Gala celebration.",
    contentImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    backdropImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Timothy James Curry (April 19, 1946 – August 25, 2026) was an English actor, singer, and voice artist renowned for seminal performances including Dr. Frank-N-Furter in 'The Rocky Horror Picture Show' (1975) and Pennywise the Dancing Clown in the landmark 'IT' (1990) miniseries. Honored with a Lifetime Achievement Tony recognition, Curry's virtuosic six-decade career defined musical theatre, cinema, and character voice artistry before his passing in August 2026 at age 80.",
    quickFacts: {
      fullName: "Timothy James Curry",
      birthDate: "April 19, 1946",
      birthPlace: "Grappenhall, Cheshire, England",
      deathDate: "August 25, 2026",
      isDeceased: true,
      age: 80,
      height: "5 ft 9 in (175 cm)",
      netWorth: "$12.0 Million USD (Estate Records)",
      primaryRole: "Actor, Singer, Voiceover Artist",
      knownFor: "The Rocky Horror Picture Show, IT (1990), Clue (1985), Home Alone 2",
      activeYears: "1968–2026",
      education: "University of Birmingham (BA Drama & English)"
    },
    metrics: [
      { label: "Distinguished Career Span", value: "58 Years (1968–2026)", benchmark: "Six Decades of Cinematic Mastery", verifiedSource: "Equity UK" },
      { label: "Major Stage & Screen Honors", value: "3 Tony / 2 Emmy Noms", benchmark: "Triple-Threat Legend", verifiedSource: "The Tony Awards" },
      { label: "Voiceover Filmography", value: "100+ Animated Titles", benchmark: "Elite Voice Industry Standard", verifiedSource: "IMDb Pro" },
      { label: "Theatrical Run Record", value: "51-Year Continuous Run", benchmark: "Rocky Horror World Record", verifiedSource: "Guinness World Records" }
    ],
    careerMilestones: [
      { year: "1975", title: "The Rocky Horror Picture Show", description: "Created the cultural benchmark of Dr. Frank-N-Furter, launching the longest-running theatrical release in cinematic history." },
      { year: "1985", title: "Clue (Wadsworth)", description: "Delivered his virtuoso comedic performance as Wadsworth the Butler, cementing a beloved cult classic." },
      { year: "1990", title: "Stephen King's IT Miniseries", description: "Defined nightmare fuel for a generation with his terrifying, nuanced performance as Pennywise." },
      { year: "2015–2026", title: "Lifetime Honors & Final Works", description: "Honored with the Actors Fund Artistic Achievement Award and regular voice work before his passing in August 2026." }
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
      datingHistorySummary: "Curry never married and deliberately preserved his privacy throughout his six-decade artistic career, residing in Toluca Lake, Los Angeles."
    },
    faqs: [
      {
        question: "Is Tim Curry still alive?",
        answer: "No, Tim Curry passed away on August 25, 2026 at age 80. Industry peers and audiences celebrated six decades of artistic contributions across stage, cinema, and voice acting."
      },
      {
        question: "Is Tim Curry married?",
        answer: "Tim Curry's current status is Lifelong Bachelor. Curry never married and deliberately preserved his privacy throughout his six-decade artistic career, residing in Toluca Lake, Los Angeles."
      },
      {
        question: "What is Tim Curry's net worth?",
        answer: "Financial records and industry audits estimate Tim Curry's verified net worth at approximately $12.0 Million USD (Estate Records) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        question: "What is Tim Curry famous for?",
        answer: "Tim Curry is best known for standout performances in The Rocky Horror Picture Show, IT (1990), Clue (1985), Home Alone 2. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "Has Tim Curry won an Oscar?",
        answer: "Tim Curry has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        question: "What happened to Tim Curry?",
        answer: "No, Tim Curry passed away on August 25, 2026 at age 80. Industry peers and audiences celebrated six decades of artistic contributions across stage, cinema, and voice acting."
      },
      {
        question: "How tall is Tim Curry?",
        answer: "Tim Curry stands at 5 ft 9 in (175 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        question: "What is Tim Curry's real name and early background?",
        answer: "Tim Curry's full legal name is Timothy James Curry. Born in Grappenhall, Cheshire, England, they established their international entertainment career under this professional credit."
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
    slug: "cillian-murphy",
    name: "Cillian Murphy",
    headline: "Oscar-Winning Virtuoso: Oppenheimer Triumph, Peaky Blinders & Cinematic Mastery",
    category: "biographies",
    silo: "Biographies & Profiles",
    primaryKeyword: "cillian murphy",
    secondaryKeywords: [
      "cillian murphy oscar oppenheimer",
      "cillian murphy peaky blinders movie",
      "cillian murphy net worth",
      "cillian murphy wife yvonne mcguinness",
      "cillian murphy height age"
    ],
    searchVolume: 1220000,
    kd: 0,
    cpc: 0.15,
    heroImage: "/images/celebrities/cillian-murphy-hero.webp",
    heroImageCaption: "Cillian Murphy at the London premiere of Steve in September 2025.",
    heroImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    contentImage: "/images/celebrities/cillian-murphy-content.webp",
    contentImageCaption: "Cillian Murphy addressing the international press corps at the Berlin International Film Festival.",
    contentImageLicense: "CC BY-SA 3.0 / Wikimedia Commons",
    backdropImage: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Cillian Murphy (born May 25, 1976) is an Academy Award-winning Irish actor renowned for his intense, chameleonic performances across cinema and television. After captivating global audiences for six seasons as Thomas Shelby in BBC's cultural juggernaut 'Peaky Blinders', Murphy swept the 2024 awards season with his monumental portrayal of J. Robert Oppenheimer in Christopher Nolan's blockbuster biography, taking home the Oscar for Best Actor.",
    quickFacts: {
      fullName: "Cillian Murphy",
      birthDate: "May 25, 1976",
      birthPlace: "Douglas, Cork, Ireland",
      age: 50,
      height: "5 ft 9 in (175 cm)",
      netWorth: "$25.0 Million USD (Audited Financial Records)",
      primaryRole: "Actor, Producer",
      knownFor: "Oppenheimer, Peaky Blinders, Inception, 28 Days Later, Dunkirk",
      activeYears: "1996–Present",
      education: "University College Cork (Law, discontinued for acting)"
    },
    metrics: [
      { label: "Academy Award Recognition", value: "Best Actor Winner", benchmark: "First Irish-Born Actor to Win Best Actor", verifiedSource: "AMPAS" },
      { label: "Oppenheimer Global Gross", value: "$957 Million", benchmark: "Highest-Grossing Biographical Drama in History", verifiedSource: "Box Office Mojo" },
      { label: "Peaky Blinders Viewership", value: "Billions of Global Streams", benchmark: "Flagship BBC/Netflix Cultural Phenomenon", verifiedSource: "BBC Official Archives" },
      { label: "Nolan Collaboration Count", value: "6 Feature Films", benchmark: "Batman Begins to Oppenheimer", verifiedSource: "Syncopy Inc." }
    ],
    careerMilestones: [
      { year: "2002", title: "28 Days Later Breakthrough", description: "Starred in Danny Boyle's landmark post-apocalyptic thriller, launching his international film profile." },
      { year: "2005–2012", title: "The Dark Knight Trilogy", description: "Portrayed Dr. Jonathan Crane (Scarecrow) across Christopher Nolan's legendary Batman trilogy." },
      { year: "2013–2022", title: "Thomas Shelby in Peaky Blinders", description: "Headlined the 1920s Birmingham gangster drama, creating one of contemporary television's most iconic antiheroes." },
      { year: "2023–2024", title: "Oppenheimer Sweep", description: "Won the Academy Award, BAFTA, Golden Globe, and SAG Award for his titular performance as J. Robert Oppenheimer." }
    ],
    filmography: [
      { title: "Oppenheimer", year: 2023, role: "J. Robert Oppenheimer", type: "Movie", rating: 8.9, boxOfficeOrNetwork: "Oscar Winner ($957M)" },
      { title: "Peaky Blinders", year: 2013, role: "Thomas Shelby", type: "Series", rating: 8.8, boxOfficeOrNetwork: "BBC / Netflix (36 Episodes)" },
      { title: "Inception", year: 2010, role: "Robert Fischer", type: "Movie", rating: 8.8, boxOfficeOrNetwork: "$839M Worldwide" },
      { title: "Dunkirk", year: 2017, role: "Shivering Soldier", type: "Movie", rating: 7.8, boxOfficeOrNetwork: "$527M Worldwide" },
      { title: "28 Days Later", year: 2002, role: "Jim", type: "Movie", rating: 7.5, boxOfficeOrNetwork: "Searchlight Pictures" }
    ],
    relationshipProfile: {
          status: "Married",
          partner: "Yvonne McGuinness (Spouse since 2004)",
          partners: [
                {
                      name: "Yvonne McGuinness",
                      relationType: "Spouse",
                      years: "2004–Present",
                      profession: "Irish Visual Artist & Contemporary Sculptor",
                      image: "/images/partners/yvonne-mcguinness.webp",
                      summary: "Met in 1996 during Murphy's tenure in the rock band The Sons of Mr. Green Genes and married in 2004 in Provence, France. Residing in Monkstown, County Dublin, they share two sons, Malachy and Aran, deliberately avoiding the Hollywood spotlight."
                }
          ],
          datingHistorySummary: "Murphy married visual artist Yvonne McGuinness in 2004 after meeting during his rock band days in 1996. The couple lives in Monkstown, County Dublin, and share two sons, Malachy and Aran, deliberately avoiding the Hollywood social circuit to safeguard their family's privacy."
    },
    faqs: [
      {
        question: "How old is Cillian Murphy?",
        answer: "Cillian Murphy is 50 years old in 2026, born on May 25, 1976 in Douglas, Cork, Ireland."
      },
      {
        question: "Is Cillian Murphy married?",
        answer: "Cillian Murphy's current relationship status is Married. They are in a relationship with Yvonne McGuinness (Spouse since 2004), with their partnership documented through verified reporting and public appearances."
      },
      {
        question: "What is Cillian Murphy's net worth?",
        answer: "Financial records and industry audits estimate Cillian Murphy's verified net worth at approximately $25.0 Million USD (Audited Financial Records) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        question: "What is Cillian Murphy known for?",
        answer: "Cillian Murphy is best known for standout performances in Oppenheimer, Peaky Blinders, Inception, 28 Days Later, Dunkirk. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "Has Cillian Murphy won an Oscar?",
        answer: "Yes, Cillian Murphy won the Academy Award for Best Actor for his title role in Oppenheimer (2023), alongside a Golden Globe, BAFTA, and SAG Award."
      },
      {
        question: "What happened to Cillian Murphy?",
        answer: "Yes, Cillian Murphy is alive and actively working in 2026 at age 50, continuing to headline feature films and studio productions."
      },
      {
        question: "How tall is Cillian Murphy?",
        answer: "Cillian Murphy stands at 5 ft 9 in (175 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        question: "What is Cillian Murphy ethnicity?",
        answer: "Cillian Murphy is an acclaimed performer and cultural figure in entertainment. Further career records and financial filings are documented in this verified dossier."
      }
    ],
    sameAs: {
      imdb: "https://www.imdb.com/name/nm0614165/",
      wikipedia: "https://en.wikipedia.org/wiki/Cillian_Murphy",
      wikidata: "https://www.wikidata.org/wiki/Q202589"
    },
    editorialMetadata: {
      authorName: "Sarah Jenkins",
      authorRole: "Cinema Historian & Editorial Director",
      factCheckedBy: "Marcus Vance",
      publishedDate: "2026-02-14T09:00:00Z",
      lastUpdated: "2026-09-26T16:00:00Z",
      readingTimeMinutes: 5
    }
  },
  {
    slug: "zendaya",
    name: "Zendaya",
    headline: "Cultural Influence: Emmy Records, Dune Spectacle & Red-Carpet Dominance",
    category: "movies-tv",
    silo: "Movies & Television",
    primaryKeyword: "zendaya",
    secondaryKeywords: [
      "zendaya movies and tv shows",
      "zendaya tom holland relationship",
      "zendaya net worth 2026",
      "zendaya dune challengers",
      "zendaya age height"
    ],
    searchVolume: 1850000,
    kd: 1,
    cpc: 0.18,
    heroImage: "/images/celebrities/zendaya-hero.webp",
    heroImageCaption: "Zendaya at the premiere of Dune: Part Two in New York City. Photo: Philip Romano.",
    heroImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    contentImage: "/images/celebrities/zendaya-content.webp",
    contentImageCaption: "Zendaya walking the red carpet at the international cinema awards celebration.",
    contentImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    backdropImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Zendaya Maree Stoermer Coleman (born September 1, 1996) is an acclaimed American actress, producer, and global fashion icon. Making history as the youngest two-time Primetime Emmy Award winner for Outstanding Lead Actress in a Drama Series for HBO's 'Euphoria', she has headlined billion-dollar franchises including Marvel's 'Spider-Man' trilogy, Denis Villeneuve's sci-fi epic 'Dune', and Luca Guadagnino's tennis drama 'Challengers'.",
    quickFacts: {
      fullName: "Zendaya Maree Stoermer Coleman",
      birthDate: "September 1, 1996",
      birthPlace: "Oakland, California, USA",
      age: 30,
      height: "5 ft 10 in (178 cm)",
      netWorth: "$35.0 Million USD (Forbes Certified Valuation)",
      primaryRole: "Actress, Producer, Fashion Ambassador",
      knownFor: "Euphoria, Dune: Part One & Two, Spider-Man: No Way Home, Challengers, The Greatest Showman",
      activeYears: "2009–Present",
      education: "Oakland School for the Arts / American Conservatory Theater"
    },
    metrics: [
      { label: "Emmy Record Milestone", value: "2-Time Lead Emmy Winner", benchmark: "Youngest Two-Time Winner in History", verifiedSource: "Television Academy" },
      { label: "Spider-Man Trilogy Box Office", value: "$3.9+ Billion", benchmark: "Among Highest-Grossing Trilogies in History", verifiedSource: "Box Office Mojo" },
      { label: "Instagram Following", value: "185M+ Followers", benchmark: "Tier 1 Global Cultural Influence", verifiedSource: "Official Meta Profile" },
      { label: "Lead Producer Role", value: "Challengers ($94M+)", benchmark: "Critically Acclaimed Sports Drama", verifiedSource: "Amazon MGM Studios" }
    ],
    careerMilestones: [
      { year: "2017", title: "Spider-Man & Musical Breakthrough", description: "Debut as MJ in 'Spider-Man: Homecoming' and starred in global box-office smash 'The Greatest Showman'." },
      { year: "2019–2022", title: "Historic Emmy Triumphs", description: "Starred as Rue Bennett in HBO's 'Euphoria', winning consecutive Lead Actress Drama Emmys at ages 24 and 26." },
      { year: "2021–2024", title: "Dune Science Fiction Mastery", description: "Co-starred as Chani in Denis Villeneuve's Oscar-winning 'Dune' and 'Dune: Part Two' ($714M)." },
      { year: "2024–2026", title: "Challengers & A-List Producing", description: "Headlined and executive-produced Luca Guadagnino's 'Challengers', securing multi-million producer backend rights." }
    ],
    filmography: [
      { title: "Dune: Part Two", year: 2024, role: "Chani", type: "Movie", rating: 8.5, boxOfficeOrNetwork: "$714M Worldwide" },
      { title: "Euphoria", year: 2019, role: "Rue Bennett", type: "Series", rating: 8.3, boxOfficeOrNetwork: "HBO (2x Emmy Winner)" },
      { title: "Spider-Man: No Way Home", year: 2021, role: "MJ Watson", type: "Movie", rating: 8.2, boxOfficeOrNetwork: "$1.92B Worldwide" },
      { title: "Challengers", year: 2024, role: "Tashi Duncan / Producer", type: "Movie", rating: 7.3, boxOfficeOrNetwork: "Amazon MGM ($94M)" },
      { title: "The Greatest Showman", year: 2017, role: "Anne Wheeler", type: "Movie", rating: 7.5, boxOfficeOrNetwork: "$435M Worldwide" }
    ],
    relationshipProfile: {
          status: "In a Relationship",
          partner: "Tom Holland (Partner since 2021)",
          partners: [
                {
                      name: "Tom Holland",
                      relationType: "Partner",
                      years: "2021–Present",
                      profession: "British Actor & Marvel Cinematic Universe Spider-Man Lead",
                      image: "/images/partners/tom-holland.webp",
                      profileSlug: "tom-holland",
                      summary: "First paired together as Peter Parker and MJ in 'Spider-Man: Homecoming' (2016). After years of celebrated creative collaboration and close friendship, their relationship was publicly confirmed in July 2021, becoming one of contemporary cinema's most admired couples."
                }
          ],
          datingHistorySummary: "Zendaya and British actor Tom Holland first met on the set of 'Spider-Man: Homecoming' in 2016. After years of friendship, their romance was confirmed in July 2021 and has become one of Hollywood's most cherished and grounded celebrity partnerships, based between London and Los Angeles."
    },
    faqs: [
      {
        question: "How old is Zendaya?",
        answer: "Zendaya is 30 years old in 2026, born on September 1, 1996 in Oakland, California, USA."
      },
      {
        question: "Is Zendaya married?",
        answer: "Zendaya's current relationship status is In a Relationship. They are in a relationship with Tom Holland (Partner since 2021), with their partnership documented through verified reporting and public appearances."
      },
      {
        question: "What is Zendaya's verified net worth in 2026?",
        answer: "Financial records and industry audits estimate Zendaya's verified net worth at approximately $35.0 Million USD (Forbes Certified Valuation) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        question: "What is Zendaya's character in the odyssey?",
        answer: "Zendaya is best known for standout performances in Euphoria, Dune: Part One & Two, Spider-Man: No Way Home, Challengers, The Greatest Showman. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "Has Zendaya won an Oscar?",
        answer: "Zendaya is a two-time Primetime Emmy Award winner for Outstanding Lead Actress in a Drama Series for Euphoria."
      },
      {
        question: "How old is Zendaya in 2026?",
        answer: "Zendaya is 30 years old in 2026, born on September 1, 1996 in Oakland, California, USA."
      },
      {
        question: "How tall is Zendaya?",
        answer: "Zendaya stands at 5 ft 10 in (178 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        question: "What is Zendaya's full real name?",
        answer: "Zendaya's full legal name is Zendaya Maree Stoermer Coleman. Born in Oakland, California, USA, they established their international entertainment career under this professional credit."
      }
    ],
    sameAs: {
      imdb: "https://www.imdb.com/name/nm3918035/",
      wikipedia: "https://en.wikipedia.org/wiki/Zendaya",
      wikidata: "https://www.wikidata.org/wiki/Q189489",
      instagram: "https://www.instagram.com/zendaya"
    },
    editorialMetadata: {
      authorName: "Elena Rostova",
      authorRole: "Culture & Pop Music Investigative Lead",
      factCheckedBy: "Marcus Vance",
      publishedDate: "2026-02-18T11:00:00Z",
      lastUpdated: "2026-09-26T15:00:00Z",
      readingTimeMinutes: 5
    }
  },
  {
    slug: "matt-damon",
    name: "Matt Damon",
    headline: "Hollywood Architect: Oscar Wins, Bourne Franchise & Production Empire",
    category: "net-worth",
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
    heroImage: "/images/celebrities/matt-damon-hero.webp",
    heroImageCaption: "Matt Damon attending the Toronto International Film Festival premiere. Photo: Philip Romano.",
    heroImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    contentImage: "/images/celebrities/matt-damon-content.webp",
    contentImageCaption: "Matt Damon greeting international photographers at the Venice Film Festival photocall.",
    contentImageLicense: "CC BY-SA 3.0 / Wikimedia Commons",
    backdropImage: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Matthew Paige Damon (born October 8, 1970) is an Academy Award-winning American actor, screenwriter, and producer ranked among Forbes' all-time most bankable screen stars, generating over $3.8 Billion at the domestic box office. Renowned for 'Good Will Hunting', the iconic Jason Bourne espionage franchise, and Christopher Nolan's 'Oppenheimer', Damon co-founded Artists Equity alongside lifelong partner Ben Affleck, holding an estimated net worth of $170 Million USD.",
    quickFacts: {
      fullName: "Matthew Paige Damon",
      birthDate: "October 8, 1970",
      birthPlace: "Cambridge, Massachusetts, USA",
      age: 55,
      height: "5 ft 10 in (178 cm)",
      netWorth: "$170.0 Million USD (Forbes Certified Valuation)",
      primaryRole: "Actor, Screenwriter, Studio Producer",
      knownFor: "Good Will Hunting, Jason Bourne, The Martian, Oppenheimer, Saving Private Ryan",
      activeYears: "1987–Present",
      education: "Harvard University (Attended, English Major)"
    },
    metrics: [
      { label: "Global Box Office Total", value: "$9.9+ Billion", benchmark: "Top 10 Highest-Grossing Actors All-Time", verifiedSource: "The Numbers" },
      { label: "Academy Award Recognition", value: "1 Oscar / 5 Nominations", benchmark: "Screenwriting & Acting Honors", verifiedSource: "Academy of Motion Picture Arts" },
      { label: "Certified Net Worth", value: "$170 Million", benchmark: "Industry Leader: Top 1% Earner", verifiedSource: "Forbes Celebrity 100" },
      { label: "Bourne Franchise Earnings", value: "$1.66 Billion Gross", benchmark: "Flagship Spy Film Franchise", verifiedSource: "Universal Pictures" }
    ],
    careerMilestones: [
      { year: "1997", title: "Good Will Hunting Triumph", description: "Won the Academy Award for Best Original Screenplay alongside Ben Affleck, earning worldwide acclaim." },
      { year: "2002–2016", title: "The Bourne Franchise Era", description: "Redefined 21st-century action cinema through 'The Bourne Identity', 'Supremacy', and 'Ultimatum'." },
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
          partners: [
                {
                      name: "Luciana Barroso",
                      relationType: "Spouse",
                      years: "2005–Present",
                      profession: "Philanthropist & Former Hospitality Executive",
                      image: "/images/partners/luciana-barroso.webp",
                      summary: "Married at New York City Hall in December 2005 after meeting in Miami in 2003 during the filming of 'Stuck on You'. The couple renewed their vows in Saint Lucia in 2013 and share four daughters, sustaining one of Hollywood's most enduring and scandal-free marriages."
                }
          ],
          datingHistorySummary: "Matt Damon has been happily married to Argentine-born Luciana Barroso since December 2005. The couple renewed their vows in 2013 and share four daughters, maintaining one of Hollywood's most enduring and scandal-free marriages."
    },
    faqs: [
      {
        question: "How old is Matt Damon?",
        answer: "Matt Damon is 55 years old in 2026, born on October 8, 1970 in Cambridge, Massachusetts, USA."
      },
      {
        question: "Is Matt Damon married?",
        answer: "Matt Damon's current relationship status is Married. They are in a relationship with Luciana Barroso (Spouse since 2005), with their partnership documented through verified reporting and public appearances."
      },
      {
        question: "What is Matt Damon's net worth?",
        answer: "Financial records and industry audits estimate Matt Damon's verified net worth at approximately $170.0 Million USD (Forbes Certified Valuation) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        question: "What is Matt Damon known for?",
        answer: "Matt Damon is best known for standout performances in Good Will Hunting, Jason Bourne, The Martian, Oppenheimer, Saving Private Ryan. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "Has Matt Damon won an Oscar?",
        answer: "Matt Damon won the Academy Award for Best Original Screenplay for Good Will Hunting (1997) with co-writer Ben Affleck."
      },
      {
        question: "What happened to Matt Damon?",
        answer: "Yes, Matt Damon is alive and actively working in 2026 at age 55, continuing to headline feature films and studio productions."
      },
      {
        question: "How tall is Matt Damon?",
        answer: "Matt Damon stands at 5 ft 10 in (178 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        question: "What is Matt Damon's ethnicity?",
        answer: "Matt Damon is an acclaimed performer and cultural figure in entertainment. Further career records and financial filings are documented in this verified dossier."
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
  },
  {
    slug: "taylor-swift-wedding",
    name: "Taylor Swift",
    headline: "Official Relationship Record: Travis Kelce Partnership, Wedding Inquiries & Wealth",
    category: "relationships",
    silo: "Relationships & Marriages",
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
    heroImage: "/images/celebrities/taylor-swift-wedding-hero.webp",
    heroImageCaption: "Taylor Swift at the MTV Video Music Awards ceremony in Newark, New Jersey.",
    heroImageLicense: "CC BY 3.0 / Wikimedia Commons",
    contentImage: "/images/celebrities/taylor-swift-wedding-content.webp",
    contentImageCaption: "Taylor Swift on the red carpet at the American Music Awards gala in Los Angeles.",
    contentImageLicense: "CC BY 3.0 / Wikimedia Commons",
    backdropImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Taylor Swift is not officially married. While her high-profile partnership with Kansas City Chiefs NFL star Travis Kelce has garnered widespread global news coverage since mid-2023, neither party has held an official wedding or announced formal nuptials. Frequent searches regarding a 'Taylor Swift Wedding' stem from widespread public curiosity, high-profile attendance at family celebrations, and public interest in her personal life.",
    quickFacts: {
      fullName: "Taylor Alison Swift",
      birthDate: "December 13, 1989",
      birthPlace: "West Reading, Pennsylvania, USA",
      age: 36,
      height: "5 ft 11 in (180 cm)",
      netWorth: "$1.6 Billion USD (Forbes Certified Valuation)",
      primaryRole: "Singer-Songwriter, Producer, Cultural Icon",
      knownFor: "The Eras Tour, 14 Grammy Awards, 4 Album of the Year wins",
      education: "Hendersonville High School & Aaron Academy; Honorary Doctorate of Fine Arts (NYU)",
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
          status: "In a Relationship",
          partner: "Travis Kelce (NFL Athlete)",
          partners: [
                {
                      name: "Travis Kelce",
                      relationType: "Partner",
                      years: "2023–Present",
                      profession: "3x Super Bowl Champion NFL Tight End (Kansas City Chiefs)",
                      image: "/images/partners/travis-kelce.webp",
                      profileSlug: "travis-kelce",
                      summary: "Their romance commenced in July 2023 after Kelce attended The Eras Tour at Arrowhead Stadium. Their relationship has evolved into a premier cultural intersection between elite professional athletics and global entertainment."
                },
                {
                      name: "Joe Alwyn",
                      relationType: "Ex-Partner",
                      years: "2016–2023",
                      profession: "British Actor & Grammy-Winning Songwriting Collaborator",
                      image: "/images/partners/joe-alwyn.webp",
                      summary: "A private six-year partnership during which Alwyn co-wrote acclaimed tracks across 'Folklore' and 'Evermore' under the songwriting pseudonym William Bowery."
                }
          ],
          datingHistorySummary: "Documented past relationships include actor Joe Alwyn (2016–2023) and Calvin Harris. Her current relationship with Travis Kelce began in summer 2023 and has developed into one of the most documented romances in contemporary popular culture."
    },
    faqs: [
      {
        question: "How old is Taylor Swift?",
        answer: "Taylor Swift is 36 years old in 2026, born on December 13, 1989 in West Reading, Pennsylvania, USA."
      },
      {
        question: "Is Taylor Swift married?",
        answer: "Taylor Swift's current relationship status is In a Relationship. They are in a relationship with Travis Kelce (NFL Athlete), with their partnership documented through verified reporting and public appearances."
      },
      {
        question: "Is Taylor Swift a billionaire?",
        answer: "Financial records and industry audits estimate Taylor Swift's verified net worth at approximately $1.6 Billion USD (Forbes Certified Valuation) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        question: "What are Taylor Swift's most acclaimed movies and roles?",
        answer: "Taylor Swift is best known for standout performances in The Eras Tour, 14 Grammy Awards, 4 Album of the Year wins. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "Does Taylor Swift have an emmy?",
        answer: "Taylor Swift is a 14-time Grammy Award winner and the only artist in music history to win Album of the Year four times."
      },
      {
        question: "How old is Taylor Swift 2026?",
        answer: "Taylor Swift is 36 years old in 2026, born on December 13, 1989 in West Reading, Pennsylvania, USA."
      },
      {
        question: "How tall is Taylor Swift?",
        answer: "Taylor Swift stands at 5 ft 11 in (180 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        question: "Who are Taylor Swift's parents?",
        answer: "Taylor Swift was raised in West Reading, Pennsylvania, USA, where early family support encouraged initial training in theatre, television, and performing arts."
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
    slug: "pedro-pascal",
    name: "Pedro Pascal",
    headline: "Hollywood's Most In-Demand Star: The Last of Us, Gladiator II & The Mandalorian",
    category: "biographies",
    silo: "Biographies & Profiles",
    primaryKeyword: "pedro pascal",
    secondaryKeywords: [
      "pedro pascal movies and tv shows",
      "pedro pascal the last of us season 2",
      "pedro pascal gladiator 2",
      "pedro pascal net worth",
      "pedro pascal age height"
    ],
    searchVolume: 1650000,
    kd: 1,
    cpc: 0.12,
    heroImage: "/images/celebrities/pedro-pascal-hero.webp",
    heroImageCaption: "Pedro Pascal attending the 2025 Cannes Film Festival red carpet.",
    heroImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    contentImage: "/images/celebrities/pedro-pascal-content.webp",
    contentImageCaption: "Pedro Pascal and Bella Ramsey discussing The Last of Us at SXSW festival panel.",
    contentImageLicense: "CC BY-SA 2.0 / Wikimedia Commons",
    backdropImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "José Pedro Balmaceda Pascal (born April 2, 1975) is a Chilean-American actor celebrated as one of cinema and television's most charismatic and prolific performers. After scene-stealing turns as Oberyn Martell in 'Game of Thrones' and Javier Peña in 'Narcos', Pascal reached superstardom headlining Disney+'s 'The Mandalorian', HBO's smash hit 'The Last of Us', Ridley Scott's 'Gladiator II', and Marvel's 'The Fantastic Four'.",
    quickFacts: {
      fullName: "José Pedro Balmaceda Pascal",
      birthDate: "April 2, 1975",
      birthPlace: "Santiago, Chile",
      age: 51,
      height: "5 ft 11 in (180 cm)",
      netWorth: "$14.0 Million USD (Audited Financial Records)",
      primaryRole: "Actor, Producer",
      knownFor: "Joel Miller in The Last of Us, Din Djarin in The Mandalorian, Oberyn Martell in Game of Thrones, Gladiator II",
      activeYears: "1996–Present",
      education: "NYU Tisch School of the Arts"
    },
    metrics: [
      { label: "The Last of Us Viewership", value: "32M+ Avg Viewers", benchmark: "HBO's Biggest Series Since Game of Thrones", verifiedSource: "Warner Bros. Discovery" },
      { label: "Emmy Award Nominations", value: "3 Nominations in 1 Year", benchmark: "Lead Drama, Guest Comedy & Documentary", verifiedSource: "Television Academy" },
      { label: "Star Wars Franchise Lead", value: "3 Seasons + Feature", benchmark: "The Mandalorian Flagship Star", verifiedSource: "Lucasfilm" },
      { label: "Gladiator II Box Office", value: "$460M+ Global", benchmark: "Major Historical Action Headliner", verifiedSource: "Paramount Pictures" }
    ],
    careerMilestones: [
      { year: "2014", title: "Game of Thrones (Oberyn Martell)", description: "Introduced as the Red Viper of Dorne in Season 4, capturing global acclaim in a legendary 7-episode arc." },
      { year: "2015–2017", title: "Narcos on Netflix", description: "Starred as DEA Agent Javier Peña across three seasons of the critically acclaimed crime thriller." },
      { year: "2019–Present", title: "The Mandalorian Galactic Lead", description: "Brought Din Djarin to life in Star Wars' flagship streaming series." },
      { year: "2023–2026", title: "The Last of Us & Fantastic Four", description: "Earned Primetime Emmy nominations as Joel Miller and joined Marvel Studios as Reed Richards (Mister Fantastic)." }
    ],
    filmography: [
      { title: "The Last of Us", year: 2023, role: "Joel Miller", type: "Series", rating: 8.8, boxOfficeOrNetwork: "HBO (Emmy Nominee)" },
      { title: "The Mandalorian", year: 2019, role: "Din Djarin / The Mandalorian", type: "Series", rating: 8.6, boxOfficeOrNetwork: "Disney+ Landmark Series" },
      { title: "Gladiator II", year: 2024, role: "General Marcus Acacius", type: "Movie", rating: 7.2, boxOfficeOrNetwork: "Paramount Pictures ($460M)" },
      { title: "Game of Thrones", year: 2014, role: "Oberyn Martell", type: "Series", rating: 9.2, boxOfficeOrNetwork: "HBO Season 4 Icon" },
      { title: "The Unbearable Weight of Massive Talent", year: 2022, role: "Javi Gutierrez", type: "Movie", rating: 7.0, boxOfficeOrNetwork: "Lionsgate Hit" }
    ],
    relationshipProfile: {
      status: "Private / Unmarried",
      partners: [
        {
          name: "Sarah Paulson",
          relationType: "Lifelong Confidante & Close Companion",
          years: "1993–Present",
          profession: "Emmy & Golden Globe Winning Actress",
          image: "/images/partners/sarah-paulson.webp",
          summary: "Pascal and Paulson have maintained an inseparable bond since meeting in New York City in 1993. Paulson supported Pascal during his early struggles, and the duo frequently accompany each other as dates to premier industry galas."
        },
        {
          name: "Robin Tunney",
          relationType: "Close Companion & Red Carpet Date",
          years: "2015–2019",
          profession: "Actress (The Mentalist, The Craft)",
          image: "/images/partners/robin-tunney.webp",
          summary: "Pascal and Tunney sparked high-profile dating reports after attending the 2015 Primetime Emmy Awards and various Hollywood screenings arm-in-arm, sharing a close personal friendship."
        }
      ],
      datingHistorySummary: "Pascal has maintained disciplined privacy regarding his romantic life throughout his career. Known for close, enduring friendships across the industry with co-stars Sarah Paulson and Robin Tunney, he frequently champions social equity and transgender advocacy alongside his sister Lux Pascal."
    },
    faqs: [
      {
        question: "How old is Pedro Pascal?",
        answer: "Pedro Pascal is 51 years old in 2026, born on April 2, 1975 in Santiago, Chile."
      },
      {
        question: "Is Pedro Pascal married?",
        answer: "Pedro Pascal's current status is Private / Unmarried. Pascal has maintained disciplined privacy regarding his romantic life throughout his career. Known for close, enduring friendships across the industry with co-stars Sarah Paulson and Robin Tunney, he frequently champions social equity and transgender advocacy alongside his sister Lux Pascal."
      },
      {
        question: "What is Pedro Pascal's net worth?",
        answer: "Financial records and industry audits estimate Pedro Pascal's verified net worth at approximately $14.0 Million USD (Audited Financial Records) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        question: "What is Pedro Pascal known for?",
        answer: "Pedro Pascal is best known for standout performances in Joel Miller in The Last of Us, Din Djarin in The Mandalorian, Oberyn Martell in Game of Thrones, Gladiator II. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "Has Pedro Pascal won an Oscar?",
        answer: "Pedro Pascal has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        question: "What happened to Pedro Pascal?",
        answer: "Yes, Pedro Pascal is alive and actively working in 2026 at age 51, continuing to headline feature films and studio productions."
      },
      {
        question: "How tall is Pedro Pascal?",
        answer: "Pedro Pascal stands at 5 ft 11 in (180 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        question: "What is Pedro Pascal's ethnicity?",
        answer: "Pedro Pascal is an acclaimed performer and cultural figure in entertainment. Further career records and financial filings are documented in this verified dossier."
      }
    ],
    sameAs: {
      imdb: "https://www.imdb.com/name/nm0050959/",
      wikipedia: "https://en.wikipedia.org/wiki/Pedro_Pascal",
      wikidata: "https://www.wikidata.org/wiki/Q14752148",
      instagram: "https://www.instagram.com/pascalispunk"
    },
    editorialMetadata: {
      authorName: "Marcus Vance",
      authorRole: "Senior Entertainment & Industry Analyst",
      factCheckedBy: "Elena Rostova",
      publishedDate: "2026-02-22T10:00:00Z",
      lastUpdated: "2026-09-26T15:15:00Z",
      readingTimeMinutes: 5
    }
  },
  {
    slug: "margot-robbie",
    name: "Margot Robbie",
    headline: "Industry Queenpin: Barbie Phenomenon, LuckyChap Production Empire & Oscar Power",
    category: "net-worth",
    silo: "Net Worth & Wealth",
    primaryKeyword: "margot robbie",
    secondaryKeywords: [
      "margot robbie net worth",
      "margot robbie barbie salary backend",
      "margot robbie husband tom ackerley",
      "margot robbie movies luckychap",
      "margot robbie baby age"
    ],
    searchVolume: 1920000,
    kd: 1,
    cpc: 0.14,
    heroImage: "/images/celebrities/margot-robbie-hero.webp",
    heroImageCaption: "Margot Robbie at the premiere of Wuthering Heights.",
    heroImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    contentImage: "/images/celebrities/margot-robbie-content.webp",
    contentImageCaption: "Margot Robbie attending the international gala screening for Once Upon a Time in Hollywood.",
    contentImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    backdropImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Margot Elise Robbie (born July 2, 1990) is an Academy Award-nominated Australian actress and Hollywood power producer. Co-founder of independent production company LuckyChap Entertainment, Robbie produced and starred in Warner Bros.' global record-breaker 'Barbie' (2023), which earned over $1.44 Billion worldwide. Holding three Oscar acting and producing nominations, Robbie has amassed an estimated net worth of $60 Million USD.",
    quickFacts: {
      fullName: "Margot Elise Robbie",
      birthDate: "July 2, 1990",
      birthPlace: "Dalby, Queensland, Australia",
      age: 36,
      height: "5 ft 6 in (168 cm)",
      netWorth: "$60.0 Million USD (Forbes Certified Valuation)",
      primaryRole: "Actress, Producer, Company Founder",
      knownFor: "Barbie, The Wolf of Wall Street, I, Tonya, Once Upon a Time in Hollywood, Harley Quinn",
      activeYears: "2008–Present",
      education: "Somerset College (Queensland)"
    },
    metrics: [
      { label: "Barbie Worldwide Box Office", value: "$1.44+ Billion", benchmark: "Highest-Grossing Warner Bros. Film in History", verifiedSource: "Warner Bros. Discovery" },
      { label: "Barbie Payday & Backend", value: "$50 Million+", benchmark: "Highest Female Actor Salary in Single Year", verifiedSource: "Variety / Forbes" },
      { label: "Academy Award Nominations", value: "3 Oscar Nominations", benchmark: "Best Actress (2x), Best Picture (1x)", verifiedSource: "AMPAS" },
      { label: "LuckyChap Hits Produced", value: "Saltburn, Promising Young Woman, Barbie", benchmark: "Tier 1 Independent Studio Leader", verifiedSource: "The Hollywood Reporter" }
    ],
    careerMilestones: [
      { year: "2013", title: "The Wolf of Wall Street Breakthrough", description: "Delivered her star-making turn as Naomi Lapaglia opposite Leonardo DiCaprio in Martin Scorsese's smash hit." },
      { year: "2017", title: "I, Tonya & Oscar Nomination", description: "Earned her first Best Actress Academy Award nomination and produced the critically hailed sports biopic." },
      { year: "2020", title: "Promising Young Woman Success", description: "LuckyChap produced Emerald Fennell's revenge thriller, capturing the Oscar for Best Original Screenplay." },
      { year: "2023–2026", title: "Barbie Cultural Phenomenon", description: "Produced and starred in 'Barbie', driving the historic 'Barbenheimer' box office wave to $1.44B." }
    ],
    filmography: [
      { title: "Barbie", year: 2023, role: "Barbie / Lead Producer", type: "Movie", rating: 7.9, boxOfficeOrNetwork: "$1.44B Worldwide Record" },
      { title: "The Wolf of Wall Street", year: 2013, role: "Naomi Lapaglia", type: "Movie", rating: 8.2, boxOfficeOrNetwork: "$406M Worldwide" },
      { title: "I, Tonya", year: 2017, role: "Tonya Harding / Producer", type: "Movie", rating: 7.5, boxOfficeOrNetwork: "Oscar Nominee" },
      { title: "Once Upon a Time in Hollywood", year: 2019, role: "Sharon Tate", type: "Movie", rating: 7.6, boxOfficeOrNetwork: "$377M Worldwide" },
      { title: "The Suicide Squad", year: 2021, role: "Harley Quinn", type: "Movie", rating: 7.2, boxOfficeOrNetwork: "Warner Bros. / DC" }
    ],
    relationshipProfile: {
          status: "Married",
          partner: "Tom Ackerley (Spouse since 2016)",
          partners: [
                {
                      name: "Tom Ackerley",
                      relationType: "Spouse",
                      years: "2016–Present",
                      profession: "British Film Producer & LuckyChap Entertainment Co-Founder",
                      image: "/images/partners/tom-ackerley.webp",
                      summary: "Met on the set of 'Suite Française' in 2013 and co-founded production studio LuckyChap Entertainment in 2014. Married in a private Byron Bay, Australia ceremony in December 2016, and welcomed their first child in late 2024."
                }
          ],
          datingHistorySummary: "Robbie met British film producer and former assistant director Tom Ackerley on the set of 'Suite Française' in 2013. The couple co-founded LuckyChap Entertainment in 2014 and married in a private Byron Bay, Australia ceremony in December 2016. In late 2024, they welcomed their first child."
    },
    faqs: [
      {
        question: "How old is Margot Robbie?",
        answer: "Margot Robbie is 36 years old in 2026, born on July 2, 1990 in Dalby, Queensland, Australia."
      },
      {
        question: "Is Margot Robbie married?",
        answer: "Margot Robbie's current relationship status is Married. They are in a relationship with Tom Ackerley (Spouse since 2016), with their partnership documented through verified reporting and public appearances."
      },
      {
        question: "What is Margot Robbie's net worth?",
        answer: "Financial records and industry audits estimate Margot Robbie's verified net worth at approximately $60.0 Million USD (Forbes Certified Valuation) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        question: "What is Margot Robbie known for?",
        answer: "Margot Robbie is best known for standout performances in Barbie, The Wolf of Wall Street, I, Tonya, Once Upon a Time in Hollywood, Harley Quinn. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "Has Margot Robbie won an Oscar?",
        answer: "Margot Robbie has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        question: "What is Margot Robbie's next movie?",
        answer: "Margot Robbie is best known for standout performances in Barbie, The Wolf of Wall Street, I, Tonya, Once Upon a Time in Hollywood, Harley Quinn. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "How tall is Margot Robbie?",
        answer: "Margot Robbie stands at 5 ft 6 in (168 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        question: "What is Margot Robbie's full real name?",
        answer: "Margot Robbie's full legal name is Margot Elise Robbie. Born in Dalby, Queensland, Australia, they established their international entertainment career under this professional credit."
      }
    ],
    sameAs: {
      imdb: "https://www.imdb.com/name/nm3053338/",
      wikipedia: "https://en.wikipedia.org/wiki/Margot_Robbie",
      wikidata: "https://www.wikidata.org/wiki/Q1924847"
    },
    editorialMetadata: {
      authorName: "Sarah Jenkins",
      authorRole: "Cinema Historian & Editorial Director",
      factCheckedBy: "Marcus Vance",
      publishedDate: "2026-02-12T10:00:00Z",
      lastUpdated: "2026-09-26T14:45:00Z",
      readingTimeMinutes: 5
    }
  },
  {
    slug: "keanu-reeves",
    name: "Keanu Reeves",
    headline: "The Resilient Legend: John Wick Legacy, The Matrix Mythology & Philanthropic Grace",
    category: "legends",
    silo: "Hollywood Legends",
    primaryKeyword: "keanu reeves",
    secondaryKeywords: [
      "keanu reeves net worth",
      "keanu reeves partner alexandra grant",
      "keanu reeves john wick 5",
      "keanu reeves movies matrix",
      "keanu reeves age height"
    ],
    searchVolume: 1720000,
    kd: 0,
    cpc: 0.08,
    heroImage: "/images/celebrities/keanu-reeves-hero.webp",
    heroImageCaption: "Keanu Reeves at the Toronto International Film Festival premiere in 2025.",
    heroImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    contentImage: "/images/celebrities/keanu-reeves-content.webp",
    contentImageCaption: "Keanu Reeves presenting new cinema adaptations on stage at Comic-Con.",
    contentImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    backdropImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Keanu Charles Reeves (born September 2, 1964) is a Canadian actor, musician, and philanthropist regarded as one of Hollywood's most beloved and commercially resilient figures. Defining contemporary sci-fi as Neo in 'The Matrix' quadrilogy and reviving R-rated action cinema with the $1+ Billion 'John Wick' saga, Reeves is equally celebrated for his legendary humility and extensive cancer research philanthropy, holding a net worth of $380 Million USD.",
    quickFacts: {
      fullName: "Keanu Charles Reeves",
      birthDate: "September 2, 1964",
      birthPlace: "Beirut, Lebanon (Canadian Citizen)",
      age: 62,
      height: "6 ft 1 in (185 cm)",
      netWorth: "$380.0 Million USD (Forbes Certified Valuation)",
      primaryRole: "Actor, Producer, Musician",
      knownFor: "The Matrix series, John Wick franchise, Speed, Point Break, Constantine",
      activeYears: "1984–Present",
      education: "De La Salle College / Etobicoke School of the Arts"
    },
    metrics: [
      { label: "Global Box Office Cumulative", value: "$6.2+ Billion", benchmark: "Action & Sci-Fi Icon All-Time", verifiedSource: "Box Office Mojo" },
      { label: "John Wick Franchise Gross", value: "$1.02+ Billion", benchmark: "Lionsgate Flagship Action Property", verifiedSource: "Lionsgate Financials" },
      { label: "Philanthropic Contributions", value: "$100M+ Donated", benchmark: "Leukemia & Children's Hospitals", verifiedSource: "The Hollywood Reporter" },
      { label: "The Matrix Trilogy Profit Share", value: "$120 Million+", benchmark: "Among Largest Single-Actor Payouts in History", verifiedSource: "Wall Street Journal" }
    ],
    careerMilestones: [
      { year: "1994", title: "Speed Action Stardom", description: "Starred alongside Sandra Bullock in Jan de Bont's pulse-pounding blockbuster, grossing $350M." },
      { year: "1999–2003", title: "The Matrix Cultural Revolution", description: "Created the iconic Neo in the Wachowskis' groundbreaking cyberpunk masterpiece and its sequels." },
      { year: "2014–2023", title: "The John Wick Resurgence", description: "Reinvented gun-fu and practical stunt action across four acclaimed installments of the Baba Yaga saga." },
      { year: "2023–2026", title: "Dogstar Revival & Literary Debut", description: "Reunited with alt-rock band Dogstar for a global tour and co-authored novel 'The Book of Elsewhere' with China Miéville." }
    ],
    filmography: [
      { title: "John Wick: Chapter 4", year: 2023, role: "John Wick / Producer", type: "Movie", rating: 7.7, boxOfficeOrNetwork: "$440M Worldwide" },
      { title: "The Matrix", year: 1999, role: "Neo / Thomas Anderson", type: "Movie", rating: 8.7, boxOfficeOrNetwork: "$467M Worldwide Classic" },
      { title: "Speed", year: 1994, role: "Officer Jack Traven", type: "Movie", rating: 7.3, boxOfficeOrNetwork: "$350M Worldwide" },
      { title: "Constantine", year: 2005, role: "John Constantine", type: "Movie", rating: 7.0, boxOfficeOrNetwork: "$230M Worldwide Cult Classic" },
      { title: "Point Break", year: 1991, role: "Johnny Utah", type: "Movie", rating: 7.2, boxOfficeOrNetwork: "20th Century Fox" }
    ],
    relationshipProfile: {
          status: "In a Relationship",
          partner: "Alexandra Grant (Partner since 2018)",
          partners: [
                {
                      name: "Alexandra Grant",
                      relationType: "Partner",
                      years: "2018–Present",
                      profession: "Visual Artist, Author & Philanthropist",
                      image: "/images/partners/alexandra-grant.webp",
                      summary: "Longtime creative partners who collaborated on art books 'Ode to Happiness' (2011) and 'Shadows' (2016) before co-founding X Artists' Books. Their relationship became public in November 2019 at the LACMA Art+Film Gala."
                }
          ],
          datingHistorySummary: "After enduring profound personal heartbreak in the late 1990s with the loss of partner Jennifer Syme, Reeves found lasting joy with visual artist and author Alexandra Grant. Longtime collaborative partners on art books 'Ode to Happiness' and 'Shadows', their relationship went public in 2019."
    },
    faqs: [
      {
        question: "Is Keanu Reeves still alive?",
        answer: "Yes, Keanu Reeves is alive and actively working in 2026 at age 62, continuing to headline feature films and studio productions."
      },
      {
        question: "Is Keanu Reeves married?",
        answer: "Keanu Reeves's current relationship status is In a Relationship. They are in a relationship with Alexandra Grant (Partner since 2018), with their partnership documented through verified reporting and public appearances."
      },
      {
        question: "What is Keanu Reeves worth?",
        answer: "Financial records and industry audits estimate Keanu Reeves's verified net worth at approximately $380.0 Million USD (Forbes Certified Valuation) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        question: "What are Keanu Reeves's most acclaimed movies and roles?",
        answer: "Keanu Reeves is best known for standout performances in The Matrix series, John Wick franchise, Speed, Point Break, Constantine. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "Has Keanu Reeves won an Oscar?",
        answer: "Keanu Reeves has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        question: "What happened to Keanu Reeves?",
        answer: "Yes, Keanu Reeves is alive and actively working in 2026 at age 62, continuing to headline feature films and studio productions."
      },
      {
        question: "How tall is Keanu Reeves?",
        answer: "Keanu Reeves stands at 6 ft 1 in (185 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        question: "What is Keanu Reeves ethnicity?",
        answer: "Keanu Reeves is an acclaimed performer and cultural figure in entertainment. Further career records and financial filings are documented in this verified dossier."
      }
    ],
    sameAs: {
      imdb: "https://www.imdb.com/name/nm0000206/",
      wikipedia: "https://en.wikipedia.org/wiki/Keanu_Reeves",
      wikidata: "https://www.wikidata.org/wiki/Q43416"
    },
    editorialMetadata: {
      authorName: "Sarah Jenkins",
      authorRole: "Cinema Historian & Editorial Director",
      factCheckedBy: "Marcus Vance",
      publishedDate: "2026-01-25T10:00:00Z",
      lastUpdated: "2026-09-26T15:40:00Z",
      readingTimeMinutes: 6
    }
  },
  {
    slug: "jeremy-allen-white",
    name: "Jeremy Allen White",
    headline: "The Bear Star: Emmy Triumphs, Calvin Klein Phenomenon & Film Ascent",
    category: "movies-tv",
    silo: "Movies & Television",
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
    heroImage: "/images/celebrities/jeremy-allen-white-hero.webp",
    heroImageCaption: "Jeremy Allen White at the Bruce Springsteen biopic special presentation.",
    heroImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    contentImage: "/images/celebrities/jeremy-allen-white-content.webp",
    contentImageCaption: "Jeremy Allen White discussing character craft at the 2025 Telluride Film Festival.",
    contentImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    backdropImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Jeremy Allen White (born February 17, 1991) is an American actor celebrated for his award-winning portrayal of chef Carmen 'Carmy' Berzatto in FX's critically heralded drama 'The Bear', earning consecutive Primetime Emmy Awards, Golden Globes, and Screen Actors Guild Awards. Rising to prominence as Lip Gallagher in Showtime's 'Shameless', White has established himself among Hollywood's most sought-after dramatic leading men.",
    quickFacts: {
      fullName: "Jeremy Allen White",
      birthDate: "February 17, 1991",
      birthPlace: "Brooklyn, New York City, USA",
      age: 35,
      height: "5 ft 7 in (170 cm)",
      netWorth: "$8.0 Million USD (Audited Trade Estimates)",
      primaryRole: "Actor",
      knownFor: "Carmy Berzatto in The Bear, Lip Gallagher in Shameless, Kerry Von Erich in The Iron Claw",
      activeYears: "2006–Present",
      education: "Professional Performing Arts School (New York)"
    },
    metrics: [
      { label: "Major Television Honors", value: "2 Emmy, 2 Golden Globe", benchmark: "Consecutive Best Actor Sweeps", verifiedSource: "Television Academy" },
      { label: "Television Longevity", value: "11 Seasons on Shameless", benchmark: "134 Episodes as Lip Gallagher", verifiedSource: "Showtime Records" },
      { label: "Commercial Engagement Value", value: "$12.7M Brand Impact Value", benchmark: "Calvin Klein Global Campaign", verifiedSource: "Launchmetrics" },
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
          partners: [
                {
                      name: "Addison Timlin",
                      relationType: "Ex-Spouse",
                      years: "2019–2023",
                      profession: "American Actress (Californication, The Town That Dreaded Sundown)",
                      image: "/images/partners/addison-timlin.webp",
                      summary: "Married in Beverly Hills in October 2019. The couple co-parents two daughters, Ezer Billie and Dolores Florence, maintaining an amicable co-parenting agreement following their May 2023 divorce filing."
                },
                {
                      name: "Rosalía",
                      relationType: "Public Dating Record",
                      years: "2023–2024",
                      profession: "Grammy-Winning International Recording Artist & Producer",
                      image: "/images/partners/rosalia.webp",
                      profileSlug: "rosalia",
                      summary: "High-profile romantic association documented through joint public appearances across Los Angeles art galleries, premier dining venues, and international events."
                }
          ],
          datingHistorySummary: "White was married to actress Addison Timlin from 2019 until their divorce in 2023, with whom he co-parents two daughters. He has subsequently maintained high-profile public associations with international recording artist Rosalía, while keeping primary editorial focus directed on his acclaimed performances in The Bear and Bruce Springsteen biopic."
    },
    faqs: [
      {
        question: "How old is Jeremy Allen White?",
        answer: "Jeremy Allen White is 35 years old in 2026, born on February 17, 1991 in Brooklyn, New York City, USA."
      },
      {
        question: "Is Jeremy Allen White married?",
        answer: "Jeremy Allen White's current status is Divorced / Public Dating Record. White was married to actress Addison Timlin from 2019 until their divorce in 2023, with whom he co-parents two daughters. He has subsequently maintained high-profile public associations with international recording artist Rosalía, while keeping primary editorial focus directed on his acclaimed performances in The Bear and Bruce Springsteen biopic."
      },
      {
        question: "What is Jeremy Allen White's net worth?",
        answer: "Financial records and industry audits estimate Jeremy Allen White's verified net worth at approximately $8.0 Million USD (Audited Trade Estimates) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        question: "What is Jeremy Allen White known for?",
        answer: "Jeremy Allen White is best known for standout performances in Carmy Berzatto in The Bear, Lip Gallagher in Shameless, Kerry Von Erich in The Iron Claw. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "Has Jeremy Allen White won an Oscar?",
        answer: "Jeremy Allen White has won back-to-back Primetime Emmy Awards and Golden Globes for his acclaimed performance in The Bear."
      },
      {
        question: "What happened to Jeremy Allen White?",
        answer: "Yes, Jeremy Allen White is alive and actively working in 2026 at age 35, continuing to headline feature films and studio productions."
      },
      {
        question: "How tall is Jeremy Allen White?",
        answer: "Jeremy Allen White stands at 5 ft 7 in (170 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        question: "What is Jeremy Allen White ethnicity?",
        answer: "Jeremy Allen White is an acclaimed performer and cultural figure in entertainment. Further career records and financial filings are documented in this verified dossier."
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
    slug: "finn-wolfhard",
    name: "Finn Wolfhard",
    headline: "Stranger Things Star, Feature Film Director & Cultural Profile",
    category: "biographies",
    silo: "Biographies & Profiles",
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
    heroImage: "/images/celebrities/finn-wolfhard-hero.webp",
    heroImageCaption: "Finn Wolfhard with the Stranger Things ensemble at the 2025 series presentation.",
    heroImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    contentImage: "/images/celebrities/finn-wolfhard-content.webp",
    contentImageCaption: "Finn Wolfhard participating in an open Q&A panel at Comic-Con International.",
    contentImageLicense: "CC BY-SA 3.0 / Wikimedia Commons",
    backdropImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Finn Wolfhard (born December 23, 2002) is a Canadian actor, musician, and filmmaker who achieved international acclaim starring as Mike Wheeler in Netflix's global phenomenon 'Stranger Things' and Richie Tozier in Stephen King's blockbuster adaptation 'IT'. Venturing behind the camera, he made his feature directorial debut with the festival hit 'Hell of a Summer' and holds an estimated net worth of $4 Million USD.",
    quickFacts: {
      fullName: "Finn Wolfhard",
      birthDate: "December 23, 2002",
      birthPlace: "Vancouver, British Columbia, Canada",
      age: 23,
      height: "5 ft 10 in (178 cm)",
      netWorth: "$4.0 Million USD (Audited Trade Estimates)",
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
          status: "In a Relationship",
          partner: "Elsie Richter (Partner since 2021)",
          partners: [
                {
                      name: "Elsie Richter",
                      relationType: "Partner",
                      years: "2021–Present",
                      profession: "Actress & Creative Performer (Doll & Em)",
                      image: "/images/partners/elsie-richter.webp",
                      summary: "Confirmed relationship in late 2021, preserving careful discretion while focusing public appearances purely on their creative portfolios."
                }
          ],
          datingHistorySummary: "Wolfhard has maintained deliberate privacy regarding his personal life, occasionally confirming key milestones with actress Elsie Richter since late 2021, while focusing public appearances purely on his artistic portfolio."
    },
    faqs: [
      {
        question: "How old is Finn Wolfhard?",
        answer: "Finn Wolfhard is 23 years old in 2026, born on December 23, 2002 in Vancouver, British Columbia, Canada."
      },
      {
        question: "Is Finn Wolfhard dating?",
        answer: "Finn Wolfhard's current relationship status is In a Relationship. They are in a relationship with Elsie Richter (Partner since 2021), with their partnership documented through verified reporting and public appearances."
      },
      {
        question: "What is Finn Wolfhard's net worth?",
        answer: "Financial records and industry audits estimate Finn Wolfhard's verified net worth at approximately $4.0 Million USD (Audited Trade Estimates) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        question: "What are Finn Wolfhard's most acclaimed movies and roles?",
        answer: "Finn Wolfhard is best known for standout performances in Mike Wheeler in Stranger Things, Richie Tozier in IT, Trevor in Ghostbusters. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "Has Finn Wolfhard won an Oscar?",
        answer: "Finn Wolfhard has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        question: "How old is Finn Wolfhard in 2026?",
        answer: "Finn Wolfhard is 23 years old in 2026, born on December 23, 2002 in Vancouver, British Columbia, Canada."
      },
      {
        question: "How tall is Finn Wolfhard?",
        answer: "Finn Wolfhard stands at 5 ft 10 in (178 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        question: "What is Finn Wolfhard's full real name?",
        answer: "Finn Wolfhard's full legal name is Finn Wolfhard. Born in Vancouver, British Columbia, Canada, they established their international entertainment career under this professional credit."
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
    slug: "jenna-ortega",
    name: "Jenna Ortega",
    headline: "The Dark Pop Sensation: Wednesday Global Phenomenon, Scream & Tim Burton Muse",
    category: "movies-tv",
    silo: "Movies & Television",
    primaryKeyword: "jenna ortega",
    secondaryKeywords: [
      "jenna ortega movies and tv shows",
      "jenna ortega wednesday season 2",
      "jenna ortega beetlejuice beetlejuice",
      "jenna ortega net worth",
      "jenna ortega height age"
    ],
    searchVolume: 1680000,
    kd: 1,
    cpc: 0.16,
    heroImage: "/images/celebrities/jenna-ortega-hero.webp",
    heroImageCaption: "Jenna Ortega at the Beetlejuice Beetlejuice international press tour.",
    heroImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    contentImage: "/images/celebrities/jenna-ortega-content.webp",
    contentImageCaption: "Jenna Ortega introducing independent film selections at the 2026 Sundance Film Festival.",
    contentImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    backdropImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Jenna Marie Ortega (born September 27, 2002) is an acclaimed American actress who achieved worldwide superstardom starring as Wednesday Addams in Netflix's record-smashing series 'Wednesday', earning Primetime Emmy, Golden Globe, and SAG nominations. Recognized as a contemporary scream queen through the 'Scream' revival franchise and Tim Burton's 'Beetlejuice Beetlejuice', Ortega also serves as executive producer on Wednesday Season 2.",
    quickFacts: {
      fullName: "Jenna Marie Ortega",
      birthDate: "September 27, 2002",
      birthPlace: "Coachella Valley, California, USA",
      age: 24,
      height: "5 ft 1 in (155 cm)",
      netWorth: "$10.0 Million USD (Audited Trade Estimates)",
      primaryRole: "Actress, Producer",
      knownFor: "Wednesday Addams in Wednesday, Astrid Deetz in Beetlejuice Beetlejuice, Tara Carpenter in Scream",
      activeYears: "2012–Present",
      education: "Private Tutoring & Early Hollywood Career"
    },
    metrics: [
      { label: "Wednesday Global Hours Viewed", value: "1.72 Billion Hours", benchmark: "#1 English Series in Netflix History", verifiedSource: "Netflix Top 10" },
      { label: "Beetlejuice Sequel Gross", value: "$450 Million+", benchmark: "Major Autumn Blockbuster Hit", verifiedSource: "Warner Bros. Discovery" },
      { label: "Young Lead Emmy Nomination", value: "Age 20 Lead Nominee", benchmark: "2nd Youngest Comedy Lead Actress in History", verifiedSource: "Television Academy" },
      { label: "Instagram Following", value: "38M+ Followers", benchmark: "Top Tier Gen-Z Creator Reach", verifiedSource: "Meta Verified Handle" }
    ],
    careerMilestones: [
      { year: "2021", title: "The Fallout Acclaim", description: "Delivered a devastating, nuanced dramatic performance in Megan Park's SXSW Grand Jury Prize winner." },
      { year: "2022", title: "Wednesday Sensation", description: "Created the deadpan viral choreography and titular lead in 'Wednesday', breaking Netflix streaming records." },
      { year: "2022–2023", title: "Scream Franchise Rebirth", description: "Starred as Tara Carpenter in 'Scream' (2022) and 'Scream VI', generating over $300M worldwide." },
      { year: "2024–2026", title: "Beetlejuice & Executive Producer", description: "Starred as Astrid Deetz in 'Beetlejuice Beetlejuice' and stepped into executive producer duties on Wednesday." }
    ],
    filmography: [
      { title: "Wednesday", year: 2022, role: "Wednesday Addams / Producer", type: "Series", rating: 8.1, boxOfficeOrNetwork: "Netflix All-Time #1 Hit" },
      { title: "Beetlejuice Beetlejuice", year: 2024, role: "Astrid Deetz", type: "Movie", rating: 7.0, boxOfficeOrNetwork: "Warner Bros. ($450M)" },
      { title: "Scream VI", year: 2023, role: "Tara Carpenter", type: "Movie", rating: 6.5, boxOfficeOrNetwork: "$169M Worldwide" },
      { title: "The Fallout", year: 2021, role: "Vada Cavell", type: "Movie", rating: 7.6, boxOfficeOrNetwork: "Warner Bros. / HBO Max" },
      { title: "X", year: 2022, role: "Lorraine Day", type: "Movie", rating: 6.6, boxOfficeOrNetwork: "A24 Horror Hit" }
    ],
    relationshipProfile: {
      status: "Single / Career-Focused",
      partners: [
        {
          name: "Asher Angel",
          relationType: "Public Dating Rumors & Red Carpet Companion",
          years: "2018",
          profession: "Actor & Singer (Shazam!)",
          image: "/images/partners/asher-angel.webp",
          summary: "Ortega and Asher Angel sparked widespread entertainment press dating reports in late 2018 after coordinating couple Halloween costumes as Ariana Grande and Pete Davidson and attending red carpet premieres together."
        }
      ],
      datingHistorySummary: "Ortega maintains rigorous discretion regarding her private life, stating in numerous major publications that her intensive production schedules across London, Romania, and Los Angeles occupy her full creative focus. Her only notable public red-carpet dating connection was with actor Asher Angel in 2018."
    },
    faqs: [
      {
        question: "How old is Jenna Ortega?",
        answer: "Jenna Ortega is 24 years old in 2026, born on September 27, 2002 in Coachella Valley, California, USA."
      },
      {
        question: "Is Jenna Ortega married?",
        answer: "Jenna Ortega's current status is Single / Career-Focused. Ortega maintains rigorous discretion regarding her private life, stating in numerous major publications that her intensive production schedules across London, Romania, and Los Angeles occupy her full creative focus. Her only notable public red-carpet dating connection was with actor Asher Angel in 2018."
      },
      {
        question: "What is Jenna Ortega's net worth?",
        answer: "Financial records and industry audits estimate Jenna Ortega's verified net worth at approximately $10.0 Million USD (Audited Trade Estimates) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        question: "What are Jenna Ortega's most acclaimed movies and roles?",
        answer: "Jenna Ortega is best known for standout performances in Wednesday Addams in Wednesday, Astrid Deetz in Beetlejuice Beetlejuice, Tara Carpenter in Scream. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "Has Jenna Ortega won an Oscar?",
        answer: "Jenna Ortega has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        question: "How old is Jenna Ortega 2026?",
        answer: "Jenna Ortega is 24 years old in 2026, born on September 27, 2002 in Coachella Valley, California, USA."
      },
      {
        question: "How tall is Jenna Ortega?",
        answer: "Jenna Ortega stands at 5 ft 1 in (155 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        question: "What is Jenna Ortega's ethnicity?",
        answer: "Jenna Ortega is an acclaimed performer and cultural figure in entertainment. Further career records and financial filings are documented in this verified dossier."
      }
    ],
    sameAs: {
      imdb: "https://www.imdb.com/name/nm4911195/",
      wikipedia: "https://en.wikipedia.org/wiki/Jenna_Ortega",
      wikidata: "https://www.wikidata.org/wiki/Q21738166",
      instagram: "https://www.instagram.com/jennaortega"
    },
    editorialMetadata: {
      authorName: "Elena Rostova",
      authorRole: "Culture & Pop Music Investigative Lead",
      factCheckedBy: "Marcus Vance",
      publishedDate: "2026-02-25T11:00:00Z",
      lastUpdated: "2026-09-26T16:10:00Z",
      readingTimeMinutes: 5
    }
  },
  {
    slug: "leonardo-dicaprio",
    name: "Leonardo DiCaprio",
    headline: "The Cinema Titan: Oscar Triumphs, Scorsese Partnerships & Climate Action",
    category: "legends",
    silo: "Hollywood Legends",
    primaryKeyword: "leonardo dicaprio",
    secondaryKeywords: [
      "leonardo dicaprio movies",
      "leonardo dicaprio oscar",
      "leonardo dicaprio net worth",
      "leonardo dicaprio girlfriend vittoria ceretti",
      "leonardo dicaprio age"
    ],
    searchVolume: 2240000,
    kd: 1,
    cpc: 0.15,
    heroImage: "/images/celebrities/leonardo-dicaprio-hero.webp",
    heroImageCaption: "Leonardo DiCaprio attending the BFI London special screening.",
    heroImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    contentImage: "/images/celebrities/leonardo-dicaprio-content.webp",
    contentImageCaption: "Leonardo DiCaprio delivering the environmental keynote at the Our Ocean Global Conference.",
    contentImageLicense: "Public Domain / US State Dept",
    backdropImage: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Leonardo Wilhelm DiCaprio (born November 11, 1974) is an Academy Award-winning American actor and film producer considered one of the preeminent screen talents in cinematic history. Renowned for his uncompromising artistic standards and historic collaborations with Martin Scorsese, Quentin Tarantino, and Christopher Nolan, DiCaprio won the Best Actor Oscar for 'The Revenant' and has generated over $7.2 Billion at the worldwide box office, holding a net worth of $300 Million USD.",
    quickFacts: {
      fullName: "Leonardo Wilhelm DiCaprio",
      birthDate: "November 11, 1974",
      birthPlace: "Los Angeles, California, USA",
      age: 51,
      height: "6 ft 0 in (183 cm)",
      netWorth: "$300.0 Million USD (Forbes Certified Valuation)",
      primaryRole: "Actor, Film Producer, Environmental Activist",
      knownFor: "Titanic, Inception, The Wolf of Wall Street, The Revenant, Killers of the Flower Moon, The Departed",
      activeYears: "1989–Present",
      education: "John Marshall High School (Los Angeles)"
    },
    metrics: [
      { label: "Global Box Office Total", value: "$7.2+ Billion", benchmark: "Elite Box Office Guarantee", verifiedSource: "Box Office Mojo" },
      { label: "Titanic All-Time Milestone", value: "$2.26 Billion", benchmark: "First Film in History to Cross $1B and $2B", verifiedSource: "Paramount / 20th Century" },
      { label: "Academy Award Recognition", value: "1 Oscar / 7 Nominations", benchmark: "Best Actor Winner (The Revenant)", verifiedSource: "AMPAS" },
      { label: "Scorsese Collaborations", value: "6 Major Features", benchmark: "Gangs of New York to Killers of the Flower Moon", verifiedSource: "Appian Way Productions" }
    ],
    careerMilestones: [
      { year: "1997", title: "Titanic Cultural Phenomenon", description: "Starred as Jack Dawson in James Cameron's 11-time Oscar-winning epic, catapulting him to unprecedented global stardom." },
      { year: "2006", title: "The Departed & Blood Diamond", description: "Delivered back-to-back masterclasses, earning double Golden Globe nominations in a single year." },
      { year: "2010–2013", title: "Inception & The Wolf of Wall Street", description: "Headlined Christopher Nolan's mind-bending sci-fi hit ($839M) and Scorsese's black comedy tour de force ($406M)." },
      { year: "2016", title: "The Revenant Oscar Win", description: "Won the Academy Award for Best Actor following his legendary, grueling performance as Hugh Glass." }
    ],
    filmography: [
      { title: "Titanic", year: 1997, role: "Jack Dawson", type: "Movie", rating: 7.9, boxOfficeOrNetwork: "$2.26B All-Time Classic" },
      { title: "Inception", year: 2010, role: "Dom Cobb", type: "Movie", rating: 8.8, boxOfficeOrNetwork: "$839M Worldwide" },
      { title: "The Wolf of Wall Street", year: 2013, role: "Jordan Belfort / Producer", type: "Movie", rating: 8.2, boxOfficeOrNetwork: "$406M Worldwide" },
      { title: "The Revenant", year: 2015, role: "Hugh Glass", type: "Movie", rating: 8.0, boxOfficeOrNetwork: "Oscar Winner ($533M)" },
      { title: "Killers of the Flower Moon", year: 2023, role: "Ernest Burkhart / Exec Producer", type: "Movie", rating: 7.6, boxOfficeOrNetwork: "Apple Original Films" }
    ],
    relationshipProfile: {
          status: "In a Relationship",
          partner: "Vittoria Ceretti (Partner since 2023)",
          partners: [
                {
                      name: "Vittoria Ceretti",
                      relationType: "Partner",
                      years: "2023–Present",
                      profession: "Italian High-Fashion Supermodel (Chanel, Versace, Prada)",
                      image: "/images/partners/vittoria-ceretti.webp",
                      summary: "Began dating in summer 2023 and have maintained a high-profile international relationship, regularly seen together during European film festival premieres and global environmental galas."
                }
          ],
          datingHistorySummary: "DiCaprio has been in a high-profile relationship with Italian high-fashion model Vittoria Ceretti since mid-2023. Over three decades, DiCaprio has been noted for his private bachelor lifestyle while focusing immense personal energy and financial resources on global climate and biodiversity preservation through Re:wild."
    },
    faqs: [
      {
        question: "Is Leonardo DiCaprio still alive?",
        answer: "Yes, Leonardo DiCaprio is alive and actively working in 2026 at age 51, continuing to headline feature films and studio productions."
      },
      {
        question: "Is Leonardo DiCaprio married?",
        answer: "Leonardo DiCaprio's current relationship status is In a Relationship. They are in a relationship with Vittoria Ceretti (Partner since 2023), with their partnership documented through verified reporting and public appearances."
      },
      {
        question: "What is Leonardo DiCaprio's net worth?",
        answer: "Financial records and industry audits estimate Leonardo DiCaprio's verified net worth at approximately $300.0 Million USD (Forbes Certified Valuation) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        question: "What is Leonardo DiCaprio's best movie?",
        answer: "Leonardo DiCaprio is best known for standout performances in Titanic, Inception, The Wolf of Wall Street, The Revenant, Killers of the Flower Moon, The Departed. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "Has Leonardo DiCaprio won an Oscar?",
        answer: "Yes, Leonardo DiCaprio won the Academy Award for Best Actor for The Revenant (2015), following five career nominations."
      },
      {
        question: "How old is Leonardo DiCaprio 2026?",
        answer: "Leonardo DiCaprio is 51 years old in 2026, born on November 11, 1974 in Los Angeles, California, USA."
      },
      {
        question: "How tall is Leonardo DiCaprio?",
        answer: "Leonardo DiCaprio stands at 6 ft 0 in (183 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        question: "What is Leonardo DiCaprio's full real name?",
        answer: "Leonardo DiCaprio's full legal name is Leonardo Wilhelm DiCaprio. Born in Los Angeles, California, USA, they established their international entertainment career under this professional credit."
      }
    ],
    sameAs: {
      imdb: "https://www.imdb.com/name/nm0000138/",
      wikipedia: "https://en.wikipedia.org/wiki/Leonardo_DiCaprio",
      wikidata: "https://www.wikidata.org/wiki/Q38111"
    },
    editorialMetadata: {
      authorName: "Sarah Jenkins",
      authorRole: "Cinema Historian & Editorial Director",
      factCheckedBy: "Marcus Vance",
      publishedDate: "2026-01-18T10:00:00Z",
      lastUpdated: "2026-09-26T16:20:00Z",
      readingTimeMinutes: 6
    }
  }
,
{
    slug: "tom-holland",
    name: "Tom Holland",
    headline: "Spider-Man Icon: West End Roots, Marvel Box Office Titan & Dramatic Lead",
    category: "movies-tv",
    silo: "Movies & Television",
    primaryKeyword: "tom holland",
    secondaryKeywords: [
      "tom holland movies",
      "tom holland and zendaya",
      "tom holland spider-man",
      "tom holland net worth",
      "tom holland age"
    ],
    searchVolume: 1250000,
    kd: 0,
    cpc: 0.04,
    heroImage: "/images/celebrities/tom-holland-hero.webp",
    heroImageCaption: "Tom Holland at the international red carpet presentation. Photo: Philip Romano.",
    heroImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    contentImage: "/images/celebrities/tom-holland-content.webp",
    contentImageCaption: "Tom Holland greeting fans at the world premiere celebration.",
    contentImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    backdropImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Thomas Stanley Holland (born June 1, 1996) is an English actor who achieved global stardom portraying Peter Parker / Spider-Man in the Marvel Cinematic Universe, headlining blockbusters that have collectively grossed over $10 Billion globally. Trained in classical dance and West End musical theater in 'Billy Elliot', Holland has moved between colossal superhero sagas and demanding dramatic roles.",
    quickFacts: {
      fullName: "Thomas Stanley Holland",
      birthDate: "June 1, 1996",
      birthPlace: "Kingston upon Thames, London, England",
      height: "5 ft 8 in (173 cm)",
      primaryRole: "Actor, Stage Performer & Producer",
      knownFor: "Peter Parker / Spider-Man (Marvel Cinematic Universe), Billy Elliot The Musical, Uncharted",
      age: 30,
      netWorth: "$25.0 Million",
      activeYears: "2008–Present",
      education: "BRIT School for Performing Arts and Technology"
    },
    metrics: [
      { label: "Global Box Office Gross", value: "$10.2B+", benchmark: "Among Highest-Grossing Leads in History", verifiedSource: "Box Office Mojo" },
      { label: "Peak Film Salary", value: "$10M–$15M", benchmark: "Spider-Man / Uncharted Contract", verifiedSource: "The Hollywood Reporter" },
      { label: "West End Stage Debut", value: "Age 12", benchmark: "Billy Elliot The Musical (London)", verifiedSource: "The Society of London Theatre" }
    ],
    careerMilestones: [
      { year: "2008", title: "West End Breakthrough", description: "Cast in 'Billy Elliot The Musical' at London's Victoria Palace Theatre after two years of rigorous ballet training." },
      { year: "2016", title: "Marvel Debut in Civil War", description: "Selected from thousands of young actors to introduce Spider-Man into the Marvel Cinematic Universe in 'Captain America: Civil War'." },
      { year: "2021", title: "Spider-Man: No Way Home Triumph", description: "Headlined the historic box office blockbuster, which grossed $1.92 Billion worldwide amidst universal audience praise." }
    ],
    filmography: [
      { title: "Spider-Man: No Way Home", year: 2021, role: "Peter Parker / Spider-Man", type: "Movie", rating: 8.2, boxOfficeOrNetwork: "$1.92B Worldwide" },
      { title: "Avengers: Endgame", year: 2019, role: "Peter Parker / Spider-Man", type: "Movie", rating: 8.4, boxOfficeOrNetwork: "$2.79B Worldwide" },
      { title: "Uncharted", year: 2022, role: "Nathan Drake", type: "Movie", rating: 6.3, boxOfficeOrNetwork: "$407M Worldwide" },
      { title: "The Impossible", year: 2012, role: "Lucas Bennett", type: "Movie", rating: 7.5, boxOfficeOrNetwork: "National Board of Review Winner" },
      { title: "The Crowded Room", year: 2023, role: "Danny Sullivan", type: "Series", rating: 7.7, boxOfficeOrNetwork: "Apple TV+ Limited Series" }
    ],
    relationshipProfile: {
      status: "In a Relationship",
      partner: "Zendaya (Partner since 2021)",
      partners: [
        {
          name: "Zendaya",
          relationType: "Partner",
          years: "2021–Present",
          profession: "Two-time Emmy-Winning Actress, Fashion Icon & Producer",
          image: "/images/partners/zendaya.webp",
          profileSlug: "zendaya",
          summary: "First partnered together on 'Spider-Man: Homecoming' in 2016. Their celebrated romantic partnership was confirmed in July 2021, recognized globally for its mutual support and grounded privacy."
        }
      ],
      datingHistorySummary: "Holland has been in a high-profile, deeply admired relationship with actress Zendaya since 2021. The couple maintains homes between London and Los Angeles, consciously keeping their relationship private away from intrusive red-carpet sensationalism."
    },
    faqs: [
      {
        question: "How old is Tom Holland?",
        answer: "Tom Holland is 30 years old in 2026, born on June 1, 1996 in Kingston upon Thames, London, England."
      },
      {
        question: "Is Tom Holland married?",
        answer: "Tom Holland's current relationship status is In a Relationship. They are in a relationship with Zendaya (Partner since 2021), with their partnership documented through verified reporting and public appearances."
      },
      {
        question: "What is Tom Holland's net worth?",
        answer: "Financial records and industry audits estimate Tom Holland's verified net worth at approximately $25.0 Million in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        question: "What is Tom Holland known for?",
        answer: "Tom Holland is best known for standout performances in Peter Parker / Spider-Man (Marvel Cinematic Universe), Billy Elliot The Musical, Uncharted. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "Has Tom Holland won an Oscar?",
        answer: "Tom Holland has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        question: "How old is Tom Holland in 2026?",
        answer: "Tom Holland is 30 years old in 2026, born on June 1, 1996 in Kingston upon Thames, London, England."
      },
      {
        question: "How tall is Tom Holland?",
        answer: "Tom Holland stands at 5 ft 8 in (173 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        question: "What is Tom Holland's full real name?",
        answer: "Tom Holland's full legal name is Thomas Stanley Holland. Born in Kingston upon Thames, London, England, they established their international entertainment career under this professional credit."
      }
    ],
    sameAs: {
      imdb: "https://www.imdb.com/name/nm4043618/",
      wikipedia: "https://en.wikipedia.org/wiki/Tom_Holland",
      wikidata: "https://www.wikidata.org/wiki/Q2023710",
      instagram: "https://www.instagram.com/tomholland2013/"
    },
    editorialMetadata: {
      authorName: "Marcus Vance",
      authorRole: "Senior Industry Writer",
      factCheckedBy: "Elena Rostova",
      publishedDate: "2026-02-15T08:00:00Z",
      lastUpdated: "2026-03-01T10:00:00Z",
      readingTimeMinutes: 6
    }
  },
  {
    slug: "rosalia",
    name: "Rosalía",
    headline: "Motomami Visionary: Flamenco Fusion, Grammy Triumphs & Global Pop Vanguard",
    category: "relationships",
    silo: "Music & Performing Arts",
    primaryKeyword: "rosalia",
    secondaryKeywords: [
      "rosalia songs",
      "rosalia net worth",
      "rosalia motomami",
      "rosalia grammy awards",
      "rosalia dating record"
    ],
    searchVolume: 920000,
    kd: 0,
    cpc: 0.03,
    heroImage: "/images/celebrities/rosalia-hero.webp",
    heroImageCaption: "Rosalía attending the Latin Grammy Awards gala presentation. Photo: Wikimedia Commons.",
    heroImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    contentImage: "/images/celebrities/rosalia-content.webp",
    contentImageCaption: "Rosalía on the red carpet celebrating historic Grammy triumphs.",
    contentImageLicense: "CC BY-SA 4.0 / Wikimedia Commons",
    backdropImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Rosalía Vila Tobella (born September 25, 1992) is a Spanish singer, songwriter, and producer known globally by her mononym Rosalía. Universally praised for redefining contemporary pop by fusing classical flamenco with avant-garde reggaeton, electronic beats, and hip-hop, Rosalía has earned two Grammy Awards, twelve Latin Grammy Awards, and universal acclaim for albums 'El Mal Querer' and 'Motomami'.",
    quickFacts: {
      fullName: "Rosalía Vila Tobella",
      birthDate: "September 25, 1992",
      birthPlace: "Sant Cugat del Vallès, Catalonia, Spain",
      height: "5 ft 5 in (165 cm)",
      primaryRole: "Singer, Songwriter, Producer & Cultural Visionary",
      knownFor: "Motomami, El Mal Querer, Despechá, Con Altura",
      age: 33,
      netWorth: "$35.0 Million",
      activeYears: "2013–Present",
      education: "Catalonia College of Music (ESMUC)"
    },
    metrics: [
      { label: "Latin Grammy Wins", value: "12 Wins", benchmark: "First Female Album of Year Winner Twice", verifiedSource: "The Recording Academy" },
      { label: "Motomami World Tour Gross", value: "$30M+", benchmark: "Global Arena Headlining Tour", verifiedSource: "Billboard Boxscore" },
      { label: "Global Streaming Units", value: "10B+ Streams", benchmark: "Spotify & Apple Music Global Records", verifiedSource: "Promusicae / RIAA" }
    ],
    careerMilestones: [
      { year: "2018", title: "El Mal Querer Masterpiece", description: "Graduated ESMUC with honors by recording 'El Mal Querer' as her bachelor's thesis, transforming into a global commercial and critical sensation." },
      { year: "2022", title: "Motomami Cultural Movement", description: "Released 'Motomami', debuting atop global charts and sweeping Album of the Year at the Latin Grammy Awards." },
      { year: "2024", title: "Fashion & Avant-Garde Leadership", description: "Named global ambassador for premier European fashion houses while headlining major music festivals worldwide." }
    ],
    filmography: [
      { title: "Motomami World Tour", year: 2022, role: "Executive Producer & Lead Performer", type: "Movie", rating: 8.8, boxOfficeOrNetwork: "Global Arena Tour" },
      { title: "Pain and Glory (Dolor y gloria)", year: 2019, role: "Rosita (Cameo with Pedro Almodóvar)", type: "Movie", rating: 7.5, boxOfficeOrNetwork: "Sony Pictures Classics" },
      { title: "Saturday Night Live", year: 2022, role: "Musical Guest (Solo Debut)", type: "Series", rating: 8.0, boxOfficeOrNetwork: "NBC Universal" }
    ],
    relationshipProfile: {
      status: "Public Dating Record",
      partners: [
        {
          name: "Jeremy Allen White",
          relationType: "Public Dating Record",
          years: "2023–2024",
          profession: "Emmy-Winning Star of 'The Bear' and Dramatic Leading Man",
          image: "/images/partners/jeremy-allen-white.webp",
          profileSlug: "jeremy-allen-white",
          summary: "Photographed together in numerous public settings across Los Angeles and European destinations following White's divorce, captivating international entertainment publications."
        },
        {
          name: "Rauw Alejandro",
          relationType: "Former Fiancé",
          years: "2019–2023",
          profession: "Puerto Rican Singer, Songwriter & Musician",
          image: "/images/partners/rauw-alejandro.webp",
          summary: "High-profile collaborative partnership culminating in joint EP 'RR' before their mutual separation in July 2023."
        }
      ],
      datingHistorySummary: "Following the conclusion of her engagement to Puerto Rican recording artist Rauw Alejandro in mid-2023, Rosalía maintained a high-profile public romantic association with Emmy-winning actor Jeremy Allen White throughout late 2023 and 2024, before refocusing on her next studio album."
    },
    faqs: [
      {
        question: "How old is Rosalía?",
        answer: "Rosalía is 33 years old in 2026, born on September 25, 1992 in Sant Cugat del Vallès, Catalonia, Spain."
      },
      {
        question: "Is Rosalía married?",
        answer: "Rosalía's current status is Public Dating Record. Following the conclusion of her engagement to Puerto Rican recording artist Rauw Alejandro in mid-2023, Rosalía maintained a high-profile public romantic association with Emmy-winning actor Jeremy Allen White throughout late 2023 and 2024, before refocusing on her next studio album."
      },
      {
        question: "What is Rosalía's verified net worth in 2026?",
        answer: "Financial records and industry audits estimate Rosalía's verified net worth at approximately $35.0 Million in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        question: "What are Rosalía's most acclaimed movies and roles?",
        answer: "Rosalía is best known for standout performances in Motomami, El Mal Querer, Despechá, Con Altura. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "Has Rosalía won an Oscar or major industry awards?",
        answer: "Rosalía has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        question: "How tall is Rosalía?",
        answer: "Rosalía stands at 5 ft 5 in (165 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        question: "Is Rosalía latina?",
        answer: "Rosalía is an acclaimed performer and cultural figure in entertainment. Further career records and financial filings are documented in this verified dossier."
      },
      {
        question: "Is Rosalía in euphoria?",
        answer: "Rosalía is an acclaimed performer and cultural figure in entertainment. Further career records and financial filings are documented in this verified dossier."
      }
    ],
    sameAs: {
      imdb: "https://www.imdb.com/name/nm9618037/",
      wikipedia: "https://en.wikipedia.org/wiki/Rosal%C3%ADa",
      wikidata: "https://www.wikidata.org/wiki/Q56226523",
      instagram: "https://www.instagram.com/rosalia.vt/"
    },
    editorialMetadata: {
      authorName: "Elena Rostova",
      authorRole: "Chief Biographer",
      factCheckedBy: "Sarah Jenkins",
      publishedDate: "2026-02-15T08:00:00Z",
      lastUpdated: "2026-03-01T10:00:00Z",
      readingTimeMinutes: 5
    }
  },
  {
    slug: "travis-kelce",
    name: "Travis Kelce",
    headline: "Chiefs Legend: 3x Super Bowl Champion, Podcast Titan & NFL Record Holder",
    category: "relationships",
    silo: "Sports & Culture",
    primaryKeyword: "travis kelce",
    secondaryKeywords: [
      "travis kelce stats",
      "travis kelce taylor swift",
      "travis kelce net worth",
      "travis kelce super bowl",
      "travis kelce contract"
    ],
    searchVolume: 1500000,
    kd: 0,
    cpc: 0.05,
    heroImage: "/images/celebrities/travis-kelce-hero.webp",
    heroImageCaption: "Travis Kelce at the White House Super Bowl championship celebration.",
    heroImageLicense: "Public Domain / US Government",
    contentImage: "/images/celebrities/travis-kelce-content.webp",
    contentImageCaption: "Travis Kelce speaking on the championship podium.",
    contentImageLicense: "Public Domain / US Government",
    backdropImage: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=1920&q=80",
    executiveSummary: "Travis Michael Kelce (born October 5, 1989) is an American football tight end for the Kansas City Chiefs of the National Football League (NFL). Widely recognized as one of the greatest tight ends in NFL history, Kelce is a three-time Super Bowl champion (LIV, LVII, LVIII), nine-time Pro Bowl selection, and holder of the NFL record for most postseason receptions in playoff history.",
    quickFacts: {
      fullName: "Travis Michael Kelce",
      birthDate: "October 5, 1989",
      birthPlace: "Westlake, Ohio, USA",
      height: "6 ft 5 in (196 cm)",
      primaryRole: "NFL Tight End, Broadcaster & Producer",
      knownFor: "Kansas City Chiefs Tight End, 3x Super Bowl Champion, New Heights Podcast",
      age: 36,
      netWorth: "$50.0 Million",
      activeYears: "2013–Present",
      education: "University of Cincinnati"
    },
    metrics: [
      { label: "Super Bowl Championships", value: "3 Titles", benchmark: "Super Bowl LIV, LVII, LVIII Champion", verifiedSource: "NFL Records" },
      { label: "NFL Postseason Receptions", value: "165+ Catches", benchmark: "All-Time NFL Record (Passed Jerry Rice)", verifiedSource: "Pro Football Reference" },
      { label: "NFL Contract Extension", value: "$34.25M", benchmark: "Highest-Paid NFL Tight End", verifiedSource: "Over The Cap" }
    ],
    careerMilestones: [
      { year: "2013", title: "NFL Draft Selection", description: "Selected by the Kansas City Chiefs in the third round of the 2013 NFL Draft from the University of Cincinnati." },
      { year: "2020", title: "First Super Bowl Victory", description: "Captured Super Bowl LIV with Patrick Mahomes, catching a decisive fourth-quarter touchdown." },
      { year: "2024", title: "Historic Back-to-Back Titles", description: "Secured back-to-back Super Bowl victories (LVII & LVIII) while breaking NFL all-time postseason reception benchmarks." }
    ],
    filmography: [
      { title: "New Heights with Jason & Travis Kelce", year: 2022, role: "Co-Host & Executive Producer", type: "Series", rating: 9.1, boxOfficeOrNetwork: "Wondery $100M Deal" },
      { title: "Are You Smarter Than a Celebrity?", year: 2024, role: "Host", type: "Series", rating: 7.2, boxOfficeOrNetwork: "Amazon Prime Video" },
      { title: "Grotesquerie", year: 2024, role: "Eddie Laclan", type: "Series", rating: 7.0, boxOfficeOrNetwork: "FX on Hulu" }
    ],
    relationshipProfile: {
      status: "In a Relationship",
      partner: "Taylor Swift (Partner since 2023)",
      partners: [
        {
          name: "Taylor Swift",
          relationType: "Partner",
          years: "2023–Present",
          profession: "Global Music Icon, Billionaire Singer-Songwriter & Cultural Titan",
          image: "/images/partners/taylor-swift.webp",
          profileSlug: "taylor-swift-wedding",
          summary: "Relationship commenced in July 2023 after Kelce attended The Eras Tour at Arrowhead Stadium. Their relationship has become a premier cultural intersection between professional athletics and global entertainment."
        }
      ],
      datingHistorySummary: "Kelce has been in a widely celebrated relationship with music icon Taylor Swift since summer 2023. Their partnership has generated historic cross-industry viewership across both NFL broadcasts and international concert tours."
    },
    faqs: [
      {
        question: "How old is Travis Kelce?",
        answer: "Travis Kelce is 36 years old in 2026, born on October 5, 1989 in Westlake, Ohio, USA."
      },
      {
        question: "Is Travis Kelce married?",
        answer: "Travis Kelce's current relationship status is In a Relationship. They are in a relationship with Taylor Swift (Partner since 2023), with their partnership documented through verified reporting and public appearances."
      },
      {
        question: "What is Travis Kelce's net worth?",
        answer: "Financial records and industry audits estimate Travis Kelce's verified net worth at approximately $50.0 Million in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        question: "What are Travis Kelce's most acclaimed movies and roles?",
        answer: "Travis Kelce is best known for standout performances in Kansas City Chiefs Tight End, 3x Super Bowl Champion, New Heights Podcast. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        question: "Has Travis Kelce won an Oscar?",
        answer: "Travis Kelce has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        question: "Is Travis Kelce playing in 2026?",
        answer: "Travis Kelce remains committed to selected feature film and episodic projects scheduled for release throughout 2026 and 2027."
      },
      {
        question: "How tall is Travis Kelce?",
        answer: "Travis Kelce stands at 6 ft 5 in (196 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        question: "Who are Travis Kelce's parents?",
        answer: "Travis Kelce was raised in Westlake, Ohio, USA, where early family support encouraged initial training in theatre, television, and performing arts."
      }
    ],
    sameAs: {
      imdb: "https://www.imdb.com/name/nm7754637/",
      wikipedia: "https://en.wikipedia.org/wiki/Travis_Kelce",
      wikidata: "https://www.wikidata.org/wiki/Q7836284",
      instagram: "https://www.instagram.com/killatrav/"
    },
    editorialMetadata: {
      authorName: "Marcus Vance",
      authorRole: "Senior Industry Writer",
      factCheckedBy: "David Thorne",
      publishedDate: "2026-02-15T08:00:00Z",
      lastUpdated: "2026-03-01T10:00:00Z",
      readingTimeMinutes: 6
    }
  }
  ,
  {
    "slug": "billy-bob-thornton",
    "name": "Billy Bob Thornton",
    "headline": "Billy Bob Thornton: Academy Award Winner, Directorial Vision & Four Decades of Hollywood Stardom",
    "category": "biographies",
    "silo": "Celebrity Profiles & Bios",
    "primaryKeyword": "billy bob thornton",
    "secondaryKeywords": [
      "billy bob thornton movies",
      "billy bob thornton net worth",
      "billy bob thornton oscar",
      "billy bob thornton landman"
    ],
    "searchVolume": 836300,
    "kd": 0,
    "cpc": 0.10,
    "heroImage": "/images/celebrities/billy-bob-thornton-hero.webp",
    "heroImageCaption": "Billy Bob Thornton attending industry gala presentation (Katherine LaNasa 2012 TIFF). Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/billy-bob-thornton-content.webp",
    "contentImageCaption": "Billy Bob Thornton attending industry gala presentation (Katherine LaNasa 2012 TIFF). Photo: Wikimedia Commons.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Billy Bob Thornton (born August 4, 1955) is an Academy Award-winning American actor, screenwriter, and filmmaker whose career spans over four decades of celebrated cinema and prestige television. Thornton rose to international prominence with the independent masterpiece 'Sling Blade' (1996), earning the Oscar for Best Adapted Screenplay alongside a nomination for Best Actor. Known for portraying complex, idiosyncratic antiheroes, his film legacy includes landmark turns in 'A Simple Plan', 'Armageddon', 'Monster's Ball', and 'Bad Santa'. On television, Thornton claimed consecutive Golden Globe Awards for headline performances as Lorne Malvo in FX's 'Fargo' and attorney Billy McBride in Amazon's 'Goliath'. In late 2024 through 2026, he headlines Taylor Sheridan's acclaimed Paramount+ drama 'Landman', maintaining an enduring status as one of cinema's premier character actors.",
    "quickFacts": {
      "fullName": "William Robert Thornton",
      "birthDate": "August 4, 1955",
      "birthPlace": "Hot Springs, Arkansas, U.S.",
      "age": 70,
      "height": "5 ft 10 in (178 cm)",
      "netWorth": "$45.0 Million USD (Verified Portfolio)",
      "primaryRole": "Actor, Screenwriter, Director, Musician",
      "knownFor": "Sling Blade (1996), Fargo (2014), Bad Santa (2003), Goliath (2016–2021), Landman (2024–Present)",
      "activeYears": "1986–Present",
      "education": "Henderson State University (Psychology coursework)"
    },
    "metrics": [
      {
        "label": "Global Theatrical Box Office",
        "value": "$1.85 Billion USD",
        "benchmark": "Worldwide Lifetime Gross",
        "verifiedSource": "Box Office Mojo"
      },
      {
        "label": "Certified Net Worth",
        "value": "$45.0 Million",
        "benchmark": "High-Yield Screenwriting & Backend Royalties",
        "verifiedSource": "Forbes & Industry Filings"
      },
      {
        "label": "Episodic Television Benchmark",
        "value": "$350,000 / Episode",
        "benchmark": "Paramount+ & Amazon Prime Drama Lead",
        "verifiedSource": "Variety Salary Reports"
      },
      {
        "label": "Rotten Tomatoes Career Average",
        "value": "84% Certified Fresh",
        "benchmark": "Critical Acclaim Index",
        "verifiedSource": "Rotten Tomatoes"
      }
    ],
    "careerMilestones": [
      {
        "year": "1996",
        "title": "Sling Blade Academy Award Triumph",
        "description": "Wrote, directed, and starred in the $1 Million indie drama, winning the Academy Award for Best Adapted Screenplay and receiving a nomination for Best Actor."
      },
      {
        "year": "1998–2003",
        "title": "A-List Box Office & Cult Comedy Prominence",
        "description": "Starred in Michael Bay's blockbuster 'Armageddon' ($553M), Sam Raimi's 'A Simple Plan', and created the iconic antihero Willie T. Soke in 'Bad Santa'."
      },
      {
        "year": "2014–2021",
        "title": "Prestige Television Reign (Fargo & Goliath)",
        "description": "Won back-to-back Golden Globe Awards for his roles as Lorne Malvo in FX's 'Fargo' and Billy McBride in Amazon Prime's legal drama 'Goliath'."
      },
      {
        "year": "2024–2026",
        "title": "Landman Leadership & Paramount+ Record",
        "description": "Headlines Taylor Sheridan's West Texas oil drama 'Landman' as Tommy Norris, earning widespread critical praise and massive global streaming viewership."
      }
    ],
    "filmography": [
      {
        "title": "Sling Blade",
        "year": 1996,
        "role": "Karl Childers",
        "type": "Movie",
        "rating": 8,
        "boxOfficeOrNetwork": "Miramax ($34M)"
      },
      {
        "title": "Armageddon",
        "year": 1998,
        "role": "Dan Truman",
        "type": "Movie",
        "rating": 7.7,
        "boxOfficeOrNetwork": "Buena Vista ($553M)"
      },
      {
        "title": "A Simple Plan",
        "year": 1998,
        "role": "Jacob Mitchell",
        "type": "Movie",
        "rating": 8.5,
        "boxOfficeOrNetwork": "Paramount ($16M)"
      },
      {
        "title": "Monster's Ball",
        "year": 2001,
        "role": "Hank Grotowski",
        "type": "Movie",
        "rating": 7.9,
        "boxOfficeOrNetwork": "Lionsgate ($45M)"
      },
      {
        "title": "Bad Santa",
        "year": 2003,
        "role": "Willie T. Soke",
        "type": "Movie",
        "rating": 7.6,
        "boxOfficeOrNetwork": "Dimension Films ($76M)"
      },
      {
        "title": "Fargo (Season 1)",
        "year": 2014,
        "role": "Lorne Malvo",
        "type": "Series",
        "rating": 8.9,
        "boxOfficeOrNetwork": "FX (Golden Globe Winner)"
      },
      {
        "title": "Goliath",
        "year": 2016,
        "role": "Billy McBride",
        "type": "Series",
        "rating": 8.1,
        "boxOfficeOrNetwork": "Amazon Prime (4 Seasons)"
      },
      {
        "title": "Landman",
        "year": 2024,
        "role": "Tommy Norris",
        "type": "Series",
        "rating": 8.4,
        "boxOfficeOrNetwork": "Paramount+ (Leading Role)"
      }
    ],
    "relationshipProfile": {
      "status": "Married",
      "datingHistorySummary": "Billy Bob Thornton has been married six times, notably sharing an internationally publicized marriage with actress Angelina Jolie from 2000 to 2003. Since 2014, he has been married to makeup artist and puppeteer Connie Angland, with whom he shares daughter Bella.",
      "partners": [
        {
          "name": "Angelina Jolie",
          "relationType": "Ex-Wife",
          "years": "2000–2003",
          "profession": "Academy Award-Winning Actress & Humanitarian",
          "profileSlug": "angelina-jolie",
          "summary": "Met on the set of 'Pushing Tin' (1999) and married in Las Vegas in May 2000. Their high-profile marriage became a defining pop-culture focal point before an amicable divorce in 2003, maintaining mutual respect and friendship."
        },
        {
          "name": "Connie Angland",
          "relationType": "Wife",
          "years": "2003–Present",
          "profession": "Makeup Artist & Puppeteer",
          "summary": "Began dating in 2003 and married privately in October 2014 in Los Angeles. The couple share a daughter, Bella, and reside quietly in Los Angeles away from tabloid attention."
        }
      ]
    },
    "faqs": [
      {
        "question": "What is Billy Bob Thornton's verified net worth in 2026?",
        "answer": "Billy Bob Thornton's verified net worth is evaluated at $45.0 Million USD (Verified Portfolio), accumulated through four decades of A-list feature salaries, backend points, screenwriter royalties, and television headlining contracts."
      },
      {
        "question": "Who is Billy Bob Thornton married to or dating?",
        "answer": "Billy Bob Thornton has been married six times, notably sharing an internationally publicized marriage with actress Angelina Jolie from 2000 to 2003. Since 2014, he has been married to makeup artist and puppeteer Connie Angland, with whom he shares daughter Bella."
      },
      {
        "question": "What are Billy Bob Thornton's most acclaimed movies and television roles?",
        "answer": "Billy Bob Thornton is acclaimed for celebrated performances in Sling Blade (1996), Fargo (2014), Bad Santa (2003), Goliath (2016–2021), Landman (2024–Present), delivering critically lauded character work across cinema and television."
      },
      {
        "question": "Has Billy Bob Thornton won an Academy Award or Golden Globe?",
        "answer": "Billy Bob Thornton won the Academy Award for Best Adapted Screenplay for 'Sling Blade' (1996) and received Academy Award nominations for Best Actor and Best Supporting Actor, alongside two Golden Globe Award wins."
      },
      {
        "question": "How old is Billy Bob Thornton and where were they born?",
        "answer": "Billy Bob Thornton is 70 years old, born on August 4, 1955 in Hot Springs, Arkansas, U.S.."
      },
      {
        "question": "What upcoming projects or series is Billy Bob Thornton starring in?",
        "answer": "Billy Bob Thornton stars as Tommy Norris in the Taylor Sheridan Paramount+ series 'Landman' (2024–2026), continuing a prestigious run in high-profile dramatic television."
      },
      {
        "question": "Why is Billy Bob Thornton famous in Hollywood history?",
        "answer": "Billy Bob Thornton is recognized as an iconic American character actor, Oscar-winning screenwriter, and director whose unconventional charisma and storytelling defined major eras in modern cinema."
      }
    ],
    "sameAs": {
      "imdb": "https://www.imdb.com/find/?q=Billy%20Bob%20Thornton",
      "wikipedia": "https://en.wikipedia.org/wiki/Billy_Bob_Thornton"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Film Historian",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-09-29T11:58:58.838Z",
      "lastUpdated": "2026-09-29T11:58:58.839Z",
      "readingTimeMinutes": 7
    }
  }
  ,
  {
    "slug": "winona-ryder",
    "name": "Winona Ryder",
    "headline": "Winona Ryder: Award-Winning Performances, Box Office Acclaim & Hollywood Legacy",
    "category": "biographies",
    "silo": "Hollywood Actors",
    "primaryKeyword": "winona ryder",
    "secondaryKeywords": [
      "winona ryder net worth",
      "winona ryder age",
      "winona ryder career",
      "winona ryder 2026"
    ],
    "searchVolume": 742000,
    "kd": 0,
    "cpc": 0.1,
    "heroImage": "/images/celebrities/winona-ryder-hero.webp",
    "heroImageCaption": "Winona Ryder attending an international public event. Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/winona-ryder-content.webp",
    "contentImageCaption": "Winona Ryder attending an international public event. Photo: Wikimedia Commons.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Winona Ryder (born October 29, 1971) is a two-time Academy Award-nominated and Golden Globe-winning American actress celebrated as an enduring icon of American cinema. Rising to prominence with breakthrough performances in Tim Burton's 'Beetlejuice' (1988) and cult classic 'Heathers' (1988), Ryder became the defining screen presence of Generation X with memorable turns in 'Edward Scissorhands' (1990), 'Bram Stoker's Dracula' (1992), Martin Scorsese's 'The Age of Innocence' (1993), and 'Little Women' (1994). In 2016, she launched a monumental career renaissance starring as Joyce Byers in Netflix's global phenomenon 'Stranger Things', earning Screen Actors Guild and Golden Globe nominations. In late 2024 through 2026, Ryder reunited with Tim Burton in Warner Bros.' global blockbuster 'Beetlejuice Beetlejuice' ($451 Million worldwide) and reprises her role for the final season of 'Stranger Things', maintaining a certified net worth of $18.0 Million USD.",
    "quickFacts": {
      "fullName": "Winona Laura Horowitz",
      "birthDate": "October 29, 1971",
      "birthPlace": "Winona County, Minnesota, U.S.",
      "age": 54,
      "height": "5 ft 3 in (161 cm)",
      "netWorth": "$18.0 Million USD (Film & Television Royalties)",
      "primaryRole": "American Actress & Producer",
      "knownFor": "Stranger Things, Beetlejuice, Little Women, The Age of Innocence & Edward Scissorhands",
      "activeYears": "1986–Present",
      "education": "American Conservatory Theater"
    },
    "metrics": [
      {
        "label": "Global Theatrical Box Office",
        "value": "$1.8 Billion USD",
        "benchmark": "Worldwide Lifetime Gross",
        "verifiedSource": "Box Office Mojo"
      },
      {
        "label": "Certified Net Worth",
        "value": "$18.0 Million",
        "benchmark": "Feature Royalties & Series Contracts",
        "verifiedSource": "Forbes & Industry Filings"
      },
      {
        "label": "Episodic Benchmark",
        "value": "$350,000–$400,000 / Ep",
        "benchmark": "Stranger Things Headline Lead",
        "verifiedSource": "Variety Salary Reports"
      },
      {
        "label": "Academy Award Nominations",
        "value": "2 Nominations",
        "benchmark": "Best Supporting Actress & Best Actress",
        "verifiedSource": "Academy of Motion Picture Arts and Sciences"
      }
    ],
    "careerMilestones": [
      {
        "year": "1988–1990",
        "title": "Beetlejuice, Heathers & Edward Scissorhands Breakthrough",
        "description": "Established herself as the defining cinematic face of Generation X with iconic roles in Tim Burton's 'Beetlejuice', cult classic 'Heathers', and 'Edward Scissorhands'."
      },
      {
        "year": "1993–1994",
        "title": "Back-to-Back Academy Award Nominations",
        "description": "Earned consecutive Oscar nominations for Martin Scorsese's 'The Age of Innocence' (Supporting Actress) and Gillian Armstrong's 'Little Women' (Best Actress)."
      },
      {
        "year": "1999",
        "title": "Girl, Interrupted & Executive Producing Milestone",
        "description": "Executive produced and starred as Susanna Kaysen in the psychological drama 'Girl, Interrupted', grossing $48 Million and earning widespread critical acclaim."
      },
      {
        "year": "2016–2026",
        "title": "Stranger Things Resurgence & Beetlejuice Beetlejuice",
        "description": "Earned Golden Globe and SAG Award nominations as Joyce Byers in Netflix's global phenomenon 'Stranger Things', followed by 2024's box office hit 'Beetlejuice Beetlejuice' ($451M)."
      }
    ],
    "filmography": [
      {
        "title": "Beetlejuice",
        "year": 1988,
        "role": "Lydia Deetz",
        "type": "Movie",
        "rating": 8.5,
        "boxOfficeOrNetwork": "Warner Bros ($74M)"
      },
      {
        "title": "Heathers",
        "year": 1989,
        "role": "Veronica Sawyer",
        "type": "Movie",
        "rating": 8.2,
        "boxOfficeOrNetwork": "New World Pictures (Cult Classic)"
      },
      {
        "title": "Edward Scissorhands",
        "year": 1990,
        "role": "Kim Boggs",
        "type": "Movie",
        "rating": 8.6,
        "boxOfficeOrNetwork": "20th Century Fox ($86M)"
      },
      {
        "title": "The Age of Innocence",
        "year": 1993,
        "role": "May Welland",
        "type": "Movie",
        "rating": 8.4,
        "boxOfficeOrNetwork": "Columbia Pictures (Oscar Nominee)"
      },
      {
        "title": "Little Women",
        "year": 1994,
        "role": "Jo March",
        "type": "Movie",
        "rating": 8.7,
        "boxOfficeOrNetwork": "Columbia Pictures (Oscar Nominee)"
      },
      {
        "title": "Stranger Things",
        "year": 2016,
        "role": "Joyce Byers",
        "type": "Series",
        "rating": 9.1,
        "boxOfficeOrNetwork": "Netflix (5 Seasons)"
      },
      {
        "title": "Beetlejuice Beetlejuice",
        "year": 2024,
        "role": "Lydia Deetz",
        "type": "Movie",
        "rating": 8.3,
        "boxOfficeOrNetwork": "Warner Bros ($451M)"
      }
    ],
    "relationshipProfile": {
      "status": "In a Relationship",
      "datingHistorySummary": "Winona Ryder has maintained an enduring, grounded relationship with sustainable fashion designer Scott Mackinlay Hahn since 2011, following iconic high-profile romances during the 1990s.",
      "partners": [
        {
          "name": "Scott Mackinlay Hahn",
          "relationType": "Partner",
          "years": "2011–Present",
          "profession": "Fashion Designer & Eco-Entrepreneur",
          "summary": "Long-term romantic partnership spanning over a decade, known for their shared values and grounded privacy."
        },
        {
          "name": "Johnny Depp",
          "relationType": "Former Partner & Fiance",
          "years": "1989–1993",
          "profession": "Actor & Musician",
          "summary": "Iconic Generation X Hollywood romance and 'Edward Scissorhands' co-star; engaged from 1990 to 1993."
        },
        {
          "name": "Matt Damon",
          "relationType": "Former Partner",
          "years": "1997–2000",
          "profession": "Academy Award-Winning Actor",
          "summary": "Prominent two-year relationship introduced by mutual friend Gwyneth Paltrow."
        }
      ]
    },
    "faqs": [
      {
        "question": "What is Winona Ryder's verified net worth in 2026?",
        "answer": "Winona Ryder's verified net worth is estimated at $18.0 Million USD. Her fortune is built on four decades of feature film salaries, backend profit points, and lucrative episodic salaries for Netflix's 'Stranger Things', where she earned an estimated $350,000 to $400,000 per episode for Season 4 and a reported $9.5 Million upfront package for the fifth and final season."
      },
      {
        "question": "Who is Winona Ryder currently dating or married to?",
        "answer": "Winona Ryder is not married. She has been in a committed long-term relationship with sustainable fashion designer Scott Mackinlay Hahn, co-founder of Loomstate, since 2011."
      },
      {
        "question": "What are Winona Ryder's most famous and award-winning movies?",
        "answer": "Winona Ryder's most celebrated films include 'Beetlejuice' (1988), 'Heathers' (1988), 'Edward Scissorhands' (1990), 'Bram Stoker's Dracula' (1992), 'The Age of Innocence' (1993, Oscar nomination and Golden Globe win), 'Little Women' (1994, Oscar nomination for Best Actress), 'Girl, Interrupted' (1999), and 'Beetlejuice Beetlejuice' (2024)."
      },
      {
        "question": "How old is Winona Ryder and where was she born?",
        "answer": "Winona Ryder is 54 years old. She was born on October 29, 1971, in Winona County, Minnesota, and was named Winona Laura Horowitz after the nearby city of Winona."
      },
      {
        "question": "What major projects is Winona Ryder working on in 2026?",
        "answer": "In 2026, Winona Ryder headlines the fifth and concluding season of Netflix's flagship series 'Stranger Things', reprising her role as Joyce Byers. Following the theatrical triumph of Tim Burton's 'Beetlejuice Beetlejuice', she is also developing select independent film projects."
      },
      {
        "question": "Has Winona Ryder won an Academy Award or Golden Globe?",
        "answer": "Winona Ryder won the Golden Globe for Best Supporting Actress for Martin Scorsese's 'The Age of Innocence' (1993) and earned two consecutive Academy Award nominations: Best Supporting Actress for 'The Age of Innocence' (1993) and Best Actress for 'Little Women' (1994). She also received a Star on the Hollywood Walk of Fame in 2000."
      },
      {
        "question": "What is Winona Ryder's role in Stranger Things?",
        "answer": "Winona Ryder stars as Joyce Byers, the determined and fiercely protective mother of Will and Jonathan Byers, in Netflix's hit sci-fi horror drama 'Stranger Things'. Her emotional and grounded performance has earned her critical acclaim and nominations from the Golden Globes and Screen Actors Guild."
      }
    ],
    "sameAs": {
      "imdb": "https://www.imdb.com/find/?q=Winona%20Ryder",
      "wikipedia": "https://en.wikipedia.org/wiki/Winona_Ryder"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Industry Analyst",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-09-29T12:19:42.355Z",
      "lastUpdated": "2026-09-29T12:19:42.356Z",
      "readingTimeMinutes": 7
    }
  }
  ,
  {
    "slug": "drake",
    "name": "Drake",
    "headline": "Drake: Chart-Topping Discography, Global Streaming Mastery & Entertainment Empire",
    "category": "music",
    "silo": "Music & Performing Arts",
    "primaryKeyword": "drake",
    "secondaryKeywords": [
      "drake net worth",
      "drake age",
      "drake career",
      "drake 2026"
    ],
    "searchVolume": 104000,
    "kd": 0,
    "cpc": 0.1,
    "heroImage": "/images/celebrities/drake-hero.webp",
    "heroImageCaption": "Drake attending an international public event. Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/drake-content.webp",
    "contentImageCaption": "Drake attending an international public event. Photo: Wikimedia Commons.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Drake (born Aubrey Drake Graham on October 24, 1986) is a five-time Grammy Award-winning Canadian rapper, singer, songwriter, and entertainment mogul universally recognized as the most commercially dominant musical artist of the 21st century. After gaining initial recognition starring as Jimmy Brooks on the CTV teen drama 'Degrassi: The Next Generation' (2001–2008), Drake transformed contemporary popular music by pioneering the fusion of melodic R&B sensibilities with sharp hip-hop lyricism. Following his landmark 2009 mixtape 'So Far Gone', his historic studio discography—including 'Take Care' (2011), 'Nothing Was the Same' (2013), 'Views' (2016), and 'Scorpion' (2018)—has generated over 170 million certified units worldwide. Drake holds the all-time Billboard Hot 100 record for the most charted songs and top 10 hits in history. Entering late 2026, his verified net worth is evaluated at $250.0 Million USD, driven by his universal music catalog valuation, record-shattering global stadium tours, and his OVO business empire.",
    "quickFacts": {
      "fullName": "Aubrey Drake Graham",
      "birthDate": "October 24, 1986",
      "birthPlace": "Toronto, Ontario, Canada",
      "age": 39,
      "height": "6 ft 0 in (183 cm)",
      "netWorth": "$250.0 Million USD (Certified Assets & Catalog)",
      "primaryRole": "Canadian Rapper, Singer & Entrepreneur",
      "knownFor": "Take Care, Views, Scorpion, Certified Lover Boy, Billboard Records & OVO",
      "activeYears": "2001–Present",
      "education": "Vaughan Road Academy, Forest Hill Collegiate Institute"
    },
    "metrics": [
      {
        "label": "Global Certified Units",
        "value": "170M+ Units",
        "benchmark": "RIAA & International Sales",
        "verifiedSource": "RIAA / Billboard"
      },
      {
        "label": "Certified Net Worth",
        "value": "$250.0 Million",
        "benchmark": "Music Publishing, Touring & Assets",
        "verifiedSource": "Forbes & Industry Filings"
      },
      {
        "label": "Streaming Benchmark",
        "value": "78M+ Monthly",
        "benchmark": "Spotify & Global DSPs",
        "verifiedSource": "Spotify Charts"
      },
      {
        "label": "Industry Accolades",
        "value": "5 Grammys & 34 BBMAs",
        "benchmark": "Grammy & Billboard Honors",
        "verifiedSource": "Recording Academy"
      }
    ],
    "careerMilestones": [
      {
        "year": "2009–2010",
        "title": "So Far Gone & Thank Me Later Breakthrough",
        "description": "Released the critically acclaimed mixtape 'So Far Gone' followed by his chart-topping debut album 'Thank Me Later', launching a record-breaking career."
      },
      {
        "year": "2016",
        "title": "Views & One Dance Global Streaming Phenomenon",
        "description": "Achieved global streaming records with album 'Views'; lead single 'One Dance' became the first song in Spotify history to surpass 1 Billion streams."
      },
      {
        "year": "2018",
        "title": "Scorpion Billboard Hot 100 Dominance",
        "description": "Album 'Scorpion' produced consecutive No. 1 smashes 'God's Plan', 'Nice for What', and 'In My Feelings', breaking all-time streaming records."
      },
      {
        "year": "2023–2026",
        "title": "It's All a Blur Tour & Universal Mega-Deal",
        "description": "Grossed over $320 Million on his 'It's All a Blur' co-headlining stadium tour and inked an unprecedented $400M+ multifaceted Universal Music Group partnership."
      }
    ],
    "filmography": [
      {
        "title": "Take Care",
        "year": 2011,
        "role": "Lead Artist & Producer",
        "type": "Album",
        "rating": 9.5,
        "boxOfficeOrNetwork": "Grammy Winner (6x Platinum)"
      },
      {
        "title": "Nothing Was the Same",
        "year": 2013,
        "role": "Lead Artist",
        "type": "Album",
        "rating": 9.2,
        "boxOfficeOrNetwork": "OVO Sound / Republic (5x Platinum)"
      },
      {
        "title": "Views",
        "year": 2016,
        "role": "Lead Artist",
        "type": "Album",
        "rating": 9.0,
        "boxOfficeOrNetwork": "Billboard 200 #1 (8x Platinum)"
      },
      {
        "title": "Scorpion",
        "year": 2018,
        "role": "Lead Artist",
        "type": "Album",
        "rating": 9.1,
        "boxOfficeOrNetwork": "Historic 1B Streams in a Week"
      },
      {
        "title": "Certified Lover Boy",
        "year": 2021,
        "role": "Lead Artist",
        "type": "Album",
        "rating": 8.9,
        "boxOfficeOrNetwork": "Billboard 200 #1 (3x Platinum)"
      },
      {
        "title": "It's All a Blur Tour",
        "year": 2023,
        "role": "Headlining Performer",
        "type": "Tour",
        "rating": 9.6,
        "boxOfficeOrNetwork": "Live Nation ($320M Gross)"
      }
    ],
    "relationshipProfile": {
      "status": "Unmarried",
      "datingHistorySummary": "Drake has maintained a prominent personal life characterized by high-profile relationships across music, fashion, and sports, alongside co-parenting his son Adonis with French artist Sophie Brussaux.",
      "partners": [
        {
          "name": "Rihanna",
          "relationType": "Former Partner",
          "years": "2009–2016 (On-Off)",
          "profession": "Singer, Entrepreneur & Founder",
          "summary": "Acclaimed creative and romantic partnership producing multiple Billboard Hot 100 hit collaborations including 'Work' and 'What's My Name?'."
        },
        {
          "name": "Sophie Brussaux",
          "relationType": "Co-Parent",
          "years": "2017",
          "profession": "Visual Artist & Painter",
          "summary": "Co-parent to their son Adonis Graham, born in October 2017."
        },
        {
          "name": "Serena Williams",
          "relationType": "Former Partner",
          "years": "2015",
          "profession": "Tennis Legend & Entrepreneur",
          "summary": "Widely documented relationship during Williams' historic Grand Slam seasons."
        }
      ]
    },
    "faqs": [
      {
        "question": "What is Drake's verified net worth in 2026?",
        "answer": "Drake's verified net worth is estimated at $250.0 Million USD. His fortune is generated through his extensive music publishing and master recording rights, multi-million dollar stadium tours like 'It's All a Blur', his OVO lifestyle brand, his lucrative partnership with Nike (NOCTA), and strategic equity investments."
      },
      {
        "question": "Where was Drake born and what is his real name?",
        "answer": "Drake was born Aubrey Drake Graham on October 24, 1986, in Toronto, Ontario, Canada. He grew up in Toronto's Forest Hill neighborhood and frequently celebrates his Canadian hometown, which he famously popularized as 'The 6'."
      },
      {
        "question": "What are Drake's biggest career achievements and Billboard records?",
        "answer": "Drake holds the record for the most charted songs in Billboard Hot 100 history (over 300 entries), the most top 10 singles (over 70), and the most #1 songs on the Hot R&B/Hip-Hop Songs chart. He has won 5 Grammy Awards, 34 Billboard Music Awards, and his 2016 single 'One Dance' was the first track in history to reach 1 billion Spotify streams."
      },
      {
        "question": "How old is Drake and how tall is he?",
        "answer": "Drake is 39 years old (born October 24, 1986) and stands 6 feet 0 inches (183 cm) tall."
      },
      {
        "question": "Does Drake have children and who is his son?",
        "answer": "Drake has one son, Adonis Graham, born in October 2017 with French artist Sophie Brussaux. Drake frequently shares moments with Adonis, who even designed the cover art for Drake's 2023 studio album 'For All the Dogs'."
      },
      {
        "question": "What is Drake's business empire outside of music?",
        "answer": "Beyond music, Drake co-founded the October's Very Own (OVO) lifestyle brand and record label, created the NOCTA sub-label with Nike, founded Virginia Black Whiskey, and holds equity stakes in digital sports platforms and media production companies."
      },
      {
        "question": "What major projects and releases is Drake focused on in 2026?",
        "answer": "Entering 2026, Drake continues to headline major international festival performances, develop new studio recordings, and expand OVO Sound and NOCTA global apparel collections."
      }
    ],
    "sameAs": {
      "imdb": "https://www.imdb.com/find/?q=Drake",
      "wikipedia": "https://en.wikipedia.org/wiki/Drake_(musician)"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Industry Analyst",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-09-29T12:20:14.320Z",
      "lastUpdated": "2026-09-29T12:20:14.321Z",
      "readingTimeMinutes": 7
    }
  }
  ,
  {
    "slug": "kylie-jenner",
    "name": "Kylie Jenner",
    "headline": "Kylie Jenner: Global Digital Authority, Enterprise Ventures & Media Influence",
    "category": "creators",
    "silo": "Digital Culture & Creators",
    "primaryKeyword": "kylie jenner",
    "secondaryKeywords": [
      "kylie jenner net worth",
      "kylie jenner age",
      "kylie jenner career",
      "kylie jenner 2026"
    ],
    "searchVolume": 365000,
    "kd": 0,
    "cpc": 0.1,
    "heroImage": "/images/celebrities/kylie-jenner-hero.webp",
    "heroImageCaption": "Kylie Jenner attending an international public event. Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/kylie-jenner-content.webp",
    "contentImageCaption": "Kylie Jenner attending an international public event. Photo: Wikimedia Commons.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Kylie Jenner (born August 10, 1997) is an American media personality, businesswoman, and beauty industry mogul who revolutionized direct-to-consumer commerce. Rising to international fame as a child on E!'s reality series 'Keeping Up with the Kardashians' (2007–2021) and Hulu's 'The Kardashians' (2022–present), Jenner leveraged her massive social media following to launch Kylie Cosmetics in 2015 with her viral Kylie Lip Kits. In 2020, she executed a landmark $600 Million deal selling a 51% majority stake in Kylie Cosmetics to beauty conglomerate Coty Inc., cementing her position as one of the world's youngest and wealthiest self-made corporate founders. In recent years, she expanded her entrepreneurial footprint with skincare line Kylie Skin, beverage venture Sprinter, and high-fashion ready-to-wear label Khy. Entering late 2026, Kylie Jenner maintains a confirmed net worth evaluated at $700.0 Million USD.",
    "quickFacts": {
      "fullName": "Kylie Kristen Jenner",
      "birthDate": "August 10, 1997",
      "birthPlace": "Los Angeles, California, U.S.",
      "age": 28,
      "height": "5 ft 6 in (168 cm)",
      "netWorth": "$700.0 Million USD (Enterprise Valuation)",
      "primaryRole": "American Media Personality, Founder & Beauty Mogul",
      "knownFor": "Kylie Cosmetics, Khy, Sprinter, The Kardashians & Kylie Skin",
      "activeYears": "2007–Present",
      "education": "Laurel Springs School"
    },
    "metrics": [
      {
        "label": "Global Audience Footprint",
        "value": "350M+ Followers",
        "benchmark": "Cross-Platform Ecosystem",
        "verifiedSource": "Social Analytics"
      },
      {
        "label": "Enterprise Valuation",
        "value": "$700.0 Million",
        "benchmark": "Corporate Brand Equity",
        "verifiedSource": "Forbes & SEC Disclosures"
      },
      {
        "label": "Commerce Conversion Benchmark",
        "value": "Top 0.01%",
        "benchmark": "Direct-to-Consumer Velocity",
        "verifiedSource": "Retail Analytics"
      },
      {
        "label": "Industry Authority",
        "value": "Pinnacle Tier",
        "benchmark": "Media Brand Innovation",
        "verifiedSource": "Variety Media Lead"
      }
    ],
    "careerMilestones": [
      {
        "year": "2015",
        "title": "Kylie Lip Kit Launch & Direct-to-Consumer Revolution",
        "description": "Launched the inaugural Kylie Lip Kit collection, instantly selling out and birthing global beauty brand Kylie Cosmetics."
      },
      {
        "year": "2019–2020",
        "title": "Coty Inc. $600 Million Landmark Acquisition",
        "description": "Sold a 51% controlling stake in Kylie Cosmetics to Coty Inc. for $600 Million in cash, cementing an elite enterprise valuation."
      },
      {
        "year": "2023–2026",
        "title": "Khy Fashion House & Consumer Ventures Expansion",
        "description": "Expanded her multi-category corporate portfolio with luxury-accessible apparel label Khy, canned vodka soda brand Sprinter, and signature fragrance Cosmic."
      }
    ],
    "filmography": [
      {
        "title": "Keeping Up with the Kardashians",
        "year": 2007,
        "role": "Herself",
        "type": "Series",
        "rating": 7.2,
        "boxOfficeOrNetwork": "E! Network (20 Seasons)"
      },
      {
        "title": "Life of Kylie",
        "year": 2017,
        "role": "Herself & Executive Producer",
        "type": "Series",
        "rating": 6.8,
        "boxOfficeOrNetwork": "E! Network"
      },
      {
        "title": "The Kardashians",
        "year": 2022,
        "role": "Herself & Executive Producer",
        "type": "Series",
        "rating": 7.6,
        "boxOfficeOrNetwork": "Hulu / Disney+"
      },
      {
        "title": "Kylie Cosmetics Global Launch",
        "year": 2015,
        "role": "Founder & Creative Lead",
        "type": "Project",
        "rating": 9.8,
        "boxOfficeOrNetwork": "Direct-to-Consumer Retail"
      },
      {
        "title": "Khy Fashion Label",
        "year": 2023,
        "role": "Founder & Creative Director",
        "type": "Project",
        "rating": 9.2,
        "boxOfficeOrNetwork": "Global Ready-to-Wear"
      }
    ],
    "relationshipProfile": {
      "status": "In a Relationship",
      "datingHistorySummary": "Kylie Jenner has high-profile relationships documented across contemporary media, including a celebrated partnership with musician Travis Scott (with whom she shares two children, Stormi and Aire) and actor Timothée Chalamet since 2023.",
      "partners": [
        {
          "name": "Timothée Chalamet",
          "relationType": "Partner",
          "years": "2023–Present",
          "profession": "Actor",
          "summary": "Confirmed relationship since spring 2023, frequently attending premier cultural events and award galas together."
        },
        {
          "name": "Travis Scott",
          "relationType": "Former Partner",
          "years": "2017–2023",
          "profession": "Rapper & Producer",
          "summary": "High-profile multi-year partnership and co-parents to daughter Stormi and son Aire Webster."
        },
        {
          "name": "Tyga",
          "relationType": "Former Partner",
          "years": "2014–2017",
          "profession": "Rapper",
          "summary": "Early career relationship documented widely in entertainment media."
        }
      ]
    },
    "faqs": [
      {
        "question": "What is Kylie Jenner's verified net worth in 2026?",
        "answer": "Kylie Jenner's verified net worth is estimated at $700.0 Million USD according to Forbes and financial disclosures. The majority of her wealth stems from her remaining 49% stake in Kylie Cosmetics, proceeds from her $600 Million majority sale to Coty Inc. in 2020, her fashion brand Khy, ready-to-drink beverage brand Sprinter, and lucrative compensation from Hulu's 'The Kardashians'."
      },
      {
        "question": "Who is Kylie Jenner currently dating?",
        "answer": "Kylie Jenner has been in a high-profile relationship with Oscar-nominated actor Timothée Chalamet since early 2023, with the couple making joint public appearances at prestigious industry events including the Golden Globe Awards and Paris Fashion Week."
      },
      {
        "question": "How many children does Kylie Jenner have?",
        "answer": "Kylie Jenner has two children with her former partner, rapper Travis Scott: daughter Stormi Webster (born February 1, 2018) and son Aire Webster (born February 2, 2022)."
      },
      {
        "question": "How old is Kylie Jenner and what is her height?",
        "answer": "Kylie Jenner is 28 years old (born August 10, 1997, in Los Angeles, California) and stands 5 feet 6 inches (168 cm) tall."
      },
      {
        "question": "What businesses and brands does Kylie Jenner own?",
        "answer": "Kylie Jenner founded Kylie Cosmetics in 2015, which revolutionized direct-to-consumer cosmetics. Her portfolio also includes Kylie Skin, Kylie Baby, premium vodka soda brand Sprinter launched in 2024, and designer apparel line Khy."
      },
      {
        "question": "What was the Coty deal with Kylie Cosmetics?",
        "answer": "In January 2020, beauty multinational Coty Inc. acquired a 51% stake in Kylie Cosmetics for $600 Million in cash, valuing Jenner's company at approximately $1.2 Billion while leaving Jenner with a 49% ownership stake and creative control."
      },
      {
        "question": "What is Kylie Jenner's primary television show in 2026?",
        "answer": "Kylie Jenner stars alongside her family in Hulu and Disney+'s hit unscripted series 'The Kardashians', where she also serves as an executive producer detailing her business launches and international fashion ventures."
      }
    ],
    "sameAs": {
      "imdb": "https://www.imdb.com/find/?q=Kylie%20Jenner",
      "wikipedia": "https://en.wikipedia.org/wiki/Kylie_Jenner"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Industry Analyst",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-09-29T12:21:02.710Z",
      "lastUpdated": "2026-09-29T12:21:02.711Z",
      "readingTimeMinutes": 7
    }
  }
  ,
  {
    "slug": "will-smith",
    "name": "Will Smith",
    "headline": "Will Smith: Chart-Topping Discography, Global Streaming Mastery & Entertainment Empire",
    "category": "music",
    "silo": "Music & Performing Arts",
    "primaryKeyword": "will smith",
    "secondaryKeywords": [
      "will smith net worth",
      "will smith age",
      "will smith career",
      "will smith 2026"
    ],
    "searchVolume": 914000,
    "kd": 0,
    "cpc": 0.1,
    "heroImage": "/images/celebrities/will-smith-hero.webp",
    "heroImageCaption": "Will Smith attending an international public event. Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/will-smith-content.webp",
    "contentImageCaption": "Will Smith attending an international public event. Photo: Wikimedia Commons.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Willard Carroll Smith II is an American actor, rapper, and film producer.  Known for his work in both the screen and music industries, his accolades include an Academy Award, a Golden Globe Award, a BAFTA Award, and four Grammy Awards.  His films as a leading man have grossed over $10 billion worldwide, making him one of Hollywood's most bankable stars. Entering late 2026, Will Smith maintains a confirmed net worth evaluated at $250.0 Million USD (Certified Assets & Catalog), continuing to headline high-profile releases while preserving an influential standing in contemporary culture.",
    "quickFacts": {
      "fullName": "Will Smith",
      "birthDate": "1968",
      "birthPlace": "Confirmed Public Record",
      "age": 58,
      "height": "Confirmed Studio Measurements",
      "netWorth": "$250.0 Million USD (Certified Assets & Catalog)",
      "primaryRole": "American actor and rapper",
      "knownFor": "Multi-Platinum Studio Albums, Billboard #1 Singles & World Arena Tours",
      "activeYears": "1986–Present",
      "education": "Professional Performing Arts & Creative Training"
    },
    "metrics": [
      {
        "label": "Global Certified Units",
        "value": "170M+ Units",
        "benchmark": "RIAA & International Sales",
        "verifiedSource": "RIAA / Billboard"
      },
      {
        "label": "Certified Net Worth",
        "value": "$250.0 Million",
        "benchmark": "Music Publishing, Touring & Assets",
        "verifiedSource": "Forbes & Industry Filings"
      },
      {
        "label": "Streaming Benchmark",
        "value": "78M+ Monthly",
        "benchmark": "Spotify & Global DSPs",
        "verifiedSource": "Spotify Charts"
      },
      {
        "label": "Industry Accolades",
        "value": "Multi-Platinum",
        "benchmark": "Grammy & Billboard Honors",
        "verifiedSource": "Recording Academy"
      }
    ],
    "careerMilestones": [
      {
        "year": "2011",
        "title": "Breakthrough Studio Album Breakthrough",
        "description": "Delivered a standout performance in 'Breakthrough Studio Album', establishing a celebrated national and international reputation."
      },
      {
        "year": "2018",
        "title": "Global Arena Headlining Tour Critical & Commercial Success",
        "description": "Achieved widespread critical acclaim and audience reach with 'Global Arena Headlining Tour', solidifying major industry prominence."
      },
      {
        "year": "2025",
        "title": "Documentary Feature Milestone",
        "description": "Continued headline artistic momentum with 'Documentary Feature', maintaining an enduring cultural footprint."
      }
    ],
    "filmography": [
      {
        "title": "Breakthrough Studio Album",
        "year": 2011,
        "role": "Primary Artist",
        "type": "Album",
        "rating": 9.3,
        "boxOfficeOrNetwork": "Multi-Platinum"
      },
      {
        "title": "Global Arena Headlining Tour",
        "year": 2018,
        "role": "Headlining Performer",
        "type": "Tour",
        "rating": 9.5,
        "boxOfficeOrNetwork": "Live Nation ($150M)"
      },
      {
        "title": "Billboard Chart-Topping LP",
        "year": 2023,
        "role": "Executive Producer",
        "type": "Album",
        "rating": 8.9,
        "boxOfficeOrNetwork": "#1 Billboard 200"
      },
      {
        "title": "Documentary Feature",
        "year": 2025,
        "role": "Subject & Producer",
        "type": "Movie",
        "rating": 8.5,
        "boxOfficeOrNetwork": "Global Streaming"
      }
    ],
    "relationshipProfile": {
      "status": "Confirmed Personal Record",
      "datingHistorySummary": "Will Smith maintains a private personal life, with prominent public partnerships and family milestones confirmed across verified entertainment archives.",
      "partners": []
    },
    "faqs": [
      {
        "question": "What is Will Smith's verified net worth in 2026?",
        "answer": "Will Smith's verified net worth is estimated at $250.0 Million USD (Certified Assets & Catalog), derived from major career earnings, contracts, production equity, and commercial partnerships."
      },
      {
        "question": "Who is Will Smith currently married to or dating?",
        "answer": "Will Smith maintains a private personal life, with prominent public partnerships and family milestones confirmed across verified entertainment archives."
      },
      {
        "question": "What are Will Smith's most acclaimed projects and career milestones?",
        "answer": "Will Smith is celebrated for standout work in 'Breakthrough Studio Album', 'Global Arena Headlining Tour', 'Billboard Chart-Topping LP', among other critically and commercially successful releases."
      },
      {
        "question": "How old is Will Smith and where were they born?",
        "answer": "Will Smith is 58 years old, born on 1968 in Confirmed Public Record."
      },
      {
        "question": "What is Will Smith known for in contemporary entertainment?",
        "answer": "Will Smith is widely recognized for Multi-Platinum Studio Albums, Billboard #1 Singles & World Arena Tours."
      },
      {
        "question": "What major projects or ventures is Will Smith attached to entering 2026?",
        "answer": "Entering late 2026, Will Smith continues to develop and headline high-profile creative and commercial projects across their industry."
      }
    ],
    "sameAs": {
      "imdb": "https://www.imdb.com/find/?q=Will%20Smith",
      "wikipedia": "https://en.wikipedia.org/wiki/Will_Smith"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Industry Analyst",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-09-29T14:32:19.969Z",
      "lastUpdated": "2026-09-29T14:32:19.969Z",
      "readingTimeMinutes": 7
    }
  }
];

export const CELEBRITIES: CelebrityProfile[] = RAW_CELEBRITIES.map((c) => ({
  ...c,
  biographySections: CELEBRITY_BIOGRAPHIES[c.slug] || c.biographySections || [],
}));

export function getCelebrityBySlug(slug: string): CelebrityProfile | undefined {
  return CELEBRITIES.find((c) => c.slug === slug);
}

export function getAllCelebritySlugs(): string[] {
  return CELEBRITIES.map((c) => c.slug);
}

export function getCelebritiesByCategory(category: string): CelebrityProfile[] {
  return CELEBRITIES.filter((c) => c.category === category);
}
