import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingScreen = (props) => {
    return (
        <div>
            {props.isActive == true ?
                <div style={{ position: 'absolute', width: '100vw', height: '100vh', backgroundColor: 'rgba(0,58,76,0.5)', zIndex: 999, top: "0px", left: '0px' }}>
                    {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                        <div style={{ width: '50%', height: '50%', background: 'white', borderRadius: '40px', border: '2px solid black' }}>
                            {props.children}
                        </div>
                    </div> */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
                        <CircularProgress fontSize="large" style={{ color: "teal", width: "100px", height: '100px' }} />
                    </Box>
                </div>
                : null}
        </div>

    )
}

export default LoadingScreen