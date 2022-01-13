import * as defaultPage from "./default.page"

const signInEmailButton = "//button[text()='Sign in with email']"

export async function clickSignInWithEmailButton(): Promise<void> {
    await defaultPage.clickByLocator(signInEmailButton)
}

export async function getElementByLocator(locator: string) {
    return await (browser).$(locator)
}

export async function clickByLocator(locator: string): Promise<void> {
    await (await getElementByLocator(locator)).click()
}