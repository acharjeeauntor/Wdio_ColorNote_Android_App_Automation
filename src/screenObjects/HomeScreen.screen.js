import { CommonUtils } from "../utils/Common.utils"

let commonUtils= new CommonUtils()
export class HomeScreen {
    AddNote_Text_Selector = `//*[@text='Add note']`
    Skip_Btn_Selector = `//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']`
    Add_Text_Popup_Selector = `//*[@text="Text"]`
    Add_Checklist_Popup_Selector = `//*[@text="Checklist"]`
    Saved_Note_Card_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]`
    AddNote_Icon_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]`
    Search_Icon_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn2"]`
    Search_Input_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_search"]`
    Title_Card_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]`
    Note_List_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/note_list"]`
    More_Icon_Selector =`//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn3"]`
    Search_Option_Selector = `//*[@text="Search"]`
    Search_Back_Selector = `//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/search_back"]`

    async clickSkipBtn() {
        await $(this.Skip_Btn_Selector).click()
    }
    async isAddNoteDisplayed() {
        return await $(this.AddNote_Text_Selector).isDisplayed()
    }
    async clickAddNoteBtn() {
        await $(this.AddNote_Text_Selector).click()
    }
    async clickTextPopup() {
        await $(this.Add_Text_Popup_Selector).click()
    }
    async clickChecklistPopup() {
        await $(this.Add_Checklist_Popup_Selector).click()
    }
    async getAddedNoteLocator(titleOfNote) {
        return $(`//*[@text="${titleOfNote}"]`)
    }
    async clickAddedNote(titleOfNote) {
        await $(`//*[@text="${titleOfNote}"]`).click()
    }
    async clickAddNoteIcon() {
        await $(this.AddNote_Icon_Selector).click()
    }
    async getNoteListLocator() {
        return $(this.Note_List_Selctor)
    }
    async clickSearchIcon() {
        await $(this.Search_Icon_Selector).click()
        
    }
    async enterSearchItem(title) {
        await (await $(this.Search_Input_Selector)).setValue(title)
    }
    async getSearchItemTitle(){
        return await $(this.Note_List_Selctor).getText()
    }
    async clickMoreIcon() {
        await $(this.More_Icon_Selector).click()
    }
    async clickSearchOption() {
        await $(this.Search_Option_Selector).click()
    }
    async clickSearchBack() {
        await $(this.Search_Back_Selector).click()
    }
    async pressBackBtn(){
        commonUtils.navigateBack()
    }


}