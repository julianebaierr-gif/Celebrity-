const http = require('http');

const sampleBatch = [
  {
    celebritySlug: "cillian-murphy",
    headline: "Cillian Murphy Wins Best Actor for Oppenheimer",
    details: "The Academy of Motion Picture Arts and Sciences awarded Cillian Murphy the Oscar for Best Actor.",
    forceType: "major_milestone"
  },
  {
    celebritySlug: "cillian-murphy",
    headline: "Cillian Murphy Addresses Crowd in Dublin Following Historic Oscar Night",
    details: "Murphy spoke to celebratory crowds in Ireland about national pride and cinema.",
    forceType: "major_milestone"
  },
  {
    celebritySlug: "keanu-reeves",
    headline: "Keanu Reeves Signs Five-Picture Deal with Legendary Entertainment",
    details: "Reeves has officially signed a landmark production and starring contract for multiple sci-fi features.",
    forceType: "major_milestone"
  }
];

const postData = JSON.stringify({
  events: sampleBatch,
  options: {
    dripIntervalHours: 4,
    autoConsolidateSameEntity: true
  }
});

const req = http.request('http://localhost:3005/api/pipeline/batch-update', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
}, (res) => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    const json = JSON.parse(d);
    console.log('Batch Summary:');
    console.log('  Total Submitted:', json.summary?.totalSubmitted);
    console.log('  Consolidated Events:', json.summary?.consolidatedEvents);
    console.log('  Articles Scheduled/Published:', json.summary?.articlesScheduledOrPublished);
    console.log('  Publishing Schedule:');
    json.summary?.publishingSchedule?.forEach(s => {
      console.log(`    - ${s.celebrityName} -> "${s.headline}"`);
      console.log(`      Scheduled Time: ${s.scheduledPublishTime}`);
      console.log(`      Slug: ${s.slug}`);
    });
  });
});

req.on('error', (e) => console.error('Error:', e.message));
req.write(postData);
req.end();
