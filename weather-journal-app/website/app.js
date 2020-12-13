// Create a new date instance dynamically with JS
const d = new Date();
const newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//API variables for OpenWeatherMap API
const apiKey = 'ca3cb4fdd5ccfb62a4ec53255ddfa5e7';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const units = 'imperial';

// Event listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('click', generate);

/* Function called by event listener */
function generate() {
    const zip = document.querySelector('#zip');
    getTemperature(baseUrl, units, zip, apiKey);

    console.log(temperature);

}

/* Function to GET Web API Data*/
const getTemperature = async (baseUrl, units, zip, apiKey) => {
    url = `${baseUrl}units=${units}&zip=${zip},us&appid=${apiKey}`;
    res = await fetch(url);
    data = await res.json();
    return data.main.temp;
};



//api.openweathermap.org/data/2.5/weather?zip=94040,us&appid={API key}



/* Function to POST data */
const postData = async (url = '', data = {})=>{
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    try {
        const status = await response.status;
        console.log(status);
    }catch(error) {
      console.log("error", error);
    }

}


/* GET Project Data */
fetchData = async () => {
    res = await fetch('/data');
    try {
        data = await res.json();
        console.log(data);
    } catch(error) {
        console.log("error", error);
    }
};

//postData('/addData',data={temperature: 78, date: newDate, feel: 'Happy'})
//    .then(fetchData);



