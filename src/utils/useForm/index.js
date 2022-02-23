import { useState } from "react"

export const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);
    return [values, (formType, formValue) => {
        return (formType === 'reset') ? setValues(initialValue) : setValues({ ...values, [formType]: formValue });
    }]
}