import {FullNameValidator} from './fullnameVal.js'
import {PhoneNumberValidator} from './phoneNumberVal.js'
import {EmailValidator} from './emailVal.js'

class ContactVal{
    static exec(props){
        const {fullname, phone_number, email} = props
        FullNameValidator.exec(fullname)
        PhoneNumberValidator.exec(phone_number)
        EmailValidator.exec(email)
    }
}

export {ContactVal}