import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import PasswordRecover from './pages/PasswordRecover/PasswordRecover';
import CustomSidebar from './components/sidebar/sidebar';
import { Grid } from '@mui/material';
import Category from './pages/Category/Category';
import DashBoard from './pages/DashBoard/DashBoard';
import Brands from './pages/Brands/Brands';

function App() {
  const [removeNav, setremoveNav] = useState(false)

  useEffect(() => {
    var currentUrl = window.location.pathname
    if (currentUrl == "/") {
      setremoveNav(true)
    } else {
      setremoveNav(false)
    }
    //console.log(currentUrl)
  })

  return (
    <Router>

      <Grid container style={{ height: '100vh' }}>
        {removeNav == false ?
          <Grid item xs={3}>
            < CustomSidebar />
          </Grid>
          :
          <></>
        }


        <Grid item xs={removeNav == true ? 12 : 9} >
          <div style={{ width: "100%", backgroundColor: '#f0f0f0', height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <div style={{ width: '80%', height: '80%', backgroundColor: 'white', borderRadius: "20px" }}>
              <Routes>
                <Route path="/" element={<LoginPage removeNav={() => setremoveNav(false)} />} />
                <Route path="/Recover" element={<PasswordRecover />} />
                <Route path="/Category" element={<Category />} />
                <Route path="/Dashboard" element={<DashBoard />} />
                <Route path="/Brand" element={<Brands />} />
              </Routes>
            </div>

          </div>
        </Grid>

      </Grid>
    </Router>
  );


}

export default App;
