export class TrashCanScreen {

    Note_Title_Selector =`//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]`


    async selectAllNotes() {
        let elements = await $$(this.Note_Title_Selector)
        for(let element of elements){
            await element.touchAction([
                'longPress',
                'release'
            ])
        }
        
    }

    async selectDeletedNote(titleOfNote) {
        await (await $(`//*[@text="${titleOfNote}"]`)).touchAction('longPress')
    }

    async isNoteExisting(titleOfNote) {
        return await $(`//*[@text="${titleOfNote}"]`).isExisting()
    }

    async isTitleMatch(noteTitle,checklistTitle) {
        let elements = await $$(this.Note_Title_Selector)
        for (var element of elements) {
            var title = await element.getText()
            console.log(`::::${title}`)
            if (title === noteTitle || title === checklistTitle) {
                return true
            } else {
                console.log("Not Match")
                return false
               
            }
        }
    }


}