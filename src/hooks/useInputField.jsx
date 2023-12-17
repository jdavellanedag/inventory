import {useState} from "react";

export const useInputField = (init) => {

    const [value, setValue] = useState(init);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return [
        value,
        handleChange
    ]
}