
const express = require('express');
const sql = require('mssql/msnodesqlv8');

const cors = require('cors')
const bodyParser = require('body-parser');

const { createProxyMiddleware } = require('http-proxy-middleware');
const SQLQuery = require('../src/sqlServices.js')

const app = express();





// Replace 'http://localhost:5000' with the URL of your Express.js server
// app.use('/api', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));

// Serve your React.js application (assuming it's built and located in the 'build' folder)
// app.use(express.static('build'));

// Start the server on port 3000
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(cors());
app.use(bodyParser.json());

app.get('/api/getCategory', async (req, res) => {



    var responseValue = await SQLQuery("select * from Lib_Category", "GET")
    console.log(responseValue)
    res.send(responseValue);

    //res.send("HELLO WORLD!");
});

app.get('/api/getBrand', async (req, res) => {

    var responseValue = await SQLQuery("select * from Lib_Brand", "GET")
    console.log(responseValue)
    res.send(responseValue);

    //res.send("HELLO WORLD!");
});



app.get('/api/getUser', async (req, res) => {

    const { pass = "", email = "" } = req.query

    if (pass.length == 0 || email.length == 0) {
        res.status(500).send("Incomplete Login Information");
    } else {
        var responseValue = await SQLQuery(`select * from lib_user where userPassword = '${pass}' AND userEmail = '${email}'`)
        console.log(responseValue)
        res.send(responseValue);
    }


    //res.send("HELLO WORLD!");
});

app.post("/api/postCategoryRequest", (req, res) => {

    try {
        var requestBody = req.body

        if (requestBody.action.toUpperCase() == "ADD") {
            var SQLResult = SQLQuery(`insert into Lib_Category values ('${requestBody.categoryName}', GETDATE(), '${requestBody.user}')`, "POST")
            res.send("Success");
        } else if (requestBody.action.toUpperCase() == "DELETE") {
            console.log("PASS")
            var SQLResult = SQLQuery(`delete Lib_Category where Id = '${requestBody.Id}'`, "POST")
            console.log(SQLResult)
            res.send("Success");
        } else if (requestBody.action.toUpperCase() == "EDIT") {
            var SQLResult = SQLQuery(`update Lib_Category SET CategoryName = '${requestBody.categoryName}', UpdateDate = GETDATE(), UpdateUser = '${requestBody.user}' WHERE Id = '${requestBody.Id}'`, "POST")
            res.send("Success");
        } else {
            res.status(500).send("Error executing query");
        }
    } catch (err) {
        res.status(500).send("Error executing query");
        console.log(err)
    }

});

app.post("/api/postBrandRequest", (req, res) => {

    try {
        var requestBody = req.body

        if (requestBody.action.toUpperCase() == "ADD") {
            var SQLResult = SQLQuery(`insert into Lib_Brand values ('${requestBody.brandName}', GETDATE(), '${requestBody.user}')`, "POST")
            res.send("Success");
        } else if (requestBody.action.toUpperCase() == "DELETE") {
            console.log("PASS")
            var SQLResult = SQLQuery(`delete Lib_Brand where Id = '${requestBody.Id}'`, "POST")
            console.log(SQLResult)
            res.send("Success");
        } else if (requestBody.action.toUpperCase() == "EDIT") {
            var SQLResult = SQLQuery(`update Lib_Brand SET BrandName = '${requestBody.brandName}', UpdateDate = GETDATE(), UpdateUser = '${requestBody.user}' WHERE Id = '${requestBody.Id}'`, "POST")
            res.send("Success");
        } else {
            res.status(500).send("Error executing query");
        }
    } catch (err) {
        res.status(500).send("Error executing query");
        console.log(err)
    }

})