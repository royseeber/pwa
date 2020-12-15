//CONSTANTS

// Setup empty JS object to act as endpoint for all routes
const projectData = [];


//DEPENDENCIES

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors =  require('cors');
const { resolve } = require('path');

// Initialize the main project folder
app.use(express.static('website'));


// ROUTES

// Return the most recently added journal entry
app.get('/lastEntry', (req, res) => {
    res.send(projectData[0]);
})

//Insert journal entry at beginning of projectData array
app.post('/addData', (req, res) => {
    projectData.unshift(req.body);
    console.log(projectData);
    res.sendStatus(200);
} )


// START SERVER
const port =  8080;
const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

