import {chromium} from '@playwright/test';
const browser=await chromium.launch();const page=await browser.newPage({reducedMotion:'reduce'});const errors=[];page.on('pageerror',e=>errors.push(e.message));
for(const width of [1440,390]){await page.setViewportSize({width,height:width===1440?1000:844});for(const route of ['hero-a','hero-b','noise']){await page.goto(`http://127.0.0.1:3000/explorations/${route}`);await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:`../.tools/screenshots/v4-${route}-${width}.png`,fullPage:true});}await page.goto('http://127.0.0.1:3000/');await page.screenshot({path:`../.tools/screenshots/v4-home-${width}.png`,fullPage:true});}
console.log(JSON.stringify({errors}));await browser.close();
