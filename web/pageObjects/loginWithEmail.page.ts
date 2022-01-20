import * as defaultPage from "./default.page"

const signInButton = "//button[text()='Sign in']"

export async function clickSignInButton(): Promise<void> {
    await defaultPage.clickByLocator(signInButton)
}
