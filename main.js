import { startSubmitHandler, buildList, saveOnPageUnloadHandler } from './assets/js/events.js'
import { buildStyle } from './assets/js/styleConfigurator.js'

//global selectors


//style configurator
buildStyle()

//call events
startSubmitHandler()
buildList()
saveOnPageUnloadHandler()