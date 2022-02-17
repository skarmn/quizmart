import * as DefaultPage from '../pageObjects/default.page'
import * as RegisterPage from '../pageObjects/register.page'
import * as RegisterWithEmail from '../pageObjects/registerWithEmail.page'
import {myCredentials} from '../util/credentials'
import * as credentials from '../util/incorrectCredentials'

const mainUrl = ''
const signUpUrl = 'sign-up/'

describe('My Login application', () => {

    it('should open register with email page', async () => {
        DefaultPage.openUrl(mainUrl)
        await browser.maximizeWindow()
        RegisterPage.clickRegisterButton()
        browser.pause(3000)
        RegisterPage.clickRegisterWithEmailButton()
        browser.pause(3000)
    })

    beforeEach(function(){
        DefaultPage.openUrl(signUpUrl);
        browser.pause(3000)
    })

    it('should not register without email and passwords', async () => {
        await RegisterWithEmail.clickSignUpButton()
        await browser.pause(5000)

    })

    //email validation
    it('should not register with registered email', async () => {
        await RegisterWithEmail.typeCredentials(myCredentials.email, credentials.correctPass, credentials.correctPass)
        await RegisterWithEmail.clickSignUpButton()
        await browser.pause(3000)
        
    })

    //password validation

    it('should not register with password which has less than 6 symbols', async () => {
        await RegisterWithEmail.typeCredentials(credentials.unregisteredEmail, credentials.shortPass, credentials.shortPass)
        await RegisterWithEmail.clickSignUpButton()
        await browser.pause(3000)
        
    })

    it('should not register with password which has more than 100 symbols', async () => {
        await RegisterWithEmail.typeCredentials(credentials.unregisteredEmail, credentials.longPass, credentials.longPass)
        await RegisterWithEmail.clickSignUpButton()
        await browser.pause(3000)
        
    })

    it('should not register with password which not match repeat password', async () => {
        await RegisterWithEmail.typeCredentials(credentials.unregisteredEmail, credentials.password, credentials.notMatchingPassword)
        await RegisterWithEmail.clickSignUpButton()
        await browser.pause(3000)
        
    })

    /*it('should register with password which has 100 symbols', async () => {
        await RegisterWithEmail.typeCredentials(credentials.unregisteredEmail, credentials.correctPass, credentials.correctPass)
        await RegisterWithEmail.clickSignUpButton()
        await browser.pause(3000)
        
    })*/

    it('should click checkbox', async () => {
        //await RegisterWithEmail.typeCredentials(credentials.unregisteredEmail, credentials.correctPass, credentials.correctPass)
        await RegisterWithEmail.clickCheckbox()
        await browser.pause(3000)
        
    })

    /*it('should register with unchecked checkbox', async () => {
        await RegisterWithEmail.typeCredentials(credentials.unregisteredEmail, credentials.correctPass, credentials.correctPass)
        await RegisterWithEmail.clickSignUpButton()
        await browser.pause(3000)
        
    })*/

     /*it('should register with checked checkbox', async () => {
        await RegisterWithEmail.typeCredentials(credentials.unregisteredEmail, credentials.correctPass, credentials.correctPass)
        await RegisterWithEmail.clickCheckbox()
        await browser.pause(3000)
        await RegisterWithEmail.clickSignUpButton()
        await browser.pause(3000)
        
    })*/

});