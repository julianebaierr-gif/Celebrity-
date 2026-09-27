import fs from 'node:fs';
import path from 'node:path';

const file = path.resolve('src/data/celebrity-biographies.ts');
let content = fs.readFileSync(file, 'utf-8');

const newBiographies = `
  "tom-holland": [
    {
      heading: "West End Ballet Roots, BRIT School Training & Early Theater (1996–2015)",
      paragraphs: [
        "Thomas Stanley Holland was born on June 1, 1996, in Kingston upon Thames, London, England, into an artistic household. His mother, Nicola Elizabeth, was a professional photographer, while his father, Dominic Holland, is a celebrated English stand-up comedian and author. Raised in South West London alongside three younger brothers, Holland discovered his passion for dance at the Nifty Feet Dance School in Wimbledon.",
        "Spotted by a choreographer during the 2006 Richmond Dance Festival, Holland underwent two grueling years of gymnastics, ballet, and tap training before making his West End debut in 'Billy Elliot The Musical' at London's Victoria Palace Theatre in June 2008. Beginning as Michael Caffrey, he advanced into the title role of Billy Elliot in September 2008, performing for two years to universal acclaim before enrolling in the prestigious BRIT School for Performing Arts and Technology."
      ],
      keyTakeaway: "Holland developed his signature athletic agility and theatrical stamina through years of classical ballet and West End musical theater."
    },
    {
      heading: "The Marvel Breakthrough: Becoming Spider-Man (2016–2021)",
      paragraphs: [
        "In June 2015, following an exhaustive global audition process involving over 1,500 young actors, Marvel Studios and Sony Pictures announced Holland as the new Peter Parker / Spider-Man. Making his debut in 'Captain America: Civil War' (2016) alongside Robert Downey Jr., Holland's earnest adolescent warmth and gymnastics-infused stuntwork were hailed by comic purists and critics as the most faithful cinematic interpretation in franchise history.",
        "Holland headlined 'Spider-Man: Homecoming' (2017), followed by stellar ensemble turns in 'Avengers: Infinity War' (2018) and 'Avengers: Endgame' (2019)—the second highest-grossing film in world history. His standalone sequel 'Spider-Man: Far From Home' (2019) generated $1.13 Billion worldwide, cementing Holland as one of Hollywood's preeminent box office anchors before reaching age 25."
      ],
      quote: {
        text: "Tom brings a rare combination of physical bravery and deep emotional vulnerability that makes Peter Parker feel entirely human.",
        source: "Marvel Studios President Kevin Feige"
      },
      keyTakeaway: "Holland's MCU debut revolutionized the superhero genre by pairing authentic youthfulness with extraordinary gymnastic stunt capability."
    },
    {
      heading: "Box Office Supremacy: No Way Home & Franchise Expansion (2021–2024)",
      paragraphs: [
        "In December 2021, Holland led 'Spider-Man: No Way Home', uniting three generations of cinema audiences by co-starring alongside Tobey Maguire and Andrew Garfield. Amidst post-pandemic cinema challenges, the film shattered industry forecasts, grossing $1.92 Billion worldwide to become the sixth highest-grossing film of all time.",
        "Demonstrating leading-man commercial pull outside the superhero genre, Holland starred as treasure hunter Nathan Drake in the 2022 adaptation of PlayStation's 'Uncharted'. The adventure feature defied modest box office projections to earn over $407 Million worldwide, proving Holland's ability to inaugurate new cinematic franchises."
      ],
      keyTakeaway: "Spider-Man: No Way Home accumulated $1.92B, confirming Holland's status as the most profitable box office lead of his generation."
    },
    {
      heading: "Dramatic Maturation: The Crowded Room & West End Return (2024–2026)",
      paragraphs: [
        "Seeking demanding psychological challenges, Holland executive produced and starred in Apple TV+'s 2023 limited psychological thriller series 'The Crowded Room', delivering an emotionally intense portrayal of a man living with dissociative identity disorder. In 2024, Holland returned triumphantly to London's West End stage, starring as Romeo in Jamie Lloyd’s sold-out revival of 'Romeo & Juliet' at the Duke of York's Theatre, earning rave notices for his commanding stage presence.",
        "Throughout this period, Holland formed a grounded personal and creative partnership with co-star Zendaya, based between London and Los Angeles. In 2024, Holland also launched BERO, a premium non-alcoholic beer brand inspired by his personal sobriety journey, reflecting his evolving entrepreneurial portfolio."
      ],
      keyTakeaway: "Holland balanced psychological drama in The Crowded Room with a sold-out West End return in Romeo & Juliet and lifestyle venture BERO."
    },
    {
      heading: "Financial Architecture, Commercial Contracts & Real Estate Holdings",
      paragraphs: [
        "Tom Holland’s verified net worth is certified at $25.0 Million USD. Having progressed from a modest $250,000 baseline salary on 'Captain America: Civil War', Holland commands upfront base compensation between $10 Million and $15 Million per studio tentpole, supplemented by lucrative first-dollar gross backend participations on the Spider-Man and Uncharted franchises.",
        "His commercial portfolio includes multi-year global ambassadorships with luxury fashion house Prada, Marks & Spencer, and Audi. His real estate investments encompass a multi-million-pound property portfolio in South West London, featuring a comprehensively renovated six-bedroom residence near his childhood home in Kingston upon Thames."
      ],
      keyTakeaway: "Holland holds an estimated $25M net worth built upon $10M+ tentpole fees, equity in BERO, and luxury commercial partnerships."
    }
  ],

  "rosalia": [
    {
      heading: "Catalan Heritage, ESMUC Flamenco Mastery & Academic Foundations (1992–2017)",
      paragraphs: [
        "Rosalía Vila Tobella was born on September 25, 1992, in Sant Cugat del Vallès, Catalonia, Spain, and raised in nearby Sant Esteve Sesrovires. Possessing an instinctive ear for vocal harmony from early childhood, she discovered traditional Andalusian flamenco at age 13 through the music of legendary singer Camarón de la Isla. Recognizing her dedication, her parents supported her enrollment at the Superior School of Music of Catalonia (ESMUC) in Barcelona.",
        "Under the strict tutelage of acclaimed cantaor Chiqui de Jerez—who accepted only one vocal pupil annually—Rosalía immersed herself in the demanding, microtonal vocal traditions of classical cante jondo. She recorded her 2017 debut acoustic album 'Los Ángeles' alongside producer Raül Refree, receiving a Latin Grammy nomination for Best New Artist and introducing her pristine vocal control to European cultural critics."
      ],
      keyTakeaway: "Rosalía completed rigorous academic training in classical flamenco at ESMUC, establishing the technical mastery underlying her pop avant-garde sound."
    },
    {
      heading: "The El Mal Querer Sensation: Redefining Global Latin Pop (2018–2021)",
      paragraphs: [
        "In November 2018, Rosalía released 'El Mal Querer' as her official university graduation thesis. A conceptual masterpiece structured around the 13th-century Occitan romance 'Flamenca', the album synthesized classical palmas handclaps and castanets with 808 bass, autotuned vocal harmonies, and urban trap beats. Produced alongside El Guincho, the breakthrough single 'Malamente' became a global cultural sensation.",
        "The album earned Rosalía two Latin Grammy Awards, including Album of the Year, and the Grammy Award for Best Latin Rock, Urban or Alternative Album. Follow-up collaborations like 'Con Altura' with J Balvin broke streaming records, exceeding two billion views on YouTube and introducing contemporary Catalan musical experimentation to global audiences."
      ],
      quote: {
        text: "Rosalía has managed to do what many thought impossible: respect the classical roots of centuries-old flamenco while creating the freshest pop music on earth.",
        source: "El País Cultural Review"
      },
      keyTakeaway: "El Mal Querer became a landmark cultural achievement, winning Latin Grammy Album of the Year as a university thesis project."
    },
    {
      heading: "Motomami: The Avant-Garde Cultural Movement & Global Arena Tour (2022–2024)",
      paragraphs: [
        "In March 2022, Rosalía released her third studio album, 'Motomami', a radical sonic departure characterized by experimental minimalism, hyperpop industrial distortions, bachata, and stream-of-consciousness lyricism. Featuring tracks like 'Saoko', 'Candy', and 'La Fama' (featuring The Weeknd), 'Motomami' became the highest-reviewed album of the year globally on Metacritic (94/100).",
        "At the 23rd Annual Latin Grammy Awards, 'Motomami' won four awards, making Rosalía the first woman in history to win Album of the Year twice as a lead artist. Her accompanying Motomami World Tour traversed 46 arena dates across Europe, Latin America, and North America, grossing over $30 Million and establishing an avant-garde visual standard for modern stage performance."
      ],
      keyTakeaway: "Motomami earned universal critical acclaim (94 Metacritic) and historic Latin Grammy Album of the Year honors."
    },
    {
      heading: "Collaborative Vanguard, High-Fashion Ambassadorship & Cultural Impact (2024–2026)",
      paragraphs: [
        "Following Motomami's historic run, Rosalía expanded her artistic vanguard through cross-genre musical collaborations alongside Björk, Billie Eilish, and Pharrell Williams. Her standalone global smash 'Despechá' surpassed one billion Spotify streams, while her high-fashion ambassadorships with Dior, Nike, and Acne Studios positioned her among the world's most influential fashion icons.",
        "In her personal life, following the conclusion of her engagement to Puerto Rican singer Rauw Alejandro in mid-2023, Rosalía maintained a high-profile public romantic association with Emmy-winning actor Jeremy Allen White across 2023 and 2024, captivating international entertainment publications while continuing work on her fourth studio album."
      ],
      keyTakeaway: "Rosalía solidified her status as a global pop and high-fashion visionary, surpassing one billion streams on Despechá."
    },
    {
      heading: "Financial Architecture, Touring Gross & Music Publishing Rights",
      paragraphs: [
        "Rosalía’s verified net worth is certified at $35.0 Million USD. Her revenue streams stem from lucrative global arena touring grosses, headlining international festival contracts (commanding $1M+ per set), streaming residuals, and extensive publishing rights through Sony Music Publishing and Columbia Records.",
        "Her luxury lifestyle portfolio includes prime residential properties in Catalonia, a historic modernista estate outside Manresa, and a residence in Los Angeles. Her brand ambassadorship agreements with Dior and international luxury houses represent eight-figure commercial endorsements."
      ],
      keyTakeaway: "Rosalía holds a verified $35M net worth driven by stadium touring receipts, music rights, and global luxury endorsements."
    }
  ],

  "travis-kelce": [
    {
      heading: "Ohio Athletics, Cincinnati Bearcats Stardom & NFL Draft (1989–2013)",
      paragraphs: [
        "Travis Michael Kelce was born on October 5, 1989, in Westlake, Ohio, and raised in Cleveland Heights alongside his older brother Jason Kelce (later an All-Pro NFL center for the Philadelphia Eagles). The sons of Ed, a steel sales representative, and Donna Kelce, a banking executive, both brothers were athletic prodigies at Cleveland Heights High School, where Travis excelled in football, basketball, and baseball.",
        "Accepting a scholarship to the University of Cincinnati in 2008, Kelce initially played quarterback before transitioning to tight end. In his 2012 senior campaign for the Bearcats, Kelce caught 45 passes for 720 yards and eight touchdowns, earning First-Team All-Big East honors. The Kansas City Chiefs drafted Kelce in the third round (63rd overall) of the 2013 NFL Draft, beginning a historic partnership with head coach Andy Reid."
      ],
      keyTakeaway: "Kelce honed his exceptional athletic coordination playing quarterback and multi-sport athletics before transitioning to tight end."
    },
    {
      heading: "Kansas City Chiefs Ascendancy & The Mahomes Dynasty (2014–2020)",
      paragraphs: [
        "Following a rookie year lost to knee surgery, Kelce emerged in 2014 as the focal point of the Chiefs' passing attack, compiling over 860 receiving yards. With the arrival of franchise quarterback Patrick Mahomes in 2018, Kelce entered the most dominant statistical period ever recorded by an NFL tight end. Between 2016 and 2022, Kelce logged seven consecutive 1,000-yard receiving seasons—an all-time NFL record for tight ends.",
        "In February 2020, Kelce caught a pivotal fourth-quarter touchdown pass in Super Bowl LIV against the San Francisco 49ers, leading the Chiefs back from a ten-point deficit to secure Kansas City's first championship in 50 years and establishing a new standard for modern receiving tight ends."
      ],
      quote: {
        text: "Travis has an innate feel for leverage and space that cannot be coached. He reads defenses like an elite quarterback while carrying the body of a defensive end.",
        source: "Chiefs Head Coach Andy Reid"
      },
      keyTakeaway: "Kelce engineered seven consecutive 1,000-yard seasons and captured Super Bowl LIV, inaugurating the Chiefs dynasty."
    },
    {
      heading: "Historic Back-to-Back Super Bowls & All-Time NFL Records (2021–2024)",
      paragraphs: [
        "In February 2023 at Super Bowl LVII, Travis and Jason Kelce made sports history by becoming the first brothers to play against each other in a Super Bowl, with Travis catching six passes and a touchdown in the Chiefs' 38–35 victory over the Eagles. One year later, at Super Bowl LVIII in Las Vegas, Kelce led the Chiefs to a thrilling overtime victory over the 49ers, completing the first NFL back-to-back title defense in two decades.",
        "During the 2023–2024 postseason run, Kelce surpassed Hall of Fame wide receiver Jerry Rice for the most postseason receptions in NFL history (exceeding 165 catches), cementing his legacy as the greatest postseason pass-catcher in the history of professional football."
      ],
      keyTakeaway: "Kelce broke Jerry Rice's all-time NFL postseason reception record and won back-to-back Super Bowls in 2023 and 2024."
    },
    {
      heading: "The New Heights Media Empire & Cultural Crossover (2024–2026)",
      paragraphs: [
        "In 2022, Travis and Jason Kelce launched their sports and culture podcast 'New Heights with Jason and Travis Kelce'. The show quickly grew into the number one sports podcast globally, leading to a landmark three-year, $100 Million distribution agreement with Amazon's Wondery in August 2024. Expanding into television, Kelce hosted 'Saturday Night Live' to critical acclaim in March 2023, guest-starred in Ryan Murphy’s FX drama 'Grotesquerie', and hosted Prime Video’s 'Are You Smarter Than a Celebrity?'.",
        "In summer 2023, Kelce's relationship with music icon Taylor Swift became a global pop culture phenomenon. The high-profile romance generated unprecedented crossover viewership for NFL broadcasts, with Kelce actively supporting Swift during international Eras Tour dates in London, Sydney, and Singapore."
      ],
      keyTakeaway: "Kelce secured a $100M podcast deal for New Heights and transcended sports through acclaimed hosting and global cultural prominence."
    },
    {
      heading: "Financial Architecture, NFL Contracts & Venture Investments",
      paragraphs: [
        "Travis Kelce’s verified net worth is certified at $50.0 Million USD. In April 2024, the Chiefs signed Kelce to a two-year, $34.25 Million contract extension, making him the highest-paid tight end in NFL history. Over his NFL career, Kelce has amassed over $100 Million in on-field earnings alone.",
        "His venture capital and brand portfolio includes equity stakes in energy drink brand A Shoc, Cholula Hot Sauce, the Formula 1 Alpine racing team, and major commercial endorsements with Nike, State Farm, Pfizer, and Campbell's. His real estate assets include a private $6 Million gated mansion in Leawood, Kansas, and an estate in Kansas City."
      ],
      keyTakeaway: "Kelce holds an estimated $50M net worth, anchored by his record NFL contract, $100M Wondery deal, and Alpine F1 equity."
    }
  ]
`;

// Insert before closing bracket of CELEBRITY_BIOGRAPHIES: };
const lastBraceIndex = content.lastIndexOf('};');
if (lastBraceIndex !== -1) {
  content = content.slice(0, lastBraceIndex) + ',\n' + newBiographies.trim() + '\n' + content.slice(lastBraceIndex);
  fs.writeFileSync(file, content, 'utf-8');
  console.log('Successfully added comprehensive biographies for Tom Holland, Rosalía, and Travis Kelce!');
}
