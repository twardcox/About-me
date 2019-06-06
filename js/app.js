'use strict';
var numberCorrect = 0;
var userName = prompt('What is your name?');

var userWelcome = function() {
  alert(
    'Welcome ' +
      userName +
      '. Answer the following questions with a "Yes" or "No" to learn a little bit about me.'
  );
};

userWelcome();

// Multi-dimensional array to store questions and answers

var questionAnswers = [
  ['Was Jane born in Seattle?', 'n', 'I was born in Chicago!'],
  [
    'Does Jane love being a mom of two energetic boys?',
    'y',
    'Life with two young boys is tiring, but I wouldn\'t have it any other way'
  ],
  ['Does Jane get enough sleep?', 'n', 'What is sleep????'],
  [
    'Does Jane miss her family while she is at CodeFellows?',
    'y',
    'I miss my family, but they are the reason why I am here.'
  ],
  [
    'Is Jane a software developer',
    'y',
    'I AM a software developer...in training.'
  ]
];

var numberOfQuestions = questionAnswers.length;

// Loop to go through all the questions in the questionAnswer array
var yesNoQuestions = function() {
  for (var i = 0; i < numberOfQuestions; i++) {
    var answer = prompt(questionAnswers[i][0]);
    var userAnswer = answer.toLowerCase();

    // Checks if the user's answer is correct or not

    if (userAnswer.charAt(0) === questionAnswers[i][1]) {
      alert('Correct! ' + questionAnswers[i][2]);
      console.log('Question ' + (i + 1) + ': correct');
      numberCorrect += 1;
    } else {
      alert('Incorrect! ' + questionAnswers[i][2]);
      console.log('Question ' + (i + 1) + ': incorrect');
    }
  }
};

yesNoQuestions();

// Pick a random number as the favorite number
var favNumber = Math.floor(Math.random() * 10) + 1;
console.log('Favorite Number: ' + favNumber + typeof favNumber);

//Four tries to guess the correct number
var numberGame = function() {
  for (var j = 0; j < 4; j++) {
    var userGuess = parseInt(
      prompt('Guess Jane\'s favorite number from 1 to 10')
    );
    //console.log('j:'+ j + 'guess: '+userGuess);

    if (j === 3) {
      tries = 'You\'re out of tries. Let\'s move on.';
      console.log('Question 6: incorrect');
    } else {
      var tries = 'You have ' + (3 - j) + ' more tries.';
    }

    if (userGuess < favNumber) {
      alert('Too low. ' + tries);
    } else if (userGuess > favNumber) {
      alert('Too high. ' + tries);
    } else if (userGuess === favNumber) {
      alert('Correct!');
      console.log('Question 6: correct');
      numberCorrect += 1;
      j = 4;
    }
  }
};
numberGame();

// State Game
var statesLived = ['IL', 'GA'];
var stateGame = function() {
  for (var k = 0; k < 6; k++) {
    var userStateGuess = prompt(
      'Can you guess a state that Jane lived in besides Washington? Use state abbreviations.'
    );
    //console.log(userStateGuess.toUpperCase());

    if (k === 5) {
      triesState = 'You\'re out of tries. Let\'s move on.';
      console.log('Question 7: incorrect');
    } else {
      var triesState = 'You have ' + (5 - k) + ' more tries.';
    }

    //console.log (statesLived[0] + statesLived[1] + userStateGuess.toUpperCase());

    if (
      userStateGuess.toUpperCase() === statesLived[0] ||
      userStateGuess.toUpperCase() === statesLived[1]
    ) {
      alert('Correct!');
      console.log('Question 7: correct');
      numberCorrect += 1;
      k = 6;
    } else {
      alert(triesState);
    }
  }
};
stateGame();
//Displays a message on the page with the user's name and the number of correct answers
document.getElementById('correct').innerText =
  userName + ', you got ' + numberCorrect + ' correct!';
