import {createHTMLElement} from '../helpers/dom.js'

function createContactListItem(contact){
    const li = createHTMLElement('li')
    li.textContent = contact.fullname
    return li
}

export {createContactListItem}