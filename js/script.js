'use strict';

let startGame = function() {
  const isNumber = function(n) {
    return !isNaN(parseFloat(n) && isFinite(n));
  };
  
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);

  
  let searchNumber = function() {
    let userNumber = prompt('Угадай число от 1 до 100');
      
    if (userNumber === null) {
      alert('Игра окончена');    
    } else if (isNaN(userNumber) || !isNumber(userNumber)) {
      alert('Введи число!');
      searchNumber();
    } else if (userNumber > randomNumber) {
      alert('Загаданное число меньше');
      searchNumber();
    } else if (userNumber < randomNumber ) {
      alert('Загаданное число больше');
      searchNumber();
    } else if (+userNumber === randomNumber) {
      alert('Поздравляю, Вы угадали!!!');
    }  
  };
  searchNumber();
};
startGame();


