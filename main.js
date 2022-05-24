import { startSubmitHandler, buildList, saveOnPageUnloadHandler } from './assets/js/events.js'
import { classesHTMLtoJsArray } from './helpers/syntax.js'
import { buildUI } from "./presenter/buildUI.js";

//global selectors

//build HTML
buildUI()

//call events
startSubmitHandler()
buildList()
saveOnPageUnloadHandler()

classesHTMLtoJsArray('')