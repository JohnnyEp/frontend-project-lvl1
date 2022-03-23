import playGame from '../index.js';
import getRandomNum from '../random-generator.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeGameData = () => {
  const randomNum = getRandomNum(1, 100);

  const correctAnswer = (isPrime(randomNum) ? 'yes' : 'no');
  return [randomNum, correctAnswer];
};

const primeGame = () => {
  playGame(gameQuestion, getPrimeGameData);
};

export default primeGame;
