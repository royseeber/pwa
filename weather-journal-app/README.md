# Weather-Journal App Project

## Overview
This is the third project in the Udacity Front End Web Developer Nano Degree Program.
It involves creating an asynchronous web app that uses a Web API along with user supplied data to dynamically update the UI.
<br><br>
## Description
Starter code included an index.html and a style.css file. The server.js and app.js file were developed
from scratch. The style.css file required some customization to avoid overlapping elements and to make it look presentable on mobile screens; much like putting lipstick on a pig.
<br><br>
The app uses an api from openweathermap.org to retrieve current weather information based on a user supplied zip code.
For each call to the api a journal entry is created in a data object on the server. The dataObject will contain a journal
element which will store an array of journal entries. The structure of the data object will be as follows.
dataObject = {journal: [{date: curDate, temp: temp, content: content}, ...]}. Using this type of structure will allow us to add additional data elements to our data object should the need arise.
<br><br>
post routes:
- /addEntry - posts a journal entry as the first element in the journal array
<!-- -->
get routes:
- /project - returns the project data object
- /journal - returns the weather journal
- /latestEntry - returns the most recently added
journal entry
<!-- -->
You can test each get route from the chrome development tools console by calling the app.js getJson function.
- getJson('/project')
- getJson('/journal')
- getJson('/latestEntry')
<!-- -->
The application uses the /project route to return the entire data object as per the requirement in the project rubric.
If this was an actual application we would obviously use the /lastEntry route since this is all the data that is required.
<br><br>


## Dependencies
The project requires that Node.js be installed along with the following packages.
- Express
- Body-Parser
- Cors

A package.json file in included in this project directory so you can install all dependencies by running "npm install" from the command line.
