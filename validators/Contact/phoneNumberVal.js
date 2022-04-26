import {ContactPhoneNumberEmptyError} from '../../helpers/exceptions/contact/ContactPhoneNumberEmptyError.js'

class PhoneNumberValidator{
    static exec(phone_number){
        this.#isEmpty(phone_number)
    }
    static #isEmpty(phone_number){
        if(!phone_number) throw new ContactPhoneNumberEmptyError()
    }
}

export {PhoneNumberValidator}