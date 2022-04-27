import { qs, qsa, applyClasses } from './helpers/dom.js'

function buildStyle(){
    styleBody()
    styleTitles()
    styleInputs()
    styleInputButtons()
}

function styleBody(){
    const classesToAdd = [
        'p-5'
    ]
    applyClasses(qs('body'), classesToAdd)
}

function styleTitles(){
    const classesToAdd = [
        'mb-3', 'font-bold', 'text-3xl'
    ]
    const titles = qsa('h1')
    titles.forEach(title => {
        applyClasses(title, classesToAdd)
    });
}

function styleInputs(){
    const classesToAdd = [
        'border', 'p-1', 'mr-2', 'rounded', 'mb-2'
    ]
    const inputs = qsa('input')
    inputs.forEach(input => {
        applyClasses(input, classesToAdd)
    });
}

function styleInputButtons(){
    const classesToAdd = [
        'px-5', 'font-semibold', ''
    ]
    const inputButtons = qsa('input[isButton=true]')
    inputButtons.forEach(inputButton => {
        classesToAdd.pop()
        classesToAdd.push((inputButton.type === 'submit') ? 'bg-green-300' : 'bg-red-300')
        applyClasses(inputButton, classesToAdd)
    });
}

export { buildStyle }