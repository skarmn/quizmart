import * as DefaultPage from '../pageObjects/default.page'
import * as LoginPage from '../pageObjects/landing.page'

const mainUrl = ''

describe('My Login application', () => {

    it('should open sign in with email page', async () => {
        DefaultPage.openUrl(mainUrl);
        await browser.maximizeWindow();
        LoginPage.clickSignInWithEmailButton()
        await LoginPage.waitUntilBtnSignInIsVisible()
    })
});