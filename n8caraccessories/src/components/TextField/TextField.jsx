import React, { useState, useEffect } from 'react';
import { TextField as MuiTextField } from '@mui/material';

const TextField = (props) => {

    const [textFieldValue, setTextFieldValue] = useState('');

    const { setValue = () => console.log("pass setValue to set local Value") } = props
    // Event handler to update the value when the user types
    const handleTextFieldChange = (event) => {
        setTextFieldValue(event.target.value);
        setValue(event.target.value);
    };

    return (
        <MuiTextField
            label="Enter Text"
            value={textFieldValue}
            onChange={handleTextFieldChange}

            {...props}
        />
    )
}

export default TextField