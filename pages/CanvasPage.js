const testData = require('../test-data/config.json');

class CanvasPage {
    constructor(page) {
        this.page = page;
        this.menuLoginButton = 'text=Log In';
        this.canvasLoginButton = 'text=Canvas';
        this.emailField = 'input[name="pseudonym_session[unique_id]"]';
        this.passwordField = 'input[name="pseudonym_session[password]"]';
        this.errorMessage = 'div.ic-flash-error';
    }

    async navigateToCanvasLogin() {
        await this.page.goto(testData.baseUrl);
        await this.page.click(this.menuLoginButton)
        await this.page.click(this.canvasLoginButton);
        await this.page.getByRole('tab', { name: 'Canvas Network' }).click();   
    }

    async login(email, password) {
        await this.page.locator(this.emailField).fill(email);
        await this.page.fill(this.passwordField, password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async getErrorMessage() {
        return await this.page.innerText(this.errorMessage);
    }
}

module.exports = CanvasPage;
