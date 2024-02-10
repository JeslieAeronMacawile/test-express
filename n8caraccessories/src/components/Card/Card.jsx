import { Grid } from '@mui/material'
import React from 'react'

const Card = (props) => {
    return (
        <div {...props}>
            <div style={{ border: "1px solid black", width: "100%", height: '100%' }}>
                <div style={{ display: 'flex', width: "100%", height: '100%' }}>
                    <div style={{ height: "100%", backgroundColor: 'teal', width: '20px', marginRight: '5px' }}>

                    </div>
                    {props.children}

                </div>
            </div>
        </div>
    )
}

export default Card