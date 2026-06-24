const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    try {
        await page.goto("https://www.alibaba.com/product-detail/IPL-Hair-Removal-with-Ice-Cooling_1601577208241.html", { waitUntil: "networkidle2" });
        
        // Try to extract video URL
        const videoSrc = await page.evaluate(() => {
            const video = document.querySelector("video");
            return video ? video.src : null;
        });
        
        console.log("Video URL:", videoSrc);
    } catch(e) {
        console.error(e);
    } finally {
        await browser.close();
    }
})();
