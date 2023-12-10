//******** Run the code in a console of a web browser *********

// 1.Create the first character to uppercase in a paragraph.
//a. Create a var that store the name that user enters via promt.
//b. Capitalise the first letter of their name .
//c. rest of the charecter should lowercase.
//d. We use the capitalized version of their name to greet them using an alert.
//solution :
var name = prompt("What is your name?");
var firstChar = name.slice(0, 1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1, name.length);
restOfName = restOfName.toLowerCase();
var capitalizedName = upperCaseFirstChar + restOfName;
alert("Hai, " + capitalizedName);

//Basic Arithmetic and the Modulo Operator in Javascript

var dogAge = prompt("How old is your dog?");
humanAge = (dogAge - 2) * 4 + 21;
alert("Your age is " + humanAge + " years old in human age ");

//The Karel Chess Board Solution
function main() {
  beepersRight();
  goUpTurnLeft();
  beepersLeft();
  goUpTurnRight();
  beepersRight();
  goUpTurnLeft();
  beepersLeft();
  goUpTurnRight();
  beepersRight();
}

function goUpTurnRight() {
  turnRight();
  move();
  turnRight();
}

function goUpTurnLeft() {
  turnLeft();
  move();
  turnLeft();
}

function beepersRight() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
}

function beepersLeft() {
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
}
