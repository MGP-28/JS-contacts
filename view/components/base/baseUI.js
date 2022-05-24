import { createHTMLElement } from '../../../helpers/dom.js'
import { buildForm } from '../form/form.js'

function buildUIComponents(){
    const app = document.querySelector('#app')
    //build title and append to app
    const title = createHTMLElement('h1', 'Lista de Contactos', ['mb-5', 'font-bold', 'text-3xl'])
    app.appendChild(title)
    //build form
    const form = buildForm()
    //build list and append to form container
    const ul = createHTMLElement('ul', '', ['flex', 'flex-col', 'gap-3'])
    form.appendChild(ul)
    //append form container to app
    app.appendChild(form)
}

export {buildUIComponents}