import * as DefaultPage from "../pageObjects/default.page"
import * as LoginPage from "../pageObjects/login.page"
import * as LoginWithEmail from "../pageObjects/loginWithEmail.page"

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await DefaultPage.openUrl();
        await LoginPage.clickSignInWithEmailButton()
        await LoginWithEmail.clickSignInButton()
        await browser.pause(5000)

    });
});
