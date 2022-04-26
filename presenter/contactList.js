import { addContactListItem }  from '../ui_Manager/contactListUI.js'
import { addContactToStorage } from '../store/contactList.js'

function addContact(contact, UI_Selector){
    const index = addContactToStorage(contact)
    addContactListItem(contact, UI_Selector, index)
}

function refreshContactListItem(){
    //
}

export { addContact }