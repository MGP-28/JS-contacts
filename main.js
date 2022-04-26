import { qs, qsa, createHTMLElement, applyAttributes, applyClasses, appendElements } from './helpers/dom.js'
import { ael } from './helpers/domevents.js'
import { Contact } from './model/contact.js'
import { ContactVal } from './validators/Contact/index.js'
import { ContactList, addContact } from './store/contactList.js'

//global selectors

const form = qs('form')

//custom events

ael(form, 'submit', (event) => {
    
    //get data
    const inputList = [...event.target.children].filter(input => (input.name !== ''))
    const formData = {}
    inputList.forEach(input => {
        formData[input.name] = input.value
    });

    //validate data
    try {
        ContactVal.exec(formData)
    } catch (error) {
        return
    }

    //store data
    addContact(formData, 'ul')

    //comunicate data


}, true, false)