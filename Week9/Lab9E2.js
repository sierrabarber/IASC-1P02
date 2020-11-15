//JS to determine birth year from an age prompt!

var myPrompt = prompt ("What is your age?");

var todayDate = new Date();
var year = todayDate.getFullYear();

document.getElementById("age").innerHTML=year-myPrompt;
