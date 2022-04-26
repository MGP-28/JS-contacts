import { createButton } from './button.js'
import { applyClasses } from '../../helpers/dom.js'

function initializeDeleteButton(){
    const deleteBtn = createButton('Delete', ()=>{
        //code here
    })
    const classesToAdd = ['bg-red-700', 'text-white']
    applyClasses(deleteBtn, classesToAdd)
    return deleteBtn
}

export {initializeDeleteButton}