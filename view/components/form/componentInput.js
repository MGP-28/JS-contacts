import { createHTMLElement } from '../../../helpers/dom.js'

const inputClasses = [
    'border', 'p-1', 'rounded', 'mb-3'
]

const inputBtnClasses = [
    'px-5', 'font-semibold'
]

function buildInput(name){
    switch (name) {
        case 'name':
            return buildInputName()
        case 'phone_number':
            return buildInputPhone()
        case 'email':
            return buildInputEmail()
        case 'save':
            return buildInputSave()
        case 'clear':
            return buildInputClear()
        default:
            break;
    }
}

function buildInputName(){
    const inputName = createHTMLElement(
        'input', 
        '', 
        [...inputClasses, 'lg:w-full'], 
        [ {name: 'type', value: 'text'}, {name: 'placeholder', value: 'Full name'}, {name: 'name', value: 'fullname'}]
    )
    return inputName
}

function buildInputPhone(){
    const inputPhoneNumber = createHTMLElement(
        'input', 
        '', 
        [...inputClasses, 'lg:w-5/12'], 
        [ {name: 'type', value: 'text'}, {name: 'placeholder', value: 'Phone Number'}, {name: 'name', value: 'phone_number'}]
    )
    return inputPhoneNumber
}

function buildInputEmail(){
    const inputEmail = createHTMLElement(
        'input', 
        '', 
        [...inputClasses, 'lg:w-6/12'], 
        [{name: 'type', value: 'email'}, {name: 'placeholder', value: 'E-mail'}, {name: 'name', value: 'email'}]
    )
    return inputEmail
}

function buildInputSave(){
    const btnSave = createHTMLElement(
        'input', 
        '', 
        [...inputClasses, ...inputBtnClasses, 'bg-green-300'], 
        [ {name: 'type', value: 'submit'}, {name: 'value', value: 'Save'}]
    )
    return btnSave
}

function buildInputClear(){
    const btnClear = createHTMLElement(
        'input', 
        '', 
        [...inputClasses, ...inputBtnClasses, 'bg-red-300'], 
        [{name: 'type', value: 'reset'}, {name: 'value', value: 'Clear'}]
    )
    return btnClear
}

export { buildInput }