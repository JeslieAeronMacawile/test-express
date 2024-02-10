import { Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/n8Logo.png'
import N8Components from '../../components/N8Components'
import styles from './LoginPageStyle'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import PasswordRecover from '../PasswordRecover/PasswordRecover'
import NewPassword from '../NewPassword/NewPassword';
import userLogin from '../../Session/userLogin';

const LoginPage = (props) => {
    const classes = styles;
    const navigate = useNavigate();
    const { getUser, userData, setloginData } = userLogin()
    const [recoverScreen, setrecoverScreen] = useState(false)
    const [loginScreen, setloginScreen] = useState(true)
    const [changePassScreen, setchangePassScreen] = useState(false)

    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')

    const LoginOnCLick = () => {
        //navigate("/Category")
        if (email.length == 0 || pass.length == 0) {
            alert("Incomplete Credentials")
        } else {
            getUser(`?email=${email}&pass=${pass}`)
        }
        //props.removeNav()
    }

    useEffect(() => {
        if (userData != null || userData != undefined) {
            if (userData.length == 1) {
                setloginData(userData[0])
                navigate("/Dashboard")
                props.removeNav()
            } else {
                alert("Invalid Credentials")
                getUser("", true)
            }
        }
    }, [userData])


    const RecoverOnCLick = () => {
        setrecoverScreen(true)
        setloginScreen(false)
        setchangePassScreen(false)
    }

    const AuthPass = () => {
        setrecoverScreen(false)
        setloginScreen(false)
        setchangePassScreen(true)
    }


    return (
        <div style={{ backgroundColor: 'teal', display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'white', display: 'flex', height: "80%", width: '70%' }}>
                <Grid container>
                    <Grid item xs={6}>
                        <div style={{ display: 'flex', height: '100%', alignItems: 'center', borderRight: '5px solid black', boxShadow: '1px 0px 50px rgba(0, 0, 0, 0.5)', height: "100%", justifyContent: 'center' }}>
                            <img src={logo} alt="N8 Logo" style={{ width: 'auto', height: "35%" }} />
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{ backgroundColor: '', borderLeft: '5px solid black', boxShadow: '1px 0px 50px rgba(0, 0, 0, 0.5)', height: "100%" }}>
                        <div style={classes.rightContainer}>
                            {/* <div style={classes.spacerHorizontal}></div> */}

                            <div style={classes.titleContainer}>
                                <Typography style={classes.typoTitle}>
                                    WebN8 Sales
                                </Typography>
                                <Typography style={classes.typoTitle}>
                                    And Inventory
                                </Typography>
                                <Typography style={classes.typoTitle}>
                                    System
                                </Typography>
                            </div>

                            <div style={changePassScreen == true ? classes.spacerHorizontalHalf : classes.spacerHorizontal}></div>

                            <div style={{ height: `${changePassScreen == true ? "35vh" : "30vh"}` }}>
                                {recoverScreen == true ? <PasswordRecover AuthPass={AuthPass} /> :
                                    null
                                }
                                {loginScreen == true ?
                                    < div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <N8Components.TextField label="Email" style={classes.textField} setValue={setemail} />
                                        <N8Components.TextField label="Password" style={classes.textField} setValue={setpass} />
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', width: "65%", alignItems: 'center' }}>
                                            <N8Components.CheckBox />
                                            <Typography>
                                                Remember Me
                                            </Typography>
                                        </div>
                                        <N8Components.Button label="Log-In" style={classes.button} onClick={LoginOnCLick} />
                                        <Link onClick={RecoverOnCLick} style={{ color: 'skyblue', fontSize: '20px' }}>
                                            Forgot Password?
                                        </Link>
                                    </div>
                                    :
                                    null

                                }
                                {changePassScreen == true ? <NewPassword /> :
                                    null
                                }


                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div >

    )
}

export default LoginPage
