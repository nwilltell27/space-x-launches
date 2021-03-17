// constant variables - data that never changes
const BASE_URL = 'https://api.spacexdata.com/v3/launches';
const API_KEY = 'adf;lkakdfl;kjad'; // if you had an API key

// state variables - data that changes
let launches; // added to global scope to access somewhere else. 

// cached element references - parts of the dom we need to touch
const $launches = $('#launches');

// event listeners - code designed to capture and respond to events (i.e user clicks on something)


// functions - code that represents actions taken/carried out

init()

function init() { // this will run whenever the page first loads in the browser
    getData();
}

function getData() {
    $.ajax(BASE_URL + '?limit=12') // '?' = query parameter
        .then(function (data) {
            launches = data;
            render();
        }, function (error) {
            console.log(error);
        });
}

function render () {
    const html = launches.map(function(launch) {
        return `
            <article class="card">
                <h2>${launch.mission_name}</h2>
                <p>${launch.launch_year}</p>
            </article>
        `;
    });
    $launches.append(html);
}