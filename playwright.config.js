import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false, // Non-headless mode
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    projects: [
        { name: 'chromium', use: { browserName: 'chromium' } },
        { name: 'firefox', use: { browserName: 'firefox' } },
        { name: 'webkit', use: { browserName: 'webkit' } } // For Safari
    ],
});
