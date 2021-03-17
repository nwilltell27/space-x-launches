alert('js is loaded!');
// constant variables - data that never changes

// state variables - data that changes

// cached element references - parts of the dom we need to touch

// event listeners - code designed to capture and respond to events (i.e user clicks on something)

// functions - code that represents actions taken/carried out

function getData() {
    $.ajax('https://api.spacexdata.com/v3/launches')
        .then(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
}

// console.log(getData())