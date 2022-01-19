import * as loginPage from "./login.page"

const signInButton = "//button[text()='Sign in']"

export async function clickSignInButton(): Promise<void> {
    await loginPage.clickByLocator(signInButton)
}
