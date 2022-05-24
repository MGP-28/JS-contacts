import {createContactListItem} from '../components/contactListItem.js'

function buildList(contactList){
    const ulList = document.querySelector('ul')
    const buttonClear = document.querySelector('form>div>input[type="reset"]')
    ulList.textContent = ''
    for (let index = 0; index < contactList.length; index++) {
        const contact = contactList[index];
        addContactListItem(contact, 'ul', index)
    }
    buttonClear.classList.remove('hidden')
}

function addContactListItem(contact, UI_Selector, index){
    const uiElement = document.querySelector(UI_Selector)
    const li = createContactListItem(contact, index)
    uiElement.append(li)
}

function formBeingEdited(index, contact){
    const ulList = document.querySelector('ul')
    const form = document.querySelector('form')
    const inputName = document.querySelector('form>input[name="fullname"]')
    const inputPhoneNumber = document.querySelector('form>input[name="phone_number"]')
    const inputEmail = document.querySelector('form>input[name="email"]')
    const buttonClear = document.querySelector('form>div>input[type="reset"]')
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