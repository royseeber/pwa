 // CONSTANTS

// Current Date
const d = new Date();
const curDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//variables for OpenWeatherMap API
const apiKey = 'ca3cb4fdd5ccfb62a4ec53255ddfa5e7';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const units = 'imperial';


// HELPER FUNCTIONS

// GET JSON Data
getJSON = async (url='') => {
    res = await fetch(url);
    try {
        data = await res.json();
        return data;
    } catch(error) {
        console.log("error", error);
    }
};

// POST JSON data
const postJSON = async (url='', data={})=> {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    console.log(res);
}


//MAIN FUNCTIONS

// GET OpenWeatherMap Data
const getTemperature = async (baseUrl, units, zip, apiKey) => {
    url = `${baseUrl}units=${units}&zip=${zip},us&appid=${apiKey}`;
    data = await getJSON(url);
    return data.main.temp;
};

// Update DOM log entry
const updateLogEntry = (date, temp, content) => {
    document.querySelector('#date').innerHTML = date;
    document.querySelector('#temp').innerHTML = temp;
    document.querySelector('#content').innerHTML = content;
}

// Update weather journal
const generate = async () => {

    //get values from DOM
    const zip = document.querySelector('#zip').value;
    const content = document.querySelector('#feelings').value;

    //get temperature from weather API
    //temp = await getTemperature(baseUrl, units, zip, apiKey);

    temp = 56.27;

    //post data to server
    logEntry = {'date': curDate, 'temp': temp, 'content': content};
     await postJSON('/addData', logEntry);

    //retrieve data from server
    data = await getJSON('/lastEntry');
    console.log(data);

    //update DOM log entry
    updateLogEntry(data.date, data.temp, data.content);
}


//EVENT LISTENERS

// Generate Button - click event
document.querySelector('#generate').addEventListener('click', generate);


