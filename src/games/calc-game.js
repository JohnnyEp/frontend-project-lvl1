import playGame from '../index.js';

const startQuestion = 'What is the result of the expression?';

const getRandomExpression = () => {
  const operators = ['-', '+', '*'];
  const randomNum1 = Math.ceil(Math.random() * 10);
  const randomNum2 = Math.ceil(Math.random() * 10);
  const randomOperator = operators[Math.floor(Math.random() * 3)];
  return `${randomNum1} ${randomOperator} ${randomNum2}`;
};

const getCorrectAnswer = (expression) => {
  const components = expression.split(' ');
  const operator = components[1];
  switch (operator) {
    case '-':
      return String(Number(components[0] - components[2]));
    case '+':
      return String(Number(components[0]) + Number(components[2]));
    default:
      return String(Number(components[0] * components[2]));
  }
};

const calcGame = () => {
  playGame(startQuestion, getRandomExpression, getCorrectAnswer);
};

export default calcGame;
