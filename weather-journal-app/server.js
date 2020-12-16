/**
 * Start Constants
 *
*/

// Setup empty JS object to act as endpoint for all routes
const projectData = [];

/**
 * End Constants
 * Start Dependencies
 *
*/

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

/**
 * End Dependencies
 * Start Routes
 *
*/

// Return all journal entries
app.get('/journal', (req, res) => {
    res.json(projectData);
})

// Return the most recently added journal entry
app.get('/latestEntry', (req, res) => {
    res.json(projectData[0]);
})

//Insert journal entry at beginning of projectData array
app.post('/addEntry', (req, res) => {
    projectData.unshift(req.body);
    res.json('Journal entry has been posted');
} )

/**
 * End Routes
 *
*/

//Start Server
const port =  process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

