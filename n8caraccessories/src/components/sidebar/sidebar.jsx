import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/n8Logo.png'
import { Typography } from '@mui/material';

const CustomSidebar = () => {

    const [currentTab, setcurrentTab] = useState("")

    const onclickMenu = (tabItem) => {
        console.log(tabItem)
        if (currentTab == tabItem) {
            setcurrentTab("")
        } else {
            setcurrentTab(tabItem)
        }
    }

    return (
        <div>
            <img src={logo} alt="N8 Logo" style={{ width: '100%', height: "100%" }} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography>
                    WebN8 Sales And
                </Typography>
                <Typography>
                    Inventory System
                </Typography>

            </div>
            <Typography>
                Dashboard
            </Typography>
            <Sidebar style={{ width: "100%" }}>
                <Menu
                    menuItemStyles={{
                        button: {
                            // the active class will be added automatically by react router
                            // so we can use it to style the active menu item
                            [`&.active`]: {
                                backgroundColor: '#13395e',
                                color: '#b6c8d9',
                            },
                        },
                    }}
                >
                    <SubMenu label="Inventory Management" onClick={() => onclickMenu("Inventory")} open={currentTab == "Inventory"}>
                        <MenuItem component={<Link to="/Category" />}> Category</MenuItem>
                        <MenuItem component={<Link to="/Brand" />}> Brands</MenuItem>
                        <MenuItem component={<Link to="/e-commerce" />}> Attributes</MenuItem>
                        <MenuItem component={<Link to="/e-commerce" />}> Product</MenuItem>
                        <MenuItem component={<Link to="/e-commerce" />}> Sales</MenuItem>
                        <MenuItem component={<Link to="/e-commerce" />}> Inventory</MenuItem>
                        <MenuItem component={<Link to="/e-commerce" />}> Parcels</MenuItem>

                    </SubMenu>

                    <SubMenu label="Users Management" onClick={() => onclickMenu("Users")} open={currentTab == "Users"}>
                        <MenuItem component={<Link to="/Recover" />}> Customer</MenuItem>
                        <MenuItem component={<Link to="/" />}> Employee</MenuItem>
                        <MenuItem component={<Link to="/e-commerce" />}> Supplier</MenuItem>
                    </SubMenu>

                    <SubMenu label="Maintenance" onClick={() => onclickMenu("Maintenance")} open={currentTab == "Maintenance"}>
                        <MenuItem component={<Link to="/Recover" />}> Purchased Order</MenuItem>
                        <MenuItem component={<Link to="/" />}> Archives</MenuItem>
                        <MenuItem component={<Link to="/e-commerce" />}> Reports</MenuItem>
                    </SubMenu>

                </Menu>
            </Sidebar>
        </div>

    )
}

export default CustomSidebar