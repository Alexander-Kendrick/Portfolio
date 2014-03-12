function changeText (elementId, newText)
{
	var x = document.getElementById(elementId);
	x.innerHTML=newText;
}

function loadText ()
{
	changeText ("div1", "We need more souls");
	changeText ("div2", "Lightning will collect your soul");
	changeText ("div3", "Because she is the Savior");
	
	changeColor ("div1", "rgb(0, 34, 255)");
	changeColor ("div2", "#009DFF");
	changeColor ("div3", "red");
}

function changeColor (elementId,changeColor)
{
	var obj = document.getElementById(elementId);
	obj.style.color = changeColor;
}

function doMath ()
{
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	num1 = parseInt (num1);
	num2 = parseInt (num2);
	var sum = num1+num2;
	var op = document.getElementById("op").value;
	if(op == "+")
	{
	total = add(num1, num2);
	}
	else if (op == "-")
	{
	total = subtract (num1, num2);
	}
	else if (op == "*")
	{
	total = multiply (num1, num2);
	}
	else if (op == "/")
	{
	total = divide (num1, num2);
	}
	changeText ("total", total);
}

function add (num1, num2) {
	return num1+num2;
	}
	
function subtract (num1, num2) {
	return num1-num2;
	}
	
function multiply (num1, num2) {
	return num1*num2;
	}
	
function divide (num1, num2) {
	return num1/num2;
	}