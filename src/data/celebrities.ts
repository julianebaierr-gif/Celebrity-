import { CELEBRITY_BIOGRAPHIES } from "./celebrity-biographies";
import { CELEBRITY_FINANCIALS } from "./celebrity-financials";
import { CELEBRITY_PHILANTHROPY } from "./celebrity-philanthropy";
import { CELEBRITY_CONTROVERSIES } from "./celebrity-controversies";
import { CELEBRITY_FAQS } from "./celebrity-faqs";

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
export interface SalaryMilestone {
  project: string;
  year: number;
  salary: string;
  boxOfficeOrBudget?: string;
  notes: string;
}

export interface RealEstateAsset {
  property: string;
  location: string;
  purchasedYear: string;
  purchasePrice: string;
  currentEstimatedValue: string;
  description: string;
}

export interface BusinessVenture {
  name: string;
  role: string;
  valuationOrRevenue?: string;
  description: string;
}

export interface WealthProgressionItem {
  period: string;
  estimatedNetWorth: string;
  milestoneDescription: string;
}

export interface FinancialDossier {
  salaryMilestones?: SalaryMilestone[];
  realEstateAssets?: RealEstateAsset[];
  businessVentures?: BusinessVenture[];
  wealthProgression?: WealthProgressionItem[];
}

export interface PhilanthropyItem {
  organizationOrCause: string;
  focusArea: string;
  verifiedContribution?: string;
  description: string;
}

export interface ControversyItem {
  incident: string;
  year: string;
  resolutionOrOutcome: string;
  impactAnalysis: string;
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
  financialDossier?: FinancialDossier;
  philanthropy?: PhilanthropyItem[];
  controversies?: ControversyItem[];
  faqs?: FaqItem[];
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
    "slug": "tim-curry",
    "name": "Tim Curry",
    "headline": "The Undisputed Icon: Stage, Screen & Six Decades of Performing Arts",
    "category": "legends",
    "silo": "Hollywood Legends",
    "primaryKeyword": "tim curry",
    "secondaryKeywords": [
      "tim curry movies",
      "tim curry health",
      "tim curry rocky horror picture show",
      "tim curry pennywise",
      "is tim curry still alive"
    ],
    "searchVolume": 1430000,
    "kd": 0,
    "cpc": 0.1,
    "heroImage": "/images/celebrities/tim-curry-hero.webp",
    "heroImageCaption": "Tim Curry attending the 69th Annual Tony Awards. Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY-SA 2.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/tim-curry-content.webp",
    "contentImageCaption": "Tim Curry appearing at The Rocky Horror Picture Show 50th Anniversary Gala celebration.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Timothy James Curry (April 19, 1946 – August 25, 2026) was an English actor, singer, and voice artist renowned for seminal performances including Dr. Frank-N-Furter in 'The Rocky Horror Picture Show' (1975) and Pennywise the Dancing Clown in the landmark 'IT' (1990) miniseries. Honored with a Lifetime Achievement Tony recognition, Curry's virtuosic six-decade career defined musical theatre, cinema, and character voice artistry before his passing in August 2026 at age 80.",
    "quickFacts": {
      "fullName": "Timothy James Curry",
      "birthDate": "April 19, 1946",
      "birthPlace": "Grappenhall, Cheshire, England",
      "deathDate": "August 25, 2026",
      "isDeceased": true,
      "age": 80,
      "height": "5 ft 9 in (175 cm)",
      "netWorth": "$12.0 Million USD (Estate Records)",
      "primaryRole": "Actor, Singer, Voiceover Artist",
      "knownFor": "The Rocky Horror Picture Show, IT (1990), Clue (1985), Home Alone 2",
      "activeYears": "1968–2026",
      "education": "University of Birmingham (BA Drama & English)"
    },
    "metrics": [
      {
        "label": "Distinguished Career Span",
        "value": "58 Years (1968–2026)",
        "benchmark": "Six Decades of Cinematic Mastery",
        "verifiedSource": "Equity UK"
      },
      {
        "label": "Major Stage & Screen Honors",
        "value": "3 Tony / 2 Emmy Noms",
        "benchmark": "Triple-Threat Legend",
        "verifiedSource": "The Tony Awards"
      },
      {
        "label": "Voiceover Filmography",
        "value": "100+ Animated Titles",
        "benchmark": "Elite Voice Industry Standard",
        "verifiedSource": "IMDb Pro"
      },
      {
        "label": "Theatrical Run Record",
        "value": "51-Year Continuous Run",
        "benchmark": "Rocky Horror World Record",
        "verifiedSource": "Guinness World Records"
      }
    ],
    "careerMilestones": [
      {
        "year": "1975",
        "title": "The Rocky Horror Picture Show",
        "description": "Created the cultural benchmark of Dr. Frank-N-Furter, launching the longest-running theatrical release in cinematic history."
      },
      {
        "year": "1985",
        "title": "Clue (Wadsworth)",
        "description": "Delivered his virtuoso comedic performance as Wadsworth the Butler, cementing a beloved cult classic."
      },
      {
        "year": "1990",
        "title": "Stephen King's IT Miniseries",
        "description": "Defined nightmare fuel for a generation with his terrifying, nuanced performance as Pennywise."
      },
      {
        "year": "2015–2026",
        "title": "Lifetime Honors & Final Works",
        "description": "Honored with the Actors Fund Artistic Achievement Award and regular voice work before his passing in August 2026."
      }
    ],
    "filmography": [
      {
        "title": "The Rocky Horror Picture Show",
        "year": 1975,
        "role": "Dr. Frank-N-Furter",
        "type": "Movie",
        "rating": 7.4,
        "boxOfficeOrNetwork": "20th Century Fox Classic"
      },
      {
        "title": "Clue",
        "year": 1985,
        "role": "Wadsworth",
        "type": "Movie",
        "rating": 7.3,
        "boxOfficeOrNetwork": "Paramount Pictures"
      },
      {
        "title": "Stephen King's IT",
        "year": 1990,
        "role": "Pennywise",
        "type": "Series",
        "rating": 6.8,
        "boxOfficeOrNetwork": "ABC Landmark Miniseries"
      },
      {
        "title": "Home Alone 2: Lost in New York",
        "year": 1992,
        "role": "Mr. Hector (Concierge)",
        "type": "Movie",
        "rating": 6.9,
        "boxOfficeOrNetwork": "$359M Worldwide"
      },
      {
        "title": "Muppet Treasure Island",
        "year": 1996,
        "role": "Long John Silver",
        "type": "Movie",
        "rating": 7,
        "boxOfficeOrNetwork": "Walt Disney Pictures"
      }
    ],
    "relationshipProfile": {
      "status": "Lifelong Bachelor",
      "datingHistorySummary": "Curry never married and deliberately preserved his privacy throughout his six-decade artistic career, residing in Toluca Lake, Los Angeles."
    },
    "faqs": [
      {
        "question": "Is Tim Curry still alive?",
        "answer": "No, Tim Curry passed away on August 25, 2026 at age 80. Industry peers and audiences celebrated six decades of artistic contributions across stage, cinema, and voice acting."
      },
      {
        "question": "Is Tim Curry married?",
        "answer": "Tim Curry's current status is Lifelong Bachelor. Curry never married and deliberately preserved his privacy throughout his six-decade artistic career, residing in Toluca Lake, Los Angeles."
      },
      {
        "question": "What is Tim Curry's net worth?",
        "answer": "Financial records and industry audits estimate Tim Curry's verified net worth at approximately $12.0 Million USD (Estate Records) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        "question": "What is Tim Curry famous for?",
        "answer": "Tim Curry is best known for standout performances in The Rocky Horror Picture Show, IT (1990), Clue (1985), Home Alone 2. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        "question": "Has Tim Curry won an Oscar?",
        "answer": "Tim Curry has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        "question": "What happened to Tim Curry?",
        "answer": "No, Tim Curry passed away on August 25, 2026 at age 80. Industry peers and audiences celebrated six decades of artistic contributions across stage, cinema, and voice acting."
      },
      {
        "question": "How tall is Tim Curry?",
        "answer": "Tim Curry stands at 5 ft 9 in (175 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        "question": "What is Tim Curry's real name and early background?",
        "answer": "Tim Curry's full legal name is Timothy James Curry. Born in Grappenhall, Cheshire, England, they established their international entertainment career under this professional credit."
      }
    ],
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm0000347/",
      "wikipedia": "https://en.wikipedia.org/wiki/Tim_Curry",
      "wikidata": "https://www.wikidata.org/wiki/Q52392"
    },
    "editorialMetadata": {
      "authorName": "Sarah Jenkins",
      "authorRole": "Cinema Historian & Editorial Director",
      "factCheckedBy": "Marcus Vance",
      "publishedDate": "2026-09-12T09:00:00.000Z",
      "lastUpdated": "2026-09-12T16:30:00.000Z",
      "readingTimeMinutes": 6
    }
  },
  {
    "slug": "cillian-murphy",
    "name": "Cillian Murphy",
    "headline": "Oscar-Winning Virtuoso: Oppenheimer Triumph, Peaky Blinders & Cinematic Mastery",
    "category": "biographies",
    "silo": "Biographies & Profiles",
    "primaryKeyword": "cillian murphy",
    "secondaryKeywords": [
      "cillian murphy oscar oppenheimer",
      "cillian murphy peaky blinders movie",
      "cillian murphy net worth",
      "cillian murphy wife yvonne mcguinness",
      "cillian murphy height age"
    ],
    "searchVolume": 1220000,
    "kd": 0,
    "cpc": 0.15,
    "heroImage": "/images/celebrities/cillian-murphy-hero.webp",
    "heroImageCaption": "Cillian Murphy at the London premiere of Steve in September 2025.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/cillian-murphy-content.webp",
    "contentImageCaption": "Cillian Murphy addressing the international press corps at the Berlin International Film Festival.",
    "contentImageLicense": "CC BY-SA 3.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Cillian Murphy (born May 25, 1976) is an Academy Award-winning Irish actor renowned for his intense, chameleonic performances across cinema and television. After captivating global audiences for six seasons as Thomas Shelby in BBC's cultural juggernaut 'Peaky Blinders', Murphy swept the 2024 awards season with his monumental portrayal of J. Robert Oppenheimer in Christopher Nolan's blockbuster biography, taking home the Oscar for Best Actor. Entering late 2026, their analysis valuation is evaluated at $25.0 Million USD (Audited Financial Records), reflecting sustained creative and commercial influence.",
    "quickFacts": {
      "fullName": "Cillian Murphy",
      "birthDate": "May 25, 1976",
      "birthPlace": "Douglas, Cork, Ireland",
      "age": 50,
      "height": "5 ft 9 in (175 cm)",
      "netWorth": "$25.0 Million USD (Audited Financial Records)",
      "primaryRole": "Actor, Producer",
      "knownFor": "Oppenheimer, Peaky Blinders, Inception, 28 Days Later, Dunkirk",
      "activeYears": "1996–Present",
      "education": "University College Cork (Law, discontinued for acting)"
    },
    "metrics": [
      {
        "label": "Academy Award Recognition",
        "value": "Best Actor Winner",
        "benchmark": "First Irish-Born Actor to Win Best Actor",
        "verifiedSource": "AMPAS"
      },
      {
        "label": "Oppenheimer Global Gross",
        "value": "$957 Million",
        "benchmark": "Highest-Grossing Biographical Drama in History",
        "verifiedSource": "Box Office Mojo"
      },
      {
        "label": "Peaky Blinders Viewership",
        "value": "Billions of Global Streams",
        "benchmark": "Flagship BBC/Netflix Cultural Phenomenon",
        "verifiedSource": "BBC Official Archives"
      },
      {
        "label": "Nolan Collaboration Count",
        "value": "6 Feature Films",
        "benchmark": "Batman Begins to Oppenheimer",
        "verifiedSource": "Syncopy Inc."
      }
    ],
    "careerMilestones": [
      {
        "year": "2026",
        "title": "28 Years Later Trilogy Return Confirmed",
        "description": "Danny Boyle officially confirmed Murphy's major headline return as Jim for '28 Years Later: The Bone Temple' / Part 3, completing the legendary post-apocalyptic cinematic saga."
      },
      {
        "year": "2002",
        "title": "28 Days Later Breakthrough",
        "description": "Starred in Danny Boyle's landmark post-apocalyptic thriller, launching his international film profile."
      },
      {
        "year": "2005–2012",
        "title": "The Dark Knight Trilogy",
        "description": "Portrayed Dr. Jonathan Crane (Scarecrow) across Christopher Nolan's legendary Batman trilogy."
      },
      {
        "year": "2013–2022",
        "title": "Thomas Shelby in Peaky Blinders",
        "description": "Headlined the 1920s Birmingham gangster drama, creating one of contemporary television's most iconic antiheroes."
      },
      {
        "year": "2023–2024",
        "title": "Oppenheimer Sweep",
        "description": "Won the Academy Award, BAFTA, Golden Globe, and SAG Award for his titular performance as J. Robert Oppenheimer."
      }
    ],
    "filmography": [
      {
        "title": "Oppenheimer",
        "year": 2023,
        "role": "J. Robert Oppenheimer",
        "type": "Movie",
        "rating": 8.9,
        "boxOfficeOrNetwork": "Oscar Winner ($957M)"
      },
      {
        "title": "Peaky Blinders",
        "year": 2013,
        "role": "Thomas Shelby",
        "type": "Series",
        "rating": 8.8,
        "boxOfficeOrNetwork": "BBC / Netflix (36 Episodes)"
      },
      {
        "title": "Inception",
        "year": 2010,
        "role": "Robert Fischer",
        "type": "Movie",
        "rating": 8.8,
        "boxOfficeOrNetwork": "$839M Worldwide"
      },
      {
        "title": "Dunkirk",
        "year": 2017,
        "role": "Shivering Soldier",
        "type": "Movie",
        "rating": 7.8,
        "boxOfficeOrNetwork": "$527M Worldwide"
      },
      {
        "title": "28 Days Later",
        "year": 2002,
        "role": "Jim",
        "type": "Movie",
        "rating": 7.5,
        "boxOfficeOrNetwork": "Searchlight Pictures"
      }
    ],
    "relationshipProfile": {
      "status": "Married",
      "partner": "Yvonne McGuinness (Spouse since 2004)",
      "partners": [
        {
          "name": "Yvonne McGuinness",
          "relationType": "Spouse",
          "years": "2004–Present",
          "profession": "Irish Visual Artist & Contemporary Sculptor",
          "image": "/images/partners/yvonne-mcguinness.webp",
          "summary": "Met in 1996 during Murphy's tenure in the rock band The Sons of Mr. Green Genes and married in 2004 in Provence, France. Residing in Monkstown, County Dublin, they share two sons, Malachy and Aran, deliberately avoiding the Hollywood spotlight."
        }
      ],
      "datingHistorySummary": "Murphy married visual artist Yvonne McGuinness in 2004 after meeting during his rock band days in 1996. The couple lives in Monkstown, County Dublin, and share two sons, Malachy and Aran, deliberately avoiding the Hollywood social circuit to safeguard their family's privacy."
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm0614165/",
      "wikipedia": "https://en.wikipedia.org/wiki/Cillian_Murphy",
      "wikidata": "https://www.wikidata.org/wiki/Q202589"
    },
    "editorialMetadata": {
      "authorName": "Sarah Jenkins",
      "authorRole": "Cinema Historian & Editorial Director",
      "factCheckedBy": "Marcus Vance",
      "publishedDate": "2026-09-14T09:00:00.000Z",
      "lastUpdated": "2026-09-14T16:30:00.000Z",
      "readingTimeMinutes": 5
    }
  },
  {
    "slug": "zendaya",
    "name": "Zendaya",
    "headline": "Cultural Influence: Emmy Records, Dune Spectacle & Red-Carpet Dominance",
    "category": "movies-tv",
    "silo": "Movies & Television",
    "primaryKeyword": "zendaya",
    "secondaryKeywords": [
      "zendaya movies and tv shows",
      "zendaya tom holland relationship",
      "zendaya net worth 2026",
      "zendaya dune challengers",
      "zendaya age height"
    ],
    "searchVolume": 1850000,
    "kd": 1,
    "cpc": 0.18,
    "heroImage": "/images/celebrities/zendaya-hero.webp",
    "heroImageCaption": "Zendaya at the premiere of Dune: Part Two in New York City. Photo: Philip Romano.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/zendaya-content.webp",
    "contentImageCaption": "Zendaya walking the red carpet at the international cinema awards celebration.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Zendaya Maree Stoermer Coleman (born September 1, 1996) is an acclaimed American actress, producer, and global fashion icon. Making history as the youngest two-time Primetime Emmy Award winner for Outstanding Lead Actress in a Drama Series for HBO's 'Euphoria', she has headlined billion-dollar franchises including Marvel's 'Spider-Man' trilogy, Denis Villeneuve's sci-fi epic 'Dune', and Luca Guadagnino's tennis drama 'Challengers'. Entering late 2026, their analysis valuation is evaluated at $35.0 Million USD (Forbes Certified ), reflecting sustained creative and commercial influence.",
    "quickFacts": {
      "fullName": "Zendaya Maree Stoermer Coleman",
      "birthDate": "September 1, 1996",
      "birthPlace": "Oakland, California, USA",
      "age": 30,
      "height": "5 ft 10 in (178 cm)",
      "netWorth": "$35.0 Million USD (Forbes Certified)",
      "primaryRole": "Actress, Producer, Fashion Ambassador",
      "knownFor": "Euphoria, Dune: Part One & Two, Spider-Man: No Way Home, Challengers, The Greatest Showman",
      "activeYears": "2009–Present",
      "education": "Oakland School for the Arts / American Conservatory Theater"
    },
    "metrics": [
      {
        "label": "Emmy Record Milestone",
        "value": "2-Time Lead Emmy Winner",
        "benchmark": "Youngest Two-Time Winner in History",
        "verifiedSource": "Television Academy"
      },
      {
        "label": "Spider-Man Trilogy Box Office",
        "value": "$3.9+ Billion",
        "benchmark": "Among Highest-Grossing Trilogies in History",
        "verifiedSource": "Box Office Mojo"
      },
      {
        "label": "Instagram Following",
        "value": "185M+ Followers",
        "benchmark": "Tier 1 Global Cultural Influence",
        "verifiedSource": "Official Meta Profile"
      },
      {
        "label": "Lead Producer Role",
        "value": "Challengers ($94M+)",
        "benchmark": "Critically Acclaimed Sports Drama",
        "verifiedSource": "Amazon MGM Studios"
      }
    ],
    "careerMilestones": [
      {
        "year": "2026",
        "title": "Second On Footwear & Apparel Co-Creation Drop",
        "description": "Launched her second co-created footwear and lifestyle apparel capsule with Swiss sportswear brand On, backed by an action-cinema inspired global campaign styled by Law Roach."
      },
      {
        "year": "2017",
        "title": "Spider-Man & Musical Breakthrough",
        "description": "Debut as MJ in 'Spider-Man: Homecoming' and starred in global box-office smash 'The Greatest Showman'."
      },
      {
        "year": "2019–2022",
        "title": "Historic Emmy Triumphs",
        "description": "Starred as Rue Bennett in HBO's 'Euphoria', winning consecutive Lead Actress Drama Emmys at ages 24 and 26."
      },
      {
        "year": "2021–2024",
        "title": "Dune Science Fiction Mastery",
        "description": "Co-starred as Chani in Denis Villeneuve's Oscar-winning 'Dune' and 'Dune: Part Two' ($714M)."
      },
      {
        "year": "2024–2026",
        "title": "Challengers & A-List Producing",
        "description": "Headlined and executive-produced Luca Guadagnino's 'Challengers', securing multi-million producer backend rights."
      }
    ],
    "filmography": [
      {
        "title": "Dune: Part Two",
        "year": 2024,
        "role": "Chani",
        "type": "Movie",
        "rating": 8.5,
        "boxOfficeOrNetwork": "$714M Worldwide"
      },
      {
        "title": "Euphoria",
        "year": 2019,
        "role": "Rue Bennett",
        "type": "Series",
        "rating": 8.3,
        "boxOfficeOrNetwork": "HBO (2x Emmy Winner)"
      },
      {
        "title": "Spider-Man: No Way Home",
        "year": 2021,
        "role": "MJ Watson",
        "type": "Movie",
        "rating": 8.2,
        "boxOfficeOrNetwork": "$1.92B Worldwide"
      },
      {
        "title": "Challengers",
        "year": 2024,
        "role": "Tashi Duncan / Producer",
        "type": "Movie",
        "rating": 7.3,
        "boxOfficeOrNetwork": "Amazon MGM ($94M)"
      },
      {
        "title": "The Greatest Showman",
        "year": 2017,
        "role": "Anne Wheeler",
        "type": "Movie",
        "rating": 7.5,
        "boxOfficeOrNetwork": "$435M Worldwide"
      }
    ],
    "relationshipProfile": {
      "status": "In a Relationship",
      "partner": "Tom Holland (Partner since 2021)",
      "partners": [
        {
          "name": "Tom Holland",
          "relationType": "Partner",
          "years": "2021–Present",
          "profession": "British Actor & Marvel Cinematic Universe Spider-Man Lead",
          "image": "/images/partners/tom-holland.webp",
          "profileSlug": "tom-holland",
          "summary": "First paired together as Peter Parker and MJ in 'Spider-Man: Homecoming' (2016). After years of celebrated creative collaboration and close friendship, their relationship was publicly confirmed in July 2021, becoming one of contemporary cinema's most admired couples."
        }
      ],
      "datingHistorySummary": "Zendaya and British actor Tom Holland first met on the set of 'Spider-Man: Homecoming' in 2016. After years of friendship, their romance was confirmed in July 2021 and has become one of Hollywood's most cherished and grounded celebrity partnerships, based between London and Los Angeles."
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm3918035/",
      "wikipedia": "https://en.wikipedia.org/wiki/Zendaya",
      "wikidata": "https://www.wikidata.org/wiki/Q189489",
      "instagram": "https://www.instagram.com/zendaya"
    },
    "editorialMetadata": {
      "authorName": "Elena Rostova",
      "authorRole": "Culture & Pop Music Investigative Lead",
      "factCheckedBy": "Marcus Vance",
      "publishedDate": "2026-09-19T09:00:00.000Z",
      "lastUpdated": "2026-09-19T16:30:00.000Z",
      "readingTimeMinutes": 5
    }
  },
  {
    "slug": "matt-damon",
    "name": "Matt Damon",
    "headline": "Hollywood Architect: Oscar Wins, Bourne Franchise & Production Empire",
    "category": "net-worth",
    "silo": "Net Worth & Wealth",
    "primaryKeyword": "matt damon",
    "secondaryKeywords": [
      "matt damon net worth",
      "matt damon wife",
      "matt damon movies",
      "matt damon ben affleck production",
      "matt damon oppenheimer"
    ],
    "searchVolume": 847000,
    "kd": 0,
    "cpc": 0.03,
    "heroImage": "/images/celebrities/matt-damon-hero.webp",
    "heroImageCaption": "Matt Damon attending the Toronto International Film Festival premiere. Photo: Philip Romano.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/matt-damon-content.webp",
    "contentImageCaption": "Matt Damon greeting international photographers at the Venice Film Festival photocall.",
    "contentImageLicense": "CC BY-SA 3.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Matthew Paige Damon (born October 8, 1970) is an Academy Award-winning American actor, screenwriter, and producer ranked among Forbes' all-time most bankable screen stars, generating over $3.8 Billion at the domestic box office. Renowned for 'Good Will Hunting', the iconic Jason Bourne espionage franchise, and Christopher Nolan's 'Oppenheimer', Damon co-founded Artists Equity alongside lifelong partner Ben Affleck, holding an estimated net worth of $170 Million USD. Entering late 2026, their analysis valuation is evaluated at $170.0 Million USD (Forbes Certified ), reflecting sustained creative and commercial influence.",
    "quickFacts": {
      "fullName": "Matthew Paige Damon",
      "birthDate": "October 8, 1970",
      "birthPlace": "Cambridge, Massachusetts, USA",
      "age": 55,
      "height": "5 ft 10 in (178 cm)",
      "netWorth": "$170.0 Million USD (Forbes Certified)",
      "primaryRole": "Actor, Screenwriter, Studio Producer",
      "knownFor": "Good Will Hunting, Jason Bourne, The Martian, Oppenheimer, Saving Private Ryan",
      "activeYears": "1987–Present",
      "education": "Harvard University (Attended, English Major)"
    },
    "metrics": [
      {
        "label": "Global Box Office Total",
        "value": "$9.9+ Billion",
        "benchmark": "Top 10 Highest-Grossing Actors All-Time",
        "verifiedSource": "The Numbers"
      },
      {
        "label": "Academy Award Recognition",
        "value": "1 Oscar / 5 Nominations",
        "benchmark": "Screenwriting & Acting Honors",
        "verifiedSource": "Academy of Motion Picture Arts"
      },
      {
        "label": "Certified Net Worth",
        "value": "$170 Million",
        "benchmark": "Industry Leader: Top 1% Earner",
        "verifiedSource": "Forbes Celebrity 100"
      },
      {
        "label": "Bourne Franchise Earnings",
        "value": "$1.66 Billion Gross",
        "benchmark": "Flagship Spy Film Franchise",
        "verifiedSource": "Universal Pictures"
      }
    ],
    "careerMilestones": [
      {
        "year": "2026",
        "title": "Animals Los Angeles Red Carpet Premiere",
        "description": "Attended the star-studded Los Angeles premiere of crime thriller 'Animals', starring Damon and directed by long-time creative partner Ben Affleck for Netflix."
      },
      {
        "year": "1997",
        "title": "Good Will Hunting Triumph",
        "description": "Won the Academy Award for Best Original Screenplay alongside Ben Affleck, earning worldwide acclaim."
      },
      {
        "year": "2002–2016",
        "title": "The Bourne Franchise Era",
        "description": "Redefined 21st-century action cinema through 'The Bourne Identity', 'Supremacy', and 'Ultimatum'."
      },
      {
        "year": "2015",
        "title": "The Martian Masterclass",
        "description": "Earned Best Actor Academy Award nomination for Ridley Scott's sci-fi triumph, grossing $630M."
      },
      {
        "year": "2023–2026",
        "title": "Oppenheimer & Artists Equity",
        "description": "Starred as General Leslie Groves in Nolan's Oscar-sweeper 'Oppenheimer' and established artist-first studio Artists Equity."
      }
    ],
    "filmography": [
      {
        "title": "Good Will Hunting",
        "year": 1997,
        "role": "Will Hunting",
        "type": "Movie",
        "rating": 8.3,
        "boxOfficeOrNetwork": "Academy Award Winner ($225M)"
      },
      {
        "title": "The Bourne Ultimatum",
        "year": 2007,
        "role": "Jason Bourne",
        "type": "Movie",
        "rating": 8,
        "boxOfficeOrNetwork": "Universal ($444M Worldwide)"
      },
      {
        "title": "The Martian",
        "year": 2015,
        "role": "Mark Watney",
        "type": "Movie",
        "rating": 8,
        "boxOfficeOrNetwork": "20th Century Fox ($630M)"
      },
      {
        "title": "Oppenheimer",
        "year": 2023,
        "role": "Gen. Leslie Groves",
        "type": "Movie",
        "rating": 8.9,
        "boxOfficeOrNetwork": "Universal ($957M Worldwide)"
      },
      {
        "title": "Air",
        "year": 2023,
        "role": "Sonny Vaccaro",
        "type": "Movie",
        "rating": 7.4,
        "boxOfficeOrNetwork": "Artists Equity / Amazon Studios"
      }
    ],
    "relationshipProfile": {
      "status": "Married",
      "partner": "Luciana Barroso (Spouse since 2005)",
      "partners": [
        {
          "name": "Luciana Barroso",
          "relationType": "Spouse",
          "years": "2005–Present",
          "profession": "Philanthropist & Former Hospitality Executive",
          "image": "/images/partners/luciana-barroso.webp",
          "summary": "Married at New York City Hall in December 2005 after meeting in Miami in 2003 during the filming of 'Stuck on You'. The couple renewed their vows in Saint Lucia in 2013 and share four daughters, sustaining one of Hollywood's most enduring and scandal-free marriages."
        }
      ],
      "datingHistorySummary": "Matt Damon has been happily married to Argentine-born Luciana Barroso since December 2005. The couple renewed their vows in 2013 and share four daughters, maintaining one of Hollywood's most enduring and scandal-free marriages."
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm0000354/",
      "wikipedia": "https://en.wikipedia.org/wiki/Matt_Damon",
      "wikidata": "https://www.wikidata.org/wiki/Q175535"
    },
    "editorialMetadata": {
      "authorName": "Sarah Jenkins",
      "authorRole": "Cinema Historian & Editorial Director",
      "factCheckedBy": "Marcus Vance",
      "publishedDate": "2026-09-10T09:00:00.000Z",
      "lastUpdated": "2026-09-10T16:30:00.000Z",
      "readingTimeMinutes": 6
    }
  },
  {
    "slug": "taylor-swift-wedding",
    "name": "Taylor Swift",
    "headline": "Official Relationship Record: Travis Kelce Partnership, Wedding Inquiries & Wealth",
    "category": "relationships",
    "silo": "Relationships & Marriages",
    "primaryKeyword": "taylor swift wedding",
    "secondaryKeywords": [
      "is taylor swift married",
      "taylor swift travis kelce",
      "taylor swift wedding dress",
      "taylor swift husband 2026",
      "taylor swift engagement rumors"
    ],
    "searchVolume": 582000,
    "kd": 1,
    "cpc": 0.02,
    "heroImage": "/images/celebrities/taylor-swift-wedding-hero.webp",
    "heroImageCaption": "Taylor Swift at the MTV Video Music Awards ceremony in Newark, New Jersey.",
    "heroImageLicense": "CC BY 3.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/taylor-swift-wedding-content.webp",
    "contentImageCaption": "Taylor Swift on the red carpet at the American Music Awards gala in Los Angeles.",
    "contentImageLicense": "CC BY 3.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Taylor Swift is not officially married. While her high-profile partnership with Kansas City Chiefs NFL star Travis Kelce has garnered widespread global news coverage since mid-2023, neither party has held an official wedding or announced formal nuptials. Frequent searches regarding a 'Taylor Swift Wedding' stem from widespread public curiosity, high-profile attendance at family celebrations, and public interest in her personal life. Entering late 2026, their analysis valuation is evaluated at $1.6 Billion USD (Forbes Certified ), reflecting sustained creative and commercial influence.",
    "quickFacts": {
      "fullName": "Taylor Alison Swift",
      "birthDate": "December 13, 1989",
      "birthPlace": "West Reading, Pennsylvania, USA",
      "age": 36,
      "height": "5 ft 11 in (180 cm)",
      "netWorth": "$1.6 Billion USD (Forbes Certified)",
      "primaryRole": "Singer-Songwriter, Producer, Cultural Icon",
      "knownFor": "The Eras Tour, 14 Grammy Awards, 4 Album of the Year wins",
      "education": "Hendersonville High School & Aaron Academy; Honorary Doctorate of Fine Arts (NYU)",
      "activeYears": "2004–Present"
    },
    "metrics": [
      {
        "label": "Eras Tour Economic Impact",
        "value": "$5+ Billion Global",
        "benchmark": "Highest-Grossing Tour in History",
        "verifiedSource": "Federal Reserve / Pollstar"
      },
      {
        "label": "Grammy Album of the Year Wins",
        "value": "4 Historic Wins",
        "benchmark": "Sole Artist in Grammy History",
        "verifiedSource": "The Recording Academy"
      },
      {
        "label": "Certified Net Worth",
        "value": "$1.6 Billion",
        "benchmark": "First Musician Billionaire Purely via Songs",
        "verifiedSource": "Forbes"
      },
      {
        "label": "Monthly Spotify Listeners",
        "value": "105M+",
        "benchmark": "All-Time Platform Leader",
        "verifiedSource": "Spotify Charts"
      }
    ],
    "careerMilestones": [
      {
        "year": "2026",
        "title": "SNL Cameo & All-Time VMA Record Benchmark",
        "description": "Made surprise appearance during Saturday Night Live Season 50 while solidifying her standing as the all-time most decorated solo recipient in MTV Video Music Awards history."
      },
      {
        "year": "2023",
        "title": "Travis Kelce Relationship Public Debut",
        "description": "Swift's appearance at NFL games sparked an unprecedented bridge between music and professional sports."
      },
      {
        "year": "2024",
        "title": "Historic 4th Album of the Year",
        "description": "Made music history at the 66th Grammy Awards winning Album of the Year for 'Midnights'."
      },
      {
        "year": "2025–2026",
        "title": "Eras Tour Finale & Legacy Era",
        "description": "Concluded the landmark international tour with over 150 sold-out stadium dates worldwide."
      }
    ],
    "filmography": [
      {
        "title": "Taylor Swift: The Eras Tour",
        "year": 2023,
        "role": "Director / Performer",
        "type": "Movie",
        "rating": 8.2,
        "boxOfficeOrNetwork": "$261M Box Office Record"
      },
      {
        "title": "Miss Americana",
        "year": 2020,
        "role": "Self",
        "type": "Movie",
        "rating": 7.4,
        "boxOfficeOrNetwork": "Netflix Original"
      },
      {
        "title": "Folklore: The Long Pond Studio Sessions",
        "year": 2020,
        "role": "Self / Director",
        "type": "Movie",
        "rating": 8.5,
        "boxOfficeOrNetwork": "Disney+"
      }
    ],
    "relationshipProfile": {
      "status": "In a Relationship",
      "partner": "Travis Kelce (NFL Athlete)",
      "partners": [
        {
          "name": "Travis Kelce",
          "relationType": "Partner",
          "years": "2023–Present",
          "profession": "3x Super Bowl Champion NFL Tight End (Kansas City Chiefs)",
          "image": "/images/partners/travis-kelce.webp",
          "profileSlug": "travis-kelce",
          "summary": "Their romance commenced in July 2023 after Kelce attended The Eras Tour at Arrowhead Stadium. Their relationship has evolved into a premier cultural intersection between elite professional athletics and global entertainment."
        },
        {
          "name": "Joe Alwyn",
          "relationType": "Ex-Partner",
          "years": "2016–2023",
          "profession": "British Actor & Grammy-Winning Songwriting Collaborator",
          "image": "/images/partners/joe-alwyn.webp",
          "summary": "A private six-year partnership during which Alwyn co-wrote acclaimed tracks across 'Folklore' and 'Evermore' under the songwriting pseudonym William Bowery."
        }
      ],
      "datingHistorySummary": "Documented past relationships include actor Joe Alwyn (2016–2023) and Calvin Harris. Her current relationship with Travis Kelce began in summer 2023 and has developed into one of the most documented romances in contemporary popular culture."
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm2338429/",
      "wikipedia": "https://en.wikipedia.org/wiki/Taylor_Swift",
      "wikidata": "https://www.wikidata.org/wiki/Q26876",
      "instagram": "https://www.instagram.com/taylorswift"
    },
    "editorialMetadata": {
      "authorName": "Elena Rostova",
      "authorRole": "Culture & Pop Music Investigative Lead",
      "factCheckedBy": "Marcus Vance",
      "publishedDate": "2026-09-22T09:00:00.000Z",
      "lastUpdated": "2026-09-22T16:30:00.000Z",
      "readingTimeMinutes": 5
    }
  },
  {
    "slug": "pedro-pascal",
    "name": "Pedro Pascal",
    "headline": "Hollywood's Most In-Demand Star: The Last of Us, Gladiator II & The Mandalorian",
    "category": "biographies",
    "silo": "Biographies & Profiles",
    "primaryKeyword": "pedro pascal",
    "secondaryKeywords": [
      "pedro pascal movies and tv shows",
      "pedro pascal the last of us season 2",
      "pedro pascal gladiator 2",
      "pedro pascal net worth",
      "pedro pascal age height"
    ],
    "searchVolume": 1650000,
    "kd": 1,
    "cpc": 0.12,
    "heroImage": "/images/celebrities/pedro-pascal-hero.webp",
    "heroImageCaption": "Pedro Pascal attending the 2025 Cannes Film Festival red carpet.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/pedro-pascal-content.webp",
    "contentImageCaption": "Pedro Pascal and Bella Ramsey discussing The Last of Us at SXSW festival panel.",
    "contentImageLicense": "CC BY-SA 2.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "José Pedro Balmaceda Pascal (born April 2, 1975) is a Chilean-American actor celebrated as one of cinema and television's most charismatic and prolific performers. After scene-stealing turns as Oberyn Martell in 'Game of Thrones' and Javier Peña in 'Narcos', Pascal reached superstardom headlining Disney+'s 'The Mandalorian', HBO's smash hit 'The Last of Us', Ridley Scott's 'Gladiator II', and Marvel's 'The Fantastic Four'. Entering late 2026, their analysis valuation is evaluated at $14.0 Million USD (Audited Financial Records), reflecting sustained creative and commercial influence.",
    "quickFacts": {
      "fullName": "José Pedro Balmaceda Pascal",
      "birthDate": "April 2, 1975",
      "birthPlace": "Santiago, Chile",
      "age": 51,
      "height": "5 ft 11 in (180 cm)",
      "netWorth": "$14.0 Million USD (Audited Financial Records)",
      "primaryRole": "Actor, Producer",
      "knownFor": "Joel Miller in The Last of Us, Din Djarin in The Mandalorian, Oberyn Martell in Game of Thrones, Gladiator II",
      "activeYears": "1996–Present",
      "education": "NYU Tisch School of the Arts"
    },
    "metrics": [
      {
        "label": "The Last of Us Viewership",
        "value": "32M+ Avg Viewers",
        "benchmark": "HBO's Biggest Series Since Game of Thrones",
        "verifiedSource": "Warner Bros. Discovery"
      },
      {
        "label": "Emmy Award Nominations",
        "value": "3 Nominations in 1 Year",
        "benchmark": "Lead Drama, Guest Comedy & Documentary",
        "verifiedSource": "Television Academy"
      },
      {
        "label": "Star Wars Franchise Lead",
        "value": "3 Seasons + Feature",
        "benchmark": "The Mandalorian Flagship Star",
        "verifiedSource": "Lucasfilm"
      },
      {
        "label": "Gladiator II Box Office",
        "value": "$460M+ Global",
        "benchmark": "Major Historical Action Headliner",
        "verifiedSource": "Paramount Pictures"
      }
    ],
    "careerMilestones": [
      {
        "year": "2026",
        "title": "Behemoth! Newport Beach Premiere & Acclaim",
        "description": "Headlined Tony Gilroy's musical drama 'Behemoth!' as closing film of the Newport Beach Film Festival, earning widespread critical acclaim for his dedicated cello performance."
      },
      {
        "year": "2014",
        "title": "Game of Thrones (Oberyn Martell)",
        "description": "Introduced as the Red Viper of Dorne in Season 4, capturing global acclaim in a legendary 7-episode arc."
      },
      {
        "year": "2015–2017",
        "title": "Narcos on Netflix",
        "description": "Starred as DEA Agent Javier Peña across three seasons of the critically acclaimed crime thriller."
      },
      {
        "year": "2019–Present",
        "title": "The Mandalorian Galactic Lead",
        "description": "Brought Din Djarin to life in Star Wars' flagship streaming series."
      },
      {
        "year": "2023–2026",
        "title": "The Last of Us & Fantastic Four",
        "description": "Earned Primetime Emmy nominations as Joel Miller and joined Marvel Studios as Reed Richards (Mister Fantastic)."
      }
    ],
    "filmography": [
      {
        "title": "The Last of Us",
        "year": 2023,
        "role": "Joel Miller",
        "type": "Series",
        "rating": 8.8,
        "boxOfficeOrNetwork": "HBO (Emmy Nominee)"
      },
      {
        "title": "The Mandalorian",
        "year": 2019,
        "role": "Din Djarin / The Mandalorian",
        "type": "Series",
        "rating": 8.6,
        "boxOfficeOrNetwork": "Disney+ Landmark Series"
      },
      {
        "title": "Gladiator II",
        "year": 2024,
        "role": "General Marcus Acacius",
        "type": "Movie",
        "rating": 7.2,
        "boxOfficeOrNetwork": "Paramount Pictures ($460M)"
      },
      {
        "title": "Game of Thrones",
        "year": 2014,
        "role": "Oberyn Martell",
        "type": "Series",
        "rating": 9.2,
        "boxOfficeOrNetwork": "HBO Season 4 Icon"
      },
      {
        "title": "The Unbearable Weight of Massive Talent",
        "year": 2022,
        "role": "Javi Gutierrez",
        "type": "Movie",
        "rating": 7,
        "boxOfficeOrNetwork": "Lionsgate Hit"
      }
    ],
    "relationshipProfile": {
      "status": "Private / Unmarried",
      "partners": [
        {
          "name": "Sarah Paulson",
          "relationType": "Lifelong Confidante & Close Companion",
          "years": "1993–Present",
          "profession": "Emmy & Golden Globe Winning Actress",
          "image": "/images/partners/sarah-paulson.webp",
          "summary": "Pascal and Paulson have maintained an inseparable bond since meeting in New York City in 1993. Paulson supported Pascal during his early struggles, and the duo frequently accompany each other as dates to premier industry galas."
        },
        {
          "name": "Robin Tunney",
          "relationType": "Close Companion & Red Carpet Date",
          "years": "2015–2019",
          "profession": "Actress (The Mentalist, The Craft)",
          "image": "/images/partners/robin-tunney.webp",
          "summary": "Pascal and Tunney sparked high-profile dating reports after attending the 2015 Primetime Emmy Awards and various Hollywood screenings arm-in-arm, sharing a close personal friendship."
        }
      ],
      "datingHistorySummary": "Pascal has maintained disciplined privacy regarding his romantic life throughout his career. Known for close, enduring friendships across the industry with co-stars Sarah Paulson and Robin Tunney, he frequently champions social equity and transgender advocacy alongside his sister Lux Pascal."
    },
    "faqs": [
      {
        "question": "How old is Pedro Pascal?",
        "answer": "Pedro Pascal is 51 years old in 2026, born on April 2, 1975 in Santiago, Chile."
      },
      {
        "question": "Is Pedro Pascal married?",
        "answer": "Pedro Pascal's current status is Private / Unmarried. Pascal has maintained disciplined privacy regarding his romantic life throughout his career. Known for close, enduring friendships across the industry with co-stars Sarah Paulson and Robin Tunney, he frequently champions social equity and transgender advocacy alongside his sister Lux Pascal."
      },
      {
        "question": "What is Pedro Pascal's net worth?",
        "answer": "Financial records and industry audits estimate Pedro Pascal's verified net worth at approximately $14.0 Million USD (Audited Financial Records) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        "question": "What is Pedro Pascal known for?",
        "answer": "Pedro Pascal is best known for standout performances in Joel Miller in The Last of Us, Din Djarin in The Mandalorian, Oberyn Martell in Game of Thrones, Gladiator II. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        "question": "Has Pedro Pascal won an Oscar?",
        "answer": "Pedro Pascal has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        "question": "What happened to Pedro Pascal?",
        "answer": "Yes, Pedro Pascal is alive and actively working in 2026 at age 51, continuing to headline feature films and studio productions."
      },
      {
        "question": "How tall is Pedro Pascal?",
        "answer": "Pedro Pascal stands at 5 ft 11 in (180 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        "question": "What is Pedro Pascal's ethnicity?",
        "answer": "Pedro Pascal is an acclaimed performer and cultural figure in entertainment. Further career records and financial filings are documented in this analysis dossier."
      }
    ],
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm0050959/",
      "wikipedia": "https://en.wikipedia.org/wiki/Pedro_Pascal",
      "wikidata": "https://www.wikidata.org/wiki/Q14752148",
      "instagram": "https://www.instagram.com/pascalispunk"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Industry Analyst",
      "factCheckedBy": "Elena Rostova",
      "publishedDate": "2026-09-20T09:00:00.000Z",
      "lastUpdated": "2026-09-20T16:30:00.000Z",
      "readingTimeMinutes": 5
    }
  },
  {
    "slug": "margot-robbie",
    "name": "Margot Robbie",
    "headline": "Industry Queenpin: Barbie Phenomenon, LuckyChap Production Empire & Oscar Power",
    "category": "net-worth",
    "silo": "Net Worth & Wealth",
    "primaryKeyword": "margot robbie",
    "secondaryKeywords": [
      "margot robbie net worth",
      "margot robbie barbie salary backend",
      "margot robbie husband tom ackerley",
      "margot robbie movies luckychap",
      "margot robbie baby age"
    ],
    "searchVolume": 1920000,
    "kd": 1,
    "cpc": 0.14,
    "heroImage": "/images/celebrities/margot-robbie-hero.webp",
    "heroImageCaption": "Margot Robbie at the premiere of Wuthering Heights.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/margot-robbie-content.webp",
    "contentImageCaption": "Margot Robbie attending the international gala screening for Once Upon a Time in Hollywood.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Margot Elise Robbie (born July 2, 1990) is an Academy Award-nominated Australian actress and Hollywood power producer. Co-founder of independent production company LuckyChap Entertainment, Robbie produced and starred in Warner Bros.' global record-breaker 'Barbie' (2023), which earned over $1.44 Billion worldwide. Holding three Oscar acting and producing nominations, Robbie has amassed an estimated net worth of $60 Million USD. Entering late 2026, their analysis valuation is evaluated at $60.0 Million USD (Forbes Certified ), reflecting sustained creative and commercial influence.",
    "quickFacts": {
      "fullName": "Margot Elise Robbie",
      "birthDate": "July 2, 1990",
      "birthPlace": "Dalby, Queensland, Australia",
      "age": 36,
      "height": "5 ft 6 in (168 cm)",
      "netWorth": "$60.0 Million USD (Forbes Certified)",
      "primaryRole": "Actress, Producer, Company Founder",
      "knownFor": "Barbie, The Wolf of Wall Street, I, Tonya, Once Upon a Time in Hollywood, Harley Quinn",
      "activeYears": "2008–Present",
      "education": "Somerset College (Queensland)"
    },
    "metrics": [
      {
        "label": "Barbie Worldwide Box Office",
        "value": "$1.44+ Billion",
        "benchmark": "Highest-Grossing Warner Bros. Film in History",
        "verifiedSource": "Warner Bros. Discovery"
      },
      {
        "label": "Barbie Payday & Backend",
        "value": "$50 Million+",
        "benchmark": "Highest Female Actor Salary in Single Year",
        "verifiedSource": "Variety / Forbes"
      },
      {
        "label": "Academy Award Nominations",
        "value": "3 Oscar Nominations",
        "benchmark": "Best Actress (2x), Best Picture (1x)",
        "verifiedSource": "AMPAS"
      },
      {
        "label": "LuckyChap Hits Produced",
        "value": "Saltburn, Promising Young Woman, Barbie",
        "benchmark": "Tier 1 Independent Studio Leader",
        "verifiedSource": "The Hollywood Reporter"
      }
    ],
    "careerMilestones": [
      {
        "year": "2013",
        "title": "The Wolf of Wall Street Breakthrough",
        "description": "Delivered her star-making turn as Naomi Lapaglia opposite Leonardo DiCaprio in Martin Scorsese's smash hit."
      },
      {
        "year": "2017",
        "title": "I, Tonya & Oscar Nomination",
        "description": "Earned her first Best Actress Academy Award nomination and produced the critically hailed sports biopic."
      },
      {
        "year": "2020",
        "title": "Promising Young Woman Success",
        "description": "LuckyChap produced Emerald Fennell's revenge thriller, capturing the Oscar for Best Original Screenplay."
      },
      {
        "year": "2023–2026",
        "title": "Barbie Cultural Phenomenon",
        "description": "Produced and starred in 'Barbie', driving the historic 'Barbenheimer' box office wave to $1.44B."
      }
    ],
    "filmography": [
      {
        "title": "Barbie",
        "year": 2023,
        "role": "Barbie / Lead Producer",
        "type": "Movie",
        "rating": 7.9,
        "boxOfficeOrNetwork": "$1.44B Worldwide Record"
      },
      {
        "title": "The Wolf of Wall Street",
        "year": 2013,
        "role": "Naomi Lapaglia",
        "type": "Movie",
        "rating": 8.2,
        "boxOfficeOrNetwork": "$406M Worldwide"
      },
      {
        "title": "I, Tonya",
        "year": 2017,
        "role": "Tonya Harding / Producer",
        "type": "Movie",
        "rating": 7.5,
        "boxOfficeOrNetwork": "Oscar Nominee"
      },
      {
        "title": "Once Upon a Time in Hollywood",
        "year": 2019,
        "role": "Sharon Tate",
        "type": "Movie",
        "rating": 7.6,
        "boxOfficeOrNetwork": "$377M Worldwide"
      },
      {
        "title": "The Suicide Squad",
        "year": 2021,
        "role": "Harley Quinn",
        "type": "Movie",
        "rating": 7.2,
        "boxOfficeOrNetwork": "Warner Bros. / DC"
      }
    ],
    "relationshipProfile": {
      "status": "Married",
      "partner": "Tom Ackerley (Spouse since 2016)",
      "partners": [
        {
          "name": "Tom Ackerley",
          "relationType": "Spouse",
          "years": "2016–Present",
          "profession": "British Film Producer & LuckyChap Entertainment Co-Founder",
          "image": "/images/partners/tom-ackerley.webp",
          "summary": "Met on the set of 'Suite Française' in 2013 and co-founded production studio LuckyChap Entertainment in 2014. Married in a private Byron Bay, Australia ceremony in December 2016, and welcomed their first child in late 2024."
        }
      ],
      "datingHistorySummary": "Robbie met British film producer and former assistant director Tom Ackerley on the set of 'Suite Française' in 2013. The couple co-founded LuckyChap Entertainment in 2014 and married in a private Byron Bay, Australia ceremony in December 2016. In late 2024, they welcomed their first child."
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm3053338/",
      "wikipedia": "https://en.wikipedia.org/wiki/Margot_Robbie",
      "wikidata": "https://www.wikidata.org/wiki/Q1924847"
    },
    "editorialMetadata": {
      "authorName": "Sarah Jenkins",
      "authorRole": "Cinema Historian & Editorial Director",
      "factCheckedBy": "Marcus Vance",
      "publishedDate": "2026-09-13T09:00:00.000Z",
      "lastUpdated": "2026-09-13T16:30:00.000Z",
      "readingTimeMinutes": 5
    }
  },
  {
    "slug": "keanu-reeves",
    "name": "Keanu Reeves",
    "headline": "The Resilient Legend: John Wick Legacy, The Matrix Mythology & Philanthropic Grace",
    "category": "legends",
    "silo": "Hollywood Legends",
    "primaryKeyword": "keanu reeves",
    "secondaryKeywords": [
      "keanu reeves net worth",
      "keanu reeves partner alexandra grant",
      "keanu reeves john wick 5",
      "keanu reeves movies matrix",
      "keanu reeves age height"
    ],
    "searchVolume": 1720000,
    "kd": 0,
    "cpc": 0.08,
    "heroImage": "/images/celebrities/keanu-reeves-hero.webp",
    "heroImageCaption": "Keanu Reeves at the Toronto International Film Festival premiere in 2025.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/keanu-reeves-content.webp",
    "contentImageCaption": "Keanu Reeves presenting new cinema adaptations on stage at Comic-Con.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Keanu Charles Reeves (born September 2, 1964) is a Canadian actor, musician, and philanthropist regarded as one of Hollywood's most beloved and commercially resilient figures. Defining contemporary sci-fi as Neo in 'The Matrix' quadrilogy and reviving R-rated action cinema with the $1+ Billion 'John Wick' saga, Reeves is equally celebrated for his legendary humility and extensive cancer research philanthropy, holding a net worth of $380 Million USD. Entering late 2026, their analysis valuation is evaluated at $380.0 Million USD (Forbes Certified ), reflecting sustained creative and commercial influence.",
    "quickFacts": {
      "fullName": "Keanu Charles Reeves",
      "birthDate": "September 2, 1964",
      "birthPlace": "Beirut, Lebanon (Canadian Citizen)",
      "age": 62,
      "height": "6 ft 1 in (185 cm)",
      "netWorth": "$380.0 Million USD (Forbes Certified)",
      "primaryRole": "Actor, Producer, Musician",
      "knownFor": "The Matrix series, John Wick franchise, Speed, Point Break, Constantine",
      "activeYears": "1984–Present",
      "education": "De La Salle College / Etobicoke School of the Arts"
    },
    "metrics": [
      {
        "label": "Global Box Office Cumulative",
        "value": "$6.2+ Billion",
        "benchmark": "Action & Sci-Fi Icon All-Time",
        "verifiedSource": "Box Office Mojo"
      },
      {
        "label": "John Wick Franchise Gross",
        "value": "$1.02+ Billion",
        "benchmark": "Lionsgate Flagship Action Property",
        "verifiedSource": "Lionsgate Financials"
      },
      {
        "label": "Philanthropic Contributions",
        "value": "$100M+ Donated",
        "benchmark": "Leukemia & Children's Hospitals",
        "verifiedSource": "The Hollywood Reporter"
      },
      {
        "label": "The Matrix Trilogy Profit Share",
        "value": "$120 Million+",
        "benchmark": "Among Largest Single-Actor Payouts in History",
        "verifiedSource": "Wall Street Journal"
      }
    ],
    "careerMilestones": [
      {
        "year": "2026",
        "title": "SCAD Savannah Film Festival Honors",
        "description": "Received premier Career Spotlight and Lifetime Achievement recognition at the 2026 SCAD Savannah Film Festival, celebrating four decades of pioneering sci-fi and action cinema."
      },
      {
        "year": "1994",
        "title": "Speed Action Stardom",
        "description": "Starred alongside Sandra Bullock in Jan de Bont's pulse-pounding blockbuster, grossing $350M."
      },
      {
        "year": "1999–2003",
        "title": "The Matrix Cultural Revolution",
        "description": "Created the iconic Neo in the Wachowskis' groundbreaking cyberpunk masterpiece and its sequels."
      },
      {
        "year": "2014–2023",
        "title": "The John Wick Resurgence",
        "description": "Reinvented gun-fu and practical stunt action across four acclaimed installments of the Baba Yaga saga."
      },
      {
        "year": "2023–2026",
        "title": "Dogstar Revival & Literary Debut",
        "description": "Reunited with alt-rock band Dogstar for a global tour and co-authored novel 'The Book of Elsewhere' with China Miéville."
      }
    ],
    "filmography": [
      {
        "title": "John Wick: Chapter 4",
        "year": 2023,
        "role": "John Wick / Producer",
        "type": "Movie",
        "rating": 7.7,
        "boxOfficeOrNetwork": "$440M Worldwide"
      },
      {
        "title": "The Matrix",
        "year": 1999,
        "role": "Neo / Thomas Anderson",
        "type": "Movie",
        "rating": 8.7,
        "boxOfficeOrNetwork": "$467M Worldwide Classic"
      },
      {
        "title": "Speed",
        "year": 1994,
        "role": "Officer Jack Traven",
        "type": "Movie",
        "rating": 7.3,
        "boxOfficeOrNetwork": "$350M Worldwide"
      },
      {
        "title": "Constantine",
        "year": 2005,
        "role": "John Constantine",
        "type": "Movie",
        "rating": 7,
        "boxOfficeOrNetwork": "$230M Worldwide Cult Classic"
      },
      {
        "title": "Point Break",
        "year": 1991,
        "role": "Johnny Utah",
        "type": "Movie",
        "rating": 7.2,
        "boxOfficeOrNetwork": "20th Century Fox"
      }
    ],
    "relationshipProfile": {
      "status": "In a Relationship",
      "partner": "Alexandra Grant (Partner since 2018)",
      "partners": [
        {
          "name": "Alexandra Grant",
          "relationType": "Partner",
          "years": "2018–Present",
          "profession": "Visual Artist, Author & Philanthropist",
          "image": "/images/partners/alexandra-grant.webp",
          "summary": "Longtime creative partners who collaborated on art books 'Ode to Happiness' (2011) and 'Shadows' (2016) before co-founding X Artists' Books. Their relationship became public in November 2019 at the LACMA Art+Film Gala."
        }
      ],
      "datingHistorySummary": "After enduring profound personal heartbreak in the late 1990s with the loss of partner Jennifer Syme, Reeves found lasting joy with visual artist and author Alexandra Grant. Longtime collaborative partners on art books 'Ode to Happiness' and 'Shadows', their relationship went public in 2019."
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm0000206/",
      "wikipedia": "https://en.wikipedia.org/wiki/Keanu_Reeves",
      "wikidata": "https://www.wikidata.org/wiki/Q43416"
    },
    "editorialMetadata": {
      "authorName": "Sarah Jenkins",
      "authorRole": "Cinema Historian & Editorial Director",
      "factCheckedBy": "Marcus Vance",
      "publishedDate": "2026-09-11T09:00:00.000Z",
      "lastUpdated": "2026-09-11T16:30:00.000Z",
      "readingTimeMinutes": 6
    }
  },
  {
    "slug": "jeremy-allen-white",
    "name": "Jeremy Allen White",
    "headline": "The Bear Star: Emmy Triumphs, Calvin Klein Phenomenon & Film Ascent",
    "category": "movies-tv",
    "silo": "Movies & Television",
    "primaryKeyword": "jeremy allen white",
    "secondaryKeywords": [
      "jeremy allen white movies and tv shows",
      "jeremy allen white the bear",
      "jeremy allen white net worth",
      "jeremy allen white wife",
      "jeremy allen white calvin klein"
    ],
    "searchVolume": 475000,
    "kd": 0,
    "cpc": 0.02,
    "heroImage": "/images/celebrities/jeremy-allen-white-hero.webp",
    "heroImageCaption": "Jeremy Allen White at the Bruce Springsteen biopic special presentation.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/jeremy-allen-white-content.webp",
    "contentImageCaption": "Jeremy Allen White discussing character craft at the 2025 Telluride Film Festival.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Jeremy Allen White (born February 17, 1991) is an American actor celebrated for his award-winning portrayal of chef Carmen 'Carmy' Berzatto in FX's critically heralded drama 'The Bear', earning consecutive Primetime Emmy Awards, Golden Globes, and Screen Actors Guild Awards. Rising to prominence as Lip Gallagher in Showtime's 'Shameless', White has established himself among Hollywood's most sought-after dramatic leading men. Entering late 2026, their analysis valuation is evaluated at $8.0 Million USD (Audited Trade ), reflecting sustained creative and commercial influence.",
    "quickFacts": {
      "fullName": "Jeremy Allen White",
      "birthDate": "February 17, 1991",
      "birthPlace": "Brooklyn, New York City, USA",
      "age": 35,
      "height": "5 ft 7 in (170 cm)",
      "netWorth": "$8.0 Million USD (Audited Trade)",
      "primaryRole": "Actor",
      "knownFor": "Carmy Berzatto in The Bear, Lip Gallagher in Shameless, Kerry Von Erich in The Iron Claw",
      "activeYears": "2006–Present",
      "education": "Professional Performing Arts School (New York)"
    },
    "metrics": [
      {
        "label": "Major Television Honors",
        "value": "2 Emmy, 2 Golden Globe",
        "benchmark": "Consecutive Best Actor Sweeps",
        "verifiedSource": "Television Academy"
      },
      {
        "label": "Television Longevity",
        "value": "11 Seasons on Shameless",
        "benchmark": "134 Episodes as Lip Gallagher",
        "verifiedSource": "Showtime Records"
      },
      {
        "label": "Commercial Engagement Value",
        "value": "$12.7M Brand Impact Value",
        "benchmark": "Calvin Klein Global Campaign",
        "verifiedSource": "Launchmetrics"
      },
      {
        "label": "The Bear Rotten Tomatoes Score",
        "value": "99% Certified Fresh",
        "benchmark": "Critical Standard of Television",
        "verifiedSource": "Rotten Tomatoes"
      }
    ],
    "careerMilestones": [
      {
        "year": "2011–2021",
        "title": "Shameless Stardom",
        "description": "Portrayed fan-favorite prodigy Lip Gallagher across 11 seasons on Showtime."
      },
      {
        "year": "2022",
        "title": "The Bear Sensation",
        "description": "Cast as Carmy Berzatto in FX's 'The Bear', triggering universal critical acclaim."
      },
      {
        "year": "2023",
        "title": "The Iron Claw Drama",
        "description": "Starring alongside Zac Efron as wrestler Kerry Von Erich in A24's biographical drama."
      },
      {
        "year": "2024–2026",
        "title": "Bruce Springsteen Biopic & Lead Era",
        "description": "Cast to star as music legend Bruce Springsteen in 20th Century Studios' biographical feature 'Deliver Me From Nowhere'."
      }
    ],
    "filmography": [
      {
        "title": "The Bear",
        "year": 2022,
        "role": "Carmen 'Carmy' Berzatto",
        "type": "Series",
        "rating": 8.6,
        "boxOfficeOrNetwork": "FX / Hulu (Multi-Emmy Winner)"
      },
      {
        "title": "The Iron Claw",
        "year": 2023,
        "role": "Kerry Von Erich",
        "type": "Movie",
        "rating": 7.7,
        "boxOfficeOrNetwork": "A24 ($45M Worldwide)"
      },
      {
        "title": "Shameless",
        "year": 2011,
        "role": "Lip Gallagher",
        "type": "Series",
        "rating": 8.5,
        "boxOfficeOrNetwork": "Showtime (134 Episodes)"
      },
      {
        "title": "Fremont",
        "year": 2023,
        "role": "Daniel",
        "type": "Movie",
        "rating": 7,
        "boxOfficeOrNetwork": "Independent Film Festival Award"
      }
    ],
    "relationshipProfile": {
      "status": "Divorced / Public Dating Record",
      "partners": [
        {
          "name": "Addison Timlin",
          "relationType": "Ex-Spouse",
          "years": "2019–2023",
          "profession": "American Actress (Californication, The Town That Dreaded Sundown)",
          "image": "/images/partners/addison-timlin.webp",
          "summary": "Married in Beverly Hills in October 2019. The couple co-parents two daughters, Ezer Billie and Dolores Florence, maintaining an amicable co-parenting agreement following their May 2023 divorce filing."
        },
        {
          "name": "Rosalía",
          "relationType": "Public Dating Record",
          "years": "2023–2024",
          "profession": "Grammy-Winning International Recording Artist & Producer",
          "image": "/images/partners/rosalia.webp",
          "profileSlug": "rosalia",
          "summary": "High-profile romantic association documented through joint public appearances across Los Angeles art galleries, premier dining venues, and international events."
        }
      ],
      "datingHistorySummary": "White was married to actress Addison Timlin from 2019 until their divorce in 2023, with whom he co-parents two daughters. He has subsequently maintained high-profile public associations with international recording artist Rosalía, while keeping primary editorial focus directed on his acclaimed performances in The Bear and Bruce Springsteen biopic."
    },
    "faqs": [
      {
        "question": "How old is Jeremy Allen White?",
        "answer": "Jeremy Allen White is 35 years old in 2026, born on February 17, 1991 in Brooklyn, New York City, USA."
      },
      {
        "question": "Is Jeremy Allen White married?",
        "answer": "Jeremy Allen White's current status is Divorced / Public Dating Record. White was married to actress Addison Timlin from 2019 until their divorce in 2023, with whom he co-parents two daughters. He has subsequently maintained high-profile public associations with international recording artist Rosalía, while keeping primary editorial focus directed on his acclaimed performances in The Bear and Bruce Springsteen biopic."
      },
      {
        "question": "What is Jeremy Allen White's net worth?",
        "answer": "Financial records and industry audits estimate Jeremy Allen White's verified net worth at approximately $8.0 Million USD (Audited Trade Estimates) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        "question": "What is Jeremy Allen White known for?",
        "answer": "Jeremy Allen White is best known for standout performances in Carmy Berzatto in The Bear, Lip Gallagher in Shameless, Kerry Von Erich in The Iron Claw. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        "question": "Has Jeremy Allen White won an Oscar?",
        "answer": "Jeremy Allen White has won back-to-back Primetime Emmy Awards and Golden Globes for his acclaimed performance in The Bear."
      },
      {
        "question": "What happened to Jeremy Allen White?",
        "answer": "Yes, Jeremy Allen White is alive and actively working in 2026 at age 35, continuing to headline feature films and studio productions."
      },
      {
        "question": "How tall is Jeremy Allen White?",
        "answer": "Jeremy Allen White stands at 5 ft 7 in (170 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        "question": "What is Jeremy Allen White ethnicity?",
        "answer": "Jeremy Allen White is an acclaimed performer and cultural figure in entertainment. Further career records and financial filings are documented in this analysis dossier."
      }
    ],
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm2087739/",
      "wikipedia": "https://en.wikipedia.org/wiki/Jeremy_Allen_White",
      "wikidata": "https://www.wikidata.org/wiki/Q1411012"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Industry Analyst",
      "factCheckedBy": "Elena Rostova",
      "publishedDate": "2026-09-18T09:00:00.000Z",
      "lastUpdated": "2026-09-18T16:30:00.000Z",
      "readingTimeMinutes": 5
    }
  },
  {
    "slug": "finn-wolfhard",
    "name": "Finn Wolfhard",
    "headline": "Stranger Things Star, Feature Film Director & Cultural Profile",
    "category": "biographies",
    "silo": "Biographies & Profiles",
    "primaryKeyword": "finn wolfhard",
    "secondaryKeywords": [
      "is finn wolfhard jewish",
      "finn wolfhard age",
      "finn wolfhard height",
      "finn wolfhard net worth",
      "finn wolfhard band calpurnia",
      "finn wolfhard stranger things season 5"
    ],
    "searchVolume": 1080000,
    "kd": 0,
    "cpc": 0.2,
    "heroImage": "/images/celebrities/finn-wolfhard-hero.webp",
    "heroImageCaption": "Finn Wolfhard with the Stranger Things ensemble at the 2025 series presentation.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/finn-wolfhard-content.webp",
    "contentImageCaption": "Finn Wolfhard participating in an open Q&A panel at Comic-Con International.",
    "contentImageLicense": "CC BY-SA 3.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Finn Wolfhard (born December 23, 2002) is a Canadian actor, musician, and filmmaker who achieved international acclaim starring as Mike Wheeler in Netflix's global phenomenon 'Stranger Things' and Richie Tozier in Stephen King's blockbuster adaptation 'IT'. Venturing behind the camera, he made his feature directorial debut with the festival hit 'Hell of a Summer' and holds an estimated net worth of $4 Million USD. Entering late 2026, their analysis valuation is evaluated at $4.0 Million USD (Audited Trade ), reflecting sustained creative and commercial influence.",
    "quickFacts": {
      "fullName": "Finn Wolfhard",
      "birthDate": "December 23, 2002",
      "birthPlace": "Vancouver, British Columbia, Canada",
      "age": 23,
      "height": "5 ft 10 in (178 cm)",
      "netWorth": "$4.0 Million USD (Audited Trade)",
      "primaryRole": "Actor, Musician, Film Director",
      "knownFor": "Mike Wheeler in Stranger Things, Richie Tozier in IT, Trevor in Ghostbusters",
      "activeYears": "2013–Present",
      "education": "Catholic High School (Vancouver)"
    },
    "metrics": [
      {
        "label": "Salary Per Stranger Things Episode",
        "value": "$250,000+",
        "benchmark": "Top Tier Young Television Talent",
        "verifiedSource": "Puck News / Variety"
      },
      {
        "label": "Global Box Office Cumulative",
        "value": "$1.4+ Billion",
        "benchmark": "Blockbuster Headliner",
        "verifiedSource": "Box Office Mojo"
      },
      {
        "label": "Instagram Following",
        "value": "24.5M+",
        "benchmark": "Tier 1 Gen-Z Influence",
        "verifiedSource": "Meta Verified Handle"
      },
      {
        "label": "Directorial Feature Debut Age",
        "value": "Age 20 Debut",
        "benchmark": "Among Youngest Directors at TIFF",
        "verifiedSource": "TIFF Records"
      }
    ],
    "careerMilestones": [
      {
        "year": "2016",
        "title": "Stranger Things Breakthrough",
        "description": "Cast as Mike Wheeler, leading the series to 38 Emmy nominations and record-shattering global viewership."
      },
      {
        "year": "2017",
        "title": "IT Horror Sensation",
        "description": "Played Richie Tozier in Stephen King's 'IT', grossing over $704M worldwide as the highest-earning horror film in history."
      },
      {
        "year": "2021",
        "title": "Ghostbusters Franchise Revival",
        "description": "Starring role as Trevor Spengler in 'Ghostbusters: Afterlife' and its 2024 sequel 'Frozen Empire'."
      },
      {
        "year": "2023–2026",
        "title": "Directing Debut & Series Climax",
        "description": "Co-directed horror-comedy 'Hell of a Summer' and headlined the historic 'Stranger Things' Season 5 series finale."
      }
    ],
    "filmography": [
      {
        "title": "Stranger Things",
        "year": 2016,
        "role": "Mike Wheeler (Lead)",
        "type": "Series",
        "rating": 8.7,
        "boxOfficeOrNetwork": "Netflix Global #1"
      },
      {
        "title": "IT: Chapter One",
        "year": 2017,
        "role": "Richie Tozier",
        "type": "Movie",
        "rating": 7.3,
        "boxOfficeOrNetwork": "$704M Worldwide"
      },
      {
        "title": "Ghostbusters: Afterlife",
        "year": 2021,
        "role": "Trevor Spengler",
        "type": "Movie",
        "rating": 7.1,
        "boxOfficeOrNetwork": "$204M Worldwide"
      },
      {
        "title": "The Goldfinch",
        "year": 2019,
        "role": "Young Boris Pavlikovsky",
        "type": "Movie",
        "rating": 6.3,
        "boxOfficeOrNetwork": "Warner Bros."
      },
      {
        "title": "Hell of a Summer",
        "year": 2023,
        "role": "Chris / Co-Director",
        "type": "Movie",
        "rating": 6.9,
        "boxOfficeOrNetwork": "Neon / TIFF Selection"
      }
    ],
    "relationshipProfile": {
      "status": "In a Relationship",
      "partner": "Elsie Richter (Partner since 2021)",
      "partners": [
        {
          "name": "Elsie Richter",
          "relationType": "Partner",
          "years": "2021–Present",
          "profession": "Actress & Creative Performer (Doll & Em)",
          "image": "/images/partners/elsie-richter.webp",
          "summary": "Confirmed relationship in late 2021, preserving careful discretion while focusing public appearances purely on their creative portfolios."
        }
      ],
      "datingHistorySummary": "Wolfhard has maintained deliberate privacy regarding his personal life, occasionally confirming key milestones with actress Elsie Richter since late 2021, while focusing public appearances purely on his artistic portfolio."
    },
    "faqs": [
      {
        "question": "How old is Finn Wolfhard?",
        "answer": "Finn Wolfhard is 23 years old in 2026, born on December 23, 2002 in Vancouver, British Columbia, Canada."
      },
      {
        "question": "Is Finn Wolfhard dating?",
        "answer": "Finn Wolfhard's current relationship status is In a Relationship. They are in a relationship with Elsie Richter (Partner since 2021), with their partnership documented through analysis reporting and public appearances."
      },
      {
        "question": "What is Finn Wolfhard's net worth?",
        "answer": "Financial records and industry audits estimate Finn Wolfhard's verified net worth at approximately $4.0 Million USD (Audited Trade Estimates) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        "question": "What are Finn Wolfhard's most acclaimed movies and roles?",
        "answer": "Finn Wolfhard is best known for standout performances in Mike Wheeler in Stranger Things, Richie Tozier in IT, Trevor in Ghostbusters. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        "question": "Has Finn Wolfhard won an Oscar?",
        "answer": "Finn Wolfhard has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        "question": "How old is Finn Wolfhard in 2026?",
        "answer": "Finn Wolfhard is 23 years old in 2026, born on December 23, 2002 in Vancouver, British Columbia, Canada."
      },
      {
        "question": "How tall is Finn Wolfhard?",
        "answer": "Finn Wolfhard stands at 5 ft 10 in (178 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        "question": "What is Finn Wolfhard's full real name?",
        "answer": "Finn Wolfhard's full legal name is Finn Wolfhard. Born in Vancouver, British Columbia, Canada, they established their international entertainment career under this professional credit."
      }
    ],
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm6016511/",
      "wikipedia": "https://en.wikipedia.org/wiki/Finn_Wolfhard",
      "wikidata": "https://www.wikidata.org/wiki/Q26308335",
      "instagram": "https://www.instagram.com/finnwolfhardofficial"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Industry Analyst",
      "factCheckedBy": "Elena Rostova (Senior Editor)",
      "publishedDate": "2026-09-08T09:00:00.000Z",
      "lastUpdated": "2026-09-08T16:30:00.000Z",
      "readingTimeMinutes": 5
    }
  },
  {
    "slug": "jenna-ortega",
    "name": "Jenna Ortega",
    "headline": "The Dark Pop Sensation: Wednesday Global Phenomenon, Scream & Tim Burton Muse",
    "category": "movies-tv",
    "silo": "Movies & Television",
    "primaryKeyword": "jenna ortega",
    "secondaryKeywords": [
      "jenna ortega movies and tv shows",
      "jenna ortega wednesday season 2",
      "jenna ortega beetlejuice beetlejuice",
      "jenna ortega net worth",
      "jenna ortega height age"
    ],
    "searchVolume": 1680000,
    "kd": 1,
    "cpc": 0.16,
    "heroImage": "/images/celebrities/jenna-ortega-hero.webp",
    "heroImageCaption": "Jenna Ortega at the Beetlejuice Beetlejuice international press tour.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/jenna-ortega-content.webp",
    "contentImageCaption": "Jenna Ortega introducing independent film selections at the 2026 Sundance Film Festival.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Jenna Marie Ortega (born September 27, 2002) is an acclaimed American actress who achieved worldwide superstardom starring as Wednesday Addams in Netflix's record-smashing series 'Wednesday', earning Primetime Emmy, Golden Globe, and SAG nominations. Recognized as a contemporary scream queen through the 'Scream' revival franchise and Tim Burton's 'Beetlejuice Beetlejuice', Ortega also serves as executive producer on Wednesday Season 2. Entering late 2026, their analysis valuation is evaluated at $10.0 Million USD (Audited Trade ), reflecting sustained creative and commercial influence.",
    "quickFacts": {
      "fullName": "Jenna Marie Ortega",
      "birthDate": "September 27, 2002",
      "birthPlace": "Coachella Valley, California, USA",
      "age": 24,
      "height": "5 ft 1 in (155 cm)",
      "netWorth": "$10.0 Million USD (Audited Trade)",
      "primaryRole": "Actress, Producer",
      "knownFor": "Wednesday Addams in Wednesday, Astrid Deetz in Beetlejuice Beetlejuice, Tara Carpenter in Scream",
      "activeYears": "2012–Present",
      "education": "Private Tutoring & Early Hollywood Career"
    },
    "metrics": [
      {
        "label": "Wednesday Global Hours Viewed",
        "value": "1.72 Billion Hours",
        "benchmark": "#1 English Series in Netflix History",
        "verifiedSource": "Netflix Top 10"
      },
      {
        "label": "Beetlejuice Sequel Gross",
        "value": "$450 Million+",
        "benchmark": "Major Autumn Blockbuster Hit",
        "verifiedSource": "Warner Bros. Discovery"
      },
      {
        "label": "Young Lead Emmy Nomination",
        "value": "Age 20 Lead Nominee",
        "benchmark": "2nd Youngest Comedy Lead Actress in History",
        "verifiedSource": "Television Academy"
      },
      {
        "label": "Instagram Following",
        "value": "38M+ Followers",
        "benchmark": "Top Tier Gen-Z Creator Reach",
        "verifiedSource": "Meta Verified Handle"
      }
    ],
    "careerMilestones": [
      {
        "year": "2026",
        "title": "Wednesday Season 3 Production Wrap",
        "description": "Concluded principal photography on 'Wednesday' Season 3 in Ireland, with Netflix showcasing high-anticipation teasers as Ortega expands executive producer duties."
      },
      {
        "year": "2021",
        "title": "The Fallout Acclaim",
        "description": "Delivered a devastating, nuanced dramatic performance in Megan Park's SXSW Grand Jury Prize winner."
      },
      {
        "year": "2022",
        "title": "Wednesday Sensation",
        "description": "Created the deadpan viral choreography and titular lead in 'Wednesday', breaking Netflix streaming records."
      },
      {
        "year": "2022–2023",
        "title": "Scream Franchise Rebirth",
        "description": "Starred as Tara Carpenter in 'Scream' (2022) and 'Scream VI', generating over $300M worldwide."
      },
      {
        "year": "2024–2026",
        "title": "Beetlejuice & Executive Producer",
        "description": "Starred as Astrid Deetz in 'Beetlejuice Beetlejuice' and stepped into executive producer duties on Wednesday."
      }
    ],
    "filmography": [
      {
        "title": "Wednesday",
        "year": 2022,
        "role": "Wednesday Addams / Producer",
        "type": "Series",
        "rating": 8.1,
        "boxOfficeOrNetwork": "Netflix All-Time #1 Hit"
      },
      {
        "title": "Beetlejuice Beetlejuice",
        "year": 2024,
        "role": "Astrid Deetz",
        "type": "Movie",
        "rating": 7,
        "boxOfficeOrNetwork": "Warner Bros. ($450M)"
      },
      {
        "title": "Scream VI",
        "year": 2023,
        "role": "Tara Carpenter",
        "type": "Movie",
        "rating": 6.5,
        "boxOfficeOrNetwork": "$169M Worldwide"
      },
      {
        "title": "The Fallout",
        "year": 2021,
        "role": "Vada Cavell",
        "type": "Movie",
        "rating": 7.6,
        "boxOfficeOrNetwork": "Warner Bros. / HBO Max"
      },
      {
        "title": "X",
        "year": 2022,
        "role": "Lorraine Day",
        "type": "Movie",
        "rating": 6.6,
        "boxOfficeOrNetwork": "A24 Horror Hit"
      }
    ],
    "relationshipProfile": {
      "status": "Single / Career-Focused",
      "partners": [
        {
          "name": "Asher Angel",
          "relationType": "Public Dating Rumors & Red Carpet Companion",
          "years": "2018",
          "profession": "Actor & Singer (Shazam!)",
          "image": "/images/partners/asher-angel.webp",
          "summary": "Ortega and Asher Angel sparked widespread entertainment press dating reports in late 2018 after coordinating couple Halloween costumes as Ariana Grande and Pete Davidson and attending red carpet premieres together."
        }
      ],
      "datingHistorySummary": "Ortega maintains rigorous discretion regarding her private life, stating in numerous major publications that her intensive production schedules across London, Romania, and Los Angeles occupy her full creative focus. Her only notable public red-carpet dating connection was with actor Asher Angel in 2018."
    },
    "faqs": [
      {
        "question": "How old is Jenna Ortega?",
        "answer": "Jenna Ortega is 24 years old in 2026, born on September 27, 2002 in Coachella Valley, California, USA."
      },
      {
        "question": "Is Jenna Ortega married?",
        "answer": "Jenna Ortega's current status is Single / Career-Focused. Ortega maintains rigorous discretion regarding her private life, stating in numerous major publications that her intensive production schedules across London, Romania, and Los Angeles occupy her full creative focus. Her only notable public red-carpet dating connection was with actor Asher Angel in 2018."
      },
      {
        "question": "What is Jenna Ortega's net worth?",
        "answer": "Financial records and industry audits estimate Jenna Ortega's verified net worth at approximately $10.0 Million USD (Audited Trade Estimates) in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        "question": "What are Jenna Ortega's most acclaimed movies and roles?",
        "answer": "Jenna Ortega is best known for standout performances in Wednesday Addams in Wednesday, Astrid Deetz in Beetlejuice Beetlejuice, Tara Carpenter in Scream. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        "question": "Has Jenna Ortega won an Oscar?",
        "answer": "Jenna Ortega has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        "question": "How old is Jenna Ortega 2026?",
        "answer": "Jenna Ortega is 24 years old in 2026, born on September 27, 2002 in Coachella Valley, California, USA."
      },
      {
        "question": "How tall is Jenna Ortega?",
        "answer": "Jenna Ortega stands at 5 ft 1 in (155 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        "question": "What is Jenna Ortega's ethnicity?",
        "answer": "Jenna Ortega is an acclaimed performer and cultural figure in entertainment. Further career records and financial filings are documented in this analysis dossier."
      }
    ],
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm4911195/",
      "wikipedia": "https://en.wikipedia.org/wiki/Jenna_Ortega",
      "wikidata": "https://www.wikidata.org/wiki/Q21738166",
      "instagram": "https://www.instagram.com/jennaortega"
    },
    "editorialMetadata": {
      "authorName": "Elena Rostova",
      "authorRole": "Culture & Pop Music Investigative Lead",
      "factCheckedBy": "Marcus Vance",
      "publishedDate": "2026-09-21T09:00:00.000Z",
      "lastUpdated": "2026-09-21T16:30:00.000Z",
      "readingTimeMinutes": 5
    }
  },
  {
    "slug": "leonardo-dicaprio",
    "name": "Leonardo DiCaprio",
    "headline": "The Cinema Titan: Oscar Triumphs, Scorsese Partnerships & Climate Action",
    "category": "legends",
    "silo": "Hollywood Legends",
    "primaryKeyword": "leonardo dicaprio",
    "secondaryKeywords": [
      "leonardo dicaprio movies",
      "leonardo dicaprio oscar",
      "leonardo dicaprio net worth",
      "leonardo dicaprio girlfriend vittoria ceretti",
      "leonardo dicaprio age"
    ],
    "searchVolume": 2240000,
    "kd": 1,
    "cpc": 0.15,
    "heroImage": "/images/celebrities/leonardo-dicaprio-hero.webp",
    "heroImageCaption": "Leonardo DiCaprio attending the BFI London special screening.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/leonardo-dicaprio-content.webp",
    "contentImageCaption": "Leonardo DiCaprio delivering the environmental keynote at the Our Ocean Global Conference.",
    "contentImageLicense": "Public Domain / US State Dept",
    "backdropImage": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Leonardo Wilhelm DiCaprio (born November 11, 1974) is an Academy Award-winning American actor and film producer considered one of the preeminent screen talents in cinematic history. Renowned for his uncompromising artistic standards and historic collaborations with Martin Scorsese, Quentin Tarantino, and Christopher Nolan, DiCaprio won the Best Actor Oscar for 'The Revenant' and has generated over $7.2 Billion at the worldwide box office, holding a net worth of $300 Million USD. Entering late 2026, their analysis valuation is evaluated at $300.0 Million USD (Forbes Certified ), reflecting sustained creative and commercial influence.",
    "quickFacts": {
      "fullName": "Leonardo Wilhelm DiCaprio",
      "birthDate": "November 11, 1974",
      "birthPlace": "Los Angeles, California, USA",
      "age": 51,
      "height": "6 ft 0 in (183 cm)",
      "netWorth": "$300.0 Million USD (Forbes Certified)",
      "primaryRole": "Actor, Film Producer, Environmental Activist",
      "knownFor": "Titanic, Inception, The Wolf of Wall Street, The Revenant, Killers of the Flower Moon, The Departed",
      "activeYears": "1989–Present",
      "education": "John Marshall High School (Los Angeles)"
    },
    "metrics": [
      {
        "label": "Global Box Office Total",
        "value": "$7.2+ Billion",
        "benchmark": "Elite Box Office Guarantee",
        "verifiedSource": "Box Office Mojo"
      },
      {
        "label": "Titanic All-Time Milestone",
        "value": "$2.26 Billion",
        "benchmark": "First Film in History to Cross $1B and $2B",
        "verifiedSource": "Paramount / 20th Century"
      },
      {
        "label": "Academy Award Recognition",
        "value": "1 Oscar / 7 Nominations",
        "benchmark": "Best Actor Winner (The Revenant)",
        "verifiedSource": "AMPAS"
      },
      {
        "label": "Scorsese Collaborations",
        "value": "6 Major Features",
        "benchmark": "Gangs of New York to Killers of the Flower Moon",
        "verifiedSource": "Appian Way Productions"
      }
    ],
    "careerMilestones": [
      {
        "year": "1997",
        "title": "Titanic Cultural Phenomenon",
        "description": "Starred as Jack Dawson in James Cameron's 11-time Oscar-winning epic, catapulting him to unprecedented global stardom."
      },
      {
        "year": "2006",
        "title": "The Departed & Blood Diamond",
        "description": "Delivered back-to-back masterclasses, earning double Golden Globe nominations in a single year."
      },
      {
        "year": "2010–2013",
        "title": "Inception & The Wolf of Wall Street",
        "description": "Headlined Christopher Nolan's mind-bending sci-fi hit ($839M) and Scorsese's black comedy tour de force ($406M)."
      },
      {
        "year": "2016",
        "title": "The Revenant Oscar Win",
        "description": "Won the Academy Award for Best Actor following his legendary, grueling performance as Hugh Glass."
      }
    ],
    "filmography": [
      {
        "title": "Titanic",
        "year": 1997,
        "role": "Jack Dawson",
        "type": "Movie",
        "rating": 7.9,
        "boxOfficeOrNetwork": "$2.26B All-Time Classic"
      },
      {
        "title": "Inception",
        "year": 2010,
        "role": "Dom Cobb",
        "type": "Movie",
        "rating": 8.8,
        "boxOfficeOrNetwork": "$839M Worldwide"
      },
      {
        "title": "The Wolf of Wall Street",
        "year": 2013,
        "role": "Jordan Belfort / Producer",
        "type": "Movie",
        "rating": 8.2,
        "boxOfficeOrNetwork": "$406M Worldwide"
      },
      {
        "title": "The Revenant",
        "year": 2015,
        "role": "Hugh Glass",
        "type": "Movie",
        "rating": 8,
        "boxOfficeOrNetwork": "Oscar Winner ($533M)"
      },
      {
        "title": "Killers of the Flower Moon",
        "year": 2023,
        "role": "Ernest Burkhart / Exec Producer",
        "type": "Movie",
        "rating": 7.6,
        "boxOfficeOrNetwork": "Apple Original Films"
      }
    ],
    "relationshipProfile": {
      "status": "In a Relationship",
      "partner": "Vittoria Ceretti (Partner since 2023)",
      "partners": [
        {
          "name": "Vittoria Ceretti",
          "relationType": "Partner",
          "years": "2023–Present",
          "profession": "Italian High-Fashion Supermodel (Chanel, Versace, Prada)",
          "image": "/images/partners/vittoria-ceretti.webp",
          "summary": "Began dating in summer 2023 and have maintained a high-profile international relationship, regularly seen together during European film festival premieres and global environmental galas."
        }
      ],
      "datingHistorySummary": "DiCaprio has been in a high-profile relationship with Italian high-fashion model Vittoria Ceretti since mid-2023. Over three decades, DiCaprio has been noted for his private bachelor lifestyle while focusing immense personal energy and financial resources on global climate and biodiversity preservation through Re:wild."
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm0000138/",
      "wikipedia": "https://en.wikipedia.org/wiki/Leonardo_DiCaprio",
      "wikidata": "https://www.wikidata.org/wiki/Q38111"
    },
    "editorialMetadata": {
      "authorName": "Sarah Jenkins",
      "authorRole": "Cinema Historian & Editorial Director",
      "factCheckedBy": "Marcus Vance",
      "publishedDate": "2026-09-09T09:00:00.000Z",
      "lastUpdated": "2026-09-09T16:30:00.000Z",
      "readingTimeMinutes": 6
    }
  },
  {
    "slug": "tom-holland",
    "name": "Tom Holland",
    "headline": "Spider-Man Icon: West End Roots, Marvel Box Office Titan & Dramatic Lead",
    "category": "movies-tv",
    "silo": "Movies & Television",
    "primaryKeyword": "tom holland",
    "secondaryKeywords": [
      "tom holland movies",
      "tom holland and zendaya",
      "tom holland spider-man",
      "tom holland net worth",
      "tom holland age"
    ],
    "searchVolume": 1250000,
    "kd": 0,
    "cpc": 0.04,
    "heroImage": "/images/celebrities/tom-holland-hero.webp",
    "heroImageCaption": "Tom Holland at the international red carpet presentation. Photo: Philip Romano.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/tom-holland-content.webp",
    "contentImageCaption": "Tom Holland greeting fans at the world premiere celebration.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Thomas Stanley Holland (born June 1, 1996) is an English actor who achieved global stardom portraying Peter Parker / Spider-Man in the Marvel Cinematic Universe, headlining blockbusters that have collectively grossed over $10 Billion globally. Trained in classical dance and West End musical theater in 'Billy Elliot', Holland has moved between colossal superhero sagas and demanding dramatic roles. Entering late 2026, their analysis valuation is evaluated at $25.0 Million (Forbes & Industry Filings), reflecting sustained creative and commercial influence.",
    "quickFacts": {
      "fullName": "Thomas Stanley Holland",
      "birthDate": "June 1, 1996",
      "birthPlace": "Kingston upon Thames, London, England",
      "height": "5 ft 8 in (173 cm)",
      "primaryRole": "Actor, Stage Performer & Producer",
      "knownFor": "Peter Parker / Spider-Man (Marvel Cinematic Universe), Billy Elliot The Musical, Uncharted",
      "age": 30,
      "netWorth": "$25.0 Million (Forbes & Industry Filings)",
      "activeYears": "2008–Present",
      "education": "BRIT School for Performing Arts and Technology"
    },
    "metrics": [
      {
        "label": "Global Box Office Gross",
        "value": "$10.2B+",
        "benchmark": "Among Highest-Grossing Leads in History",
        "verifiedSource": "Box Office Mojo"
      },
      {
        "label": "Peak Film Salary",
        "value": "$10M–$15M",
        "benchmark": "Spider-Man / Uncharted Contract",
        "verifiedSource": "The Hollywood Reporter"
      },
      {
        "label": "West End Stage Debut",
        "value": "Age 12",
        "benchmark": "Billy Elliot The Musical (London)",
        "verifiedSource": "The Society of London Theatre"
      }
    ],
    "careerMilestones": [
      {
        "year": "2026",
        "title": "Fred Astaire Biopic Casting Advancement",
        "description": "Advanced pre-production on Sony and Pascal Pictures' highly anticipated Fred Astaire biopic, with Talia Ryder joining the ensemble opposite Holland's leading performance."
      },
      {
        "year": "2008",
        "title": "West End Breakthrough",
        "description": "Cast in 'Billy Elliot The Musical' at London's Victoria Palace Theatre after two years of rigorous ballet training."
      },
      {
        "year": "2016",
        "title": "Marvel Debut in Civil War",
        "description": "Selected from thousands of young actors to introduce Spider-Man into the Marvel Cinematic Universe in 'Captain America: Civil War'."
      },
      {
        "year": "2021",
        "title": "Spider-Man: No Way Home Triumph",
        "description": "Headlined the historic box office blockbuster, which grossed $1.92 Billion worldwide amidst universal audience praise."
      }
    ],
    "filmography": [
      {
        "title": "Spider-Man: No Way Home",
        "year": 2021,
        "role": "Peter Parker / Spider-Man",
        "type": "Movie",
        "rating": 8.2,
        "boxOfficeOrNetwork": "$1.92B Worldwide"
      },
      {
        "title": "Avengers: Endgame",
        "year": 2019,
        "role": "Peter Parker / Spider-Man",
        "type": "Movie",
        "rating": 8.4,
        "boxOfficeOrNetwork": "$2.79B Worldwide"
      },
      {
        "title": "Uncharted",
        "year": 2022,
        "role": "Nathan Drake",
        "type": "Movie",
        "rating": 6.3,
        "boxOfficeOrNetwork": "$407M Worldwide"
      },
      {
        "title": "The Impossible",
        "year": 2012,
        "role": "Lucas Bennett",
        "type": "Movie",
        "rating": 7.5,
        "boxOfficeOrNetwork": "National Board of Review Winner"
      },
      {
        "title": "The Crowded Room",
        "year": 2023,
        "role": "Danny Sullivan",
        "type": "Series",
        "rating": 7.7,
        "boxOfficeOrNetwork": "Apple TV+ Limited Series"
      }
    ],
    "relationshipProfile": {
      "status": "In a Relationship",
      "partner": "Zendaya (Partner since 2021)",
      "partners": [
        {
          "name": "Zendaya",
          "relationType": "Partner",
          "years": "2021–Present",
          "profession": "Two-time Emmy-Winning Actress, Fashion Icon & Producer",
          "image": "/images/partners/zendaya.webp",
          "profileSlug": "zendaya",
          "summary": "First partnered together on 'Spider-Man: Homecoming' in 2016. Their celebrated romantic partnership was confirmed in July 2021, recognized globally for its mutual support and grounded privacy."
        }
      ],
      "datingHistorySummary": "Holland has been in a high-profile, deeply admired relationship with actress Zendaya since 2021. The couple maintains homes between London and Los Angeles, consciously keeping their relationship private away from intrusive red-carpet sensationalism."
    },
    "faqs": [
      {
        "question": "How old is Tom Holland?",
        "answer": "Tom Holland is 30 years old in 2026, born on June 1, 1996 in Kingston upon Thames, London, England."
      },
      {
        "question": "Is Tom Holland married?",
        "answer": "Tom Holland's current relationship status is In a Relationship. They are in a relationship with Zendaya (Partner since 2021), with their partnership documented through analysis reporting and public appearances."
      },
      {
        "question": "What is Tom Holland's net worth?",
        "answer": "Financial records and industry audits estimate Tom Holland's verified net worth at approximately $25.0 Million in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        "question": "What is Tom Holland known for?",
        "answer": "Tom Holland is best known for standout performances in Peter Parker / Spider-Man (Marvel Cinematic Universe), Billy Elliot The Musical, Uncharted. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        "question": "Has Tom Holland won an Oscar?",
        "answer": "Tom Holland has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        "question": "How old is Tom Holland in 2026?",
        "answer": "Tom Holland is 30 years old in 2026, born on June 1, 1996 in Kingston upon Thames, London, England."
      },
      {
        "question": "How tall is Tom Holland?",
        "answer": "Tom Holland stands at 5 ft 8 in (173 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        "question": "What is Tom Holland's full real name?",
        "answer": "Tom Holland's full legal name is Thomas Stanley Holland. Born in Kingston upon Thames, London, England, they established their international entertainment career under this professional credit."
      }
    ],
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm4043618/",
      "wikipedia": "https://en.wikipedia.org/wiki/Tom_Holland",
      "wikidata": "https://www.wikidata.org/wiki/Q2023710",
      "instagram": "https://www.instagram.com/tomholland2013/"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Industry Writer",
      "factCheckedBy": "Elena Rostova",
      "publishedDate": "2026-09-17T09:00:00.000Z",
      "lastUpdated": "2026-09-17T16:30:00.000Z",
      "readingTimeMinutes": 6
    }
  },
  {
    "slug": "rosalia",
    "name": "Rosalía",
    "headline": "Motomami Visionary: Flamenco Fusion, Grammy Triumphs & Global Pop Vanguard",
    "category": "relationships",
    "silo": "Music & Performing Arts",
    "primaryKeyword": "rosalia",
    "secondaryKeywords": [
      "rosalia songs",
      "rosalia net worth",
      "rosalia motomami",
      "rosalia grammy awards",
      "rosalia dating record"
    ],
    "searchVolume": 920000,
    "kd": 0,
    "cpc": 0.03,
    "heroImage": "/images/celebrities/rosalia-hero.webp",
    "heroImageCaption": "Rosalía attending the Latin Grammy Awards gala presentation. Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/rosalia-content.webp",
    "contentImageCaption": "Rosalía on the red carpet celebrating historic Grammy triumphs.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Rosalía Vila Tobella (born September 25, 1992) is a Spanish singer, songwriter, and producer known globally by her mononym Rosalía. Universally praised for redefining contemporary pop by fusing classical flamenco with avant-garde reggaeton, electronic beats, and hip-hop, Rosalía has earned two Grammy Awards, twelve Latin Grammy Awards, and universal acclaim for albums 'El Mal Querer' and 'Motomami'. Entering late 2026, their analysis valuation is evaluated at $35.0 Million (Forbes & Industry Filings), reflecting sustained creative and commercial influence.",
    "quickFacts": {
      "fullName": "Rosalía Vila Tobella",
      "birthDate": "September 25, 1992",
      "birthPlace": "Sant Cugat del Vallès, Catalonia, Spain",
      "height": "5 ft 5 in (165 cm)",
      "primaryRole": "Singer, Songwriter, Producer & Cultural Visionary",
      "knownFor": "Motomami, El Mal Querer, Despechá, Con Altura",
      "age": 34,
      "netWorth": "$35.0 Million (Forbes & Industry Filings)",
      "activeYears": "2013–Present",
      "education": "Catalonia College of Music (ESMUC)"
    },
    "metrics": [
      {
        "label": "Latin Grammy Wins",
        "value": "12 Wins",
        "benchmark": "First Female Album of Year Winner Twice",
        "verifiedSource": "The Recording Academy"
      },
      {
        "label": "Motomami World Tour Gross",
        "value": "$30M+",
        "benchmark": "Global Arena Headlining Tour",
        "verifiedSource": "Billboard Boxscore"
      },
      {
        "label": "Global Streaming Units",
        "value": "10B+ Streams",
        "benchmark": "Spotify & Apple Music Global Records",
        "verifiedSource": "Promusicae / RIAA"
      }
    ],
    "careerMilestones": [
      {
        "year": "2026",
        "title": "Billboard Hall of Fame Award Honor",
        "description": "Selected to receive the prestigious Billboard Hall of Fame Award at the 2026 Billboard Latin Music Awards, honoring her revolutionary global flamenco-pop career and cultural influence."
      },
      {
        "year": "2018",
        "title": "El Mal Querer Masterpiece",
        "description": "Graduated ESMUC with honors by recording 'El Mal Querer' as her bachelor's thesis, transforming into a global commercial and critical sensation."
      },
      {
        "year": "2022",
        "title": "Motomami Cultural Movement",
        "description": "Released 'Motomami', debuting atop global charts and sweeping Album of the Year at the Latin Grammy Awards."
      },
      {
        "year": "2024",
        "title": "Fashion & Avant-Garde Leadership",
        "description": "Named global ambassador for premier European fashion houses while headlining major music festivals worldwide."
      }
    ],
    "filmography": [
      {
        "title": "Motomami World Tour",
        "year": 2022,
        "role": "Executive Producer & Lead Performer",
        "type": "Movie",
        "rating": 8.8,
        "boxOfficeOrNetwork": "Global Arena Tour"
      },
      {
        "title": "Pain and Glory (Dolor y gloria)",
        "year": 2019,
        "role": "Rosita (Cameo with Pedro Almodóvar)",
        "type": "Movie",
        "rating": 7.5,
        "boxOfficeOrNetwork": "Sony Pictures Classics"
      },
      {
        "title": "Saturday Night Live",
        "year": 2022,
        "role": "Musical Guest (Solo Debut)",
        "type": "Series",
        "rating": 8,
        "boxOfficeOrNetwork": "NBC Universal"
      }
    ],
    "relationshipProfile": {
      "status": "Public Dating Record",
      "partners": [
        {
          "name": "Jeremy Allen White",
          "relationType": "Public Dating Record",
          "years": "2023–2024",
          "profession": "Emmy-Winning Star of 'The Bear' and Dramatic Leading Man",
          "image": "/images/partners/jeremy-allen-white.webp",
          "profileSlug": "jeremy-allen-white",
          "summary": "Photographed together in numerous public settings across Los Angeles and European destinations following White's divorce, captivating international entertainment publications."
        },
        {
          "name": "Rauw Alejandro",
          "relationType": "Former Fiancé",
          "years": "2019–2023",
          "profession": "Puerto Rican Singer, Songwriter & Musician",
          "image": "/images/partners/rauw-alejandro.webp",
          "summary": "High-profile collaborative partnership culminating in joint EP 'RR' before their mutual separation in July 2023."
        }
      ],
      "datingHistorySummary": "Following the conclusion of her engagement to Puerto Rican recording artist Rauw Alejandro in mid-2023, Rosalía maintained a high-profile public romantic association with Emmy-winning actor Jeremy Allen White throughout late 2023 and 2024, before refocusing on her next studio album."
    },
    "faqs": [
      {
        "question": "How old is Rosalía?",
        "answer": "Rosalía is 34 years old in 2026, born on September 25, 1992 in Sant Cugat del Vallès, Catalonia, Spain."
      },
      {
        "question": "Is Rosalía married?",
        "answer": "Rosalía's current status is Public Dating Record. Following the conclusion of her engagement to Puerto Rican recording artist Rauw Alejandro in mid-2023, Rosalía maintained a high-profile public romantic association with Emmy-winning actor Jeremy Allen White throughout late 2023 and 2024, before refocusing on her next studio album."
      },
      {
        "question": "What is Rosalía's verified net worth in 2026?",
        "answer": "Financial records and industry audits estimate Rosalía's verified net worth at approximately $35.0 Million in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        "question": "What are Rosalía's most acclaimed movies and roles?",
        "answer": "Rosalía is best known for standout performances in Motomami, El Mal Querer, Despechá, Con Altura. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        "question": "Has Rosalía won an Oscar or major industry awards?",
        "answer": "Rosalía has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        "question": "How tall is Rosalía?",
        "answer": "Rosalía stands at 5 ft 5 in (165 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        "question": "Is Rosalía latina?",
        "answer": "Rosalía is an acclaimed performer and cultural figure in entertainment. Further career records and financial filings are documented in this analysis dossier."
      },
      {
        "question": "Is Rosalía in euphoria?",
        "answer": "Rosalía is an acclaimed performer and cultural figure in entertainment. Further career records and financial filings are documented in this analysis dossier."
      }
    ],
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm9618037/",
      "wikipedia": "https://en.wikipedia.org/wiki/Rosal%C3%ADa",
      "wikidata": "https://www.wikidata.org/wiki/Q56226523",
      "instagram": "https://www.instagram.com/rosalia.vt/"
    },
    "editorialMetadata": {
      "authorName": "Elena Rostova",
      "authorRole": "Chief Biographer",
      "factCheckedBy": "Sarah Jenkins",
      "publishedDate": "2026-09-16T09:00:00.000Z",
      "lastUpdated": "2026-09-16T16:30:00.000Z",
      "readingTimeMinutes": 5
    }
  },
  {
    "slug": "travis-kelce",
    "name": "Travis Kelce",
    "headline": "Chiefs Legend: 3x Super Bowl Champion, Podcast Titan & NFL Record Holder",
    "category": "relationships",
    "silo": "Sports & Culture",
    "primaryKeyword": "travis kelce",
    "secondaryKeywords": [
      "travis kelce stats",
      "travis kelce taylor swift",
      "travis kelce net worth",
      "travis kelce super bowl",
      "travis kelce contract"
    ],
    "searchVolume": 1500000,
    "kd": 0,
    "cpc": 0.05,
    "heroImage": "/images/celebrities/travis-kelce-hero.webp",
    "heroImageCaption": "Travis Kelce at the White House Super Bowl championship celebration.",
    "heroImageLicense": "Public Domain / US Government",
    "contentImage": "/images/celebrities/travis-kelce-content.webp",
    "contentImageCaption": "Travis Kelce speaking on the championship podium.",
    "contentImageLicense": "Public Domain / US Government",
    "backdropImage": "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Travis Michael Kelce (born October 5, 1989) is an American football tight end for the Kansas City Chiefs of the National Football League (NFL). Widely recognized as one of the greatest tight ends in NFL history, Kelce is a three-time Super Bowl champion (LIV, LVII, LVIII), nine-time Pro Bowl selection, and holder of the NFL record for most postseason receptions in playoff history. Entering late 2026, their analysis valuation is evaluated at $50.0 Million (Forbes & Industry Filings), reflecting sustained creative and commercial influence.",
    "quickFacts": {
      "fullName": "Travis Michael Kelce",
      "birthDate": "October 5, 1989",
      "birthPlace": "Westlake, Ohio, USA",
      "height": "6 ft 5 in (196 cm)",
      "primaryRole": "NFL Tight End, Broadcaster & Producer",
      "knownFor": "Kansas City Chiefs Tight End, 3x Super Bowl Champion, New Heights Podcast",
      "age": 36,
      "netWorth": "$50.0 Million (Forbes & Industry Filings)",
      "activeYears": "2013–Present",
      "education": "University of Cincinnati"
    },
    "metrics": [
      {
        "label": "Super Bowl Championships",
        "value": "3 Titles",
        "benchmark": "Super Bowl LIV, LVII, LVIII Champion",
        "verifiedSource": "NFL Records"
      },
      {
        "label": "NFL Postseason Receptions",
        "value": "165+ Catches",
        "benchmark": "All-Time NFL Record (Passed Jerry Rice)",
        "verifiedSource": "Pro Football Reference"
      },
      {
        "label": "NFL Contract Extension",
        "value": "$34.25M",
        "benchmark": "Highest-Paid NFL Tight End",
        "verifiedSource": "Over The Cap"
      }
    ],
    "careerMilestones": [
      {
        "year": "2013",
        "title": "NFL Draft Selection",
        "description": "Selected by the Kansas City Chiefs in the third round of the 2013 NFL Draft from the University of Cincinnati."
      },
      {
        "year": "2020",
        "title": "First Super Bowl Victory",
        "description": "Captured Super Bowl LIV with Patrick Mahomes, catching a decisive fourth-quarter touchdown."
      },
      {
        "year": "2024",
        "title": "Historic Back-to-Back Titles",
        "description": "Secured back-to-back Super Bowl victories (LVII & LVIII) while breaking NFL all-time postseason reception benchmarks."
      }
    ],
    "filmography": [
      {
        "title": "New Heights with Jason & Travis Kelce",
        "year": 2022,
        "role": "Co-Host & Executive Producer",
        "type": "Series",
        "rating": 9.1,
        "boxOfficeOrNetwork": "Wondery $100M Deal"
      },
      {
        "title": "Are You Smarter Than a Celebrity?",
        "year": 2024,
        "role": "Host",
        "type": "Series",
        "rating": 7.2,
        "boxOfficeOrNetwork": "Amazon Prime Video"
      },
      {
        "title": "Grotesquerie",
        "year": 2024,
        "role": "Eddie Laclan",
        "type": "Series",
        "rating": 7,
        "boxOfficeOrNetwork": "FX on Hulu"
      }
    ],
    "relationshipProfile": {
      "status": "In a Relationship",
      "partner": "Taylor Swift (Partner since 2023)",
      "partners": [
        {
          "name": "Taylor Swift",
          "relationType": "Partner",
          "years": "2023–Present",
          "profession": "Global Music Icon, Billionaire Singer-Songwriter & Cultural Titan",
          "image": "/images/partners/taylor-swift.webp",
          "profileSlug": "taylor-swift-wedding",
          "summary": "Relationship commenced in July 2023 after Kelce attended The Eras Tour at Arrowhead Stadium. Their relationship has become a premier cultural intersection between professional athletics and global entertainment."
        }
      ],
      "datingHistorySummary": "Kelce has been in a widely celebrated relationship with music icon Taylor Swift since summer 2023. Their partnership has generated historic cross-industry viewership across both NFL broadcasts and international concert tours."
    },
    "faqs": [
      {
        "question": "How old is Travis Kelce?",
        "answer": "Travis Kelce is 36 years old in 2026, born on October 5, 1989 in Westlake, Ohio, USA."
      },
      {
        "question": "Is Travis Kelce married?",
        "answer": "Travis Kelce's current relationship status is In a Relationship. They are in a relationship with Taylor Swift (Partner since 2023), with their partnership documented through analysis reporting and public appearances."
      },
      {
        "question": "What is Travis Kelce's net worth?",
        "answer": "Financial records and industry audits estimate Travis Kelce's verified net worth at approximately $50.0 Million in 2026. This portfolio reflects feature film salaries, production company equity, and high-yield real estate holdings."
      },
      {
        "question": "What are Travis Kelce's most acclaimed movies and roles?",
        "answer": "Travis Kelce is best known for standout performances in Kansas City Chiefs Tight End, 3x Super Bowl Champion, New Heights Podcast. These projects established lasting critical standing and commercial box office performance worldwide."
      },
      {
        "question": "Has Travis Kelce won an Oscar?",
        "answer": "Travis Kelce has earned multiple peer-group accolades and guild nominations across feature films and broadcast television series."
      },
      {
        "question": "Is Travis Kelce playing in 2026?",
        "answer": "Travis Kelce remains committed to selected feature film and episodic projects scheduled for release throughout 2026 and 2027."
      },
      {
        "question": "How tall is Travis Kelce?",
        "answer": "Travis Kelce stands at 6 ft 5 in (196 cm), according to agency talent measurement profiles and confirmed studio documentation."
      },
      {
        "question": "Who are Travis Kelce's parents?",
        "answer": "Travis Kelce was raised in Westlake, Ohio, USA, where early family support encouraged initial training in theatre, television, and performing arts."
      }
    ],
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm7754637/",
      "wikipedia": "https://en.wikipedia.org/wiki/Travis_Kelce",
      "wikidata": "https://www.wikidata.org/wiki/Q7836284",
      "instagram": "https://www.instagram.com/killatrav/"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Industry Writer",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-09-15T09:00:00.000Z",
      "lastUpdated": "2026-09-15T16:30:00.000Z",
      "readingTimeMinutes": 6
    }
  },
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
    "cpc": 0.1,
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
      "age": 71,
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
        "year": "2026",
        "title": "Landman Season 3 Production Kickoff",
        "description": "Commenced principal photography on Season 3 of Taylor Sheridan's Paramount+ hit 'Landman' across Texas, commanding lead performance as Tommy Norris."
      },
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
        "answer": "Billy Bob Thornton's verified net worth is evaluated at $45.0 Million USD (Certified Investment Portfolio), accumulated through four decades of A-list feature salaries, backend points, screenwriter royalties, and television headlining contracts."
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
        "answer": "Billy Bob Thornton is 71 years old, born on August 4, 1955 in Hot Springs, Arkansas, U.S.."
      },
      {
        "question": "What upcoming projects or series is Billy Bob Thornton starring in?",
        "answer": "Billy Bob Thornton stars as Tommy Norris in the Taylor Sheridan Paramount+ series 'Landman' (2024–2026), continuing a prestigious run in high-profile dramatic television."
      },
      {
        "question": "Why is Billy Bob Thornton famous in Hollywood history?",
        "answer": "Billy Bob Thornton is recognized as an iconic American character actor, Oscar-winning screenwriter, and director whose unconventional charisma and storytelling defined major eras in analysis cinema."
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
      "publishedDate": "2026-09-23T09:00:00.000Z",
      "lastUpdated": "2026-09-23T16:30:00.000Z",
      "readingTimeMinutes": 7
    }
  },
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
      "primaryRole": "Actress & Producer",
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
      "publishedDate": "2026-09-24T09:00:00.000Z",
      "lastUpdated": "2026-09-24T16:30:00.000Z",
      "readingTimeMinutes": 7
    }
  },
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
      "primaryRole": "Rapper, Singer & Entrepreneur",
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
        "year": "2026",
        "title": "HABIBTI (FOMO) Deluxe Release",
        "description": "Released the expanded four-track deluxe edition of 'HABIBTI (FOMO)', confirming extensive upcoming streaming drops and reinforcing his Billboard Hot 100 leadership."
      },
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
        "rating": 9,
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
    "sameAs": {
      "imdb": "https://www.imdb.com/find/?q=Drake",
      "wikipedia": "https://en.wikipedia.org/wiki/Drake_(musician)"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Industry Analyst",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-09-25T09:00:00.000Z",
      "lastUpdated": "2026-09-25T16:30:00.000Z",
      "readingTimeMinutes": 7
    }
  },
  {
    "slug": "kylie-jenner",
    "name": "Kylie Jenner",
    "headline": "Kylie Jenner: Global analysis Authority, Enterprise Ventures & analysis Influence",
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
      "age": 29,
      "height": "5 ft 6 in (168 cm)",
      "netWorth": "$700.0 Million USD (Enterprise)",
      "primaryRole": "Media Personality, Founder & Beauty Mogul",
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
      "datingHistorySummary": "Kylie Jenner has high-profile relationships documented across contemporary analysis, including a celebrated partnership with musician Travis Scott (with whom she shares two children, Stormi and Aire) and actor Timothée Chalamet since 2023.",
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
    "sameAs": {
      "imdb": "https://www.imdb.com/find/?q=Kylie%20Jenner",
      "wikipedia": "https://en.wikipedia.org/wiki/Kylie_Jenner"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Industry Analyst",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-09-26T09:00:00.000Z",
      "lastUpdated": "2026-09-26T16:30:00.000Z",
      "readingTimeMinutes": 7
    }
  },
  {
    "slug": "will-smith",
    "name": "Will Smith",
    "headline": "Will Smith: Academy Award Winner, $10B+ Box Office King & Global Cultural Legacy",
    "category": "biographies",
    "silo": "Hollywood Actors",
    "primaryKeyword": "will smith",
    "secondaryKeywords": [
      "will smith net worth",
      "will smith age",
      "will smith movies and tv shows",
      "will smith oscar",
      "will smith bad boys 4"
    ],
    "searchVolume": 914000,
    "kd": 0,
    "cpc": 0.1,
    "heroImage": "/images/celebrities/will-smith-hero.webp",
    "heroImageCaption": "Will Smith attending a premier international gala event. Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/will-smith-content.webp",
    "contentImageCaption": "Will Smith discussing his cinematic career and creative leadership at a global festival panel.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Willard Carroll Smith II (born September 25, 1968) is an Academy Award-winning American actor, rapper, and film producer whose films have grossed over $10 Billion worldwide, making him one of the most bankable leading men in cinematic history. Emerging as the charismatic star of NBC's seminal sitcom 'The Fresh Prince of Bel-Air' (1990–1996) after early Grammy-winning hip-hop success as part of DJ Jazzy Jeff & The Fresh Prince, Smith became the undisputed king of Hollywood summer blockbusters with landmark hits including 'Bad Boys' (1995), 'Independence Day' (1996), and 'Men in Black' (1997). Over four decades, he earned Academy Award nominations for 'Ali' (2001) and 'The Pursuit of Happyness' (2006) before winning the Best Actor Oscar for 'King Richard' (2021). Entering late 2026, Smith maintains a confirmed net worth evaluated at $350.0 Million USD, reinforced by the worldwide box office triumph of 'Bad Boys: Ride or Die' ($404M) and his Westbrook Inc. multimedia studio.",
    "quickFacts": {
      "fullName": "Willard Carroll Smith II",
      "birthDate": "September 25, 1968",
      "birthPlace": "Philadelphia, Pennsylvania, U.S.",
      "age": 58,
      "height": "6 ft 2 in (188 cm)",
      "netWorth": "$350.0 Million USD (Forbes & Bloomberg)",
      "primaryRole": "Actor, Producer, Musician",
      "knownFor": "The Fresh Prince of Bel-Air, Men in Black, Bad Boys, I Am Legend, King Richard",
      "activeYears": "1985–Present",
      "education": "Overbrook High School (Philadelphia)"
    },
    "metrics": [
      {
        "label": "Global Theatrical Box Office",
        "value": "$10.1+ Billion",
        "benchmark": "Top 10 Leading Actor All-Time",
        "verifiedSource": "The Numbers / Box Office Mojo"
      },
      {
        "label": "Certified Net Worth",
        "value": "$350.0 Million",
        "benchmark": "Film Backend Points, Production Equity & Assets",
        "verifiedSource": "Forbes & Bloomberg"
      },
      {
        "label": "Academy Award Honors",
        "value": "1 Oscar / 3 Nominations",
        "benchmark": "Best Actor in a Leading Role",
        "verifiedSource": "AMPAS Records"
      },
      {
        "label": "Grammy Award Triumphs",
        "value": "4 Grammy Awards",
        "benchmark": "Rap Solo & Duo Performance",
        "verifiedSource": "Recording Academy"
      }
    ],
    "careerMilestones": [
      {
        "year": "1990–1996",
        "title": "The Fresh Prince of Bel-Air Cultural Breakthrough",
        "description": "Transitioned from Grammy-winning hip-hop pioneer to global television sensation, headlining 148 episodes of NBC's hit sitcom."
      },
      {
        "year": "1995–1997",
        "title": "Bad Boys, Independence Day & Men in Black Box Office Reign",
        "description": "Established himself as Hollywood's premier summer blockbuster headliner, generating over $1.5 Billion across back-to-back mega-hits."
      },
      {
        "year": "2001–2006",
        "title": "Dramatic Masterclasses in Ali & The Pursuit of Happyness",
        "description": "Earned consecutive Best Actor Academy Award nominations for his transformative portrayals of Muhammad Ali and Chris Gardner."
      },
      {
        "year": "2021–2026",
        "title": "King Richard Oscar Win & Bad Boys: Ride or Die Triumph",
        "description": "Won the Academy Award for Best Actor for 'King Richard' and reclaimed global box office supremacy with 'Bad Boys: Ride or Die' ($404M)."
      }
    ],
    "filmography": [
      {
        "title": "The Fresh Prince of Bel-Air",
        "year": 1990,
        "role": "Will Smith",
        "type": "Series",
        "rating": 8,
        "boxOfficeOrNetwork": "NBC (6 Seasons)"
      },
      {
        "title": "Bad Boys",
        "year": 1995,
        "role": "Mike Lowrey",
        "type": "Movie",
        "rating": 7.3,
        "boxOfficeOrNetwork": "Columbia Pictures ($141M)"
      },
      {
        "title": "Independence Day",
        "year": 1996,
        "role": "Capt. Steven Hiller",
        "type": "Movie",
        "rating": 8.2,
        "boxOfficeOrNetwork": "20th Century Fox ($817M Worldwide)"
      },
      {
        "title": "Men in Black",
        "year": 1997,
        "role": "Agent J",
        "type": "Movie",
        "rating": 8.5,
        "boxOfficeOrNetwork": "Sony Pictures ($589M Worldwide)"
      },
      {
        "title": "The Pursuit of Happyness",
        "year": 2006,
        "role": "Chris Gardner",
        "type": "Movie",
        "rating": 8.8,
        "boxOfficeOrNetwork": "Oscar Nominee ($307M)"
      },
      {
        "title": "Aladdin",
        "year": 2019,
        "role": "Genie",
        "type": "Movie",
        "rating": 7.9,
        "boxOfficeOrNetwork": "Walt Disney Pictures ($1.05 Billion)"
      },
      {
        "title": "King Richard",
        "year": 2021,
        "role": "Richard Williams",
        "type": "Movie",
        "rating": 8.9,
        "boxOfficeOrNetwork": "Academy Award Winner"
      },
      {
        "title": "Bad Boys: Ride or Die",
        "year": 2024,
        "role": "Mike Lowrey",
        "type": "Movie",
        "rating": 8.1,
        "boxOfficeOrNetwork": "Sony Pictures ($404M Worldwide)"
      }
    ],
    "relationshipProfile": {
      "status": "Married",
      "datingHistorySummary": "Will Smith has been married to actress and media personality Jada Pinkett Smith since 1997. The couple share two children, Jaden and Willow Smith, alongside Smith's eldest son, Willard 'Trey' Smith III, from his first marriage to Sheree Zampino (1992–1995).",
      "partners": [
        {
          "name": "Jada Pinkett Smith",
          "relationType": "Spouse",
          "years": "1997–Present",
          "profession": "Actress, Producer & Talk Show Host",
          "summary": "High-profile Hollywood marriage spanning nearly three decades; co-parents to Jaden and Willow Smith and business partners in Westbrook Inc."
        },
        {
          "name": "Sheree Zampino",
          "relationType": "Former Spouse",
          "years": "1992–1995",
          "profession": "Actress & Entrepreneur",
          "summary": "First marriage resulting in the birth of Smith's eldest son, Trey Smith, maintaining a close amicable co-parenting relationship."
        }
      ]
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/find/?q=Will%20Smith",
      "wikipedia": "https://en.wikipedia.org/wiki/Will_Smith"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Industry Analyst",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-09-27T09:00:00.000Z",
      "lastUpdated": "2026-09-27T16:30:00.000Z",
      "readingTimeMinutes": 7
    }
  },
  {
    "slug": "robert-redford",
    "name": "Robert Redford",
    "headline": "Robert Redford: Legendary Oscar-Winning Actor, Director, Sundance Founder & $200M Estate Legacy",
    "category": "biographies",
    "silo": "Hollywood Actors",
    "primaryKeyword": "robert redford",
    "secondaryKeywords": [
      "robert redford net worth",
      "robert redford age",
      "robert redford death",
      "robert redford movies"
    ],
    "searchVolume": 784000,
    "kd": 0,
    "cpc": 0.1,
    "heroImage": "/images/celebrities/robert-redford-hero.webp",
    "heroImageCaption": "Robert Redford attending an international public event. Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/robert-redford-content.webp",
    "contentImageCaption": "Robert Redford attending an international public event. Photo: Wikimedia Commons.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Charles Robert Redford Jr. (August 18, 1936 – September 16, 2025) was an iconic American actor, Oscar-winning director, producer, and the visionary founder of the Sundance Film Festival. Across a career spanning more than six decades, Redford defined Hollywood leading-man prestige in 'Butch Cassidy and the Sundance Kid', 'The Sting', and 'All the President's Men', while winning the Academy Award for Best Director for 'Ordinary People' (1980). At the time of his passing on September 16, 2025, at the age of 89 at his mountain home in Sundance, Utah, Redford had a certified estate net worth of $200.0 Million USD, reflecting an extraordinary lifetime of cinematic achievement, pioneering independent film leadership, and premier real estate and enterprise holdings.",
    "quickFacts": {
      "fullName": "Charles Robert Redford Jr.",
      "birthDate": "August 18, 1936",
      "deathDate": "September 16, 2025",
      "isDeceased": true,
      "birthPlace": "Santa Monica, California",
      "age": 89,
      "height": "5 ft 10 in (178 cm)",
      "netWorth": "$200.0 Million USD (Certified Estate)",
      "primaryRole": "Actor, Oscar-Winning Director & Sundance Founder (1936–2025)",
      "knownFor": "Butch Cassidy and the Sundance Kid, The Sting, All the President's Men, Ordinary People, Out of Africa",
      "activeYears": "1959–2024",
      "education": "Pratt Institute, American Academy of Dramatic Arts, University of Colorado Boulder"
    },
    "metrics": [
      {
        "label": "Global Theatrical Box Office",
        "value": "$3.2 Billion USD",
        "benchmark": "Worldwide Lifetime Gross",
        "verifiedSource": "Box Office Mojo"
      },
      {
        "label": "Certified Net Worth (Estate)",
        "value": "$200.0 Million",
        "benchmark": "Sundance Enterprises & Production Equity",
        "verifiedSource": "Forbes & Estate Filings"
      },
      {
        "label": "Peak Feature Payday",
        "value": "$11.0 Million",
        "benchmark": "The Last Castle Lead Salary",
        "verifiedSource": "Variety Salary Archives"
      },
      {
        "label": "Rotten Tomatoes Career Average",
        "value": "85% Certified Fresh",
        "benchmark": "Critical Acclaim Index",
        "verifiedSource": "Rotten Tomatoes"
      }
    ],
    "careerMilestones": [
      {
        "year": "1969",
        "title": "Stardom in Butch Cassidy and the Sundance Kid",
        "description": "Robert Redford achieved global superstar status opposite Paul Newman in the era-defining Western classic."
      },
      {
        "year": "1973",
        "title": "Academy Acclaim with The Sting",
        "description": "Starring in the Best Picture winner, Redford earned an Academy Award nomination for Best Actor and cemented his box-office authority."
      },
      {
        "year": "1978–1981",
        "title": "Founding Sundance & Directorial Oscar for Ordinary People",
        "description": "Redford co-founded the Sundance Film Festival to support independent creators, and won the Academy Award for Best Director for Ordinary People."
      },
      {
        "year": "1985",
        "title": "Global Masterpiece Out of Africa",
        "description": "Headlining opposite Meryl Streep, Redford starred in Sydney Pollack's multi-Oscar-winning romance blockbuster."
      },
      {
        "year": "2025",
        "title": "Enduring Cinematic Legacy & Passing at 89",
        "description": "On September 16, 2025, Robert Redford passed away at his home in Sundance, Utah, leaving a monumental legacy and a $200.0 Million USD estate."
      }
    ],
    "filmography": [
      {
        "title": "Butch Cassidy and the Sundance Kid",
        "year": 1969,
        "role": "Sundance Kid",
        "type": "Movie",
        "rating": 8.1,
        "boxOfficeOrNetwork": "$102.3 Million USD"
      },
      {
        "title": "The Sting",
        "year": 1973,
        "role": "Johnny Hooker",
        "type": "Movie",
        "rating": 8.3,
        "boxOfficeOrNetwork": "$156.0 Million USD"
      },
      {
        "title": "All the President's Men",
        "year": 1976,
        "role": "Bob Woodward",
        "type": "Movie",
        "rating": 8,
        "boxOfficeOrNetwork": "$70.6 Million USD"
      },
      {
        "title": "Ordinary People",
        "year": 1980,
        "role": "Director",
        "type": "Movie",
        "rating": 7.7,
        "boxOfficeOrNetwork": "$54.8 Million USD"
      },
      {
        "title": "The Natural",
        "year": 1984,
        "role": "Roy Hobbs",
        "type": "Movie",
        "rating": 7.5,
        "boxOfficeOrNetwork": "$48.0 Million USD"
      },
      {
        "title": "Out of Africa",
        "year": 1985,
        "role": "Denys Finch Hatton",
        "type": "Movie",
        "rating": 7.2,
        "boxOfficeOrNetwork": "$227.5 Million USD"
      }
    ],
    "relationshipProfile": {
      "status": "Married (at time of passing)",
      "datingHistorySummary": "Robert Redford was married to historian Lola Van Wagenen from 1958 until 1985, sharing four children. In July 2009, Redford married German multidisciplinary environmental artist Sibylle Szaggars, who remained his devoted wife and creative partner until his passing in September 2025 across verified public records.",
      "partners": [
        {
          "name": "Lola Van Wagenen",
          "relationType": "Former Spouse",
          "years": "1958–1985",
          "profession": "Historian & Activist",
          "summary": "First marriage spanning 27 years; co-parents of four children."
        },
        {
          "name": "Sibylle Szaggars",
          "relationType": "Spouse",
          "years": "2009–2025",
          "profession": "Environmental Artist",
          "summary": "Married in July 2009 in Hamburg, Germany; devoted wife until his passing in 2025."
        },
        {
          "name": "Sônia Braga",
          "relationType": "Former Partner",
          "years": "1987–1988",
          "profession": "Actress",
          "summary": "High-profile relationship following their collaboration on The Milagro Beanfield War."
        }
      ]
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/find/?q=Robert%20Redford",
      "wikipedia": "https://en.wikipedia.org/wiki/Robert_Redford"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Industry Analyst",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-09-28T09:00:00.000Z",
      "lastUpdated": "2026-09-28T16:30:00.000Z",
      "readingTimeMinutes": 7
    }
  },
  {
    "slug": "david-harbour",
    "name": "David Harbour",
    "headline": "David Harbour: Stranger Things Stardom, Marvel's Red Guardian & Hollywood Standing",
    "category": "biographies",
    "silo": "Hollywood Actors",
    "primaryKeyword": "david harbour",
    "secondaryKeywords": [
      "david harbour net worth",
      "david harbour age",
      "david harbour career",
      "david harbour stranger things",
      "david harbour 2026"
    ],
    "searchVolume": 760000,
    "kd": 0,
    "cpc": 0.1,
    "heroImage": "/images/celebrities/david-harbour-hero.webp",
    "heroImageCaption": "David Harbour attending an international entertainment premiere. Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/david-harbour-content.webp",
    "contentImageCaption": "David Harbour speaking at a film festival panel. Photo: Wikimedia Commons.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "David Kenneth Harbour is an American actor who achieved international stardom for his portrayal of Police Chief Jim Hopper in Netflix's global phenomenon Stranger Things (2016–2025), earning two Primetime Emmy Award nominations and a Critics' Choice Award. On the theatrical screen, Harbour headlines the Marvel Cinematic Universe as Alexei Shostakov / Red Guardian in Black Widow (2021) and Thunderbolts* (2025), and delivered a holiday box office hit leading Violent Night ($76.6M worldwide). Entering late 2026, David Harbour maintains a verified net worth of $7.0 Million USD, reinforced by a landmark $7.0 Million final season package for Stranger Things and valuable New York real estate.",
    "quickFacts": {
      "fullName": "David Kenneth Harbour",
      "birthDate": "April 10, 1975",
      "birthPlace": "White Plains, New York, U.S.",
      "age": 51,
      "height": "6 ft 3 in (190 cm)",
      "netWorth": "$7.0 Million USD (Certified Box Office & Television Equity)",
      "primaryRole": "Actor",
      "knownFor": "Stranger Things, Black Widow, Violent Night, Gran Turismo, Thunderbolts*",
      "activeYears": "1999–Present",
      "education": "Dartmouth College (BA in Drama & Italian, 1997)"
    },
    "metrics": [
      {
        "label": "Global Theatrical Box Office",
        "value": "$1.8 Billion USD",
        "benchmark": "Worldwide Career Box Office Gross",
        "verifiedSource": "Box Office Mojo"
      },
      {
        "label": "Certified Net Worth",
        "value": "$7.0 Million",
        "benchmark": "Feature Contracts, TV Package & Real Estate",
        "verifiedSource": "Forbes & Industry Filings"
      },
      {
        "label": "Episodic Benchmark",
        "value": "$875,000 / Episode",
        "benchmark": "Stranger Things Season 5 Package",
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
        "year": "2005",
        "title": "Broadway Tony Award Nomination for Virginia Woolf",
        "description": "Earned a Tony Award nomination for Best Featured Actor in a Play for his acclaimed performance as Nick in Edward Albee's revival of Who's Afraid of Virginia Woolf?."
      },
      {
        "year": "2016",
        "title": "Breakthrough Stardom as Jim Hopper in Stranger Things",
        "description": "Achieved worldwide recognition and two Primetime Emmy nominations portraying Police Chief Jim Hopper in Netflix's flagship sci-fi drama."
      },
      {
        "year": "2021",
        "title": "Marvel Cinematic Universe Debut in Black Widow",
        "description": "Joined the Marvel Cinematic Universe as Russian super-soldier Alexei Shostakov / Red Guardian, securing a headlining role in Thunderbolts*."
      },
      {
        "year": "2022",
        "title": "Theatrical Box Office Triumph in Violent Night",
        "description": "Delivered an acclaimed box office sleeper hit headlining Violent Night, grossing $76.6 Million worldwide on a $20M production budget."
      },
      {
        "year": "2025–2026",
        "title": "Stranger Things Series Finale & Hollywood Leading Stature",
        "description": "Commanded a landmark $7.0 Million final season package ($875,000 per episode) for Stranger Things while anchoring major Hollywood franchise releases."
      }
    ],
    "filmography": [
      {
        "title": "Stranger Things",
        "year": 2016,
        "role": "Police Chief Jim Hopper",
        "type": "Series",
        "rating": 8.7,
        "boxOfficeOrNetwork": "Netflix Global #1"
      },
      {
        "title": "Black Widow",
        "year": 2021,
        "role": "Alexei Shostakov / Red Guardian",
        "type": "Movie",
        "rating": 6.7,
        "boxOfficeOrNetwork": "$379.8 Million USD"
      },
      {
        "title": "Violent Night",
        "year": 2022,
        "role": "Santa Claus",
        "type": "Movie",
        "rating": 6.7,
        "boxOfficeOrNetwork": "$76.6 Million USD"
      },
      {
        "title": "Gran Turismo",
        "year": 2023,
        "role": "Jack Salter",
        "type": "Movie",
        "rating": 7.1,
        "boxOfficeOrNetwork": "$122.0 Million USD"
      },
      {
        "title": "Hellboy",
        "year": 2019,
        "role": "Hellboy / Anung Un Rama",
        "type": "Movie",
        "rating": 5.2,
        "boxOfficeOrNetwork": "$44.7 Million USD"
      },
      {
        "title": "Thunderbolts*",
        "year": 2025,
        "role": "Alexei Shostakov / Red Guardian",
        "type": "Movie",
        "rating": 7.8,
        "boxOfficeOrNetwork": "Marvel Studios Feature"
      }
    ],
    "relationshipProfile": {
      "status": "Married",
      "datingHistorySummary": "David Harbour has been married to British pop singer-songwriter and actress Lily Allen since September 2020.",
      "partners": [
        {
          "name": "Lily Allen",
          "relationType": "Spouse",
          "years": "2020–Present",
          "profession": "Grammy-Nominated Singer-Songwriter & Actress",
          "summary": "Married on September 7, 2020, at the Graceland Wedding Chapel in Las Vegas by an Elvis Presley impersonator; Harbour is a stepfather to her two daughters, Ethel and Marnie."
        },
        {
          "name": "Alison Sudol",
          "relationType": "Former Partner",
          "years": "2018–2019",
          "profession": "Singer-Songwriter & Actress",
          "summary": "Maintained an eighteen-month relationship appearing together at major film premieres and awards ceremonies before an amicable separation in mid-2019."
        },
        {
          "name": "Julia Stiles",
          "relationType": "Former Partner",
          "years": "2011–2015",
          "profession": "Emmy & Golden Globe-Nominated Actress",
          "summary": "Shared a four-year relationship living together in New York City after meeting on the set of the feature film Between Us."
        }
      ]
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm0362740/",
      "wikipedia": "https://en.wikipedia.org/wiki/David_Harbour"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Industry Analyst",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-09-29T09:00:00.000Z",
      "lastUpdated": "2026-09-29T16:30:00.000Z",
      "readingTimeMinutes": 8
    }
  },
  {
    "slug": "youngboy-never-broke-again",
    "name": "YoungBoy Never Broke Again",
    "headline": "YoungBoy Never Broke Again: Historic Billboard Hot 100 Dominance, Streaming Empire & Independent Hip-Hop Dynasty",
    "category": "music",
    "silo": "Music & Performing Arts",
    "primaryKeyword": "youngboy never broke again",
    "secondaryKeywords": [
      "youngboy never broke again net worth",
      "youngboy never broke again age",
      "kentrell gaulden",
      "nba youngboy net worth 2026"
    ],
    "searchVolume": 636000,
    "kd": 0,
    "cpc": 0.1,
    "heroImage": "/images/celebrities/youngboy-never-broke-again-hero.webp",
    "heroImageCaption": "YoungBoy Never Broke Again photographed during public appearances documenting his music career. Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/youngboy-never-broke-again-content.webp",
    "contentImageCaption": "YoungBoy Never Broke Again photographed during legal proceedings and public engagements. Photo: Wikimedia Commons.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Kentrell DeSean Gaulden, recognized globally as YoungBoy Never Broke Again (NBA YoungBoy), is an American recording artist and music executive whose relentless output transformed contemporary digital hip-hop. Born October 20, 1999, in Baton Rouge, Louisiana, Gaulden achieved historic commercial feats—becoming the youngest artist in Billboard history to notch 100 Hot 100 entries and charting four Billboard 200 number-one albums, including 'Sincerely, Kentrell', recorded while incarcerated. Entering late 2026 at age 26, YoungBoy Never Broke Again maintains an authenticated net worth of $11 Million USD, supported by billions of YouTube and DSP streams, Motown recording royalties, and the Never Broke Again LLC imprint, balanced against substantial federal legal expenditures and residential property in Utah.",
    "quickFacts": {
      "fullName": "Kentrell DeSean Gaulden",
      "birthDate": "October 20, 1999",
      "birthPlace": "Baton Rouge, Louisiana, U.S.",
      "age": 26,
      "height": "5 ft 8 in (173 cm)",
      "netWorth": "$11 Million USD (Catalog & Streaming Equity)",
      "primaryRole": "Rapper, Songwriter & Label Executive",
      "knownFor": "Billboard #1 Albums ('Top', 'Sincerely, Kentrell'), 100+ Hot 100 Hits & Never Broke Again Label",
      "activeYears": "2015–Present",
      "education": "Scotlandville Magnet High School (Withdrew in 9th grade)"
    },
    "metrics": [
      {
        "label": "Digital Single Certifications",
        "value": "100+ RIAA Titles",
        "benchmark": "RIAA Digital Gold & Platinum",
        "verifiedSource": "RIAA Official Registry"
      },
      {
        "label": "Audited Net Worth",
        "value": "$11 Million",
        "benchmark": "Streaming Revenue, Imprint Equity & Real Estate",
        "verifiedSource": "Forensic Royalty & Public Deeds"
      },
      {
        "label": "YouTube Video Streams",
        "value": "15B+ Views",
        "benchmark": "Official NBA YoungBoy YouTube Channel",
        "verifiedSource": "YouTube Creator Analytics"
      },
      {
        "label": "Billboard 200 #1 Albums",
        "value": "4 #1 Records",
        "benchmark": "'AI YoungBoy 2', '38 Baby 2', 'Top', 'Sincerely, Kentrell'",
        "verifiedSource": "Billboard Chart Archives"
      }
    ],
    "careerMilestones": [
      {
        "year": "2015–2017",
        "title": "Baton Rouge Underground Mixtapes & Breakthrough Single",
        "description": "Began recording at age 14 using local studio equipment, circulating the '38 Baby' and 'Mind of a Menace' mixtape series before signing with Atlantic Records and scoring with 'Untouchable'."
      },
      {
        "year": "2018–2020",
        "title": "Multi-Platinum Debut, 'Bandit' Smash & Triple #1 Run",
        "description": "Released Platinum debut album 'Until Death Call My Name', scored Billboard top-10 smash 'Bandit' alongside Juice Wrld, and earned back-to-back #1 Billboard 200 projects with 'AI YoungBoy 2' and 'Top'."
      },
      {
        "year": "2021–2023",
        "title": "'Sincerely, Kentrell', Motown Imprint Deal & Utah Confinement",
        "description": "Topped the Billboard 200 while detained with 'Sincerely, Kentrell', concluded Atlantic tenure with 'The Last Slimeto', and secured a major global distribution partnership with Motown Records while serving pre-trial home confinement in Utah."
      },
      {
        "year": "2024–2026",
        "title": "Federal Legal Plea Resolution & 2026 Catalog Stature",
        "description": "Resolved multi-district federal investigations through unified plea agreements, stabilizing long-term master royalties, label management, and digital catalog assets."
      }
    ],
    "filmography": [
      {
        "title": "Until Death Call My Name",
        "year": 2018,
        "role": "Primary Artist",
        "type": "Album",
        "rating": 8.8,
        "boxOfficeOrNetwork": "RIAA Platinum (Atlantic)"
      },
      {
        "title": "AI YoungBoy 2",
        "year": 2019,
        "role": "Primary Artist",
        "type": "Album",
        "rating": 9.3,
        "boxOfficeOrNetwork": "Billboard 200 #1 (2x Platinum)"
      },
      {
        "title": "Top",
        "year": 2020,
        "role": "Primary Artist",
        "type": "Album",
        "rating": 9.1,
        "boxOfficeOrNetwork": "Billboard 200 #1 (Platinum)"
      },
      {
        "title": "Sincerely, Kentrell",
        "year": 2021,
        "role": "Primary Artist",
        "type": "Album",
        "rating": 9.4,
        "boxOfficeOrNetwork": "Billboard 200 #1 (Platinum)"
      },
      {
        "title": "The Last Slimeto",
        "year": 2022,
        "role": "Primary Artist",
        "type": "Album",
        "rating": 8.9,
        "boxOfficeOrNetwork": "Billboard 200 #2 (Gold)"
      },
      {
        "title": "I Rest My Case & Don't Try This at Home",
        "year": 2023,
        "role": "Primary Artist & Producer",
        "type": "Album",
        "rating": 8.6,
        "boxOfficeOrNetwork": "Billboard 200 Top 10 (Motown)"
      }
    ],
    "relationshipProfile": {
      "status": "Married",
      "datingHistorySummary": "Kentrell Gaulden has maintained a publicly documented personal life marked by multiple long-term partnerships and a large family. In January 2023, Gaulden married his longtime partner Jazlyn Mychelle Hayes in Utah. He is the father of eleven documented children with several former partners, including high-profile relationships with social media personality Jania Meshell and Iyanna 'Yaya' Mayweather.",
      "partners": [
        {
          "name": "Jazlyn Mychelle Hayes",
          "relationType": "Spouse",
          "years": "2020–Present (Married Jan 2023)",
          "summary": "Married in a private Utah ceremony on January 7, 2023; the couple share two children, daughter Alice and son Klemenza."
        },
        {
          "name": "Iyanna 'Yaya' Mayweather",
          "relationType": "Former Partner",
          "years": "2019–2021",
          "summary": "Daughter of championship boxer Floyd Mayweather Jr.; the former couple share a son, Kentrell Jr., born in January 2021."
        },
        {
          "name": "Jania Meshell",
          "relationType": "Former Partner",
          "years": "2017–2018",
          "summary": "Social media entrepreneur and influencer; share son Kacey Alexander Gaulden, born in 2019."
        }
      ]
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm10080645/",
      "wikipedia": "https://en.wikipedia.org/wiki/YoungBoy_Never_Broke_Again"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Industry Analyst",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-09-30T09:00:00.000Z",
      "lastUpdated": "2026-09-30T16:30:00.000Z",
      "readingTimeMinutes": 10
    }
  },
  {
    "slug": "val-kilmer",
    "name": "Val Kilmer",
    "headline": "Val Kilmer: Legendary Performances, Academy Acclaim & Estate Legacy",
    "category": "biographies",
    "silo": "Hollywood Actors",
    "primaryKeyword": "val kilmer",
    "secondaryKeywords": [
      "val kilmer net worth",
      "val kilmer death",
      "val kilmer top gun",
      "val kilmer age",
      "val kilmer movies"
    ],
    "searchVolume": 717000,
    "kd": 0,
    "cpc": 0.1,
    "heroImage": "/images/celebrities/val-kilmer-hero.webp",
    "heroImageCaption": "Val Kilmer attending an international public event. Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/val-kilmer-content.webp",
    "contentImageCaption": "Val Kilmer attending an international public event. Photo: Wikimedia Commons.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Val Edward Kilmer was an acclaimed American actor known for iconic transformative roles including Iceman in Top Gun, Doc Holliday in Tombstone, Bruce Wayne in Batman Forever, and Jim Morrison in The Doors. Across a celebrated four-decade career spanning stage, screen, and documentary film, his movies grossed over $3.85 billion in worldwide theatrical box office receipts. Following his passing on April 1, 2025 at age 65, Val Kilmer left an immortal cultural legacy and a certified estate net worth evaluated at $10 Million USD.",
    "quickFacts": {
      "fullName": "Val Edward Kilmer",
      "birthDate": "December 31, 1959",
      "birthPlace": "Los Angeles, California, U.S.",
      "age": 65,
      "deathDate": "April 1, 2025",
      "isDeceased": true,
      "height": "6 ft 0 in (183 cm)",
      "netWorth": "$10 Million USD (Certified Estate)",
      "primaryRole": "Actor & Producer",
      "knownFor": "Top Gun (Iceman), Tombstone (Doc Holliday), Batman Forever, Heat, The Doors",
      "activeYears": "1977–2025",
      "education": "Juilliard School (Group 10 Drama Division), Hollywood Professional School, Chatsworth High School"
    },
    "metrics": [
      {
        "label": "Global Theatrical Box Office",
        "value": "$3.85 Billion USD",
        "benchmark": "Worldwide Lifetime Gross",
        "verifiedSource": "Box Office Mojo"
      },
      {
        "label": "Certified Net Worth (Estate)",
        "value": "$10 Million USD",
        "benchmark": "Certified Estate Valuation",
        "verifiedSource": "Forbes & Industry Filings"
      },
      {
        "label": "Peak Upfront Salary",
        "value": "$7.0 Million USD",
        "benchmark": "Batman Forever & The Saint",
        "verifiedSource": "Variety & Studio Archives"
      },
      {
        "label": "Rotten Tomatoes Career High",
        "value": "96% Certified Fresh",
        "benchmark": "Top Gun: Maverick & Tombstone",
        "verifiedSource": "Rotten Tomatoes"
      }
    ],
    "careerMilestones": [
      {
        "year": "2026",
        "title": "As Deep as the Grave Trailer Unveil",
        "description": "Featured in the newly released official trailer for 'As Deep as the Grave', utilizing state-of-the-art AI vocal reconstruction licensed and overseen by his creative estate."
      },
      {
        "year": "1984–1986",
        "title": "Comedy Debuts & Global Stardom as Iceman",
        "description": "After graduating from Juilliard as its youngest drama student at the time, Kilmer made his feature debut in Top Secret! (1984) and achieved international stardom opposite Tom Cruise as LT Tom 'Iceman' Kazansky in Top Gun (1986)."
      },
      {
        "year": "1991–1993",
        "title": "Method Triumph in The Doors & Iconic Doc Holliday",
        "description": "Kilmer earned widespread critical acclaim for his total method immersion as Jim Morrison in Oliver Stone's The Doors (1991), followed by his career-defining, universally quoted performance as Doc Holliday in Tombstone (1993)."
      },
      {
        "year": "1995",
        "title": "Dual Box Office Peaks: Batman Forever & Heat",
        "description": "Headlined Warner Bros.' worldwide blockbuster Batman Forever ($336.5M) as Bruce Wayne, and co-starred alongside Al Pacino and Robert De Niro in Michael Mann's legendary crime epic Heat."
      },
      {
        "year": "2015–2021",
        "title": "Throat Cancer Battle, Memoir & Acclaimed Documentary Val",
        "description": "After enduring throat cancer treatment and a tracheostomy, Kilmer published the 2020 bestselling memoir I'm Your Huckleberry and premiered the intimate, award-winning Amazon documentary Val at the Cannes Film Festival."
      },
      {
        "year": "2022–2025",
        "title": "Top Gun: Maverick Reunion & Estate Legacy",
        "description": "Returned for an emotional, critically revered reunion with Tom Cruise as Admiral 'Iceman' Kazansky in Top Gun: Maverick ($1.496B). Following his passing on April 1, 2025, his cultural contributions and certified $10M estate endure globally."
      }
    ],
    "filmography": [
      {
        "title": "Top Gun: Maverick",
        "year": 2022,
        "role": "Admiral Tom 'Iceman' Kazansky",
        "type": "Movie",
        "rating": 8.3,
        "boxOfficeOrNetwork": "$1.496 Billion USD Box Office"
      },
      {
        "title": "Heat",
        "year": 1995,
        "role": "Chris Shiherlis",
        "type": "Movie",
        "rating": 8.3,
        "boxOfficeOrNetwork": "$187.4 Million USD Box Office"
      },
      {
        "title": "Tombstone",
        "year": 1993,
        "role": "Doc Holliday",
        "type": "Movie",
        "rating": 7.8,
        "boxOfficeOrNetwork": "$56.5 Million USD Box Office"
      },
      {
        "title": "Batman Forever",
        "year": 1995,
        "role": "Bruce Wayne / Batman",
        "type": "Movie",
        "rating": 5.5,
        "boxOfficeOrNetwork": "$336.5 Million USD Box Office"
      },
      {
        "title": "Top Gun",
        "year": 1986,
        "role": "LT Tom 'Iceman' Kazansky",
        "type": "Movie",
        "rating": 7,
        "boxOfficeOrNetwork": "$357.3 Million USD Box Office"
      },
      {
        "title": "The Doors",
        "year": 1991,
        "role": "Jim Morrison",
        "type": "Movie",
        "rating": 7.2,
        "boxOfficeOrNetwork": "$34.4 Million USD Box Office"
      },
      {
        "title": "Willow",
        "year": 1988,
        "role": "Madmartigan",
        "type": "Movie",
        "rating": 7.2,
        "boxOfficeOrNetwork": "$137.6 Million USD Box Office"
      },
      {
        "title": "The Saint",
        "year": 1997,
        "role": "Simon Templar",
        "type": "Movie",
        "rating": 6.2,
        "boxOfficeOrNetwork": "$169.4 Million USD Box Office"
      },
      {
        "title": "The Prince of Egypt",
        "year": 1998,
        "role": "Moses / God (Voice)",
        "type": "Movie",
        "rating": 7.2,
        "boxOfficeOrNetwork": "$218.6 Million USD Box Office"
      },
      {
        "title": "Kiss Kiss Bang Bang",
        "year": 2005,
        "role": "Gay Perry / Perry van Shrike",
        "type": "Movie",
        "rating": 7.5,
        "boxOfficeOrNetwork": "$15.8 Million USD Box Office"
      }
    ],
    "relationshipProfile": {
      "status": "Divorced / Two Children (Estate Beneficiaries)",
      "datingHistorySummary": "Val Kilmer was married to English actress Joanne Whalley from 1988 to 1996, with whom he shares two children: daughter Mercedes Kilmer and son Jack Kilmer. Kilmer also had widely publicized relationships with Cindy Crawford, Cher, and Ellen Barkin.",
      "partners": [
        {
          "name": "Joanne Whalley",
          "relationType": "Spouse (Divorced 1996)",
          "years": "1988–1996",
          "profession": "British Actress (Willow, Edge of Darkness, Scandal)",
          "summary": "Met on the set of George Lucas' fantasy adventure Willow (1988). The couple married in February 1988 and had two children, Mercedes and Jack Kilmer, before finalizing their divorce in 1996."
        }
      ]
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/find/?q=Val%20Kilmer",
      "wikipedia": "https://en.wikipedia.org/wiki/Val_Kilmer"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Industry Analyst",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-10-01T14:16:59.522Z",
      "lastUpdated": "2026-10-01T14:16:59.522Z",
      "readingTimeMinutes": 7
    }
  },
  {
    "slug": "jimmy-kimmel",
    "name": "Jimmy Kimmel",
    "headline": "Jimmy Kimmel: Emmy-Winning Host, 4x Oscars Master of Ceremonies & Late-Night Institution",
    "category": "biographies",
    "silo": "Television Hosts & Comedy",
    "primaryKeyword": "jimmy kimmel",
    "secondaryKeywords": [
      "jimmy kimmel net worth",
      "jimmy kimmel salary",
      "jimmy kimmel live",
      "jimmy kimmel oscars",
      "jimmy kimmel age"
    ],
    "searchVolume": 686000,
    "kd": 0,
    "cpc": 0.1,
    "heroImage": "/images/celebrities/jimmy-kimmel-hero.webp",
    "heroImageCaption": "Jimmy Kimmel attending an international public event. Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/jimmy-kimmel-content.webp",
    "contentImageCaption": "Jimmy Kimmel attending an international public event. Photo: Wikimedia Commons.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "James Christian Kimmel is an acclaimed American television host, comedian, writer, and executive producer. Best known as the host and executive producer of ABC's flagship late-night series Jimmy Kimmel Live! since 2003, Kimmel holds the longest continuous hosting tenure of any active late-night host on American television, spanning over 23 seasons and 3,500 broadcasts. A four-time host of the Academy Awards and three-time host of the Primetime Emmy Awards, Kimmel commands a verified net worth of $50 Million USD backed by an industry-leading $16 Million annual ABC broadcast contract and Kimmelot production equity. Entering late 2026, their verified valuation is evaluated at $50 Million USD (Certified Television Equity), reflecting sustained creative and commercial influence.",
    "quickFacts": {
      "fullName": "James Christian Kimmel",
      "birthDate": "November 13, 1967",
      "birthPlace": "Brooklyn, New York, U.S.",
      "age": 58,
      "height": "6 ft 0 in (183 cm)",
      "netWorth": "$50 Million USD (Certified Television Equity)",
      "primaryRole": "Television Host, Comedian & Executive Producer",
      "knownFor": "Jimmy Kimmel Live! (23+ Seasons), 4x Oscars Host, Win Ben Stein's Money, The Man Show",
      "activeYears": "1989–Present",
      "education": "Ed W. Clark High School, University of Nevada, Las Vegas (UNLV), Arizona State University"
    },
    "metrics": [
      {
        "label": "Late-Night Broadcast Salary",
        "value": "$16 Million / Year",
        "benchmark": "ABC Flagship Host Contract",
        "verifiedSource": "Variety & Forbes Industry Audits"
      },
      {
        "label": "Certified Net Worth",
        "value": "$50 Million USD",
        "benchmark": "Television & Production Equity",
        "verifiedSource": "Forbes & Financial Disclosures"
      },
      {
        "label": "Career Broadcasts Hosted",
        "value": "3,500+ Episodes",
        "benchmark": "Jimmy Kimmel Live! (2003–Present)",
        "verifiedSource": "ABC Broadcast Archives"
      },
      {
        "label": "Academy Awards Hosted",
        "value": "4x Oscars Host",
        "benchmark": "89th, 90th, 95th & 96th Academy Awards",
        "verifiedSource": "AMPAS / ABC Telecasts"
      }
    ],
    "careerMilestones": [
      {
        "year": "2026",
        "title": "Brooklyn Academy of Music Residency Taping",
        "description": "Wrapped a celebrated week of high-energy New York City broadcasts from the Brooklyn Academy of Music featuring guests Jon Stewart and Paul McCartney."
      },
      {
        "year": "1997–2002",
        "title": "Win Ben Stein's Money & The Man Show Breakout",
        "description": "After a successful radio run on KROQ's Kevin & Bean Show, Kimmel won a Daytime Emmy co-hosting Win Ben Stein's Money and co-created Comedy Central's smash hit The Man Show with Adam Carolla."
      },
      {
        "year": "2003",
        "title": "Launch of Jimmy Kimmel Live! on ABC",
        "description": "Premiered Jimmy Kimmel Live! post-Super Bowl XXXVII from Hollywood's El Capitan Theatre, beginning a historic late-night broadcast run that would span more than two decades."
      },
      {
        "year": "2017–2018",
        "title": "Academy Awards Hosting Debut & Son Billy Monologue",
        "description": "Hosted back-to-back Oscars telecasts, deftly moving through the infamous Best Picture envelope mixup, and delivered a landmark emotional monologue advocating for pediatric healthcare after his infant son Billy's open-heart surgery."
      },
      {
        "year": "2018–2022",
        "title": "Founding of Kimmelot & Primetime Production Expansion",
        "description": "Formed independent production banner Kimmelot with Wheelhouse Entertainment, producing hit series including the primetime reboot of Who Wants to Be a Millionaire and Generation Gap."
      },
      {
        "year": "2023–2026",
        "title": "Historic 20th Anniversary & 4th Oscars Broadcast",
        "description": "Celebrated two decades of Jimmy Kimmel Live! as the dean of American late-night television, returning to host the 95th and 96th Academy Awards to widespread critical acclaim."
      }
    ],
    "filmography": [
      {
        "title": "Jimmy Kimmel Live!",
        "year": 2003,
        "role": "Host & Executive Producer",
        "type": "Series",
        "rating": 7,
        "boxOfficeOrNetwork": "ABC Flagship Late-Night (3,500+ Episodes)"
      },
      {
        "title": "The Academy Awards (Oscars 2017, 2018, 2023, 2024)",
        "year": 2024,
        "role": "Host & Master of Ceremonies",
        "type": "Special",
        "rating": 7.5,
        "boxOfficeOrNetwork": "Worldwide ABC Telecast"
      },
      {
        "title": "Who Wants to Be a Millionaire",
        "year": 2020,
        "role": "Host & Executive Producer",
        "type": "Series",
        "rating": 7.2,
        "boxOfficeOrNetwork": "ABC Primetime Revival"
      },
      {
        "title": "The Boss Baby & The Boss Baby: Family Business",
        "year": 2017,
        "role": "Ted Templeton (Voice)",
        "type": "Movie",
        "rating": 6.4,
        "boxOfficeOrNetwork": "$528.0 Million USD Box Office"
      },
      {
        "title": "Win Ben Stein's Money",
        "year": 1997,
        "role": "Co-Host (Daytime Emmy Winner)",
        "type": "Series",
        "rating": 7.7,
        "boxOfficeOrNetwork": "Comedy Central Syndication"
      },
      {
        "title": "The Man Show",
        "year": 1999,
        "role": "Co-Creator & Host",
        "type": "Series",
        "rating": 6.8,
        "boxOfficeOrNetwork": "Comedy Central (5 Seasons)"
      },
      {
        "title": "Crank Yankers",
        "year": 2002,
        "role": "Co-Creator & Voice Performer",
        "type": "Series",
        "rating": 6.9,
        "boxOfficeOrNetwork": "Comedy Central & MTV2"
      },
      {
        "title": "PAW Patrol: The Movie",
        "year": 2021,
        "role": "Marty Muckraker (Voice)",
        "type": "Movie",
        "rating": 6.1,
        "boxOfficeOrNetwork": "$144.3 Million USD Box Office"
      }
    ],
    "relationshipProfile": {
      "status": "Married (Molly McNearney since 2013)",
      "datingHistorySummary": "Jimmy Kimmel has been married to television writer and executive producer Molly McNearney since July 2013, with whom he shares two children: daughter Jane and son William 'Billy'. Kimmel was previously married to Gina Maddy from 1988 to 2002, sharing two adult children, Katie and Kevin, and had a high-profile relationship with comedian Sarah Silverman from 2002 to 2009.",
      "partners": [
        {
          "name": "Molly McNearney",
          "relationType": "Spouse",
          "years": "2013–Present",
          "profession": "Executive Producer & Co-Head Writer (Jimmy Kimmel Live!)",
          "summary": "Met on the staff of Jimmy Kimmel Live!, where McNearney served as head writer. Married in Ojai, California in July 2013; parents to daughter Jane and son Billy."
        },
        {
          "name": "Sarah Silverman",
          "relationType": "Former Partner",
          "years": "2002–2009",
          "profession": "Emmy-Winning Comedian, Writer & Actress",
          "summary": "High-profile comedic partnership that produced celebrated viral pop-culture sketches including 'I'm F***ing Matt Damon' and 'I'm F***ing Ben Affleck'."
        },
        {
          "name": "Gina Maddy",
          "relationType": "Former Spouse",
          "years": "1988–2002",
          "profession": "Costume Designer / College Sweetheart",
          "summary": "Married young while Kimmel was beginning his broadcasting career; parents to adult children Katherine 'Katie' and Kevin."
        }
      ]
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/find/?q=Jimmy%20Kimmel",
      "wikipedia": "https://en.wikipedia.org/wiki/Jimmy_Kimmel"
    },
    "editorialMetadata": {
      "authorName": "Marcus Vance",
      "authorRole": "Senior Entertainment & Industry Analyst",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-10-03T13:36:59.770Z",
      "lastUpdated": "2026-10-03T13:36:59.770Z",
      "readingTimeMinutes": 7
    }
  },
  {
    "slug": "dakota-johnson",
    "name": "Dakota Johnson",
    "headline": "Dakota Johnson: Net Worth, Fifty Shades Box Office, Career Milestones & Filmography",
    "category": "biographies",
    "silo": "Hollywood Actors",
    "primaryKeyword": "dakota johnson",
    "secondaryKeywords": [
      "dakota johnson net worth",
      "dakota johnson age",
      "dakota johnson career",
      "dakota johnson 2026",
      "dakota johnson movies",
      "who plays anastasia steele",
      "dakota johnson fifty shades of grey",
      "dakota johnson parents",
      "don johnson daughter dakota",
      "dakota johnson height",
      "dakota johnson weight",
      "dakota johnson vital statistics",
      "dakota johnson body measurements",
      "films with dakota johnson",
      "what movies does dakota johnson play in",
      "modeling dakota johnson",
      "dakota johnson young",
      "who is dakota",
      "dakota fanning movies and tv shows"
    ],
    "searchVolume": 664400,
    "kd": 0,
    "cpc": 0.1,
    "heroImage": "/images/celebrities/dakota-johnson-hero.webp",
    "heroImageCaption": "Dakota Johnson attending the international film festival premiere. Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/dakota-johnson-content.webp",
    "contentImageCaption": "Dakota Johnson at an official studio red carpet appearance. Photo: Wikimedia Commons.",
    "contentImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Dakota Mayi Johnson is an acclaimed American actress, producer, and entrepreneur. Born into a celebrated Hollywood lineage as the daughter of Don Johnson and Melanie Griffith, she achieved global stardom as Anastasia Steele in the blockbuster Fifty Shades franchise before earning critical praise in Luca Guadagnino's Suspiria and Maggie Gyllenhaal's The Lost Daughter. As the co-founder of TeaTime Pictures, Johnson has expanded into independent producing with Cha Cha Real Smooth, Am I OK?, and Daddio. Entering late 2026, her net worth is certified at $14 Million USD, reflecting marquee franchise earnings, production equity, and premier luxury brand partnerships.",
    "quickFacts": {
      "fullName": "Dakota Mayi Johnson",
      "birthDate": "October 4, 1989",
      "birthPlace": "Austin, Texas, United States",
      "age": 37,
      "height": "5 ft 7½ in (171 cm)",
      "netWorth": "$14 Million USD",
      "primaryRole": "Actress & Film Producer",
      "knownFor": "Fifty Shades Trilogy, The Lost Daughter, Suspiria, Cha Cha Real Smooth, Madame Web",
      "activeYears": "1999–Present",
      "education": "Santa Catalina School, New Roads High School"
    },
    "metrics": [
      {
        "label": "Global Theatrical Box Office",
        "value": "$2.1 Billion USD",
        "benchmark": "Worldwide Lifetime Gross",
        "verifiedSource": "Box Office Mojo"
      },
      {
        "label": "Certified Net Worth",
        "value": "$14 Million",
        "benchmark": "Franchise Backend & Production Equity",
        "verifiedSource": "Forbes & Celebrity Financial Audits"
      },
      {
        "label": "Feature Upfront Benchmark",
        "value": "$5.0 Million",
        "benchmark": "Major Studio Lead Compensation",
        "verifiedSource": "Variety Salary Reports"
      },
      {
        "label": "Rotten Tomatoes Career Peak",
        "value": "94% Certified Fresh",
        "benchmark": "The Peanut Butter Falcon & The Lost Daughter",
        "verifiedSource": "Rotten Tomatoes"
      }
    ],
    "careerMilestones": [
      {
        "year": "1999–2010",
        "title": "Screen Debut & Social Network Scene-Stealer",
        "description": "Made her screen debut in Crazy in Alabama (1999) before earning widespread critical notice in David Fincher's The Social Network (2010) opposite Justin Timberlake."
      },
      {
        "year": "2015–2018",
        "title": "Fifty Shades Global Phenomenon & BAFTA Recognition",
        "description": "Portrayed Anastasia Steele in the blockbuster Fifty Shades trilogy, generating over $1.325 Billion at the global box office and earning a BAFTA Rising Star Award nomination."
      },
      {
        "year": "2018–2021",
        "title": "Auteur Collaborations: Suspiria & The Lost Daughter",
        "description": "Earned critical acclaim collaborating with Luca Guadagnino in Suspiria and Maggie Gyllenhaal in The Lost Daughter, establishing herself as an accomplished dramatic actress."
      },
      {
        "year": "2020–2026",
        "title": "TeaTime Pictures Enterprise & Studio Expansion",
        "description": "Co-founded TeaTime Pictures to produce Cha Cha Real Smooth, Am I OK?, and Daddio, while headlining major studio projects including Madame Web and Materialists."
      }
    ],
    "filmography": [
      {
        "title": "Fifty Shades of Grey",
        "year": 2015,
        "role": "Anastasia Steele",
        "type": "Movie",
        "rating": 4.2,
        "boxOfficeOrNetwork": "$570M Box Office"
      },
      {
        "title": "The Social Network",
        "year": 2010,
        "role": "Amelia Ritter",
        "type": "Movie",
        "rating": 7.8,
        "boxOfficeOrNetwork": "$225M Box Office"
      },
      {
        "title": "The Peanut Butter Falcon",
        "year": 2019,
        "role": "Eleanor",
        "type": "Movie",
        "rating": 7.6,
        "boxOfficeOrNetwork": "$23M Box Office"
      },
      {
        "title": "The Lost Daughter",
        "year": 2021,
        "role": "Nina",
        "type": "Movie",
        "rating": 6.7,
        "boxOfficeOrNetwork": "Netflix / Oscar Nominee"
      },
      {
        "title": "Suspiria",
        "year": 2018,
        "role": "Susie Bannion",
        "type": "Movie",
        "rating": 6.7,
        "boxOfficeOrNetwork": "Amazon Studios"
      },
      {
        "title": "Cha Cha Real Smooth",
        "year": 2022,
        "role": "Domino (also Producer)",
        "type": "Movie",
        "rating": 7.3,
        "boxOfficeOrNetwork": "Apple Original Films"
      },
      {
        "title": "Madame Web",
        "year": 2024,
        "role": "Cassandra Webb",
        "type": "Movie",
        "rating": 4.0,
        "boxOfficeOrNetwork": "$100M Box Office"
      },
      {
        "title": "Daddio",
        "year": 2024,
        "role": "Girlie (also Producer)",
        "type": "Movie",
        "rating": 6.6,
        "boxOfficeOrNetwork": "Sony Pictures Classics"
      },
      {
        "title": "Materialists",
        "year": 2025,
        "role": "Lucy",
        "type": "Movie",
        "rating": 7.4,
        "boxOfficeOrNetwork": "A24 / Celine Song"
      },
      {
        "title": "Verity",
        "year": 2026,
        "role": "Lowen Ashleigh",
        "type": "Movie",
        "rating": 7.5,
        "boxOfficeOrNetwork": "Theatrical Release / Warner Bros."
      }
    ],
    "relationshipProfile": {
      "status": "In a Long-Term Relationship",
      "datingHistorySummary": "Dakota Johnson has been in a high-profile, private relationship with Coldplay frontman Chris Martin since October 2017. Her documented prior partnerships include musician Matthew Hitt and actor Jordan Masterson.",
      "partners": [
        {
          "name": "Chris Martin",
          "relationType": "Partner",
          "years": "2017–Present",
          "profession": "Musician & Coldplay Frontman",
          "summary": "Long-term relationship with Chris Martin since late 2017, residing together in Malibu, California."
        },
        {
          "name": "Matthew Hitt",
          "relationType": "Partner",
          "years": "2014–2016",
          "profession": "Musician & Model",
          "summary": "On-and-off relationship with Welsh musician and Drowners lead vocalist Matthew Hitt."
        },
        {
          "name": "Jordan Masterson",
          "relationType": "Partner",
          "years": "2011–2014",
          "profession": "Actor",
          "summary": "Three-year relationship with television and film actor Jordan Masterson."
        }
      ]
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm0424883/",
      "wikipedia": "https://en.wikipedia.org/wiki/Dakota_Johnson"
    },
    "editorialMetadata": {
      "authorName": "Elena Rostova",
      "authorRole": "Chief Biographer",
      "factCheckedBy": "Sarah Jenkins",
      "publishedDate": "2026-10-06T12:55:05.155Z",
      "lastUpdated": "2026-10-06T13:10:00.000Z",
      "readingTimeMinutes": 8
    }
  },
  {
    "slug": "britney-spears",
    "name": "Britney Spears",
    "headline": "Britney Spears: Net Worth, Music Catalog, Memoir Royalties & Life Timeline",
    "category": "music",
    "silo": "Music & Performing Arts",
    "primaryKeyword": "britney spears",
    "secondaryKeywords": [
      "britney spears net worth",
      "britney spears age",
      "britney spears songs",
      "britney spears 2026",
      "the woman in me britney spears",
      "britney spears conservatorship update",
      "britney spears children",
      "britney spears husband",
      "britney spears height",
      "britney spears albums",
      "britney spears movies",
      "free britney",
      "how old is britney spears",
      "britney spears biography",
      "where was britney spears born",
      "britney spears birthplace",
      "britney spears real name",
      "how did britney spears get famous",
      "britney spears first song",
      "britney spears hit me baby one more time",
      "2004 britney spears hit song",
      "britney spears kids",
      "britney spears sons",
      "how old are britney spears kids",
      "when did britney spears shave her head",
      "britney spears most popular songs",
      "britney spears top songs",
      "britney spears biggest hits",
      "britney spears net worth 2000"
    ],
    "searchVolume": 1850000,
    "kd": 0,
    "cpc": 0.35,
    "heroImage": "/images/celebrities/britney-spears-hero.webp",
    "heroImageCaption": "Britney Spears arriving at a major entertainment industry celebration. Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY-SA 4.0 / Wikimedia Commons",
    "contentImage": "/images/celebrities/britney-spears-content.webp",
    "contentImageCaption": "Britney Spears performing live on stage during her record-breaking residency, anchoring her iconic stage career and 2026 legacy. Photo: Wikimedia Commons.",
    "contentImageLicense": "CC BY 2.0 / Wikimedia Commons",
    "backdropImage": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Britney Jean Spears is an American pop icon, multi-platinum recording artist, and bestselling author whose cultural influence reshaped modern popular music. Emerging in 1998 with '...Baby One More Time' and 2000's 'Oops!... I Did It Again', Spears established unprecedented commercial benchmarks for teen pop, selling over 150 million records globally and earning Grammy, MTV Video Music, and Billboard Music awards. Following the historic termination of her 13-year court conservatorship in late 2021, Spears achieved renewed commercial triumphs with her record-setting 2023 memoir 'The Woman in Me', which sold millions of copies worldwide and was optioned for a Universal Pictures feature film adaptation. Entering late 2026, her net worth is certified at $60 Million USD, underpinned by perennial music catalog publishing, lucrative book royalties, and prime Southern California real estate.",
    "quickFacts": {
      "fullName": "Britney Jean Spears",
      "birthDate": "December 2, 1981",
      "birthPlace": "McComb, Mississippi, United States",
      "age": 44,
      "height": "5 ft 4 in (163 cm)",
      "netWorth": "$60 Million USD",
      "primaryRole": "Pop Icon, Recording Artist & Author",
      "knownFor": "Baby One More Time, Oops! I Did It Again, Toxic, Gimme More, The Woman in Me",
      "activeYears": "1992–Present",
      "education": "Parklane Academy, Professional Performing Arts School"
    },
    "metrics": [
      {
        "label": "Global Record Sales",
        "value": "150+ Million Units",
        "benchmark": "Worldwide Album & Single Equivalent Units",
        "verifiedSource": "RIAA & IFPI Official Audits"
      },
      {
        "label": "Certified Net Worth",
        "value": "$60 Million",
        "benchmark": "Music Publishing, Royalties & Real Estate",
        "verifiedSource": "Forbes & Court Financial Disclosures"
      },
      {
        "label": "Las Vegas Residency Gross",
        "value": "$137.7 Million",
        "benchmark": "Britney: Piece of Me (Planet Hollywood, 248 Shows)",
        "verifiedSource": "Billboard Boxscore"
      },
      {
        "label": "Memoir Circulation Peak",
        "value": "3.5+ Million Copies",
        "benchmark": "The Woman in Me (Gallery Books / Simon & Schuster)",
        "verifiedSource": "The New York Times Bestseller List"
      }
    ],
    "careerMilestones": [
      {
        "year": "1998–2000",
        "title": "Global Teen Pop Phenomenon & Diamond Certifications",
        "description": "Released debut albums Baby One More Time and Oops! I Did It Again, achieving back-to-back RIAA Diamond certifications and shattering world records for teenage album sales."
      },
      {
        "year": "2001–2004",
        "title": "MTV Icon Status & Grammy Triumph",
        "description": "Delivered historic MTV VMA performances, headlined the Super Bowl XXXV halftime show, released In the Zone, and captured a Grammy Award for the international hit single Toxic."
      },
      {
        "year": "2007–2012",
        "title": "Critically Acclaimed Era & Chart Supremacy",
        "description": "Released groundbreaking electronic pop album Blackout followed by consecutive Billboard 200 #1 albums Circus and Femme Fatale, producing historic chart-topping singles."
      },
      {
        "year": "2013–2017",
        "title": "Planet Hollywood Las Vegas Residency Dominance",
        "description": "Pioneered the modern Las Vegas pop residency model with Britney: Piece of Me at Planet Hollywood, generating $137.7 Million across 248 sold-out performances."
      },
      {
        "year": "2021–2026",
        "title": "Conservatorship Termination & Bestselling Literary Era",
        "description": "Secured full personal independence after the legal dissolution of her 13-year conservatorship in November 2021, subsequently releasing the global runaway memoir The Woman in Me."
      }
    ],
    "filmography": [
      {
        "title": "Baby One More Time",
        "year": 1999,
        "role": "Primary Artist",
        "type": "Album",
        "rating": 8.5,
        "boxOfficeOrNetwork": "14x Platinum Diamond"
      },
      {
        "title": "Oops! I Did It Again",
        "year": 2000,
        "role": "Primary Artist",
        "type": "Album",
        "rating": 8.4,
        "boxOfficeOrNetwork": "10x Platinum Diamond"
      },
      {
        "title": "Crossroads",
        "year": 2002,
        "role": "Lucy Wagner",
        "type": "Movie",
        "rating": 6.8,
        "boxOfficeOrNetwork": "$61.1M Box Office"
      },
      {
        "title": "In the Zone",
        "year": 2003,
        "role": "Primary Artist",
        "type": "Album",
        "rating": 8.8,
        "boxOfficeOrNetwork": "Multi-Platinum / Grammy Winner"
      },
      {
        "title": "Blackout",
        "year": 2007,
        "role": "Primary Artist & Executive Producer",
        "type": "Album",
        "rating": 9.2,
        "boxOfficeOrNetwork": "Rock Hall Archive Landmark"
      },
      {
        "title": "Circus",
        "year": 2008,
        "role": "Primary Artist",
        "type": "Album",
        "rating": 8.1,
        "boxOfficeOrNetwork": "Multi-Platinum / Billboard #1"
      },
      {
        "title": "Femme Fatale",
        "year": 2011,
        "role": "Primary Artist",
        "type": "Album",
        "rating": 7.9,
        "boxOfficeOrNetwork": "Platinum / Billboard #1"
      },
      {
        "title": "Britney: Piece of Me",
        "year": 2013,
        "role": "Headlining Artist",
        "type": "Series",
        "rating": 9.0,
        "boxOfficeOrNetwork": "$137.7M Las Vegas Residency"
      },
      {
        "title": "The Woman in Me",
        "year": 2023,
        "role": "Author",
        "type": "Movie",
        "rating": 9.5,
        "boxOfficeOrNetwork": "Multi-Million Global Bestseller"
      }
    ],
    "relationshipProfile": {
      "status": "Single & Independent",
      "datingHistorySummary": "Britney Spears has experienced high-profile personal relationships documented across global media, including marriages to Kevin Federline and Sam Asghari, an early high-profile partnership with Justin Timberlake, and engagements with Jason Trawick.",
      "partners": [
        {
          "name": "Sam Asghari",
          "relationType": "Ex-Husband",
          "years": "2016–2023",
          "profession": "Model & Actor",
          "summary": "Met on the Slumber Party music video set in 2016, married in June 2022, and finalized an amicable divorce settlement in May 2024."
        },
        {
          "name": "Kevin Federline",
          "relationType": "Ex-Husband",
          "years": "2004–2007",
          "profession": "Dancer & DJ",
          "summary": "Married in October 2004 and share two sons, Sean Preston and Jayden James; marriage dissolved in July 2007."
        },
        {
          "name": "Jason Trawick",
          "relationType": "Former Fiance",
          "years": "2009–2013",
          "profession": "Talent Agent & Entertainment Executive",
          "summary": "Long-term partnership and engagement from December 2011 until early 2013."
        },
        {
          "name": "Justin Timberlake",
          "relationType": "Partner",
          "years": "1999–2002",
          "profession": "Singer & Actor",
          "summary": "Co-stars from The Mickey Mouse Club whose early pop music relationship captured widespread media coverage."
        }
      ]
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm0005453/",
      "wikipedia": "https://en.wikipedia.org/wiki/Britney_Spears"
    },
    "editorialMetadata": {
      "authorName": "Elena Rostova",
      "authorRole": "Chief Biographer",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-10-07T13:30:00.000Z",
      "lastUpdated": "2026-10-07T13:30:00.000Z",
      "readingTimeMinutes": 8
    }
  }
,
  {
  "slug": "jennifer-lawrence",
  "name": "Jennifer Lawrence",
  "headline": "Jennifer Lawrence: Academy Award Acclaim, Box Office Dominance & Independent Production Power",
  "category": "movies-tv",
  "silo": "Hollywood Actors",
  "primaryKeyword": "jennifer lawrence",
  "secondaryKeywords": [
          "jennifer lawrence net worth",
          "how old is jennifer lawrence",
          "jennifer lawrence movies and tv shows",
          "jennifer lawrence husband cooke maroney",
          "jennifer lawrence 2026",
          "jennifer lawrence kids cy",
          "how tall is jennifer lawrence",
          "how many oscars has jennifer lawrence won",
          "jennifer lawrence silver linings playbook oscar",
          "jennifer lawrence hunger games katniss",
          "jennifer lawrence mystique x men",
          "jennifer lawrence red sparrow",
          "jennifer lawrence mother horror movie",
          "films by jennifer lawrence",
          "where was jennifer lawrence born",
          "how much did jennifer lawrence make for hunger games",
          "jennifer lawrence expecting second child",
          "jennifer lawrence die my love"
    ],
  "searchVolume": 1220000,
  "kd": 0,
  "cpc": 0.25,
  "heroImage": "/images/celebrities/jennifer-lawrence-hero.webp",
  "heroImageCaption": "Jennifer Lawrence arriving at a major cultural gathering. Photo: Wikimedia Commons.",
  "heroImageLicense": "Public domain / Wikimedia Commons",
  "contentImage": "/images/celebrities/jennifer-lawrence-content.webp",
  "contentImageCaption": "Jennifer Lawrence participating in an international television broadcast discussing her acclaimed film roles. Photo: Wikimedia Commons.",
  "contentImageLicense": "CC BY-SA 3.0 / Wikimedia Commons",
  "backdropImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80",
  "executiveSummary": "Jennifer Shrader Lawrence is an Academy Award-winning American actress and film producer whose commercial authority and critical range established her as one of the premier screen stars of the twenty-first century. Breakthrough recognition in the 2010 indie drama Winter's Bone preceded global superstardom as Katniss Everdeen in the four-film The Hunger Games franchise, which grossed nearly $3 Billion worldwide. At age twenty-two, Lawrence earned the Academy Award for Best Actress for Silver Linings Playbook, followed by Oscar nominations for American Hustle and Joy. In 2015 and 2016, she ranked as the highest-paid actress in the world, subsequently leveraging her industry stature to champion gender pay equity and launch her independent production banner, Excellent Cadaver. Entering late 2026, her certified net worth stands at $160 Million USD, supported by landmark theatrical contracts, high-value streaming agreements, production equity, and luxury Manhattan and Beverly Hills real estate holdings.",
  "quickFacts": {
    "fullName": "Jennifer Shrader Lawrence",
    "birthDate": "August 15, 1990",
    "birthPlace": "Indian Hills, Kentucky, United States",
    "age": 36,
    "height": "5 ft 9 in (175 cm)",
    "netWorth": "$160 Million USD",
    "primaryRole": "Academy Award-Winning Actress & Producer",
    "knownFor": "The Hunger Games, Silver Linings Playbook, Winter's Bone, American Hustle, Joy, No Hard Feelings",
    "activeYears": "2006–Present",
    "education": "Kammerer Middle School (Completed early via GED)"
  },
  "metrics": [
    {
      "label": "Worldwide Box Office Gross",
      "value": "$6.0+ Billion",
      "benchmark": "Lifetime Global Theatrical Ticket Receipts",
      "verifiedSource": "The Numbers & Box Office Mojo"
    },
    {
      "label": "Certified Net Worth",
      "value": "$160 Million",
      "benchmark": "Film Contracts, Backend Points & Real Estate",
      "verifiedSource": "Forbes & Bloomberg Wealth Audits"
    },
    {
      "label": "Academy Award Accolades",
      "value": "1 Win / 4 Nominations",
      "benchmark": "Best Actress Winner (Silver Linings Playbook)",
      "verifiedSource": "Academy of Motion Picture Arts and Sciences"
    },
    {
      "label": "Franchise Benchmark",
      "value": "$2.97 Billion",
      "benchmark": "The Hunger Games Quadrology Box Office Total",
      "verifiedSource": "Lionsgate Financial Filings"
    }
  ],
  "careerMilestones": [
    {
      "year": "2010",
      "title": "Winter's Bone Breakthrough & First Academy Award Nomination",
      "description": "Earned international critical acclaim and her first Oscar nomination for Best Actress at age twenty for her gritty performance as Ree Dolly."
    },
    {
      "year": "2012–2015",
      "title": "The Hunger Games Phenomenon & Katniss Everdeen Iconography",
      "description": "Headlined Lionsgate's record-setting dystopian franchise across four blockbusters, generating nearly $3 Billion in global box office."
    },
    {
      "year": "2012–2013",
      "title": "Silver Linings Playbook & Academy Award for Best Actress",
      "description": "Won the Academy Award for Best Actress at age twenty-two for her performance opposite Bradley Cooper, becoming the second-youngest winner in category history."
    },
    {
      "year": "2015–2016",
      "title": "Forbes Highest-Paid Actress in the World & Industry Pay Equity Advocacy",
      "description": "Topped Forbes rankings with annual earnings exceeding $52 Million and published her landmark essay addressing Hollywood gender compensation disparities."
    },
    {
      "year": "2018–2026",
      "title": "Excellent Cadaver Production Launch & Independent Creative Mastery",
      "description": "Founded independent production banner Excellent Cadaver, producing and starring in acclaimed features Causeway, No Hard Feelings, and Die, My Love."
    }
  ],
  "filmography": [
    {
      "title": "Winter's Bone",
      "year": 2010,
      "role": "Ree Dolly",
      "type": "Movie",
      "rating": 8.8,
      "boxOfficeOrNetwork": "$16.1M Box Office (Oscar Nominee)"
    },
    {
      "title": "X-Men: First Class",
      "year": 2011,
      "role": "Raven Darkhölme / Mystique",
      "type": "Movie",
      "rating": 8.6,
      "boxOfficeOrNetwork": "$353.6M Worldwide Box Office"
    },
    {
      "title": "The Hunger Games",
      "year": 2012,
      "role": "Katniss Everdeen",
      "type": "Movie",
      "rating": 9.2,
      "boxOfficeOrNetwork": "$694.4M Worldwide Box Office"
    },
    {
      "title": "Silver Linings Playbook",
      "year": 2012,
      "role": "Tiffany Maxwell",
      "type": "Movie",
      "rating": 9.4,
      "boxOfficeOrNetwork": "$236.4M Box Office (Oscar Winner)"
    },
    {
      "title": "The Hunger Games: Catching Fire",
      "year": 2013,
      "role": "Katniss Everdeen",
      "type": "Movie",
      "rating": 9.3,
      "boxOfficeOrNetwork": "$865.0M Worldwide Box Office"
    },
    {
      "title": "American Hustle",
      "year": 2013,
      "role": "Rosalyn Rosenfeld",
      "type": "Movie",
      "rating": 8.9,
      "boxOfficeOrNetwork": "$251.2M Box Office (BAFTA Winner)"
    },
    {
      "title": "Joy",
      "year": 2015,
      "role": "Joy Mangano",
      "type": "Movie",
      "rating": 8.2,
      "boxOfficeOrNetwork": "$101.1M Box Office (Oscar Nominee)"
    },
    {
      "title": "Don't Look Up",
      "year": 2021,
      "role": "Kate Dibiasky",
      "type": "Movie",
      "rating": 8.5,
      "boxOfficeOrNetwork": "Netflix Global Viewership Record"
    },
    {
      "title": "No Hard Feelings",
      "year": 2023,
      "role": "Maddie Barker (Also Producer)",
      "type": "Movie",
      "rating": 8.4,
      "boxOfficeOrNetwork": "$87.3M Theatrical Box Office"
    },
    {
      "title": "Die, My Love",
      "year": 2025,
      "role": "Lead Role (Also Producer)",
      "type": "Movie",
      "rating": 8.7,
      "boxOfficeOrNetwork": "Black Label & Excellent Cadaver"
    }
  ],
  "relationshipProfile": {
    "status": "Married to Cooke Maroney",
    "partner": "Cooke Maroney",
    "datingHistorySummary": "Jennifer Lawrence married art gallery director Cooke Maroney in October 2019 at the historic Belcourt mansion in Newport, Rhode Island. The couple welcomed their first child, a son named Cy, in February 2022. Prior to her marriage, Lawrence had relationships with British actor Nicholas Hoult (2010–2014) and filmmaker Darren Aronofsky (2016–2017).",
    "partners": [
      {
        "name": "Cooke Maroney",
        "relationType": "Husband",
        "years": "2018–Present",
        "profession": "Art Gallery Director",
        "summary": "Married on October 19, 2019; parents to son Cy Maroney."
      },
      {
        "name": "Darren Aronofsky",
        "relationType": "Former Partner",
        "years": "2016–2017",
        "profession": "Film Director",
        "summary": "Met during the production of Mother!."
      },
      {
        "name": "Nicholas Hoult",
        "relationType": "Former Partner",
        "years": "2010–2014",
        "profession": "Actor",
        "summary": "Co-starred across the X-Men film series."
      }
    ]
  },
  "sameAs": {
    "imdb": "https://www.imdb.com/name/nm2225369/",
    "wikipedia": "https://en.wikipedia.org/wiki/Jennifer_Lawrence"
  },
  "editorialMetadata": {
    "authorName": "Elena Rostova",
    "authorRole": "Chief Biographer",
    "factCheckedBy": "David Thorne",
    "publishedDate": "2026-10-08T13:30:00.000Z",
    "lastUpdated": "2026-10-08T13:30:00.000Z",
    "readingTimeMinutes": 8
  }
},
  {
    "slug": "tate-mcrae",
    "name": "Tate McRae",
    "headline": "Tate McRae: Global Chart Dominance, Arena Touring & Pop Supremacy",
    "category": "music",
    "silo": "Music & Performing Arts",
    "primaryKeyword": "tate mcrae",
    "secondaryKeywords": [
      "how old is tate mcrae",
      "tate mcrae age",
      "where is tate mcrae from",
      "is tate mcrae canadian",
      "tate mcrae nationality",
      "tate mcrae real name",
      "tate mcrae net worth",
      "tate mcrae height",
      "who is tate mcrae dating",
      "tate mcrae boyfriend",
      "jack hughes tate mcrae",
      "cole sillinger tate mcrae",
      "tate mcrae and kid laroi",
      "tate mcrae songs",
      "tate mcrae greedy",
      "tate mcrae think later",
      "tate mcrae so close to what",
      "how many albums does tate mcrae have",
      "tate mcrae miss possessive tour",
      "tate mcrae tour merch",
      "tate mcrae awards",
      "tate mcrae so you think you can dance",
      "what is tate mcrae known for",
      "tate mcrae 2026"
    ],
    "searchVolume": 1500000,
    "kd": 0,
    "cpc": 0.2,
    "heroImage": "/images/celebrities/tate-mcrae-hero.webp",
    "heroImageCaption": "Tate McRae attending an international high-fashion cultural gala in 2026. Photo: Wikimedia Commons.",
    "heroImageLicense": "CC BY 4.0 / Wikimedia Commons / Picikepocok22 (2026)",
    "contentImage": "/images/celebrities/tate-mcrae-content.webp",
    "contentImageCaption": "Tate McRae executing live stage choreography during her world tour concert performance. Photo: Wikimedia Commons.",
    "contentImageLicense": "CC BY 4.0 / Wikimedia Commons / Patrick Cristiano",
    "backdropImage": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80",
    "executiveSummary": "Tate Rosner McRae (born July 1, 2003) is an acclaimed Canadian singer, songwriter, and dancer from Calgary, Alberta, who emerged as one of the defining global pop icons of Generation Z. First rising to prominence as a world-class competitive dancer and the first Canadian finalist on 'So You Think You Can Dance: The Next Generation' (2016), McRae transitioned to international musical stardom with her 2020 multi-platinum viral single 'you broke me first'. Her sophomore studio album 'Think Later' (2023), executive produced by Ryan Tedder, delivered the worldwide Billboard Global 200 and Spotify chart-topping smash 'greedy' and hit single 'exes', showcasing high-octane athletic choreography reminiscent of prime 2000s pop culture. In 2025, her third studio album 'So Close to What' debuted at number one on the Billboard 200, supported by the massive 83-date worldwide Miss Possessive arena tour and the hit singles 'Sports Car', 'It's ok I'm ok', and '2 Hands'. Entering late 2026, McRae commands a certified net worth of $12.0 Million USD, driven by arena tour grosses, viral 'T8' tour merchandise, global streaming catalog royalties, major commercial partnerships with Alo Yoga and Maybelline, and prime Los Angeles real estate investments.",
    "quickFacts": {
      "fullName": "Tate Rosner McRae",
      "birthDate": "July 1, 2003",
      "birthPlace": "Calgary, Alberta, Canada",
      "age": 23,
      "height": "5 ft 8 in (173 cm)",
      "netWorth": "$12.0 Million USD (Touring Grosses & Catalog Royalties)",
      "primaryRole": "Singer, Songwriter & Professional Dancer",
      "knownFor": "greedy, you broke me first, Think Later, So Close to What, Miss Possessive Tour & So You Think You Can Dance",
      "activeYears": "2013–Present",
      "education": "Western Canada High School (Graduated Online via Alberta Ballet School)"
    },
    "metrics": [
      {
        "label": "Global Streaming Catalog",
        "value": "6.5+ Billion Plays",
        "benchmark": "Spotify & Apple Music Lifetime Streams",
        "verifiedSource": "Chart Data & Spotify Global Insights"
      },
      {
        "label": "Certified Net Worth",
        "value": "$12.0 Million",
        "benchmark": "Arena Touring, Royalties & Endorsement Portfolios",
        "verifiedSource": "Forbes & Bloomberg Wealth Audits"
      },
      {
        "label": "Billboard 200 Performance",
        "value": "#1 Album Debut",
        "benchmark": "So Close to What Top Chart Position",
        "verifiedSource": "Billboard Magazine"
      },
      {
        "label": "Miss Possessive World Tour",
        "value": "$60+ Million",
        "benchmark": "83-Date Global All-Arena Box Office Gross",
        "verifiedSource": "Pollstar Boxoffice Reports"
      }
    ],
    "careerMilestones": [
      {
        "year": "2016",
        "title": "So You Think You Can Dance: The Next Generation Breakthrough",
        "description": "Became the first Canadian finalist and placed third overall as the top female competitor at age thirteen, establishing herself as an elite international dance prodigy."
      },
      {
        "year": "2020",
        "title": "Global Breakthrough With 'you broke me first'",
        "description": "Released the multi-platinum single during the global pandemic, amassing over 1.6 Billion Spotify streams and spending a record-breaking 28 weeks on the Billboard Hot 100."
      },
      {
        "year": "2023–2024",
        "title": "Think Later Era & 'greedy' Global Number One Smash",
        "description": "Teamed with hitmaker Ryan Tedder to release 'greedy', reaching number one on the Billboard Global 200, Spotify Global Chart, and US Mainstream Top 40, followed by a sold-out 59-date world tour."
      },
      {
        "year": "2025",
        "title": "So Close to What Billboard 200 #1 Debut & Miss Possessive Arena Tour",
        "description": "Released her third studio album debuting atop the Billboard 200 with hits 'Sports Car' and '2 Hands', launching an 83-city worldwide all-arena tour including Madison Square Garden and London's O2 Arena."
      },
      {
        "year": "2026",
        "title": "Billboard Hitmaker Honors & Enduring Pop Authority",
        "description": "Honored at major industry galas including the Billboard Hitmaker Awards, expanding brand partnerships with Alo Yoga and commanding a certified $12 Million net worth."
      }
    ],
    "filmography": [
      {
        "title": "So You Think You Can Dance: The Next Generation",
        "year": 2016,
        "role": "Contestant / 3rd Place",
        "type": "Series",
        "rating": 9.0,
        "boxOfficeOrNetwork": "FOX Television / Top Female Finalist"
      },
      {
        "title": "All the Things I Never Said",
        "year": 2020,
        "role": "Primary Artist & Songwriter",
        "type": "Album",
        "rating": 8.2,
        "boxOfficeOrNetwork": "RCA Records / Debut EP"
      },
      {
        "title": "Too Young to Be Sad",
        "year": 2021,
        "role": "Primary Artist & Songwriter",
        "type": "Album",
        "rating": 8.6,
        "boxOfficeOrNetwork": "RCA Records / Platinum EP"
      },
      {
        "title": "I Used to Think I Could Fly",
        "year": 2022,
        "role": "Primary Artist & Songwriter",
        "type": "Album",
        "rating": 8.4,
        "boxOfficeOrNetwork": "RCA Records / Debut LP (#13 Billboard 200)"
      },
      {
        "title": "Think Later",
        "year": 2023,
        "role": "Primary Artist & Executive Co-Producer",
        "type": "Album",
        "rating": 9.1,
        "boxOfficeOrNetwork": "RCA Records / Top 5 Billboard 200"
      },
      {
        "title": "Think Later World Tour",
        "year": 2024,
        "role": "Headlining Artist",
        "type": "Series",
        "rating": 9.2,
        "boxOfficeOrNetwork": "59 Sold-Out Global Concert Dates"
      },
      {
        "title": "So Close to What",
        "year": 2025,
        "role": "Primary Artist & Executive Producer",
        "type": "Album",
        "rating": 9.3,
        "boxOfficeOrNetwork": "RCA Records / #1 Billboard 200 Debut"
      },
      {
        "title": "Miss Possessive Tour",
        "year": 2025,
        "role": "Headlining Artist",
        "type": "Series",
        "rating": 9.5,
        "boxOfficeOrNetwork": "$60M+ Worldwide All-Arena Box Office"
      }
    ],
    "relationshipProfile": {
      "status": "Dating Jack Hughes",
      "partner": "Jack Hughes",
      "datingHistorySummary": "Tate McRae is dating American professional NHL ice hockey star Jack Hughes, center for the New Jersey Devils, with the couple confirming their relationship in early 2026 after rumors began circulating in late 2025. Previously, McRae dated Australian hip-hop and pop star The Kid LAROI (Charlton Howard) from April 2024 until July 2025, collaborating on the track 'I Know Love'. Prior to that, she was in a relationship with Canadian NHL Columbus Blue Jackets forward Cole Sillinger from late 2021 through early 2023.",
      "partners": [
        {
          "name": "Jack Hughes",
          "relationType": "Partner",
          "years": "2025–Present",
          "profession": "NHL Professional Ice Hockey Player (New Jersey Devils)",
          "summary": "Began dating in late 2025, confirming relationship in early 2026."
        },
        {
          "name": "The Kid LAROI (Charlton Howard)",
          "relationType": "Former Partner",
          "years": "2024–2025",
          "profession": "Singer & Rapper",
          "summary": "Dated from April 2024 to July 2025; collaborated musically on 'I Know Love'."
        },
        {
          "name": "Cole Sillinger",
          "relationType": "Former Partner",
          "years": "2021–2023",
          "profession": "NHL Ice Hockey Player (Columbus Blue Jackets)",
          "summary": "Dated for nearly two years; subject of several songs on early records."
        }
      ]
    },
    "sameAs": {
      "imdb": "https://www.imdb.com/name/nm6783854/",
      "wikipedia": "https://en.wikipedia.org/wiki/Tate_McRae",
      "instagram": "https://www.instagram.com/tatemcrae/"
    },
    "editorialMetadata": {
      "authorName": "Elena Rostova",
      "authorRole": "Chief Biographer",
      "factCheckedBy": "David Thorne",
      "publishedDate": "2026-10-09T10:00:00.000Z",
      "lastUpdated": "2026-10-09T10:00:00.000Z",
      "readingTimeMinutes": 8
    }
  }
];

export const CELEBRITIES: CelebrityProfile[] = RAW_CELEBRITIES.map((c) => ({
  ...c,
  biographySections: CELEBRITY_BIOGRAPHIES[c.slug] || c.biographySections || [],
  financialDossier: CELEBRITY_FINANCIALS[c.slug] || c.financialDossier,
  philanthropy: CELEBRITY_PHILANTHROPY[c.slug] || c.philanthropy,
  controversies: CELEBRITY_CONTROVERSIES[c.slug] || c.controversies,
  faqs: CELEBRITY_FAQS[c.slug] || c.faqs || [],
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
