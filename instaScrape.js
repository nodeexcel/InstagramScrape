const puppeteer = require('puppeteer');

(async (searchTerm) => {
    try {
        const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        const page = await browser.newPage();
        const url = "https://www.instagram.com/web/"
        await page.goto(url, { waitUntil: ['load', 'domcontentloaded'] });
        const selector = 'input.XTCLo.x3qfX'
        await page.type(selector, searchTerm, { delay: 400 });
        const response = await page.evaluate(() =>
            Array.from(document.querySelectorAll('div.drKGC span.Ap253')).map(result => result.innerText)
        )
        console.log(response.splice(0, 10))
        await browser.close();
    } catch (err) {
        console.log(err);
    }
})(process.env.searchTerm);
