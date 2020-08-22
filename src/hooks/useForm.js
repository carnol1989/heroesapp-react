import { useState } from "react"

const useForm = (initialValueForm) => {
    const [ formValue, setForm ] = useState(initialValueForm)

    const handleInput = ({ target }) => {
        setForm({
            ...formValue,
            [target.name]: target.value
        })
    }

    const setInitialForm = () => {
        setForm(initialValueForm)
    }

    return [formValue, handleInput, setInitialForm]
}

export default useForm