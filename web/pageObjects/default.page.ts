export async function openUrl(url:string): Promise <void> {
    await browser.url(url)
}

export async function getElementByLocator(locator: string) {
    return await (browser).$(locator)
}

export async function getElementTextByLocator(locator: string): Promise<string> {
    return await (await getElementByLocator(locator)).getText()
}

export async function clickByLocator(locator: string): Promise<void> {
    await (await getElementByLocator(locator)).click()
}

export async function typeTextByLocator(text: string | string[], locator: string): Promise<void> {
    await (await getElementByLocator(locator)).addValue(text)
}

let defaultTimeout: number = 2000

export async function waitUntilElementIsVisibleInViewportByLocator(locator: string, customTimeout?: number,): Promise<void> {
    const timeoutMessage = `${locator} element still invisible after ${customTimeout || defaultTimeout} ms`
    await browser.waitUntil(async function () {
        return (await getElementByLocator(locator)).isDisplayedInViewport()
    },
        {
            timeout: customTimeout || defaultTimeout,
            timeoutMsg: timeoutMessage
        })
}