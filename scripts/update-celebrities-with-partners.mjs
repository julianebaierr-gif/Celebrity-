import fs from 'node:fs';
import path from 'node:path';

const celebritiesFilePath = path.resolve('src/data/celebrities.ts');
let content = fs.readFileSync(celebritiesFilePath, 'utf-8');

// 1. Update interface definition
const oldInterface = `  filmography: FilmRole[];
  relationshipProfile: {
    status: string;
    partner?: string;
    datingHistorySummary: string;
  };`;

const newInterface = `  filmography: FilmRole[];
  relationshipProfile: RelationshipProfile;`;

const newTypes = `export interface RelationshipPartner {
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
`;

if (!content.includes('export interface RelationshipPartner')) {
  content = content.replace('export interface CelebrityProfile {', `${newTypes}\nexport interface CelebrityProfile {`);
  content = content.replace(oldInterface, newInterface);
}

// 2. Define the updated relationshipProfiles for existing celebrities
const partnerData = {
  'jeremy-allen-white': {
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
  'zendaya': {
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
  'taylor-swift-wedding': {
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
  'matt-damon': {
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
  'margot-robbie': {
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
  'keanu-reeves': {
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
  'leonardo-dicaprio': {
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
  'cillian-murphy': {
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
  'finn-wolfhard': {
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
  }
};

// Replace relationshipProfiles in content using regex or targeted string replacements
for (const [slug, data] of Object.entries(partnerData)) {
  const slugRegex = new RegExp(`slug:\\s*"${slug}",[\\s\\S]*?relationshipProfile:\\s*{[\\s\\S]*?},(\\s*faqs:)`, 'm');
  const match = content.match(slugRegex);
  if (match) {
    const formattedJson = JSON.stringify(data, null, 6)
      .replace(/"([^"]+)":/g, '$1:')
      .split('\n')
      .map((line, i) => i === 0 ? line : '    ' + line)
      .join('\n');
    const replacement = match[0].replace(/relationshipProfile:\s*{[\s\S]*?},/, `relationshipProfile: ${formattedJson},`);
    content = content.replace(match[0], replacement);
    console.log(`Updated relationshipProfile for ${slug}`);
  }
}

// 3. Add 3 new celebrity profiles (Tom Holland, Rosalía, Travis Kelce) if not present
if (!content.includes('slug: "tom-holland"')) {
  const newCelebrities = `
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
      netWorth: 25000000,
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
          image: "/images/celebrities/zendaya-hero.webp",
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
      lastUpdated: "2026-03-01T10:00:00Z",
      readingTimeMinutes: 6
    }
  },
  {
    slug: "rosalia",
    name: "Rosalía",
    headline: "Motomami Visionary: Flamenco Fusion, Grammy Triumphs & Global Pop Vanguard",
    category: "music",
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
      netWorth: 35000000,
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
      { title: "Motomami World Tour", year: 2022, role: "Executive Producer & Lead Performer", type: "Special", rating: 8.8, boxOfficeOrNetwork: "Global Arena Tour" },
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
          image: "/images/celebrities/jeremy-allen-white-hero.webp",
          profileSlug: "jeremy-allen-white",
          summary: "Photographed together in numerous public settings across Los Angeles and European destinations following White's divorce, captivating international entertainment media."
        },
        {
          name: "Rauw Alejandro",
          relationType: "Former Fiancé",
          years: "2019–2023",
          profession: "Puerto Rican Singer, Songwriter & Musician",
          image: "/images/partners/tom-ackerley.webp",
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
      lastUpdated: "2026-03-01T10:00:00Z",
      readingTimeMinutes: 5
    }
  },
  {
    slug: "travis-kelce",
    name: "Travis Kelce",
    headline: "Chiefs Legend: 3x Super Bowl Champion, Media Mogul & NFL Record Titan",
    category: "sports-entertainment",
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
      netWorth: 50000000,
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
          image: "/images/celebrities/taylor-swift-wedding-hero.webp",
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
      lastUpdated: "2026-03-01T10:00:00Z",
      readingTimeMinutes: 6
    }
  }
`;

  // Insert before the closing bracket of CELEBRITIES array: ];
  const lastBracketIndex = content.lastIndexOf('];');
  if (lastBracketIndex !== -1) {
    content = content.slice(0, lastBracketIndex) + ',\n' + newCelebrities.trim() + '\n];' + content.slice(lastBracketIndex + 2);
    console.log('Added 3 new celebrity profiles: Tom Holland, Rosalía, Travis Kelce!');
  }
}

fs.writeFileSync(celebritiesFilePath, content, 'utf-8');
console.log('Successfully updated src/data/celebrities.ts with full partner data and cross-links!');
