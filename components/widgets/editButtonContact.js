import { createButton } from './button.js'

function initializeEditButton(){
    const editBtn = createButton('Edit', ()=>{
        //code here
    })
    return editBtn
}

export {initializeEditButton}