//A Function to determine how long the page has been loaded for!

var start = new Date();
var milliStart = start.getTime();

function stopTime(){
    var stop = new Date();
    var milliStop=stop.getTime();

    var difference = milliStop - milliStart;
    var diffInSeconds = difference/1000;

    alert("You have been on the page for "+diffInSeconds+" seconds");
}
