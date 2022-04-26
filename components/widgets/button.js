import {createHTMLElement} from '../../helpers/dom.js'
import {ael} from '../../helpers/domevents.js'

function createButton(text, eventFunction){
    const btn = createHTMLElement('button', text, [], ['p-1', 'border', 'rounded', 'w-20'])
    ael(btn, 'click', eventFunction, true)
    return btn
}

export {createButton}