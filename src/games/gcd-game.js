import playGame from '../index.js';
import getRandomNum from '../random-generator.js';

const startQuestion = 'Find the greatest common divisor of given numbers.';

const getGcdGameData = () => {
  const randomNum1 = getRandomNum(1, 100);
  const randomNum2 = getRandomNum(1, 100);
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const gcdExpression = `${randomNum1} ${randomNum2}`;
  const correctAnswer = gcd(randomNum1, randomNum2);
  return [gcdExpression, correctAnswer];
};

const gcdGame = () => {
  playGame(startQuestion, getGcdGameData);
};

export default gcdGame;
