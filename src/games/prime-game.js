import playGame from '../index.js';
import getRandomNum from '../random-generator.js';

const startQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let count = 0;
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      count += 1;
    }
  }
  return count === 0; // ? - true or false.
};

const getPrimeGameData = () => {
  const randomNum = getRandomNum(1, 100);

  const correctAnswer = (isPrime(randomNum) ? 'yes' : 'no');
  return [randomNum, correctAnswer];
};

const primeGame = () => {
  playGame(startQuestion, getPrimeGameData);
};

export default primeGame;
