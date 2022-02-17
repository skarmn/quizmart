import * as DefaultPage from "../pageObjects/default.page"
import * as LoginPage from "../pageObjects/login.page"
import * as LoginWithEmail from "../pageObjects/loginWithEmail.page"
import { myCredentials } from "../util/credentials"
import * as credentials from "../util/incorrectCredentials"

const mainUrl = ''
const signInUrl = 'sign-in/'

/*describe('My Login application', () => {

    it('should open sign in with email page', async () => {
        DefaultPage.openUrl(mainUrl);
        await browser.maximizeWindow();
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

    //email validation

    it('should not login with invalid email', async () => {
        for (const invalidEmail of credentials.incorrectEmails) {
        await LoginWithEmail.typeCredentials(invalidEmail, credentials.password)
        await LoginWithEmail.clickSignInButton()
        await browser.pause(3000)
        await browser.refresh()  
        }
        
    })

    it('should not login with unregistered email', async () => {
        await LoginWithEmail.typeCredentials(credentials.unregisteredEmail, credentials.password)
        await LoginWithEmail.clickSignInButton()
        await browser.pause(3000)
        
    })

    //password validation

    it('should not login with incorrect password', async () => {
        await LoginWithEmail.typeCredentials(myCredentials.email, credentials.password)
        await LoginWithEmail.clickSignInButton()
        await browser.pause(3000)
        
    })

    it('should not login with password which has less than 6 symbols', async () => {
        await LoginWithEmail.typeCredentials(myCredentials.email, credentials.shortPass)
        await LoginWithEmail.clickSignInButton()
        await browser.pause(3000)
        
    })

    it('should not login with password which has more than 100 symbols', async () => {
        await LoginWithEmail.typeCredentials(myCredentials.email, credentials.longPass)
        await LoginWithEmail.clickSignInButton()
        await browser.pause(3000)
        
    })

    it('should login with password which has 100 symbols', async () => {
        await LoginWithEmail.typeCredentials(myCredentials.email, credentials.correctPass)
        await LoginWithEmail.clickSignInButton()
        await browser.pause(3000)
        
    })

    //successful login

    it('should login with registered email', async () => {
        await LoginWithEmail.typeCredentials(myCredentials.email, myCredentials.password)
        await LoginWithEmail.clickSignInButton()
        await browser.pause(3000)
        
    })
    
});*/
