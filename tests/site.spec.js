import {test,expect} from '@playwright/test';
test('desktop and mobile layouts and key interactions',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');await page.evaluate(()=>document.fonts.ready);
 await expect(page.locator('html')).toHaveAttribute('data-theme','light');
 await page.getByRole('tab',{name:'Live dashboard'}).click();await expect(page.locator('#cap-title')).toContainText('Live dashboard');
 await page.getByRole('tab',{name:'Live dashboard'}).press('ArrowRight');await expect(page.getByRole('tab',{name:'Early warning'})).toBeFocused();await expect(page.locator('#cap-title')).toContainText('Early warning');
 await page.getByRole('tab',{name:'Knowledge assistant'}).click();
 await page.getByRole('button',{name:'हिन्दी',exact:true}).click();await expect(page.locator('#chat-question')).toHaveAttribute('lang','hi');await expect(page.locator('#chat-question')).toContainText('दस्तावेज़');
 await page.getByRole('button',{name:'English',exact:true}).click();
 await expect(page.locator('.hero-product')).toBeHidden();
 for(const width of [1440,768,390,320]){
  await page.setViewportSize({width,height:1000});await page.goto('/');await page.evaluate(()=>document.fonts.ready);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),`overflow at ${width}`).toBeTruthy();
  if(width===1440||width===390)await page.screenshot({path:`qa/${width}.png`,fullPage:true});
  if(width===390){await page.getByRole('button',{name:'Open navigation'}).click();await expect(page.locator('#navigation')).toBeVisible();await page.locator('#navigation').getByText('Citizens').click();await expect(page.locator('#navigation')).toBeHidden();}
 }
 await page.setViewportSize({width:390,height:844});await page.getByRole('button',{name:'Increase text size'}).click();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBeTruthy();
 await page.locator('#about').scrollIntoViewIfNeeded();await expect.poll(()=>page.locator('img').evaluateAll(imgs=>imgs.every(i=>i.complete&&i.naturalWidth>0))).toBeTruthy();
 const missing=await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src));expect(missing).toEqual([]);expect(errors).toEqual([]);
});

test('original copy and reduced motion remain usable',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 await expect(page.locator('h1')).toContainText('Secure Sovereign AI for Indian Governance');
 await expect(page.locator('#problem h2')).toContainText('Government has the information.');
 await expect(page.locator('#implementation h2')).toContainText('Go Live in 5 Steps.');
 await page.locator('#security').scrollIntoViewIfNeeded();
 await expect(page.locator('.security-illustration img')).toBeVisible();
 await page.getByRole('tab',{name:'Live dashboard'}).click();
 expect(await page.locator('#cap-preview').evaluate(e=>e.getAnimations().length)).toBe(0);
});
