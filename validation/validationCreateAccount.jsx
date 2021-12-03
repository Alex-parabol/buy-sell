import { VALID_LOADERS } from "next/dist/server/image-config";

export default function CreateAccountValidation(values){
    let errors = {};

    if(!values.name){
        errors.name = 'A name is mandatory'
    };

    if(!values.email){
        errors.email = 'An email is mandatory'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errores.email = 'Invalid email'
    }

        // Firebase needs a password with 6 or more characters so we have to filter that.
    if(!values.password){
        errors.password = 'Please, set a pasword for your account'
    } else if (values.password.length < 6){
        errors.password = 'The password must be atleast 6 characters long'
    }

    return errors;
}