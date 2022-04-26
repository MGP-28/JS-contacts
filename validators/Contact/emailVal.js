import {EmailEmptyError} from '../../helpers/exceptions/contact/ContactEmailEmptyError.js'

class EmailValidator{
    static exec(email){
        this.#isEmpty(email)
    }
    static #isEmpty(email){
        if(!email) throw new EmailEmptyError()
    }
}

export {EmailValidator}