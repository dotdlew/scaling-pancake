var dayPlanner = [];

// generate array of time slots
function generateArray() {
    for (time = 9; time <= 17; time++) {
        var id = time - 9;
        var data = "";
        data = {
            id: id,
            time: time,
            data: data,
        };
        dayPlanner.push(data);
    }
}

function generatePlanner() {
    for (let i = 0; i < dayPlanner.length; i++) {

    }
}

// get current date for page
function currentDate() {
    var currentDayEl = document.querySelector("#currentDay");
    var currentTimeEl = moment();
    currentDayEl.textContent = currentTimeEl.format("dddd MMMM Do, YYYY - HH:mm:ss");
}


// put current date to page
currentDate();

// generate array of time slots
generateArray();

generatePlanner();