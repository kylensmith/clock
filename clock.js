$(document).ready(function() {



setInterval(function() {

var date = new Date ();

var currentHours = date.getHours()
var currentMinutes = date.getMinutes()
var currentSeconds = date.getSeconds();


if(currentHours <= 12){

} else if(currentHours > 12){
	currentHours -= 12;
};


if(currentMinutes < 10){
	currentMinutes = "0" + currentMinutes;}

if(currentSeconds < 10){
	currentSeconds = "0" + currentSeconds;}

if(currentHours < 10){
	currentHours = "0" + currentHours;
};



$("#hour").text(currentHours)
$("#minute").text(currentMinutes)
$("#second").text(currentSeconds);

})




});