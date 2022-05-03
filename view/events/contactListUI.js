import {qs} from '../../helpers/dom.js'
import {createContactListItem} from '../components/contactListItem.js'

const ulList = qs('ul')
const form = qs('form')
const inputName = qs('form>input[name="fullname"]')
const inputPhoneNumber = qs('form>input[name="phone_number"]')
const inputEmail = qs('form>input[name="email"]')
const buttonClear = qs('form>div>input[type="reset"]')

function buildList(contactList){
    ulList.textContent = ''
    for (let index = 0; index < contactList.length; index++) {
        const contact = contactList[index];
        addContactListItem(contact, 'ul', index)
    }
    buttonClear.classList.remove('hidden')
}

function addContactListItem(contact, UI_Selector, index){
    const uiElement = qs(UI_Selector)
    const li = createContactListItem(contact, index)
    uiElement.append(li)
}

function formBeingEdited(index, contact){
    form.setAttribute('editing', index)
    buttonClear.classList.add('hidden')
    inputName.value = contact.fullname
    inputPhoneNumber.value = contact.phone_number
    inputEmail.value = contact.email
    for (let li of ulList.children){
        if(li.getAttribute('index') != index) li.classList.add('hidden')
        const deleteBtn = [...li.querySelectorAll('button')].find(el => el.textContent == 'Delete')
        deleteBtn.classList.add('hidden')
    }
}

export {buildList,addContactListItem,formBeingEdited}