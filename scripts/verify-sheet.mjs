async function check() {
  const url = 'https://docs.google.com/spreadsheets/d/12nBko_5CFFp_Kh50XNblDgGvGpMjaArGyPQctqkeCo0/export?format=csv&gid=0';
  const res = await fetch(url);
  const csv = await res.text();
  console.log('SHEET1 CSV CONTENT:');
  console.log(csv);
}
check();
