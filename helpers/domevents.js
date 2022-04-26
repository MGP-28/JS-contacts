function ael(element, eventUser, functionToInsert, preventDefault = false, stopPropagation = false){
    element.addEventListener(eventUser, (event) => {
        if(preventDefault) event.preventDefault()
        if(stopPropagation) event.stopPropagation()
        functionToInsert(event)
    })
}
export {ael}