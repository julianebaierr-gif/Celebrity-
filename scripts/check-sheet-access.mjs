async function check() {
  const url = 'https://docs.google.com/spreadsheets/d/12nBko_5CFFp_Kh50XNblDgGvGpMjaArGyPQctqkeCo0/edit?gid=0#gid=0';
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const html = await res.text();
  console.log('Status:', res.status);
  
  const canEditMatch = html.match(/"canEdit":(true|false)/);
  console.log('canEdit:', canEditMatch ? canEditMatch[1] : 'not found');
  
  const isAnonymousMatch = html.match(/"isAnonymous":(true|false)/);
  console.log('isAnonymous:', isAnonymousMatch ? isAnonymousMatch[1] : 'not found');
  
  const titleMatch = html.match(/<meta property="og:title" content="([^"]+)"/);
  console.log('Title:', titleMatch ? titleMatch[1] : 'not found');
}
check();
