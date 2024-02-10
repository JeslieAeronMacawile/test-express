import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import '../DataGrid/DataFridStyles.css'
import { Grid, Typography } from '@mui/material';
import N8Components from '../N8Components';
export default function DataGrid({

    rows = [],
    columns = [],
    onClickNext = () => console.log("TEST NEXT"),
    onClickBack = () => console.log("TEST BACK"),

}) {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    // useEffect(() => {
    //     console.log(rows)
    //     console.log(columns)
    // })

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const choices = [
        { value: "5", title: "5" },
        { value: "10", title: "10" }
    ]


    return (
        <TableContainer component={Paper}>
            <div style={{ display: "flex", justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>
                <N8Components.Drowdown options={choices} onChange={handleChangeRowsPerPage} />
                <N8Components.TextField label='Search' />
            </div>

            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {columns.map((columnData, index) => {

                            var { style = {} } = columnData


                            return (
                                <TableCell align='center'
                                    style={{
                                        fontSize: "20px",
                                        backgroundColor: '#4472c4',
                                        borderTop: '2px solid white',
                                        borderBottom: '2px solid white',
                                        borderLeft: `${index == 0 ? "0px solid white" : "2px solid white"}`,
                                        borderRight: `${index == columns.length - 1 ? "0px solid white" : "2px solid white"}`,
                                        color: 'white',
                                        width: `${style.width == null || style.width == undefined ? `fit-content` : style.width}`
                                        //width: `fit-content`
                                    }}

                                >{columnData.name.toUpperCase()}</TableCell>
                            )

                        })}
                    </TableRow>
                </TableHead>
                <TableBody>

                    {rows.slice((page * 5), (page * 5) + rowsPerPage).map((row, index) => {

                        var remainder = index % 2

                        return (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {columns.map((columnProperty, colIndex) => {
                                    //console.log(columnProperty)
                                    if (columnProperty.customCell == undefined || columnProperty.customCell == null) {
                                        return (
                                            <TableCell
                                                align="center"
                                                style={{
                                                    fontSize: "20px",
                                                    backgroundColor: `${remainder == 0 ? '#cfd5ea' : '#e8eaf5'}`,
                                                    borderTop: '2px solid white',
                                                    borderBottom: '2px solid white',
                                                    borderLeft: `${colIndex == 0 ? "0px solid white" : "2px solid white"}`,
                                                    borderRight: `${colIndex == columns.length - 1 ? "0px solid white" : "2px solid white"}`,
                                                }}>
                                                {row[columnProperty.selector] != undefined && row[columnProperty.selector] != null ? row[columnProperty.selector] : ""}
                                            </TableCell>
                                        )
                                    } else {
                                        return (
                                            <TableCell
                                                align="center"
                                                style={{
                                                    fontSize: "20px",
                                                    backgroundColor: `${remainder == 0 ? '#cfd5ea' : '#e8eaf5'}`,
                                                    borderTop: '2px solid white',
                                                    borderBottom: '2px solid white',
                                                    borderLeft: `${colIndex == 0 ? "0px solid white" : "2px solid white"}`,
                                                    borderRight: `${colIndex == columns.length - 1 ? "0px solid white" : "2px solid white"}`,
                                                }}>
                                                {columnProperty.customCell(row)}
                                            </TableCell>
                                        )
                                    }

                                })}
                            </TableRow>
                        )
                    })}

                    {/* {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row, index) => {
                        var remainder = index % 2

                        return (
                            <TableRow key={row.name}>
                                {columns.map((columnProperty, colIndex) => {
                                    return (
                                        <TableCell
                                            align="center"
                                            style={{
                                                fontSize: "20px",
                                                backgroundColor: `${remainder == 0 ? '#cfd5ea' : '#e8eaf5'}`,
                                                borderTop: '2px solid white',
                                                borderBottom: '2px solid white',
                                                borderLeft: `${colIndex == 0 ? "0px solid white" : "2px solid white"}`,
                                                borderRight: `${colIndex == columns.length - 1 ? "0px solid white" : "2px solid white"}`,
                                            }}>{row[columnProperty.name] != undefined && row[columnProperty.name] != null ? row[columnProperty.name] : ""}</TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })} */}
                </TableBody>
                {/* <TableFooter>
                    <TableRow>
                        <TableCell
                            align="center"
                            style={{
                                fontSize: "20px",
                                backgroundColor: `${remainder == 0 ? '#cfd5ea' : '#e8eaf5'}`,
                                borderTop: '2px solid white',
                                borderBottom: '2px solid white',
                                borderLeft: `${colIndex == 0 ? "0px solid white" : "2px solid white"}`,
                                borderRight: `${colIndex == columns.length - 1 ? "0px solid white" : "2px solid white"}`,
                            }}>
                            {columnProperty.customCell()}
                        </TableCell>


                    </TableRow>
                </TableFooter> */}
            </Table>

            <Grid container style={{
                marginTop: '30px'
            }}>
                <Grid item xs={6}
                    style={{
                        fontSize: "20px",
                        //backgroundColor: `#e8eaf5`,
                    }}>

                    Showing {(page * 5) + 1} to {`${((page * 5) + rowsPerPage) <= rows.length ? (page * 5) + rowsPerPage : rows.length}`} of {rows.length} entries
                </Grid>

                <Grid item xs={6}>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <N8Components.Button label="Back" style={{ border: '2px solid black', paddingLeft: '30px', paddingRight: '30px', color: 'black' }} onClick={() => {
                                if (page >= 1) {
                                    setPage(page - 1)
                                }
                            }} />
                            <Typography style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', borderTop: '2px solid black', borderBottom: '2px solid black', backgroundColor: 'teal', color: "white" }}>{page + 1}</Typography>
                            <N8Components.Button label="Next" style={{ border: '2px solid black', paddingLeft: '30px', paddingRight: '30px', color: 'black' }} onClick={() => { setPage(page + 1) }} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </TableContainer>
    );
}