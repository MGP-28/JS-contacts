import {addContactListItem} from '../presenter/contactListUI.js'

const ContactList = []

function addContact(contact, UI_Selector){
    ContactList.push(contact)
    addContactListItem(contact, UI_Selector)
}

function removeContact(contact){
    
}

export {ContactList, addContact}