import { createHTMLElement } from "../../../helpers/dom.js";
import { buildInput } from "./componentInput.js"

function buildForm(){
    //build text inputs
    const inputName = buildInput('name')
    const inputPhoneNumber = buildInput('phone_number')
    const inputEmail = buildInput('email')

    //build buttons inside container
    const btnSave = buildInput('save')
    const btnClear = buildInput('clear')
    const btnContainer = createHTMLElement(
        'div', 
        '', 
        ['flex', 'justify-between', 'lg:w-full'], 
        [], 
        [btnSave, btnClear]
    )

    //build form and add all above elements to it
    const form = createHTMLElement(
        'form', 
        '', 
        ['overflow-hidden', 'mb-5', 'flex', 'flex-wrap', 'justify-center', 'flex-col', 'lg:flex-row', 'lg:justify-between'],
        [], 
        [inputName, inputPhoneNumber, inputEmail, btnContainer]
    )
    //build container and append form
    const container = createHTMLElement(
        'div', 
        '', 
        ['w-11/12', 'sm:w-3/4', 'lg:w-3/5', 'xl:w-1/2'],
        [],
        [form]
    )
    return container
}

export { buildForm }