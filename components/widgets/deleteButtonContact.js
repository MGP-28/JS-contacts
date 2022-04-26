import { createButton } from './button.js'

function initializeDeleteButton(){
    const deleteBtn = createButton('Delete', ()=>{
        //code here
    })
    return deleteBtn
}

export {initializeDeleteButton}