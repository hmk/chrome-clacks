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

  it ('should visit gnuterrypratchett.com and check for the header', async () => {
    await page.goto('http://www.gnuterrypratchett.com');
    const header = await page.evaluate(() => {
      return document.querySelector('h1').innerText;
    });
    expect(header).toBe('GNU Terry Pratchett');
  });
});