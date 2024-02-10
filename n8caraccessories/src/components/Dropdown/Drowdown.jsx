import { Select, MenuItem } from '@mui/material'
import React from 'react'

const Drowdown = (props) => {

    const {
        options = [],
        defaultValue = options.length == 0 ? 0 : options[0].value
    } = props
    return (
        <Select defaultValue={defaultValue} id="value-select" name="value-select" {...props}>
            {options.map((opt) => {
                return (
                    <MenuItem value={opt.value}>{opt.title}</MenuItem>
                )
            })}
        </Select>
    )
}

export default Drowdown