import * as DefaultPage from "../pageObjects/default.page"
import * as LoginWithEmail from "../pageObjects/loginWithEmail.page"
import { myCredentials } from "../util/credentials"
import * as credentials from "../util/incorrectCredentials"
import { messages } from "../util/field-validation-messages"
import { expect } from "chai"

const signInUrl = 'sign-in/'

describe('My Login application', () => {

    beforeEach(function(){
        DefaultPage.openUrl(signInUrl);
        LoginWithEmail.waitUntilBtnSignInIsVisible()
    })

    it('should not login without email and password', async () => {
        await LoginWithEmail.clickSignInButton()
       // expect(await LoginWithEmail.getEmailValidationErrorMessage()).equals(messages.FieldIsRequired)
       // expect(await LoginWithEmail.getPasswordValidationErrorMessage()).equals(messages.FieldIsRequired)
    })

    //email validation

    it('should not login with invalid email', async () => {
        for (const invalidEmail of credentials.incorrectEmails) {
        await LoginWithEmail.typeCredentials(invalidEmail, credentials.password)
        await LoginWithEmail.clickSignInButton()
        LoginWithEmail.waitUntilBtnSignInIsVisible()
        await browser.refresh()  
        }
        
    })

    it('should not login with unregistered email', async () => {
        await LoginWithEmail.typeCredentials(credentials.unregisteredEmail, credentials.password)
        await LoginWithEmail.clickSignInButton()
        LoginWithEmail.waitUntilBtnSignInIsVisible()
        
    })

    //password validation

    it('should not login with incorrect password', async () => {
        await LoginWithEmail.typeCredentials(myCredentials.email, credentials.password)
        await LoginWithEmail.clickSignInButton()
        LoginWithEmail.waitUntilBtnSignInIsVisible()
        
    })

    it('should not login with password which has less than 6 symbols', async () => {
        await LoginWithEmail.typeCredentials(myCredentials.email, credentials.shortPass)
        await LoginWithEmail.clickSignInButton()
        LoginWithEmail.waitUntilBtnSignInIsVisible()
        
    })

    it('should not login with password which has more than 100 symbols', async () => {
        await LoginWithEmail.typeCredentials(myCredentials.email, credentials.longPass)
        await LoginWithEmail.clickSignInButton()
        LoginWithEmail.waitUntilBtnSignInIsVisible()
        
    })

    it('should login with password which has 100 symbols', async () => {
        await LoginWithEmail.typeCredentials(myCredentials.email, credentials.correctPass)
        await LoginWithEmail.clickSignInButton()
        LoginWithEmail.waitUntilBtnSignInIsVisible()
        
    })

    //successful login

    it('should login with registered email', async () => {
        await LoginWithEmail.typeCredentials(myCredentials.email, myCredentials.password)
        await LoginWithEmail.clickSignInButton()
        LoginWithEmail.waitUntilBtnSignInIsVisible()
        
    })
    
});
