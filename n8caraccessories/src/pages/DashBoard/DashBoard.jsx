import React, { useState, useEffect } from 'react';
import N8Components from '../../components/N8Components'
import { Grid, Typography } from '@mui/material'
import styles from './DashBoardStyle'

const DashBoard = () => {
    const classes = styles;
    const [currentDay, setcurrentDay] = useState(0)
    const [currentMonth, setcurrentMonth] = useState(0)
    var temporaryReport = [
        { Collection: [30, 28, 26, 30, 40, 100], legend: "Materials", color: "orange" },
        { Collection: [120, 40, 30, 70, 50, 130], legend: "Equipment", color: "green" },
        { Collection: [60, 40, 30, 90, 110, 150], legend: "Tools", color: "gray" },
    ]
    useEffect(() => {
        const currentDate = new Date();

        const dayOfMonth = currentDate.getDate();
        const monthInWord = currentDate.toLocaleString('default', { month: 'long' });
        setcurrentMonth(monthInWord)
        setcurrentDay(dayOfMonth)
        console.log(dayOfMonth)
    }, [])

    return (
        <div style={{ margin: '50px' }}>
            <div style={{ height: '100%', width: '100%' }}>
                <Grid container>
                    <Grid item xs={12} style={{ paddingBottom: "10px", marginBottom: '10px' }}>
                        <Typography style={classes.typoTitle}>
                            Dashboard
                        </Typography>

                    </Grid>
                    <div style={{ width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <N8Components.Card style={{ width: "20%", height: '100px' }} >
                            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between', width: "85%", marginBottom: '5px' }}>
                                <div>
                                    Total Sales
                                </div>
                                <div style={{ textAlign: 'end', fontSize: '30px' }}>
                                    TEMP
                                </div>
                            </div>
                        </N8Components.Card>
                        <N8Components.Card style={{ width: "20%", height: '100px' }} >
                            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between', width: "85%", marginBottom: '5px' }}>
                                <div>
                                    Best Seller
                                </div>
                                <div style={{ textAlign: 'end', fontSize: '30px' }}>
                                    TEMP
                                </div>
                            </div>
                        </N8Components.Card>
                        <N8Components.Card style={{ width: "20%", height: '100px' }} >
                            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between', width: "85%", marginBottom: '5px' }}>
                                <div>
                                    Category
                                </div>
                                <div style={{ textAlign: 'end', fontSize: '30px' }}>
                                    TEMP
                                </div>
                            </div>
                        </N8Components.Card>
                        <N8Components.Card style={{ width: "20%", height: '100px' }} >
                            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between', width: "85%", marginBottom: '5px' }}>
                                <div>
                                    Supplier
                                </div>
                                <div style={{ textAlign: 'end', fontSize: '30px' }}>
                                    TEMP
                                </div>
                            </div>
                        </N8Components.Card>
                    </div>
                    <div style={{ height: '70%', width: '100%' }}>
                        {currentDay == 0 ?
                            <N8Components.LoadingScreen isActive={true} /> :
                            <N8Components.LineChart
                                title={"Sales Overview" + ` - ${currentMonth}`}
                                length={currentDay}
                                seriesArray={temporaryReport}
                            />}

                    </div>
                </Grid>

            </div>
        </div>
    )
}

export default DashBoard