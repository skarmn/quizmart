import * as defaultPage from "./default.page"

const registerButton = "//button[text()='Register']"
const registerWithEmailButton = "//button[text()='Register with email']"

export async function clickRegisterButton(): Promise<void> {
    await defaultPage.clickByLocator(registerButton)
}

export async function clickRegisterWithEmailButton(): Promise<void> {
    await defaultPage.clickByLocator(registerWithEmailButton)
}