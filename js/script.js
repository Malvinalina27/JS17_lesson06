'use strict';

let startGame = function() {

  let isNumber = function(n) {
    return !isNaN(parseFloat(n));
  };
  
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);

  let userNumber = +prompt('Угадай число от 1 до 100');
  
  let searchNumber = function() {
      
    if (userNumber > randomNumber) {
      alert('Загаданное число меньше');
      userNumber = +prompt('Угадай число от 1 до 100');
      searchNumber();
    } else if (userNumber < randomNumber && userNumber > 0) {
      alert('Загаданное число больше');
      userNumber = +prompt('Угадай число от 1 до 100');
      searchNumber();
    } else if (!isNumber(userNumber)) {
      alert('Введи число!');
      userNumber = +prompt('Угадай число от 1 до 100');
      searchNumber();
    } else if (userNumber === randomNumber) {
      alert('Поздравляю, Вы угадали!!!');
    } else if (userNumber === null || userNumber === 0 || userNumber === '') {
      alert('Игра окончена');    
    }
  };
  searchNumber();
};
startGame();


