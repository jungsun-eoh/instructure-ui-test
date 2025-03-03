const { test, expect } = require('@playwright/test');
const CanvasPage = require('../pages/CanvasPage');

test.describe('Canvas Network Login Test', () => {
    test('Should display error message for invalid login', async ({ page }) => {
        const canvasPage = new CanvasPage(page);

        // Navigate to the login page
        await canvasPage.navigateToCanvasLogin();

        // Attempt to log in with invalid credentials
        await canvasPage.login('invalid@example.com', 'wrongpassword');

        // Assert error message is displayed
        const errorText = await canvasPage.getErrorMessage();
        expect(errorText).toContain('Please verify your username or password and try again.');
    });
});
