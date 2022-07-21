export class CommonUtils {

    async navigateBack() {
        await driver.back()
    }

    async getPopupText() {
        return await driver.getAlertText()
    }
    async cancelPopup() {
        await driver.dismissAlert()
    }
    async acceptPopup() {
        await driver.acceptAlert()
    }



}