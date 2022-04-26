class ContactPhoneNumberEmptyError extends Error{
    constructor(name){
        super('Phone number field is required')
        this.name = name
    }
}

export {ContactPhoneNumberEmptyError}