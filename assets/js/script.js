var today = moment().format('MMMM Do YYYY');
var currentHour = moment().format('HH');
$("#currentDay").text(today);

var createWorkHours= function(){
    for (var i = 8; i <= 17; i++){
        var hour = i % 12;
        if(hour === 0){
            hour = 12;
        }
        var content = loadHourText(i);
        var temporal = i < currentHour ? "past" : i == currentHour ? "present" : "future";
        var hourHTML = `<li class="${temporal} timeblock "> 
                          <h3 class="hour"> ${hour}</h3>
                          <textarea id="text_${i}">${content}</textarea>
                          <button class="saveBtn" onclick="saveHourText(${i})">Save</button>`
        $("#schedule").append(hourHTML);
    }
    
} 

var loadHourText = function(hour){
    return localStorage.getItem(hour) || "";
    
}



var saveHourText = function(hour) {
    window.alert("you touched me" + " " + hour + " times");
    localStorage.setItem(hour, $(`#text_${hour}`).get()[0].value);
 }

createWorkHours()
