import { startSubmitHandler, buildList } from './events.js'
import { buildStyle } from './styleConfigurator.js'

//global selectors


//style configurator
buildStyle()

//call events
startSubmitHandler()
buildList()