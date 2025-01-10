import {test,expect, Browser, Page, Locator, webkit, chromium} from '@playwright/test';
import { firefox } from 'playwright';

test('Login Page ', async()=>{

//    const browser:Browser = await firefox.launch({headless: false});
   // const browser:Browser = await webkit.launch({headless: false});
    const browser:Browser = await chromium.launch({headless: false});
    const page:Page =await browser.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    
    const email: Locator = await page.locator('input[name="email"]')
    const password: Locator = await page.locator('input[name="password"]')
    const login: Locator = await page.locator('input[value="Login"]')
    //await expect(page).toHaveTitle(/Playwright/);

    await email.fill('RQVdC@example.com');
    await password.fill('123456');
    await login.click();

    const tittle:string= await page.title();

    await expect(tittle).toBe('Account Login');

    console.log("Home page tittle: ",tittle );

    await page.screenshot({path:'./screenshots/homepage.png'});

    browser.close();
    await new Promise(resolve => {}) // prevent your script from existing.
    });