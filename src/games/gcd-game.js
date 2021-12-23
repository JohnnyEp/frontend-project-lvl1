import playGame from '../index.js';

const startQuestion = 'Find the greatest common divisor of given numbers.';

const getRandomExpression = () => {
  const randomNum1 = Math.ceil(Math.random() * 100);
  const randomNum2 = Math.ceil(Math.random() * 100);
  return `${randomNum1} ${randomNum2}`;
};

const getCorrectAnswer = (expression) => {
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const components = expression.split(' ');
  const a = Number(components[0]);
  const b = Number(components[1]);
  return String(gcd(a, b));
};

const gcdGame = () => {
  playGame(startQuestion, getRandomExpression, getCorrectAnswer);
};

export default gcdGame;
