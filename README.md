# Learn_playwright_with_typescript

## Install
- npm init playwright@latest to Install 
- npm install playwright --save-dev
- npm install @playwright/test --save-dev
- npm install typescript --save-dev
- npx tsc --init

Add VS code extension 
- playwright runner


# Run tests on different browsers
- npx playwright test -> Run all the test cases in headless mode
- npx playwright test --ui -- Run in UI mode,help for debugging
- npx playwright test --headed --> run with headed browser
- npx playwright test landing-page.spec.ts -- run specific test file
- npx playwright show-report  --> Open report

- npx playwright test --project webkit/firefoix/chromium
- npx playwright test --project webkit --project firefox
