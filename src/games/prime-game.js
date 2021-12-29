import playGame from '../index.js';
import getRandomNum from '../random-generator.js';

const startQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNumforGame = () => getRandomNum(1, 100);

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

const getCorrectAnswer = (expression) => (isPrime(expression) ? 'yes' : 'no');

const primeGame = () => {
  playGame(startQuestion, getRandomNumforGame, getCorrectAnswer);
};

export default primeGame;
