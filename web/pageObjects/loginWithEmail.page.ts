import * as defaultPage from "./default.page"

const mainPageHeaders = '//main //h1'
const signInButton = "//button[text()='Sign in']"
const emailField = '//input[@placeholder = "Email"]'
const passwordField = '//input[@type = "password"]'

const formValidationMessage = '(//form //h3)[1]'
const emailValidationMessage = '//div[./input[@name="email"]]//h3'
const passwordValidationMessage = '//div[./input[@name="password"]]//h3'
const createAccountLink = '//a[@href="/sign-up"]'
const forgotPasswordLink = '//a[@href="/reset-password"]'

export async function clickSignInButton(): Promise<void> {
    await defaultPage.clickByLocator(signInButton)
}

export async function typeCredentials(email:string, password:string): Promise<void> {
    await defaultPage.typeTextByLocator(email, emailField)
    await defaultPage.typeTextByLocator(password, passwordField)
}

export async function waitUntilBtnSignInIsVisible():Promise<void>{
    return await defaultPage.waitUntilElementIsVisibleInViewportByLocator(signInButton)
}

//-------------------------------------GETS-----------------------------------------//

export async function getMainPageHeaderText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(mainPageHeaders)
}

export async function getInvalidCredentialsErrorMessage(): Promise<string> {
    return await defaultPage.getElementTextByLocator(formValidationMessage)
}

export async function getEmailValidationErrorMessage(): Promise<string> {
    return await defaultPage.getElementTextByLocator(emailValidationMessage)
}

export async function getPasswordValidationErrorMessage(): Promise<string> {
    return await defaultPage.getElementTextByLocator(passwordValidationMessage)
}