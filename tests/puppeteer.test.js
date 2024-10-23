// Test of Puppeteer itself
const puppeteer = require('puppeteer');

describe('Puppeteer with Jest', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should navigate to example.com and check title', async () => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });

  // This relies on the h1 tag being present on the page, which is not
  // guaranteed, but has been consistent for years.
  it ('should visit gnuterrypratchett.com and check for the h1', async () => {
    await page.goto('http://www.gnuterrypratchett.com');
    const h1 = await page.evaluate(() => {
      return document.querySelector('h1').innerText;
    });
    expect(h1).toBe('GNU Terry Pratchett');
  });
});
