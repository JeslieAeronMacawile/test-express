import React from 'react'
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'

const RouteList = () => {

    const routeList = [
        { name: "Login", href: "/" },
    ]

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
        </Routes>
    )
}


export default RouteList