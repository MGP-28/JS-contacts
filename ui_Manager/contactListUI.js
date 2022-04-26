import {qs} from '../helpers/dom.js'
import {createContactListItem} from '../components/contactListItem.js'

function addContactListItem(contact, UI_Selector, index){
    const uiElement = qs(UI_Selector)
    const li = createContactListItem(contact, index)
    uiElement.append(li)
}

export {addContactListItem}