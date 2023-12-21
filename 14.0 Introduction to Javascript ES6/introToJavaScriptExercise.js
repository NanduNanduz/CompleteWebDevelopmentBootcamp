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

// In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
// It will take your current age as the input and console.logs a message with our time left in this format:
// You have x days, y weeks, and z months left.
// Where x, y and z are replaced with the actual calculated numbers.
// For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

function lifeInWeeks(age) {
  /************Don't change the code above************/

  //Write your code here.
  var remainingYear = 90 - age;
  var remainingDays = remainingYear * 365;
  var remainingWeeks = remainingYear * 52;
  var remainingMonths = remainingYear * 12;

  console.log(
    "You have " +
      remainingDays +
      " days, " +
      remainingWeeks +
      " weeks, and " +
      remainingMonths +
      " months left."
  );
  /*************Don't change the code below**********/
}

lifeInWeeks(19);

//Creating BMI Calculator
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(x, y) {
  var value = x / (y * y);
  return value;
}
var bmi = bmiCalculator(65, 1.8);
console.log(bmi);
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/

// Random Number Generating In JavaScript

var n = Math.random();

// Random Number Generating In JavaScript : Building a love calculator


prompt("What Is Your Name?");
prompt("What Is Your Partners Name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
prompt("Your Love Score is " + loveScore + "%");
