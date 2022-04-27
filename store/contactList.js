import {Contact} from '../model/contact.js'

const ContactList = [
    new Contact({fullname: 'Joao', phone_number: '999999999', email: 'eu@gmail.com'}),
    new Contact({fullname: 'Joana', phone_number: '919999999', email: 'tu@gmail.com'}),
    new Contact({fullname: 'Jose Binoco', phone_number: '939999999', email: 'nos@gmail.com'}),
    new Contact({fullname: 'Nos', phone_number: '922222222', email: 'nos@gmail.com'}),
    new Contact({fullname: 'Meo', phone_number: '912345678', email: 'nos@gmail.com'})
]

function addContactToStorage(contact, UI_Selector){
    ContactList.push(contact)
    return ContactList.length-1
}

function removeContactFromStorage(index){
    ContactList.splice(index,1)
}

function editContactFromStorage(contact, index){
    console.log('Before', [...ContactList])
    ContactList[index] = contact
    console.log('After', ContactList)
}

export {ContactList, addContactToStorage, removeContactFromStorage, editContactFromStorage}