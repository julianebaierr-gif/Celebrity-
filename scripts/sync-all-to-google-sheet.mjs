import fs from "fs";

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwYVJNDsuREc7ghmmYqv-05_7fkXV8LbmNhcQ_3ijmTXqe_Q-eY0vDMgFI9egnAd6Y/exec";

// Parse sheet1-populated.csv
const csvContent = fs.readFileSync("src/data/sheet1-populated.csv", "utf8");
const lines = csvContent.split("\n").filter(l => l.trim().length > 0);

// Line 0 is header: Keywords,Category,Tags,Status,Post Url,Post Date / Tmie
const rows = [];
for (let i = 1; i < lines.length; i++) {
  // Parse CSV row respecting double quotes
  const matches = [...lines[i].matchAll(/"([^"]*)"/g)].map(m => m[1]);
  if (matches.length >= 6) {
    rows.push(matches);
  }
}

console.log(`Parsed ${rows.length} rows to push to Google Sheet via Webhook.`);

async function postRow(row, idx) {
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
      redirect: "follow"
    });
    if (res.ok) {
      console.log(`[${idx + 1}/${rows.length}] ✓ Successfully pushed: "${row[0]}" (${row[1]})`);
      return true;
    } else {
      console.error(`[${idx + 1}/${rows.length}] ✗ Failed to push "${row[0]}": Status ${res.status}`);
      return false;
    }
  } catch (err) {
    console.error(`[${idx + 1}/${rows.length}] ✗ Error pushing "${row[0]}":`, err.message);
    return false;
  }
}

async function run() {
  console.log("=== STARTING DIRECT PUSH TO GOOGLE SHEET1 ===\n");
  for (let i = 0; i < rows.length; i++) {
    await postRow(rows[i], i);
    // Slight pause between requests to prevent Google rate-limits
    await new Promise(r => setTimeout(r, 600));
  }
  console.log("\n=== ALL ROWS PUSHED TO GOOGLE SHEET1 SUCCESSFULLY ===");
}

run();
