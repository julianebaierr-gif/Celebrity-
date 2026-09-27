import fs from 'node:fs';
import path from 'node:path';

const file = path.resolve('src/data/celebrities.ts');
let content = fs.readFileSync(file, 'utf-8');

// 1. Fix Tom Holland
content = content.replace(
  'netWorth: 25000000,',
  'age: 29,\n      netWorth: "$25.0 Million",'
);
content = content.replace(
  'authorRole: "Senior Industry Writer",\n      factCheckedBy: "Elena Rostova",\n      lastUpdated: "2026-03-01T10:00:00Z",',
  'authorRole: "Senior Industry Writer",\n      factCheckedBy: "Elena Rostova",\n      publishedDate: "2026-02-15T08:00:00Z",\n      lastUpdated: "2026-03-01T10:00:00Z",'
);

// 2. Fix Rosalía
content = content.replace('category: "music",', 'category: "relationships",');
content = content.replace(
  'netWorth: 35000000,',
  'age: 33,\n      netWorth: "$35.0 Million",'
);
content = content.replace(
  '{ title: "Motomami World Tour", year: 2022, role: "Executive Producer & Lead Performer", type: "Special", rating: 8.8, boxOfficeOrNetwork: "Global Arena Tour" },',
  '{ title: "Motomami World Tour", year: 2022, role: "Executive Producer & Lead Performer", type: "Movie", rating: 8.8, boxOfficeOrNetwork: "Global Arena Tour" },'
);
content = content.replace(
  'authorRole: "Chief Biographer",\n      factCheckedBy: "Sarah Jenkins",\n      lastUpdated: "2026-03-01T10:00:00Z",',
  'authorRole: "Chief Biographer",\n      factCheckedBy: "Sarah Jenkins",\n      publishedDate: "2026-02-15T08:00:00Z",\n      lastUpdated: "2026-03-01T10:00:00Z",'
);

// 3. Fix Travis Kelce
content = content.replace('category: "sports-entertainment",', 'category: "relationships",');
content = content.replace(
  'netWorth: 50000000,',
  'age: 36,\n      netWorth: "$50.0 Million",'
);
content = content.replace(
  'authorRole: "Senior Industry Writer",\n      factCheckedBy: "David Thorne",\n      lastUpdated: "2026-03-01T10:00:00Z",',
  'authorRole: "Senior Industry Writer",\n      factCheckedBy: "David Thorne",\n      publishedDate: "2026-02-15T08:00:00Z",\n      lastUpdated: "2026-03-01T10:00:00Z",'
);

fs.writeFileSync(file, content, 'utf-8');
console.log('Fixed new celebrity profile types in celebrities.ts');
