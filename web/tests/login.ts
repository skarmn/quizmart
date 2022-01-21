import * as DefaultPage from "../pageObjects/default.page"
import * as LoginPage from "../pageObjects/login.page"
import * as LoginWithEmail from "../pageObjects/loginWithEmail.page"

const password = "123456"

const incorrectEmail = "labas"
const unregisteredEmail = "skaiste@gmail.com"

const mainUrl = ''
const signInUrl = 'sign-in/'

describe('My Login application', () => {

    it('should open sign in with email page', async () => {
        DefaultPage.openUrl(mainUrl);
        LoginPage.clickSignInWithEmailButton()
        browser.pause(3000)

    })

    beforeEach(function(){
        DefaultPage.openUrl(signInUrl);
        browser.pause(3000)
    })

    it('should not login without email and password', async () => {
        await LoginWithEmail.clickSignInButton()
        await browser.pause(3000)

    })

    it('should not login with invalid email', async () => {
        await LoginWithEmail.typeCredentials(incorrectEmail, password)
        await LoginWithEmail.clickSignInButton()
        await browser.pause(3000)
        
    })

    it('should not login with unregistered email', async () => {
        await LoginWithEmail.typeCredentials(unregisteredEmail, password)
        await LoginWithEmail.clickSignInButton()
        await browser.pause(3000)
        
    })
});
