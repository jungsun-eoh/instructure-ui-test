const { test, expect } = require('@playwright/test');
const CanvasPage = require('../pages/CanvasPage');
const testData = require('../test-data/config.json');

test.describe('Canvas Network Login Test', () => {
    test('Should display error message for invalid login', async ({ page }) => {
        const canvasPage = new CanvasPage(page);

        // Navigate to the login page
        await canvasPage.navigateToCanvasLogin();

        // Attempt to log in with invalid credentials
        await canvasPage.login(
            testData.invalidCredentials.email,
            testData.invalidCredentials.password
        );

        // Assert error message is displayed
        const errorText = await canvasPage.getErrorMessage();
        expect(errorText).toContain(testData.errorMessages.loginWithInvalidCredentials);
    });
});
