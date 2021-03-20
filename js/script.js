// constant variables - data that never changes
const BASE_URL = 'https://api.spacexdata.com/v3/launches';
// const API_KEY = 'adf;lkakdfl;kjad'; // if you had an API key

// state variables - data that changes
let launches; // added to global scope to access somewhere else. 

// cached element references - parts of the dom we need to touch
const $launches = $('#launches');

// event listeners - code designed to capture and respond to events (i.e user clicks on something)
$launches.on('click', '.card', handleShowModal);

// functions - code that represents actions taken/carried out
init()

function init() { // this will run whenever the page first loads in the browser
    getData();
}

function handleShowModal() {
    const flightId = parseInt(this.dataset.flightNumber);
    const selectedLaunch = launches.find(function (launch) {
        return launch.flight_number === flightId; // you can also use a loose equality '==' instead of parseInt
    });

    // add content to the modal
    $('#patch').attr({
        src: selectedLaunch.links.mission_patch_small,
        alt: selectedLaunch.mission_name
    });
    $('#title').text(selectedLaunch.mission_name);
    $('#year').text(`Year of Launch: ${selectedLaunch.launch_year}`);
    $('.modal').modal();
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

function render() {
    const html = launches.map(function (launch) {
        return `
            <article data-flight-number="${launch.flight_number}" class="card">
                <h3>${launch.mission_name}</h3>
                <p>${launch.launch_year}</p>
            </article>
        `;
    });
    $launches.append(html);
}