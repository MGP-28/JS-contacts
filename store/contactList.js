import {Contact} from '../model/contact.js'

const ContactList = []

//seedDatabase()

function seedDatabase(){
    const contacts = [
        new Contact({fullname: 'Joao', phone_number: '999999999', email: 'eu@gmail.com'}),
        new Contact({fullname: 'Joana', phone_number: '919999999', email: 'tu@gmail.com'}),
        new Contact({fullname: 'Jose Binoco', phone_number: '939999999', email: 'nos@gmail.com'}),
        new Contact({fullname: 'Nos', phone_number: '922222222', email: 'nos@gmail.com'}),
        new Contact({fullname: 'Meo', phone_number: '912345678', email: 'nos@gmail.com'})
    ]
    contacts.forEach(contact => {
        ContactList.push(contact)
    });
}

function loadFromLocalStorage(){
    for (let index = 0; index < localStorage.length; index++) {
        const jsonString = localStorage.getItem(index)
        const obj = JSON.parse(jsonString)
        const contact = new Contact(obj)
        ContactList.push(contact)
            console.log(index + ' -> Loaded')
    }
}

function addContactToStorage(contact){
    
    ContactList.push()
    return ContactList.length-1
}

function removeContactFromStorage(index){
    ContactList.splice(index,1)
}

function editContactFromStorage(contact, index){
    ContactList[index] = contact
}

function saveToLocalStorage(){
    localStorage.clear()
    for (let index = 0; index < ContactList.length; index++) {
        const jsonString = ContactList[index].stringuifyObject()
        localStorage.setItem(index, jsonString)
        console.log(index + ' -> Saved')
    }
}

export {ContactList, loadFromLocalStorage, addContactToStorage, removeContactFromStorage, editContactFromStorage, saveToLocalStorage}