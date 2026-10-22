import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import {chromium} from '@playwright/test';
import {writeFile} from 'node:fs/promises';
const chrome=await chromeLauncher.launch({chromePath:chromium.executablePath(),chromeFlags:['--headless=new','--no-sandbox']});
try{const {lhr}=await lighthouse('http://127.0.0.1:3000/',{port:chrome.port,onlyCategories:['performance','accessibility','best-practices','seo'],output:'json',logLevel:'error'});const result={categories:Object.fromEntries(Object.entries(lhr.categories).map(([k,v])=>[k,v.score])),LCP:lhr.audits['largest-contentful-paint'].displayValue,CLS:lhr.audits['cumulative-layout-shift'].displayValue,TBT:lhr.audits['total-blocking-time'].displayValue};await writeFile('../.tools/v6-lighthouse.json',JSON.stringify(result,null,2));console.log(result)}finally{await chrome.kill()}
