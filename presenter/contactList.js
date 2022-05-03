import { ContactList, loadFromLocalStorage, addContactToStorage, removeContactFromStorage, editContactFromStorage, saveToLocalStorage } from '../store/contactList.js'
import { buildList, addContactListItem, formBeingEdited }  from '../view/events/contactListUI.js'

function buildStartingList(){
    loadFromLocalStorage()
    buildList(ContactList)
}

function addContact(contact){
    const index = addContactToStorage(contact)
    addContactListItem(contact, 'ul', index)
        console.log('--- added contact: ', contact, ContactList)
}

function removeContact(index){
        console.log('--- removing contact: ', ContactList[index])
    removeContactFromStorage(index)
    buildList(ContactList)
        console.log(ContactList)
}

function editContact(index){
    formBeingEdited(index, ContactList[index])
        console.log('--- editing mode: ', ContactList[index])
}

function saveEditedContact(contact, index){
        console.log('--- contact edited: ', ContactList[index])
        console.log('--------------- to: ', contact)
    editContactFromStorage(contact, index)
    buildList(ContactList)
        console.log(ContactList)
}

function saveToLocalStorageOnExit(){
    saveToLocalStorage()
}

export { buildStartingList, addContact, removeContact, editContact, saveEditedContact, saveToLocalStorageOnExit }