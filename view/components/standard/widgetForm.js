import { createHTMLElement } from '../../helpers/dom.js'
import { ael } from '../../helpers/domevents.js'
import { getPlayerFromForm } from '../../view/workers/registerPlayer.js'

function buildForm(formProperties, containerProperties){
    //build form
    const form = createHTMLElement('form', '', formProperties.classes, formProperties.attributes, formProperties.itemsToAppend)
    //add submit event listener
    ael(form, 'submit', getPlayerFromForm)
    //build container
    containerProperties.itemsToAppend.push(form)
    const container = createHTMLElement('div', '', containerProperties.classes, containerProperties.attributes, containerProperties.itemsToAppend)
    
    return container
}

export { buildForm }