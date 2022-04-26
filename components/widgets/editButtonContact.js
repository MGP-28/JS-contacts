import {createHTMLElement} from '../../helpers/dom.js'
import {ael} from '../../helpers/domevents.js'

function initializeEditButton(text){
    const btn = createHTMLElement('button', 'Edit')
    ael(btn, 'click', ()=>{
        console.log('Edit')
        //code here
    }, true)
    return btn
}

export {initializeEditButton}