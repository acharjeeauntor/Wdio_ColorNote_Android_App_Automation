export class NavigationDrawer {

    NavDrawer_Icon_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]`
    Trash_Text_Selector=`//*[@text="Trash Can"]`

    async clickNavIcon() {
        await $(this.NavDrawer_Icon_Selector).click()
    }
    async clickTrashCan() {
        await $(this.Trash_Text_Selector).click()
    }

}