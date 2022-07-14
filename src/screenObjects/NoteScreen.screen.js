export class NoteScreen {

    Title_Input_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]`
    Note_Input_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]`
    Edit_Icon_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]`
    Editing_Text_Selector = `//*[@text='Editing']`
    View_Note_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]`
    More_Icon_Selector = `~More`
    Delete_Btn_Selector=`//*[@text="Delete"]`
    Ok_Btn_Selector=`//*[@resource-id="android:id/button1"]`
    Add_Item_Btn_Selector=`//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]`
    Add_Item_Input_Selector=`//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit"]`



    async enterNoteDetails(title,notes) {
        await $(this.Title_Input_Selector).setValue(title)
        await $(this.Note_Input_Selector).setValue(notes)
    }
    async enterChecklistDetails(title,notes) {
        await $(this.Title_Input_Selector).setValue(title)
        await $(this.Add_Item_Btn_Selector).click()
        await $(this.Add_Item_Input_Selector).setValue(notes)
       await $(this.Ok_Btn_Selector).click()
    }

    async isEditingTextDisplayed() {
        return await $(this.Editing_Text_Selector).isDisplayed()
    }
    async getEditIconLocator() {
        return $(this.Edit_Icon_Selector)
    }
    async getViewNotesLocator() {
        return $(this.View_Note_Selector)
    }
    async clickMoreIcon() {
        await $(this.More_Icon_Selector).click()
    }
    async deleteNote() {
        await $(this.Delete_Btn_Selector).click()
        await $(this.Ok_Btn_Selector).click()
    }

}