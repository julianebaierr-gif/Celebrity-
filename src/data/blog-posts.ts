export interface BlogPost {
  slug: string;
  title: string;
  headline: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
  };
  publishedDate: string;
  readingTimeMinutes: number;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-celebrity-net-worth-is-calculated",
    title: "How Celebrity Net Worth Is Actually Calculated: Behind the Balance Sheets",
    headline: "An inside look into municipal public filings, box office backend points, and corporate royalties.",
    excerpt: "From real estate deed registries to studio profit-participation audits, discover the rigorous financial journalism methodology behind certified celebrity valuations.",
    content: `
When public inquiries surge around celebrity wealth, internet estimations often lean on unchecked speculation. At CelebEdge, calculating an authentic valuation demands a disciplined forensic approach grounded strictly in primary records.

### 1. Municipal Deed Registries & Real Estate Deeds
Real estate forms the bedrock of tangible celebrity assets. County assessor offices and municipal property deeds across California, New York, and international jurisdictions reveal verified acquisition costs, property transfers, and mortgage liabilities.

### 2. Studio Backend Royalties & Profit Participation
Top-tier stars negotiate backend participation points (first-dollar gross or adjusted gross receipts). For example, Margot Robbie's landmark agreement for 'Barbie' combined an upfront salary with percentage points that generated over $50 Million as the film surpassed $1.44 Billion worldwide.

### 3. Corporate Filings & Trademark Portfolios
Actors and musicians frequently hold proprietary ownership stakes in production companies, apparel lines, and lifestyle brands. SEC filings, USPTO trademark registries, and venture capital disclosure announcements provide authenticated valuations of these private equity holdings.
    `,
    coverImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Marcus Vance",
      role: "Senior Entertainment & Industry Analyst",
    },
    publishedDate: "2026-02-15T10:00:00Z",
    readingTimeMinutes: 5,
    tags: ["Financial Analysis", "Box Office", "Industry Insights"],
  },
  {
    slug: "tim-curry-rocky-horror-sixty-year-legacy",
    title: "The Undisputed Icon: How Tim Curry Defined Six Decades of Cult Cinema",
    headline: "Reflecting on the transformative stage and screen career of Dr. Frank-N-Furter and Wadsworth.",
    excerpt: "Exploring the legendary career of Tim Curry, whose versatility across stage, horror, comedy, and voice acting remains a masterclass in the performing arts.",
    content: `
Few actors command the cultural reverence of Timothy James Curry. From the moment he strutted across the stage in 1973 in Richard O'Brien's 'The Rocky Horror Show', Curry redefined theatrical magnetism.

### The Longest Theatrical Run in Cinematic History
When 20th Century Fox released 'The Rocky Horror Picture Show' in 1975, initial reviews were divided. Yet through midnight screenings, audience participation, and Curry's peerless vocal delivery, the film became the longest continuously running theatrical release in history.

### The Nuance of Pennywise
In ABC's landmark 1990 adaptation of Stephen King's 'IT', Curry created a cultural nightmare that influenced an entire generation. Avoiding excessive gore, his Pennywise relied on vaudevillian comedic timing juxtaposed with genuine menace.

### Resilience and Artistic Commitment
Following a stroke in 2012, Curry's resilience has served as an enduring inspiration. Retaining his distinctive baritone and sharp wit, he has remained a prolific voiceover artist and theatrical patron, honored with a Lifetime Achievement Tony Award.
    `,
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Sarah Jenkins",
      role: "Cinema Historian & Editorial Director",
    },
    publishedDate: "2026-02-28T12:00:00Z",
    readingTimeMinutes: 6,
    tags: ["Cinema History", "Cult Classics", "Career Retrospectives"],
  },
  {
    slug: "actor-producer-revolution-hollywood",
    title: "The Actor-Producer Revolution: How Stars Are Owning Their Intellectual Property",
    headline: "From Margot Robbie's LuckyChap to Matt Damon & Ben Affleck's Artists Equity.",
    excerpt: "Hollywood leading talent are increasingly moving behind the camera, controlling production equity and fundamentally reshaping compensation models in modern cinema.",
    content: `
The traditional studio model—where screen talent functioned strictly as hired performers—has undergone a historic transformation. Today's most influential stars are founding their own independent studios to retain creative autonomy and backend equity.

### Artists Equity: The Profit-Sharing Paradigm
Founded in 2022 by lifelong partners Matt Damon and Ben Affleck in collaboration with RedBird Capital, Artists Equity established a groundbreaking model: sharing backend profits not just with headlining talent, but with every below-the-line crew member.

### LuckyChap: Championing Original Voices
Margot Robbie's LuckyChap Entertainment has achieved consecutive Oscar and commercial breakthroughs by betting on daring author-driven cinema—from 'Promising Young Woman' and 'Saltburn' to the billion-dollar cultural triumph of 'Barbie'.
    `,
    coverImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Elena Rostova",
      role: "Culture & Media Business Lead",
    },
    publishedDate: "2026-03-05T09:00:00Z",
    readingTimeMinutes: 4,
    tags: ["Film Production", "Industry Insights", "Studio Business"],
  }
];

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
