import React from 'react'

const Modal = (props) => {


    return (
        <div>
            {props.isActive == true ?
                <div style={{ position: 'absolute', width: '100vw', height: '100vh', backgroundColor: 'rgba(0,58,76,0.5)', zIndex: 999, top: "0px", left: '0px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                        <div style={{ width: '50%', height: '50%', background: 'white', borderRadius: '40px', border: '2px solid black' }}>
                            {props.children}
                        </div>
                    </div>
                </div>
                : null}

        </div>

    )
}

export default Modal