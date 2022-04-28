import { qs } from './helpers/dom.js'
import { ael } from './helpers/domevents.js'
import { Contact } from './model/contact.js'
import { ContactVal } from './validators/Contact/index.js'
import { addContact, buildStartingList, saveEditedContact, saveToLocalStorageOnExit } from './presenter/contactList.js'

function startSubmitHandler(){
    const form = qs('form')
    ael(form, 'submit', (event) => {
        if(!event.target.hasAttribute('editing')) addContactHandler(event)
        else editContactHandler(event)
    }, true, false)
}

function addContactHandler(event){
    
    const contact = getContact(event)
    if(!contact) return

    //store data
    addContact(contact)
    
    //comunicate data

}

function editContactHandler(event){

    const contact = getContact(event)
    if(!contact) return

    //replace data
    const index = event.target.getAttribute('editing')
    saveEditedContact(contact, index)

    //comunicate data
    
}

function buildList(){
    buildStartingList()
}

function getContact(event){
    
    //get Data
    const inputList = [...event.target.children].filter(input => (input.name !== ''))
    const formData = {}
    inputList.forEach(input => {
        formData[input.name] = input.value
    });

    //validate Data
    try {
        ContactVal.exec(formData)
    } catch (error) {
        console.log(error)
        return false
    }

    //build contact
    return new Contact(formData)
}

function saveOnPageUnloadHandler(){
    window.addEventListener("beforeunload", function (e) {
        saveToLocalStorageOnExit()
    });
}

export {startSubmitHandler, buildList, saveOnPageUnloadHandler}