import {qs} from '../helpers/dom.js'
import {createContactListItem} from '../components/contactListItem.js'

function addContactListItem(contact, UI_Selector){
    const uiElement = qs(UI_Selector)
    const li = createContactListItem(contact, UI_Selector)
    uiElement.append(li)
}

export {addContactListItem}