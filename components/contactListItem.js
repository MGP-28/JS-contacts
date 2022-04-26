import {createHTMLElement} from '../helpers/dom.js'
import {initializeEditButton} from './widgets/editButtonContact.js'
import {initializeDeleteButton} from './widgets/deleteButtonContact.js'

function createContactListItem(contact){
    const li = createHTMLElement('li', contact.fullname)
    li.append(initializeEditButton('Edit'))
    li.append(initializeDeleteButton('Delete'))
    return li
}

export {createContactListItem}