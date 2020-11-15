//JS to demonstrate form creation and retrieving and manipulation of the data from the form.

function pushMe() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var number3 = Number(number1);
  var number4 = Number(number2);
	document.getElementById("output").innerHTML=number3 + number4;
}
