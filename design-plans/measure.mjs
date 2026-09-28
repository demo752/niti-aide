import {chromium} from '@playwright/test';
import fs from 'node:fs';
const browser=await chromium.launch({channel:'msedge'});const page=await browser.newPage();
const result=[];
for(const width of [1863,390]){
 await page.setViewportSize({width,height:1000});await page.goto('http://127.0.0.1:5174');await page.evaluate(()=>document.fonts.ready);
 result.push(await page.evaluate((width)=>{
 const selectors=['.hero h1','.hero-copy>p','.nav nav a','.hero .button','.workspace-nav','.sample-answer p','.source-link','.principles strong','#problem h2','#problem .lead','#problem>div:nth-child(2)>p:not(.lead)','.original-metrics p','.record-stack>span','.platform-tabs button','.capability-copy>p','.warning-row p','.preview-disclaimer','.platform-metrics span','.citizen-copy>p:not(.lead)','.chat-answer','.chat-citation','.citizen-promises p','.language-band p','.boundary-label','.architecture-output>span','.security-details p','.sovereignty-values>span','.steps p','.steps small','.about-layout p','.founders strong','.contact-details small','.footer-bottom'];
 const rgb=s=>(s.match(/[\d.]+/g)||[]).map(Number);
 const luminance=c=>c.slice(0,3).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
 return {width,overflow:document.documentElement.scrollWidth>innerWidth,items:selectors.map(selector=>{const e=document.querySelector(selector);if(!e)return {selector,missing:true};const s=getComputedStyle(e);let parent=e,bg='rgb(255, 255, 255)';while(parent){const candidate=getComputedStyle(parent).backgroundColor;const c=rgb(candidate);if(c.length===3||(c.length===4&&c[3]===1)){bg=candidate;break;}parent=parent.parentElement;}const f=luminance(rgb(s.color)),b=luminance(rgb(bg));return {selector,text:e.textContent.trim().slice(0,100),size:s.fontSize,lineHeight:s.lineHeight,color:s.color,background:bg,contrast:Math.round((Math.max(f,b)+.05)/(Math.min(f,b)+.05)*100)/100,width:Math.round(e.getBoundingClientRect().width)};})};
 },width));
}
fs.writeFileSync('design-plans/visual-audit-measurements.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result));await browser.close();
