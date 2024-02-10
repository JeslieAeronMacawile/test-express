import React from 'react'
import axios from 'axios';

export const GET = async (apiUrl) => {
    // var host = `http://localhost:4000`
    //axios.get('/api/getCategory')

    // await axios.get(host + apiUrl)
    //     .then(response => {
    //         // Handle successful response
    //         console.log(response.data); // Assuming the response contains data
    //         return (response)
    //         //setCategoryData(response.data); // Update state with response data
    //     })
    //     .catch(error => {
    //         // Handle error
    //         return (error)
    //         console.error('Error fetching data:', error);
    //     });

    try {
        var host = `http://localhost:4000`;
        console.log("GET")
        console.log(host + apiUrl)
        const response = await axios.get(host + apiUrl);
        console.log(response.data); // Assuming the response contains data
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

export const POST = async (apiUrl, postData = {}) => {
    try {
        var host = `http://localhost:4000`;
        console.log("POST")
        const response = await axios.post(host + apiUrl, postData);
        console.log(response.data); // Assuming the response contains data
        return response;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
};
