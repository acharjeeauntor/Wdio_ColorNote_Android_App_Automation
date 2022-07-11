import { NavigationDrawerObject } from "../objectRepository/NavigationDrawerObject"
import { ScreenActions } from "../../lib/ScreenActions"

let navigationDrawerObject = new NavigationDrawerObject()
let screenActions = new ScreenActions()

export class NavigationDrawer {


    async clickNavIcon() {
        await screenActions.clickElement(navigationDrawerObject.NavDrawer_Icon_Selector)
    }
    async clickTrashCan() {
        await screenActions.clickElement(navigationDrawerObject.Trash_Text_Selector)
    }

}