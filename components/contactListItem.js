import {createHTMLElement} from '../helpers/dom.js'
import {initializeEditButton} from './widgets/editButtonContact.js'
import {initializeDeleteButton} from './widgets/deleteButtonContact.js'

function createContactListItem(contact, index){
    const li = createHTMLElement('li', '', [{'name': 'index', 'value': index}])
    li.append(initializeEditButton())
    li.append(initializeDeleteButton())
    li.append(contact.fullname)
    return li
}

export {createContactListItem}