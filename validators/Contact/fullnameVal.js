import {ContactFullnameEmptyError} from '../../helpers/exceptions/contact/ContactFullnameEmptyError.js'

class FullNameValidator{
    static exec(fullname){
        this.#isEmpty(fullname)
    }
    static #isEmpty(fullname){
        if(!fullname) throw new ContactFullnameEmptyError()
    }
}

export {FullNameValidator}