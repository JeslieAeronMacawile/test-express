import React from 'react'

const IconButton = (props) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: `${props.backGroundColor == null || props.backGroundColor == undefined ? "teal" : props.backGroundColor}`,
                padding: "8px",
                width: "fit-content",
                borderRadius: '8px',
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)'
            }}

            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0px 0px 20px 0px rgba(0,0,0,0.3)' }} // Apply shadow on hover
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.1)' }} // Revert shadow on hover out

            {...props}
        >

            {props.children}
        </div>
    )
}

export default IconButton