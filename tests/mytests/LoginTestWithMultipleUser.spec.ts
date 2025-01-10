import {test,expect, Browser, Page, Locator, webkit, chromium,BrowserContext} from '@playwright/test';
import { firefox } from 'playwright';

test('Login Page ', async()=>{
    test.setTimeout(60000);

//    const browser:Browser = await firefox.launch({headless: false});
   // const browser:Browser = await webkit.launch({headless: false});
    const browser:Browser = await chromium.launch({headless: false});

    const browserContest1:BrowserContext = await browser.newContext();
    const browserContest2:BrowserContext = await browser.newContext();
    const page1:Page = await browserContest1.newPage();
    const page2:Page = await browserContest2.newPage();
    
    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    
    const email1: Locator = await page1.locator('input[name="email"]')
    const password1: Locator = await page1.locator('input[name="password"]')
    const login1: Locator = await page1.locator('input[value="Login"]')


    const email2: Locator = await page2.locator('input[name="email"]')
    const password2: Locator = await page2.locator('input[name="password"]')
    const login2: Locator = await page2.locator('input[value="Login"]')
    //await expect(page).toHaveTitle(/Playwright/);

    //Test  for multiple users-- User1
    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await email1.fill('test2pw@gmail.com');
    await password1.fill('Test@123');
    await login1.click();
    const tittle1:string= await page1.title();
    await expect(tittle1).toBe('My Account');
    console.log("Home page tittle: ",tittle1);
    await page1.screenshot({path:'./screenshots/homepage2.png'});

    //Test  for multiple users-- User2
    await email2.fill('test1pw@gmail.com');
    await password2.fill('Test@123');
    await login2.click();
    const tittle2:string= await page2.title();
    await expect(tittle2).toBe('My Account');
    console.log("Home page tittle: ",tittle2 );
    await page2.screenshot({path:'./screenshots/homepage.png'});

    await  browserContest1.close();
    await browserContest2.close();
    await browser.close();
    await new Promise( ()=> {}) // prevent your script from existing.
    });