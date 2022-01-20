import * as DefaultPage from "../pageObjects/default.page"
import * as LoginPage from "../pageObjects/login.page"
import * as LoginWithEmail from "../pageObjects/loginWithEmail.page"

describe('My Login application', () => {
    it('should not login without email and password', async () => {
        await DefaultPage.openUrl();
        await LoginPage.clickSignInWithEmailButton()
        await browser.pause(3000)
        await LoginWithEmail.clickSignInButton()
        await browser.pause(3000)

    });
});
