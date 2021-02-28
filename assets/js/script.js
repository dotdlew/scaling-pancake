$(document).ready(function () {
    // save values to localstorage
    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
        localStorage.setItem(time, text);
    });

    function timeTracker() {
        var time = moment().hour();
        $(".time-block").each(function () {
            var block = parseInt($(this).attr("id").split("hour")[1]);

            if (block < time) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (block === time) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });
    }

    // load values from localstorage to hardcoded timeblocks
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();

// generate time
function generateDate() {
    var timeEl = document.querySelector("#currentDay");
    var localTime = moment().format('dddd, MMM Do YYYY - HH:mm:ss');
    timeEl.textContent = localTime;
}

generateDate();

})
