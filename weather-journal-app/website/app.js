/**
 * Define Constants
 *
*/

// Current Date
const d = new Date();
const curDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//variables for OpenWeatherMap API
const apiKey = 'ca3cb4fdd5ccfb62a4ec53255ddfa5e7';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const units = 'imperial';

/**
 * End Define Constants
 * Start Helper Functions
 *
*/

// GET JSON Data
getJson = async (url='') => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    catch(error) {
        console.log(error);
    }
};

// POST JSON data
const postJson = async (url='', data={})=> {
    try {
        const res = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
    catch {
        console.log('error', error);
    }
}

/**
 * End Helper Functions
 * Start Main Functions
 *
*/

// GET Open Weather Map Data
const getTemperature = async (baseUrl, units, zip, apiKey) => {
    try {
        url = `${baseUrl}units=${units}&zip=${zip},us&appid=${apiKey}`;
        data = await getJson(url);
        return data.main.temp;
    }
    catch (error) {
        console.log(error);
        return('N/A');
    }
};

// Update DOM log entry
const updateLogEntry = (date, temp, content) => {

    //update entry holder fields
    document.querySelector('#date').innerHTML = date;
    document.querySelector('#temp').innerHTML = temp;
    document.querySelector('#content').innerHTML = content;

    // Clear input fields
    document.querySelector('#zip').value = '';
    document.querySelector('#feelings').value = '';
}

// Update weather journal
const generate = async () => {

    //get values from DOM
    const zip = document.querySelector('#zip').value;
    const content = document.querySelector('#feelings').value;

    //get temperature from weather API
    temp = await getTemperature(baseUrl, units, zip, apiKey);

    //post data to server
    logEntry = {'date': curDate, 'temp': temp, 'content': content};
    await postJson('/addEntry', logEntry);

    //retrieve the latest weather journal entry
    entry = await getJson('/latestEntry');

    //update DOM log entry
    updateLogEntry(entry.date, entry.temp, entry.content);
}

/**
 * End Main Functions
 * Start Event Listeners
 *
*/

/**
 * Generate Button - click event
 * Ignore additional clicks if generate function is already running
*/
generateOn = false;
document.querySelector('#generate').addEventListener('click', event => {
    if (!generateOn) {
        generateOn = true;
        generate();
        generateOn = false;
    }
});



