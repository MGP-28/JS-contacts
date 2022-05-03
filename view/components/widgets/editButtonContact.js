import { createButton } from './button.js'
import { editContact } from '../../../presenter/contactList.js'

function initializeEditButton(){
    const editBtn = createButton('Edit', (event)=>{
        if(!(editBtn.textContent == 'Editing')){
            editContact(event.target.parentElement.getAttribute('index'))
            editBtn.textContent = 'Editing'
        }
    })
    return editBtn
}

export {initializeEditButton}