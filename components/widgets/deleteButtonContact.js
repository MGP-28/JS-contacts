import {createHTMLElement} from '../../helpers/dom.js'
import {ael} from '../../helpers/domevents.js'

function initializeDeleteButton(text){
    const btn = createHTMLElement('button', 'Delete')
    ael(btn, 'click', ()=>{
        console.log('Delete')
        //code here
    }, true)
    return btn
}

export {initializeDeleteButton}