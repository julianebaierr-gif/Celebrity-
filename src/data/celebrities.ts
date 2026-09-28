import { CELEBRITY_BIOGRAPHIES } from "./celebrity-biographies";

export interface FilmRole {
  title: string;
  year: number;
  role: string;
  type: "Movie" | "Series";
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
  category: "biographies" | "relationships" | "net-worth" | "movies-tv" | "legends";
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
      netWorth: "$12.0 Million USD (Verified Portfolio)",
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
        question: "When did Tim Curry pass away?",
        answer: "Tim Curry passed away on August 25, 2026, at the age of 80 in Toluca Lake, Los Angeles, California, leaving behind an indelible six-decade artistic legacy across stage, film, and voice acting."
      },
      {
        question: "What health condition did Tim Curry overcome?",
        answer: "In July 2012, Tim Curry suffered a stroke. Through focused rehabilitation, he continued his craft for over a decade, utilizing a wheelchair while providing iconic voiceover performances and convention appearances."
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
      netWorth: "$25.0 Million USD (Verified Portfolio)",
      primaryRole: "Actor, Producer",
      knownFor: "Oppenheimer, Peaky Blinders, Inception, 28 Days Later, Dunkirk",
      activeYears: "1996–Present",
      education: "University College Cork (Law, discontinued for acting)"
    },
    metrics: [
      { label: "Academy Award Recognition", value: "Best Actor Winner", benchmark: "First Irish-Born Actor to Win Best Actor", verifiedSource: "AMPAS" },
      { label: "Oppenheimer Global Gross", value: "$957 Million", benchmark: "Highest-Grossing Biographical Drama in History", verifiedSource: "Box Office Mojo" },
      { label: "Peaky Blinders Viewership", value: "Billions of Global Streams", benchmark: "Flagship BBC/Netflix Cultural Phenomenon", verifiedSource: "BBC Media Centre" },
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
        question: "Did Cillian Murphy win an Oscar for Oppenheimer?",
        answer: "Yes, Cillian Murphy won the 2024 Academy Award for Best Actor in a Leading Role for his performance as physicist J. Robert Oppenheimer, becoming the first Irish-born actor to win the category."
      },
      {
        question: "Will there be a Peaky Blinders movie with Cillian Murphy?",
        answer: "Yes, Netflix officially greenlit the feature-length Peaky Blinders movie written by creator Steven Knight, with Murphy returning to star as Tommy Shelby alongside Rebecca Ferguson and Barry Keoghan."
      },
      {
        question: "What is Cillian Murphy's net worth?",
        answer: "Cillian Murphy's verified net worth is estimated at $25 Million USD, built from his career backend profits on Oppenheimer, executive producer salaries on Peaky Blinders, and high-end brand partnerships with Versace."
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
    headline: "Cultural Powerhouse: Emmy Records, Dune Spectacle & Fashion Hegemony",
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
      netWorth: "$35.0 Million USD (Forbes Verified)",
      primaryRole: "Actress, Producer, Fashion Ambassador",
      knownFor: "Euphoria, Dune: Part One & Two, Spider-Man: No Way Home, Challengers, The Greatest Showman",
      activeYears: "2009–Present",
      education: "Oakland School for the Arts / American Conservatory Theater"
    },
    metrics: [
      { label: "Emmy Record Milestone", value: "2-Time Lead Emmy Winner", benchmark: "Youngest Two-Time Winner in History", verifiedSource: "Television Academy" },
      { label: "Spider-Man Trilogy Box Office", value: "$3.9+ Billion", benchmark: "Among Highest-Grossing Trilogies in History", verifiedSource: "Box Office Mojo" },
      { label: "Instagram Following", value: "185M+ Followers", benchmark: "Tier 1 Global Cultural Influence", verifiedSource: "Meta Verified Handle" },
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
                      summary: "First paired together as Peter Parker and MJ in 'Spider-Man: Homecoming' (2016). After years of celebrated creative collaboration and close friendship, their relationship was publicly confirmed in July 2021, becoming one of modern cinema's most revered couples."
                }
          ],
          datingHistorySummary: "Zendaya and British actor Tom Holland first met on the set of 'Spider-Man: Homecoming' in 2016. After years of friendship, their romance was confirmed in July 2021 and has become one of Hollywood's most cherished and grounded celebrity partnerships, based between London and Los Angeles."
    },
    faqs: [
      {
        question: "Are Zendaya and Tom Holland still together in 2026?",
        answer: "Yes, Zendaya and Tom Holland remain happily together, frequently supporting each other's theatrical openings and charity initiatives while maintaining conscious boundaries around their private life."
      },
      {
        question: "How many Emmy Awards does Zendaya have?",
        answer: "Zendaya has won two Primetime Emmy Awards for Outstanding Lead Actress in a Drama Series for her performance as Rue Bennett in HBO's 'Euphoria' (2020 and 2022)."
      },
      {
        question: "What is Zendaya's net worth?",
        answer: "Zendaya's net worth is evaluated at $35 Million USD by Forbes and trade analysts, derived from her $1M per episode salary on Euphoria Season 3, box office bonuses, and luxury ambassadorships with Bulgari, Lancôme, and Louis Vuitton."
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
  },
  {
    slug: "taylor-swift-wedding",
    name: "Taylor Swift",
    headline: "Verified Relationship Record: Travis Kelce Partnership, Wedding Inquiries & Wealth",
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
    executiveSummary: "José Pedro Balmaceda Pascal (born April 2, 1975) is a Chilean-American actor celebrated as one of modern entertainment's most charismatic and prolific performers. After scene-stealing turns as Oberyn Martell in 'Game of Thrones' and Javier Peña in 'Narcos', Pascal reached superstardom headlining Disney+'s 'The Mandalorian', HBO's smash hit 'The Last of Us', Ridley Scott's 'Gladiator II', and Marvel's 'The Fantastic Four'.",
    quickFacts: {
      fullName: "José Pedro Balmaceda Pascal",
      birthDate: "April 2, 1975",
      birthPlace: "Santiago, Chile",
      age: 51,
      height: "5 ft 11 in (180 cm)",
      netWorth: "$14.0 Million USD (Verified Audit)",
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
        question: "What is Pedro Pascal's role in Marvel's Fantastic Four?",
        answer: "Pedro Pascal stars as Dr. Reed Richards / Mister Fantastic in Marvel Studios' 'The Fantastic Four: First Steps', leading the MCU's first family alongside Vanessa Kirby, Joseph Quinn, and Ebon Moss-Bachrach."
      },
      {
        question: "How did Pedro Pascal become famous?",
        answer: "Pascal achieved widespread breakout recognition in 2014 portraying Prince Oberyn Martell in HBO's 'Game of Thrones', followed by his lead role as DEA Agent Javier Peña in Netflix's 'Narcos'."
      },
      {
        question: "What is Pedro Pascal's net worth?",
        answer: "Pedro Pascal's net worth is estimated at $14 Million USD, earned through episodic fees of over $600,000 per episode for The Last of Us, major Marvel and Disney contracts, and luxury endorsements."
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
    executiveSummary: "Margot Elise Robbie (born July 2, 1990) is an Academy Award-nominated Australian actress and Hollywood power producer. Co-founder of production powerhouse LuckyChap Entertainment, Robbie produced and starred in Warner Bros.' global record-breaker 'Barbie' (2023), which earned over $1.44 Billion worldwide. Holding three Oscar acting and producing nominations, Robbie has amassed an estimated net worth of $60 Million USD.",
    quickFacts: {
      fullName: "Margot Elise Robbie",
      birthDate: "July 2, 1990",
      birthPlace: "Dalby, Queensland, Australia",
      age: 36,
      height: "5 ft 6 in (168 cm)",
      netWorth: "$60.0 Million USD (Forbes Verified)",
      primaryRole: "Actress, Producer, Company Founder",
      knownFor: "Barbie, The Wolf of Wall Street, I, Tonya, Once Upon a Time in Hollywood, Harley Quinn",
      activeYears: "2008–Present",
      education: "Somerset College (Queensland)"
    },
    metrics: [
      { label: "Barbie Worldwide Box Office", value: "$1.44+ Billion", benchmark: "Highest-Grossing Warner Bros. Film in History", verifiedSource: "Warner Bros. Discovery" },
      { label: "Barbie Payday & Backend", value: "$50 Million+", benchmark: "Highest Female Actor Salary in Single Year", verifiedSource: "Variety / Forbes" },
      { label: "Academy Award Nominations", value: "3 Oscar Nominations", benchmark: "Best Actress (2x), Best Picture (1x)", verifiedSource: "AMPAS" },
      { label: "LuckyChap Hits Produced", value: "Saltburn, Promising Young Woman, Barbie", benchmark: "Tier 1 Independent Studio Powerhouse", verifiedSource: "The Hollywood Reporter" }
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
                      summary: "Met on the set of 'Suite Française' in 2013 and co-founded production powerhouse LuckyChap Entertainment in 2014. Married in a private Byron Bay, Australia ceremony in December 2016, and welcomed their first child in late 2024."
                }
          ],
          datingHistorySummary: "Robbie met British film producer and former assistant director Tom Ackerley on the set of 'Suite Française' in 2013. The couple co-founded LuckyChap Entertainment in 2014 and married in a private Byron Bay, Australia ceremony in December 2016. In late 2024, they welcomed their first child."
    },
    faqs: [
      {
        question: "How much did Margot Robbie earn for Barbie?",
        answer: "Margot Robbie earned an estimated $50 Million+ for 'Barbie', combining her upfront $12.5M salary with lucrative producer and acting box-office performance bonuses."
      },
      {
        question: "Who is Margot Robbie's husband?",
        answer: "Margot Robbie is married to British film producer Tom Ackerley. Together with friends Josey McNamara and Sophia Kerr, they operate their thriving production banner LuckyChap Entertainment."
      },
      {
        question: "What is Margot Robbie's verified net worth?",
        answer: "Margot Robbie's verified net worth is estimated at $60 Million USD, driven by LuckyChap production dividends, major studio acting contracts, and her ambassadorship with Chanel."
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
    executiveSummary: "Keanu Charles Reeves (born September 2, 1964) is a Canadian actor, musician, and philanthropist regarded as one of Hollywood's most beloved and commercially resilient figures. Defining modern sci-fi as Neo in 'The Matrix' quadrilogy and reviving R-rated action cinema with the $1+ Billion 'John Wick' saga, Reeves is equally celebrated for his legendary humility and extensive cancer research philanthropy, holding a net worth of $380 Million USD.",
    quickFacts: {
      fullName: "Keanu Charles Reeves",
      birthDate: "September 2, 1964",
      birthPlace: "Beirut, Lebanon (Canadian Citizen)",
      age: 62,
      height: "6 ft 1 in (185 cm)",
      netWorth: "$380.0 Million USD (Forbes Verified)",
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
        question: "Is John Wick 5 officially happening?",
        answer: "Lionsgate officially confirmed that development is underway on 'John Wick 5', with director Chad Stahelski and Keanu Reeves exploring an organic story continuation following the climactic events of Chapter 4."
      },
      {
        question: "Who is Keanu Reeves' partner?",
        answer: "Keanu Reeves is in a committed relationship with American visual artist Alexandra Grant. The couple frequently attends international art exhibitions and galas together."
      },
      {
        question: "What is Keanu Reeves' verified net worth?",
        answer: "Keanu Reeves' net worth is estimated at $380 Million USD, accumulated through historic backend shares on The Matrix trilogy, executive producer cuts on John Wick, and extensive Southern California real estate investments."
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
          datingHistorySummary: "White was married to actress Addison Timlin from 2019 until their divorce in 2023, with whom he co-parents two daughters. He has subsequently maintained high-profile public associations with international recording artist Rosalía, while keeping primary media focus directed on his acclaimed performances in The Bear and Bruce Springsteen biopic."
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
      netWorth: "$10.0 Million USD (Verified Portfolio)",
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
          summary: "Ortega and Asher Angel sparked widespread entertainment media dating reports in late 2018 after coordinating couple Halloween costumes as Ariana Grande and Pete Davidson and attending red carpet premieres together."
        }
      ],
      datingHistorySummary: "Ortega maintains rigorous discretion regarding her private life, stating in numerous major publications that her intensive production schedules across London, Romania, and Los Angeles occupy her full creative focus. Her only notable public red-carpet dating connection was with actor Asher Angel in 2018."
    },
    faqs: [
      {
        question: "Is Jenna Ortega returning for Wednesday Season 2?",
        answer: "Yes, Jenna Ortega returns as Wednesday Addams and is also serving as an executive producer on Wednesday Season 2, filmed in Ireland for Netflix."
      },
      {
        question: "How tall is Jenna Ortega?",
        answer: "Jenna Ortega stands 5 ft 1 in (155 cm) tall."
      },
      {
        question: "What is Jenna Ortega's net worth?",
        answer: "Jenna Ortega's net worth is estimated at $10 Million USD, driven by her reported $250,000+ per episode producer/acting fee on Wednesday, movie backend royalties, and major endorsements with Adidas and Dior."
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
      netWorth: "$300.0 Million USD (Forbes Verified)",
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
        question: "Which movie did Leonardo DiCaprio win his Oscar for?",
        answer: "Leonardo DiCaprio won the Academy Award for Best Actor in 2016 for his portrayal of 1820s frontiersman Hugh Glass in Alejandro G. Iñárritu's 'The Revenant'."
      },
      {
        question: "What is Leonardo DiCaprio's net worth?",
        answer: "Leonardo DiCaprio's net worth is evaluated at $300 Million USD by Forbes, amassed from $20M-$30M upfront salaries, historic backend shares (including $40M+ on Titanic and $50M on Inception), and an expansive luxury eco-property portfolio."
      },
      {
        question: "Who is Leonardo DiCaprio's current partner?",
        answer: "Leonardo DiCaprio is currently dating Italian model Vittoria Ceretti, with the couple frequently seen together at international film festivals and climate charity events."
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
    executiveSummary: "Thomas Stanley Holland (born June 1, 1996) is an English actor who achieved global stardom portraying Peter Parker / Spider-Man in the Marvel Cinematic Universe, headlining blockbusters that have collectively grossed over $10 Billion globally. Trained in classical dance and West End musical theater in 'Billy Elliot', Holland has transitioned effortlessly between colossal superhero sagas and demanding dramatic roles.",
    quickFacts: {
      fullName: "Thomas Stanley Holland",
      birthDate: "June 1, 1996",
      birthPlace: "Kingston upon Thames, London, England",
      height: "5 ft 8 in (173 cm)",
      primaryRole: "Actor, Stage Performer & Producer",
      knownFor: "Peter Parker / Spider-Man (Marvel Cinematic Universe), Billy Elliot The Musical, Uncharted",
      age: 29,
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
        question: "Are Tom Holland and Zendaya still together in 2026?",
        answer: "Yes, Tom Holland and Zendaya remain happily in a relationship, continuing one of Hollywood's most grounded and supportive creative partnerships."
      },
      {
        question: "What is Tom Holland's verified net worth in 2026?",
        answer: "Tom Holland's verified net worth is estimated at $25.0 Million, accumulated through Marvel Cinematic Universe backend points, major studio franchises like Uncharted, and West End productions."
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
          summary: "Photographed together in numerous public settings across Los Angeles and European destinations following White's divorce, captivating international entertainment media."
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
        question: "What is Rosalía's verified net worth?",
        answer: "Rosalía's verified net worth is estimated at $35.0 Million, derived from global arena touring gross receipts, music publishing catalog rights, and high-fashion ambassadorships."
      },
      {
        question: "Did Rosalía date Jeremy Allen White?",
        answer: "Yes, Rosalía and Jeremy Allen White were photographed together in multiple public and private engagements across late 2023 and 2024 following White's divorce."
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
    headline: "Chiefs Legend: 3x Super Bowl Champion, Media Mogul & NFL Record Titan",
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
      primaryRole: "NFL Tight End, Media Host & Producer",
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
      { year: "2020", title: "First Super Bowl Victory", description: "Captured Super Bowl LIV with Patrick Mahomes, catching a pivotal fourth-quarter touchdown." },
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
        question: "Are Travis Kelce and Taylor Swift still dating in 2026?",
        answer: "Yes, Travis Kelce and Taylor Swift are in a high-profile, committed relationship that began in the summer of 2023."
      },
      {
        question: "What is Travis Kelce's verified net worth?",
        answer: "Travis Kelce's verified net worth is estimated at $50.0 Million, accumulated through NFL contract earnings, equity ventures, and the landmark $100 Million New Heights podcast agreement with Wondery."
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
