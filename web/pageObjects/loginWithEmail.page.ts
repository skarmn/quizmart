import * as defaultPage from "./default.page"

const signInButton = "//button[text()='Sign in']"

const emailField = '//input[@placeholder = "Email"]'

const passwordField = '//input[@type = "password"]'

export async function clickSignInButton(): Promise<void> {
    await defaultPage.clickByLocator(signInButton)
}

export async function typeCredentials(email:string, password:string): Promise<void> {
    await defaultPage.typeTextByLocator(email, emailField)
    await defaultPage.typeTextByLocator(password, passwordField)
}

