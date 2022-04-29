import {Contact} from '../model/contact.js'

const ContactList = []

seedDatabase()

function seedDatabase(){
    if(!(localStorage.length ==0)) return
    const contacts = [
        new Contact({fullname: 'Joao Pereira', phone_number: '000000000', email: 'eu@gmail.com'}),
        new Contact({fullname: 'Beatriz Lopes', phone_number: '111111111', email: 'tu@gmail.com'}),
        new Contact({fullname: 'Jose Binoco', phone_number: '222222222', email: 'nos@gmail.com'}),
        new Contact({fullname: 'Pedro Lima', phone_number: '333333333', email: 'vos@gmail.com'}),
        new Contact({fullname: 'Tiago Borges', phone_number: '444444444', email: 'eles@gmail.com'}),
        new Contact({fullname: 'Eva Mendes', phone_number: '555555555', email: 'ela@gmail.com'})
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
    ContactList.push(contact)
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