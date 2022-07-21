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
}