import {createHTMLElement} from '../helpers/dom.js'
import {initializeEditButton} from './widgets/editButtonContact.js'
import {initializeDeleteButton} from './widgets/deleteButtonContact.js'

function createContactListItem(contact){
    const li = createHTMLElement('li')
    li.append(initializeEditButton())
    li.append(initializeDeleteButton())
    li.append(contact.fullname)
    console.log('fdgszgdfgzdfgfdg')
    return li
}

export {createContactListItem}