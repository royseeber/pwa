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
    const res = await fetch(url)
    const data = await res.json();
    return data;
};

// POST JSON data
const postJson = async (url='', data={})=> {

    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
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
        console.log('error', error);
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
    try {
        //get values from DOM
        const zip = document.querySelector('#zip').value;
        const content = document.querySelector('#feelings').value;

        //get temperature from weather API
        temp = await getTemperature(baseUrl, units, zip, apiKey);

        //post data to server
        const logEntry = {
            'date': curDate,
            'temp': temp,
            'content': content
        };

        await postJson('/addEntry', logEntry);

        //retrieve the latest weather journal entry
        data = await getJson('/project');
        entry = data.journal[0];

        //update DOM log entry
        updateLogEntry(entry.date, entry.temp, entry.content);
    } catch (error) {
        console.log('error', error);
    }
}

/**
 * End Main Functions
 * Start Event Listeners
 *
*/

// Generate Button - click event
document.querySelector('#generate').addEventListener('click', generate);

