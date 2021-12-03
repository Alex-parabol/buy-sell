import React, {useState, useEffect} from 'react'

const useValidation = (initialState, validate, fn) => {

    const [values, setValues ] = useState(initialState);
    const [errors, setErrors ] = useState({});
    const [submitForm, setSubmitForm ] = useState(false);

    useEffect(()=>{
        if(submitForm){
            const noErrors = Object.keys(errors).length === 0;
            if(noErrors){
                fn();  //This will be the fn that executes on the component.
            }
            setSubmitForm(false)
        }
    }, []);

    // Función que se ejecuta según el usuario escribe.

    const handleChange = e=> {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    // Function that handles the submit action

    const handleSubmit = e => {
        e.preventDefault();
        const errorsValidation = validate(values)
        setErrors(errorsValidation)
        setSubmitForm(true)
    }

    return {
        values,
        errors,
        submitForm,
        handleChange,
        handleSubmit
    };
}

export default useValidation;