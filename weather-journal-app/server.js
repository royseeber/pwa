// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors =  require('cors');
const { resolve } = require('path');

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port =  8080;
const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

// Get Project Data
app.get('/data', (req, res) => {
    res.send(projectData);
})

// Get fake weather
app.get('/fakeData', (req, res) => {
    weather = '{"coord":{"lon":-111.95,"lat":33.67},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":57.47,"feels_like":48.15,"temp_min":54,"temp_max":60.01,"pressure":1026,"humidity":12},"visibility":10000,"wind":{"speed":5.82,"deg":0},"clouds":{"all":1},"dt":1607893747,"sys":{"type":1,"id":5795,"country":"US","sunrise":1607869453,"sunset":1607905233},"timezone":-25200,"id":0,"name":"Phoenix","cod":200}'
    res.send(weather);
})

//Post Project Data
app.post('/addData', (req, res) => {
    projectData = req.body;
} )
