export async function openUrl(url:string): Promise <void> {
    await browser.url(url)
}

export async function getElementByLocator(locator: string) {
    return await (browser).$(locator)
}

export async function clickByLocator(locator: string): Promise<void> {
    await (await getElementByLocator(locator)).click()
}

export async function typeTextByLocator(text: string | string[], locator: string): Promise<void> {
    await (await getElementByLocator(locator)).addValue(text)
}