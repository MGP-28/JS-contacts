import {createHTMLElement} from '../../helpers/dom.js'
import {ael} from '../../helpers/domevents.js'

function createButton(text, eventFunction){
    const btn = createHTMLElement('button', text, [], ['px-2', 'border', 'rounded'])
    ael(btn, 'click', eventFunction, true)
    return btn
}

export {createButton}