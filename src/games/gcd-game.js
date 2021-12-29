import playGame from '../index.js';
import getRandomNum from '../random-generator.js';

const startQuestion = 'Find the greatest common divisor of given numbers.';

let expressionComponents;

const getNumsForGcdGame = () => {
  const randomNum1 = getRandomNum(1, 100);
  const randomNum2 = getRandomNum(1, 100);
  expressionComponents = [randomNum1, randomNum2];
  return `${randomNum1} ${randomNum2}`;
};

const getCorrectAnswer = () => {
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const a = expressionComponents[0];
  const b = expressionComponents[1];
  return gcd(a, b);
};

const gcdGame = () => {
  playGame(startQuestion, getNumsForGcdGame, getCorrectAnswer);
};

export default gcdGame;
