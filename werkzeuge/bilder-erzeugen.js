// Erzeugt die Bilder in ./bilder aus index.html
//   node werkzeuge/bilder-erzeugen.js
// Benötigt Playwright (npm i -D playwright && npx playwright install chromium)
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const root = path.resolve(__dirname, "..");
  const url = "file://" + path.join(root, "index.html");
  const browser = await chromium.launch();

  // 1) Einladungsbild (Hochformat) zum Verschicken per WhatsApp
  const page = await browser.newPage({ viewport: { width: 480, height: 900 }, deviceScaleFactor: 2.25 });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: ".schnee{display:none} body{padding:20px} .antwort-leiste{display:none}" });
  await page.evaluate(() => document.fonts.ready);
  await page.locator("#karte").screenshot({ path: path.join(root, "bilder", "einladung.png") });

  // 2) Vorschaubild 1200x630 (og:image) für die Link-Vorschau in WhatsApp
  const og = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await og.goto(url, { waitUntil: "networkidle" });
  await og.addStyleTag({ content: `
    body{padding:0;display:block;height:630px;overflow:hidden}
    .schnee{display:none}
    .karte{max-width:none;width:1200px;height:630px;border-radius:0;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr}
    .antwort-leiste,.formular,.fuss{display:none!important}
    .kopf{display:flex;flex-direction:column;justify-content:center;padding:40px}
    .kopf h1{font-size:64px}.kopf .tasse{width:140px;height:140px}.kopf .gruss{font-size:26px}
    .girlande{display:none}
    .inhalt{display:flex;flex-direction:column;justify-content:center;padding:40px 48px}
    .text{font-size:20px}.eckdaten .wert{font-size:20px}
  `});
  await og.evaluate(() => document.fonts.ready);
  await og.screenshot({ path: path.join(root, "bilder", "vorschau.png") });

  await browser.close();
  console.log("Bilder erzeugt in ./bilder");
})();
