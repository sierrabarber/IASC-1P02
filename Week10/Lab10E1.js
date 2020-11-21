//JS to create a simple calculator that can add, subtract, multiply or divide 2 numbers!

function pushPlus() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var number3 = Number(number1);
  var number4 = Number(number2);
	document.getElementById("output").innerHTML=number3 + number4;
}

function pushSubtract() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var number3 = Number(number1);
  var number4 = Number(number2);
	document.getElementById("output").innerHTML=number3 - number4;
}

function pushMultiply() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var number3 = Number(number1);
  var number4 = Number(number2);
	document.getElementById("output").innerHTML=number3 * number4;
}

function pushDivide() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var number3 = Number(number1);
  var number4 = Number(number2);
	document.getElementById("output").innerHTML=number3 / number4;
}
