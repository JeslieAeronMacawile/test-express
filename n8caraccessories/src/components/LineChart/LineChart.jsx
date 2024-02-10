import React, { useState, useEffect } from 'react';
import { LineChart as MUILineChart } from '@mui/x-charts/LineChart';

const LineChart = (props) => {

    const { length = 31, seriesArray = [], title = "" } = props
    const [XaxisArray, setXaxisArray] = useState([])
    const NumberArray = (number) => {
        // Create an array with numbers from 0 to 'number'
        return Array.from({ length: number + 1 }, (_, index) => index);
    };


    useEffect(() => {
        var arrayResult = NumberArray(length)
        setXaxisArray(arrayResult)
    }, [length])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }} >
            <div style={{ display: 'flex', height: 'fit-content', width: '90%', border: '1px solid black', borderRadius: '20px', margin: '20px', flexDirection: 'column', padding: "20px", marginTop: '20px' }}>
                <div style={{ textAlign: "center", fontSize: '20px' }}>
                    {title == "" ? "Insert Title Here" : title}
                </div>
                {XaxisArray.length == 0 ? null :
                    <MUILineChart
                        xAxis={[{ data: XaxisArray }]}
                        // series={[
                        //     { curve: "linear", data: [0, 1000, 2, 6, 3, 9.3] },
                        //     { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
                        // ]}
                        series={seriesArray.map((data) => {

                            return {
                                curve: "linear", data: data.Collection, color: `${data.color == undefined ? "red" : data.color}`
                            }
                        })
                        }
                        height={350}

                        margin={{ top: 10, bottom: 20 }}
                    />
                }

                <div style={{ height: "20px", display: 'flex', justifyContent: 'space-around', marginTop: '20px', marginBottom: '5px', flexDirection: 'row' }}>
                    {seriesArray.map((SData) => {
                        return (
                            <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: '20px', height: '100%', backgroundColor: `${SData.color}`, marginRight: '10px' }}></div>
                                <div> {SData.legend}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    );
}

export default LineChart