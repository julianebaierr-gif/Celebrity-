const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwYVJNDsuREc7ghmmYqv-05_7fkXV8LbmNhcQ_3ijmTXqe_Q-eY0vDMgFI9egnAd6Y/exec";

async function test() {
  console.log("Testing Google Apps Script Webhook...");
  // Let's test what it accepts
  try {
    const testRow = ["test_kw", "Category", "tag1 | tag2", "Published", "https://celebledger.com/test", "2026-02-14 09:00:00"];
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testRow),
      redirect: "follow"
    });
    console.log("Status:", res.status);
    const text = await res.text();
    console.log("Response:", text);
  } catch (err) {
    console.error("Error:", err);
  }
}

test();
