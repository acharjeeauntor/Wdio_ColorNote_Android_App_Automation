export class BottomBar {
    Archive_Menu_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/bottom_menu_archive"]`
    Delete_Menu_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/bottom_menu_delete"]`
    Color_Menu_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/bottom_menu_color"]`
    Reminder_Menu_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/bottom_menu_reminder"]`
    More_Menu_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/bottom_menu_more"]`
   Bottom_Restore_Btn_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/bottom_menu_restore"]`
   Permanently_Delete_Btn_Selector=`~Permanently delete`



    async clickArchiveMenu() {
        await $(this.Archive_Menu_Selector).click()
    }
    async clickDeleteMenu() {
        await $(this.Delete_Menu_Selector).click()
    }
    async clickColorMenu() {
        await $(this.Color_Menu_Selector).click()
    }
    async clickReminderMenu() {
        await $(this.Reminder_Menu_Selector).click()
    }
    async clickMoreMenu() {
        await $(this.More_Menu_Selector).click()
    }
    async clickRestoreBtn() {
        await $(this.Bottom_Restore_Btn_Selector).click()
    }
    async clickPermanentlyDeleteBtn() {
        await $(this.Permanently_Delete_Btn_Selector).click()
    }

}