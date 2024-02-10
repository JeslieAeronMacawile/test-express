import React from 'react'
import N8Components from '../../components/N8Components'
import { Typography } from '@mui/material'
import styles from './NewPasswordStyle'

const NewPassword = () => {
    const classes = styles;

    return (
        <div style={classes.mainContainer}>
            <div style={classes.subContainer}>

                <Typography style={classes.typoTitle}>
                    Change Password
                </Typography>

                <N8Components.TextField label="Email" fullWidth style={classes.textField} />
                <N8Components.TextField label="New Password" fullWidth style={classes.textField} />
                <N8Components.TextField label="Confirm Password" fullWidth style={classes.textField} />
                <N8Components.Button label="Update" style={classes.button} />
            </div>

        </div>
    )
}

export default NewPassword