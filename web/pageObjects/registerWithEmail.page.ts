import * as defaultPage from "./default.page"

const signUpButton = "//button[text()='Sign up']"
const checkbox = '//button[@type="button"]'
const emailField = '//input[@placeholder = "Email"]'
const passwordField = '//input[@type = "password"]'
const passwordRepeatField = '//input[@name = "passwordRepeat"]'

export async function clickSignUpButton(): Promise<void> {
    await defaultPage.clickByLocator(signUpButton)
}

export async function clickCheckbox(): Promise<void> {
    await defaultPage.clickByLocator(checkbox)
    browser.pause(9000)
    await defaultPage.clickByLocator(checkbox)
}

export async function typeCredentials(email:string, password:string, repeatPassword:string): Promise<void> {
    await defaultPage.typeTextByLocator(email, emailField)
    await defaultPage.typeTextByLocator(password, passwordField)
    await defaultPage.typeTextByLocator(repeatPassword, passwordRepeatField)
}