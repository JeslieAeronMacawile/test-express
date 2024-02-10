import React, { useState, useEffect } from 'react';
import N8Components from '../../components/N8Components'
import { Grid, Typography } from '@mui/material'
import styles from './BrandsStyle'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useLibrary from '../../Session/useLibrary';

const Brands = () => {
    const classes = styles
    const [showModalAdd, setshowModalAdd] = useState(false)
    const [loadingScreen, setloadingScreen] = useState(true)
    const [modalAction, setmodalAction] = useState('')
    const { brandData, getBrandError, getBrand, brandPostResponse, postBrandError, postBrand } = useLibrary();
    const [rows, setrows] = useState([])
    const [targetRow, settargetRow] = useState({})

    const [brandName, setbrandName] = useState("")

    var columns = [{
        selector: 'Id',
        name: 'id',
    },
    {
        selector: 'BrandName',
        name: 'name',
    },
    {
        name: 'action',
        customCell: (row) => {


            return (
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                    <N8Components.IconButton  >
                        <EditIcon fontSize='medium' sx={{ color: "white" }} onClick={() => { handleOnClick("EDIT", row) }} />
                    </N8Components.IconButton>
                    <N8Components.IconButton backGroundColor="red">
                        <DeleteIcon fontSize='medium' sx={{ color: "white" }} onClick={() => { handleOnClick("DELETE", row) }} />
                    </N8Components.IconButton>


                    {/* <N8Components.Button startIcon={<EditIcon fontSize='large' sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }} />} style={{ fontSize: '40px' }} />
                    <N8Components.Button label="EDIT" /> */}
                </div>
            )
        },
    }
    ]

    const handleCloseModal = () => {
        setmodalAction("")
        setbrandName("")
        settargetRow({})
        setshowModalAdd(false)
    }

    const handleOnClick = (action, row = {}) => {
        console.log(row)
        setmodalAction(action)
        settargetRow(row)
        setbrandName(row.BrandName)
        setshowModalAdd(true)
    }

    const handleSubmit = (action) => {
        if (modalAction == "ADD") {
            postBrand({
                "action": "ADD",
                "brandName": `${brandName}`,
                "user": "JAM"
            })
        } else if (modalAction == "EDIT") {
            postBrand({
                "action": "EDIT",
                "Id": `${targetRow.Id}`,
                "brandName": `${brandName}`,
                "user": "JAM"
            })
        }
        else if (modalAction == "DELETE") {
            postBrand({
                "action": "DELETE",
                "Id": `${targetRow.Id}`
            })
        }
        setmodalAction("")
        setbrandName("")
        settargetRow({})
        setshowModalAdd(false)
        setloadingScreen(true)
    }

    useEffect(() => {
        if (brandData != null) {
            console.log(brandData)
            setloadingScreen(false)
            setrows(brandData)
        } else {
            getBrand()
            console.log("CALL CATEGORY")
        }
    }, [brandData])

    useEffect(() => {
        console.log("TEST")
    }, [])

    useEffect(() => {
        if (brandPostResponse != null || brandPostResponse != undefined) {
            postBrand({}, true)
            getBrand(true)
        }
    }, [brandPostResponse])

    return (
        <div>
            <N8Components.Modal isActive={showModalAdd}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
                    <div>
                        <Typography style={classes.typoTitle}>
                            {modalAction == "ADD" ? "Add Brand" : "Manage Brand"}
                        </Typography>
                    </div>

                    <div style={{
                        width: '80%', borderBottom: '1px solid gray', marginBottom: '65px'
                    }}>
                    </div>

                    <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'end', alignItems: 'end', width: '100%' }}>
                        <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Typography style={{ fontSize: '40px' }}>
                                Name
                            </Typography>


                            {modalAction == "DELETE" ?
                                <Typography style={{ fontSize: '40px' }}>
                                    {targetRow.BrandName}
                                </Typography> :
                                <N8Components.TextField style={{ width: '60%' }} label="Name" setValue={setbrandName} />}

                            <div style={{ display: "flex", width: '90%', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '50px' }}>
                                <N8Components.Button label="Back" style={{
                                    borderRadius: '10px',
                                    backgroundColor: 'red',
                                    width: '150px',
                                    color: 'white',
                                    fontSize: '3vh'
                                }}

                                    onClick={() => handleCloseModal()}
                                />

                                <N8Components.Button label={`${modalAction == "ADD" ? "Add" : "Submit"}`} style={{
                                    borderRadius: '10px',
                                    backgroundColor: 'teal',
                                    width: '150px',
                                    color: 'white',
                                    fontSize: '3vh'
                                }}

                                    onClick={() => handleSubmit(modalAction)}

                                />
                            </div>
                        </div>
                    </div>

                </div>
            </N8Components.Modal>
            <N8Components.LoadingScreen isActive={loadingScreen} />

            <div style={{ margin: '50px' }}>
                <Grid container>
                    <Grid item xs={12} style={{ borderBottom: '1px solid gray', paddingBottom: "10px", marginBottom: '30px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography style={classes.typoTitle}>
                                Brand
                            </Typography>
                            <N8Components.Button label="Add" style={classes.button} onClick={() => handleOnClick("ADD")} />
                        </div>
                    </Grid>

                    <N8Components.DataGrid
                        columns={columns}
                        rows={rows}
                    />


                </Grid>
            </div>
        </div>
    )
}

export default Brands