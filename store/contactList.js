const ContactList = []

function addContactToStorage(contact, UI_Selector){
    ContactList.push(contact)
    return ContactList.length-1
}

function removeContactFromStorage(contact){
    //
}

export {ContactList, addContactToStorage}