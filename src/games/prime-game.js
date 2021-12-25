import playGame from '../index.js';

const startQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomExpression = () => Math.ceil(Math.random() * 100);

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
  playGame(startQuestion, getRandomExpression, getCorrectAnswer);
};

export default primeGame;
