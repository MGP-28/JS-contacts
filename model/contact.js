class Contact {
    #fullname
    #phone_number
    #email
    constructor(props){
        const {fullname, phone_number, email} = props
        this.#fullname = fullname
        this.#phone_number = phone_number
        this.#email = email
    }
    get fullname(){
        return this.#fullname
    }
    get phone_number(){
        return this.#phone_number
    }
    get email(){
        return this.#email
    }
    stringuifyObject(){
        const jsonString = JSON.stringify({fullname: this.#fullname, phone_number: this.#phone_number, email: this.#email})
        return jsonString
    }
}

export {Contact}