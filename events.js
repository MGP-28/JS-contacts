import { qs } from './helpers/dom.js'
import { ael } from './helpers/domevents.js'
import { Contact } from './model/contact.js'
import { ContactVal } from './validators/Contact/index.js'
import { addContact } from './store/contactList.js'

function startSubmitHandler(){
    const form = qs('form')
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
            console.log(error)
            return
        }

        //store data
        const contact = new Contact(formData)
        addContact(contact, 'ul')

        //comunicate data


    }, true, false)
}

export {startSubmitHandler}