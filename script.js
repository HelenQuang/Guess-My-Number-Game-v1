'use strict';
/*
console.log(document.querySelector('.message').textContent); //.message is the class name in HTML file

//DOM MANIPULATION
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; //with the 'input' field, in order to get the actual value, we use value property
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1); //To define a secret random number between 1 and 20

let score = 20; //To define initial score

let highscore = 0; //To define highscore

//REFACTORING THE DUPLICATE CODES BY USING THE DRY PRINCIPLE
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//HANDLING CLICK EVENTS //For addEventListener, 1st argument is the type of the event, 2nd argument is the reaction to that event, can be a function here.
document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    //1st senerio: No input
    displayMessage('No Number!');
  } else if (guess === secretNumber) {
    //2nd senerio: input number === secret number
    displayMessage('Correct Number :D');
    displayNumber(secretNumber);

    //MANIPULATE CSS STYLES => ALWAYS need to specify a STRING!!!
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //SETTING HIGHSCORE
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // } else if (guess > secretNumber) {
    //   //3rd senerio: input number > secret number
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too high!';
    //     score--; //score will be -1 after each try
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game :<';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   //4th senerio: input number < secret number
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too low!';
    //     score--; //score will be -1 after each try
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game :<';
    //     document.querySelector('.score').textContent = 0;
    //   }

    //REFACTORING THE DUPLICATE ABOVE CODES BY USING THE DRY PRINCIPLE
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!'); //By using Ternary Operator
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game :<');
      displayScore(0);
    }
  }
});

//CODING CHALLENGE 1
//1. Select the element with the 'again' class and attach a click event handler
//2. In the handler function, restore initial values of the score, secretNumber variables, initial conditions of the message, score, guess input field, original background color and number width
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
