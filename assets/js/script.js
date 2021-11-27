var today = moment().format('MMMM Do YYYY');
var now = moment().format('h:mm:ss a');
var currentHour = now - moment().format('mm:ss a');
var textEl = document.getElementById("currentDay");
textEl.textContent = today;
var workHours = {};