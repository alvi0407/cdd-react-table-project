import React, { useState,useEffect } from 'react';
import './table.css'

export const EditableCell = (
    {
        value: initialValue,
        row: { index },
        column: { id },
        updateMyData, // This is a custom function that we supplied to our table instance
    }
) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = useState(initialValue)

    const onChange = e => {
        setValue(e.target.value)
    }

    // We'll only update the external data when the input is blurred
    const onBlur = () => {
        updateMyData(index, id, value)
    }

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])


    return (
        <input className='edit-input' value={value} onChange={onChange} onBlur={onBlur}/>
    )
}