const puppeteer = require("puppeteer");

const scrape = async (url) => {
  const browser = await puppeteer.launch({
    // headless: false,
  });
  const page = await browser.newPage();

  await page.emulate({
    name: "iPhone X",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: Math.floor(375 * 1.333),
      height: Math.floor(2000 * 1.333),
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false,
    },
  });
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.body.scrollTo(0, 0));
  const image = await page.screenshot({
    encoding: "binary",
    quality: 30,
    type: 'jpeg',
  });

  browser.close();

  return image;
};

module.exports = scrape;
