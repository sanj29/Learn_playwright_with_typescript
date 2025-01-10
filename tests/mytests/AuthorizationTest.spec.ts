
import {test,expect, Browser, Page, Locator, webkit, chromium,BrowserContext} from '@playwright/test';
import { firefox } from 'playwright';

test('Basic Authrization test ', async()=>{
    test.setTimeout(60000);

    //const browser:Browser = await firefox.launch({headless: false});
    const browser:Browser = await chromium.launch({headless: false});
    const page:Page = await browser.newPage();
    
    const userName:string='admin';
    const password:string='admin';
    //const authHeader:string = 'Basic '+ btoa(userName+":"+password);
    await page.setExtraHTTPHeaders({'Authorization': createAuthHeader(userName,password)})
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

    const messageLoc:Locator = await page.locator("#content > div > p")
    const message: string = await messageLoc.textContent?.() ?? '';
    expect(message.trim()).toBe("Congratulations! You must have the proper credentials.");
    //await expect(page).toHaveTitle(/The Internet/);
});

function createAuthHeader(username:any, password:any){
    return 'Basic '+ btoa(username+":"+password);
}