var today = moment().format('MMMM Do YYYY');
var now = moment().format('h:mm:ss a');
var currentHour = now - moment().format('mm:ss a');
var textEl = document.getElementById("currentDay");
textEl.textContent = today;
var workHours = {};

var loadWorkHours = function(){
    workHours = JSON.parse(localStorage.getItem("workHours"));

    if(!workHours){
        workHours = {}
    }
}

var createWorkHour= function(workHour, workHourText){
    var workHourLi = $("<li>").addClass(".hour-block");
    var button = $("<button>").addClass(".saveBtn");
    var workHourp = $("<p>").addClass(".textarea").text(workHourText);
    var workHourh = $("<h3>").addClass(".hour").text(workHour);

    workHourLi.append(workHourh, workHourp, button);

    if(workHour < now){
        workHourLi.remove("future");
        workHourLi.addClass(".past");
    } else if(workHour === currentHour){
        workHourLi.remove(".past");
        workHourLi.addClass(".present");
    } else {
        workHourLi.remove(".present");
        workHourLi.addClass(".future");
    }

    $("hour-block").append(workHourLi);
    
    
}

//it is possible I may need to put the save button inside textarea to work the way inteneded. 

$(".saveBtn").on("click", "button", function(){
    saveWorkHours();
})

$(".textarea").on("click", "p", function(){
    var text = $(this).text().trim();

    var textInput = $("<textarea>").addClass(".textarea").val(text);
    $(this).replaceWith(textInput);

})

var saveWorkHours = function(){
    localStorage.setItem("workHours", JSON.stringify(workHours));

}