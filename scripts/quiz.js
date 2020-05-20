// welcome menu
function showMessage(from, text) {
  alert(from + ' ' + text);
}
showMessage('Hello!', 'Welcome to my 2020 Sustainibility Quiz.');

// saves the users name and if nothing is entered a loop asks again
var Name = prompt("First of all, what is your name?");
while (Name == null || Name == "") {
  alert("Please enter your name.");
  var Name = prompt("First of all, what is your name?");
}

// saves the users country and if nothing is entered a loop asks again
var Country = prompt("Hey " + Name + ", what country are you from?");
while (Country == null || Country == "") {
  alert("Please enter a country.");
  var Country = prompt("Hey " + Name + ", what country are you from?");
}

// saves the users age and if nothing is entered a loop asks again
var Age = prompt("How old are you?");
while (Age == null || Age == "" || Age < 1 || Age > 99) {
  alert("Please enter your age.");
  var Age = prompt("How old are you?");
}

var Info = [];
Info.push(Name)
Info.push(Country)
Info.push(Age)

alert("Cool " + Info[0] + ", youre from " + Info[1] + " and you are " + Info[2] + " years old.")

// interacts with the user by using their name and shows them the rules
function getStarted() {
  alert("Okay great " + Name + ", let's get started!");
}

getStarted()

alert("Here are the rules:\nIf you think the statement is right, type in 't'.\nIf you think the statement is wrong, type in 'f'.\nHave fun!")

// these are all the questions for my quiz they can be accessed by using numbers from 0 to 9
var Question = [
  "Less than 3% of the world’s water is fresh (drinkable)",
  "Society is polluting water slower than nature can recycle and purify water in rivers and lakes",
  "3 billion tonnes of food is wasted every year while almost 1 billion people go undernourished and another 1 billion hungry.",
  "5 billion people globally are overweight or obese",
  "If people worldwide switched to energy efficient lightbulbs the world would roughly save 196 billion NZD annually",
  "America uses about 15 times more energy per person than the typical developing country.",
  "A 5-minute shower is equal to 200l of water",
  "Switching from the font ‘Arial’ to ‘Century Gothic’ saves 30% ink on printing",
  "Recycling 20 330 ml aluminium drink can saves enough energy to power a TV for over 3 hours",
  "Over 20% of our rubbish in landfill is packaging."
];

// the answer options
var Answer = [
  "Your answer is right, well done!",
  "Your answer is wrong, better luck next time!"
];

// asks the first question
var questionCount = 0

var askQuestion0 = prompt(Question[0]);
if (askQuestion0 == "t" || askQuestion0 == "T") {
  alert(Answer[0]);
  var askQuestion0 = 1;
} else if (askQuestion0 != "t" || askQuestion0 != "T") {
  alert(Answer[1]);
  askQuestion0 = 0;
}


// asks the second question
var askQuestion1 = prompt(Question[1]);
if (askQuestion1 == "f" || askQuestion1 == "F") {
  alert(Answer[0]);
  var askQuestion1 = 1;
} else if (askQuestion1 != "f" || askQuestion1 != "F") {
  alert(Answer[1]);
  askQuestion1 = 0;
}

// asks the third question
var askQuestion2 = prompt(Question[2]);
if (askQuestion2 == "t" || askQuestion2 == "T") {
  alert(Answer[0]);
  var askQuestion2 = 1;
} else if (askQuestion2 != "t" || askQuestion2 != "T") {
  alert(Answer[1]);
  askQuestion2 = 0;
}

// asks the fourth question
var askQuestion3 = prompt(Question[3]);
if (askQuestion3 == "f" || askQuestion3 == "F") {
  alert(Answer[0]);
  var askQuestion3 = 1;
} else if (askQuestion3 != "f" || askQuestion3 != "F") {
  alert(Answer[1]);
  askQuestion3 = 0;
}

// asks the fifth question
var askQuestion4 = prompt(Question[4]);
if (askQuestion4 == "t"  || askQuestion4 == "T") {
  alert(Answer[0]);
  var askQuestion4 = 1;
} else if (askQuestion4 != "t" || askQuestion4 != "T") {
  alert(Answer[1]);
  askQuestion4 = 0;
}

// asks the sixth question
var askQuestion5 = prompt(Question[5]);
if (askQuestion5 == "t" || askQuestion5 == "T") {
  alert(Answer[0]);
  var askQuestion5 = 1;
} else if (askQuestion5 != "t" || askQuestion5 != "T") {
  alert(Answer[1]);
  askQuestion5 = 0;
}

// asks the seventh question
var askQuestion6 = prompt(Question[6]);
if (askQuestion6 == "f" || askQuestion6 == "F") {
  alert(Answer[0]);
  var askQuestion6 = 1;
} else if (askQuestion6 != "f" || askQuestion6 != "F") {
  alert(Answer[1]);
  askQuestion6 = 0;
}

// asks the eighth question
var askQuestion7 = prompt(Question[7]);
if (askQuestion7 == "t" || askQuestion7 == "T") {
  alert(Answer[0]);
  var askQuestion7 = 1;
} else if (askQuestion7 != "t" || askQuestion7 != "T") {
  alert(Answer[1]);
  askQuestion7 = 0;
}

// asks the nineth question
var askQuestion8 = prompt(Question[8]);
if (askQuestion8 == "f" || askQuestion8 == "F") {
  alert(Answer[0]);
  var askQuestion8 = 1;
} else if (askQuestion8 != "f" || askQuestion8 != "F") {
  alert(Answer[1]);
  askQuestion8 = 0;
}

// asks the tenth question
var askQuestion9 = prompt(Question[9]);
if (askQuestion9 == "f" || askQuestion9 == "F") {
  alert(Answer[0]);
  var askQuestion9 = 1;
} else if (askQuestion9 != "f" || askQuestion9 != "F") {
  alert(Answer[1]);
  askQuestion9 = 0;
}

// adds all the right answers together to display total number of right answers
var questionCount = Number(askQuestion0 + askQuestion1 + askQuestion2 + askQuestion3 + askQuestion4 + askQuestion5 + askQuestion6 + askQuestion7 + askQuestion8 + askQuestion9)

// displays a different outcome for different scores

var quizResult = [
  "Good effort, 50% of your answers are right. \nYour total score out of 10 is ",
  "Well done, You know a lot about New Zealand! \nYour total score out of 10 is ",
  "Good, but you need to learn more about New Zealand, \nYour total score out of 10 is ",
  "What are you doing? Your total score out of 10 is ",
  "Very good! You answered everything correctly. \nYour total score out of 10 is "
]

if (questionCount == 5) {
  alert(quizResult[0] + questionCount)
} else if (questionCount == 6 || questionCount == 7 || questionCount == 8 || questionCount == 9) {
  alert(quizResult[1] + questionCount)
} else if (questionCount == 4 || questionCount == 3) {
  alert(quizResult[2] + questionCount)
} else if (questionCount == 2 || questionCount == 1) {
  alert(quizResult[3] + questionCount)
} else if (questionCount == 10) {
  alert(quizResult[4] + questionCount)
}

// says goodbye to the user
alert("Thank you for your time " + Name + "!")