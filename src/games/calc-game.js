import playGame from '../index.js';
import getRandomNum from '../random-generator.js';

const startQuestion = 'What is the result of the expression?';

const operators = ['-', '+', '*'];

const simpleCalculator = (num1, operator, num2) => {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return (`ERROR! Unknown operator: "${operator}"`);
  }
};

const getCalcGameData = () => {
  const randomNum1 = getRandomNum(1, 10);
  const randomNum2 = getRandomNum(1, 10);
  const randomOperator = operators[getRandomNum(0, operators.length - 1)];
  const calcExpression = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const correctAnswer = String(simpleCalculator(randomNum1, randomOperator, randomNum2));
  return [calcExpression, correctAnswer];
};

const calcGame = () => {
  playGame(startQuestion, getCalcGameData);
};

export default calcGame;
