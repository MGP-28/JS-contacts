import { ContactList, addContactToStorage, removeContactFromStorage, editContactFromStorage } from '../store/contactList.js'
import { buildList, addContactListItem, formBeingEdited }  from '../ui_Manager/contactListUI.js'

function buildStartingList(){
    buildList(ContactList)
}

function addContact(contact){
    const index = addContactToStorage(contact)
    addContactListItem(contact, 'ul', index)
}

function removeContact(index){
    removeContactFromStorage(index)
    buildList(ContactList)
}

function editContact(index){
    formBeingEdited(index, ContactList[index])
}

function saveEditedContact(contact, index){
    editContactFromStorage(contact, index)
}

export { buildStartingList, addContact, removeContact, editContact, saveEditedContact }