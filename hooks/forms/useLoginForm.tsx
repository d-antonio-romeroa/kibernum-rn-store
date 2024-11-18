import { useAuthFacade } from '@/store/auth/useAuthFacade';
import React, { useState } from 'react'
import * as yup from 'yup';

yup.setLocale({
    mixed: {
        default: 'No es válido',
        required: 'Este campo es requerido',
        oneOf: 'Debe ser uno de los siguientes valores: ${values}',
        notOneOf: 'No debe ser uno de los siguientes valores: ${values}',
        defined: 'Debe estar definido',
        notNull: 'No puede ser nulo',
        notType: 'Debe ser de tipo ${type}',
    },
    string: {
        length: 'Debe tener exactamente ${length} caracteres',
        min: 'Debe tener al menos ${min} caracteres',
        max: 'Debe tener como máximo ${max} caracteres',
        email: 'Debe ser un correo electrónico válido',
        url: 'Debe ser una URL válida',
        trim: 'No debe contener espacios al inicio o al final',
        lowercase: 'Debe estar en minúsculas',
        uppercase: 'Debe estar en mayúsculas',
        matches: 'Debe coincidir con el siguiente patrón: "${regex}"',
    },
    number: {
        min: 'Debe ser mayor o igual a ${min}',
        max: 'Debe ser menor o igual a ${max}',
        lessThan: 'Debe ser menor a ${less}',
        moreThan: 'Debe ser mayor a ${more}',
        positive: 'Debe ser un número positivo',
        negative: 'Debe ser un número negativo',
        integer: 'Debe ser un número entero',
    },
    date: {
        min: 'Debe ser posterior a ${min}',
        max: 'Debe ser anterior a ${max}',
    },
    array: {
        min: 'Debe tener al menos ${min} elementos',
        max: 'Debe tener como máximo ${max} elementos',
    },
});

const useLoginForm = () => {

    const validationSchema = yup.object().shape({
        username: yup.string().required('User name is required'),
        password: yup.string().min(6).required('Password is required'),
    });

    const { login } = useAuthFacade();

    const [validationErrors, setValidationErrors] = useState([]);

    const [fields, setFields] = useState({
        username: '',
        password: '',
    });

    const handleFormChange = (text: string, field: string) => {
        setFields({ ...fields, [field]: text });
        setValidationErrors([]);
    };

    const submitHandler = async () => {
        await validationSchema
            .validate(fields, { abortEarly: false })
            .then(async () => {
                console.log('PASO VALIDACION');
                setValidationErrors([]);

                login({
                    username: fields.username,
                    password: fields.password
                });
            })
            .catch((error) => setValidationErrors(error.errors));
    }

    return {
        fields,
        handleFormChange,
        submitHandler,
        validationErrors,
    }
}

export default useLoginForm