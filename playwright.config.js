import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: true, // headless mode
        screenshot: 'only-on-failure',  // Capture screenshot on failure
        video: 'retain-on-failure', // Record video on failure
    },
    reporter: [['html', { outputFolder: 'playwright-report', open: 'on-failure' }]],    // Enable HTML test report
    projects: [
        { name: 'chromium', use: { browserName: 'chromium' } },
        { name: 'firefox', use: { browserName: 'firefox' } },
        { name: 'webkit', use: { browserName: 'webkit' } } // For Safari
    ],
});
