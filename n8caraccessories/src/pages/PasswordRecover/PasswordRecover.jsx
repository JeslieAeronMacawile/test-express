import { Typography } from '@mui/material'
import React, { useState, useEffect } from 'react';
import styles from './PasswordRecoverStyle'
import N8Components from '../../components/N8Components';

const PasswordRecover = (props) => {
    const [OTPRecovery, setOTPRecovery] = useState(false)
    const classes = styles;

    const recoverOnClick = () => {
        if (OTPRecovery == false) {
            alert("Check your Email")
            setOTPRecovery(true)
        } else {
            props.AuthPass()
        }

    }


    return (
        <div style={classes.mainContainer}>
            <Typography style={classes.typoTitle}>
                Password Recover
            </Typography >


            {OTPRecovery == true ? <N8Components.TextField style={classes.textField} label="OTP Number" /> : <N8Components.TextField style={classes.textField} label="Email" />}

            <N8Components.Button style={classes.button} label="Recover" onClick={recoverOnClick} />

        </div>
    )
}

export default PasswordRecover