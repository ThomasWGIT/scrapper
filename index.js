const puppeteer = require('puppeteer');
const base64 = require('node-base64-image');


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://lelscan-vf.cc/manga/solo-leveling/179');
    const url = await page.evaluate(() => {
        return document.querySelector('.scan-page').src;
    })
    console.log(url)
    
    const image = await base64.encode(url);
    await base64.decode(image, { fname: './scan/example', ext: 'jpg' });
    await browser.close();
})();