
export class ScreenActions {


    // async waitForElementAttached(selector){
    //     // wait for visible the locator or web element
    //     await this.page.locator(selector).waitFor()
    // }

    async clickElement(selector) {
       // await this.waitForElementAttached(selector)
        await $(selector).click()
    }

    async fillInputField(selector,input){
        await $(selector).addValue(input)
    }

    // async getElementText(selector){
    //     return await this.page.textContent(selector);
    // }

    async pressBackBtn(){
        await driver.back()
    }

    async getLocatorForSelector(selector){
        return await $(selector)
    }

}