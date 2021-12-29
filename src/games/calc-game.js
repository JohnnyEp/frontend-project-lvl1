import playGame from '../index.js';
import getRandomNum from '../random-generator.js';

const startQuestion = 'What is the result of the expression?';

let expressionComponents;

const getCalcExpression = () => {
  const operators = ['-', '+', '*'];
  const randomNum1 = getRandomNum(1, 10);
  const randomNum2 = getRandomNum(1, 10);
  const randomOperator = operators[getRandomNum(0, 2)];
  expressionComponents = [randomNum1, randomOperator, randomNum2];
  return `${randomNum1} ${randomOperator} ${randomNum2}`;
};

const getCorrectAnswer = () => {
  const operator = expressionComponents[1];
  switch (operator) {
    case '-':
      return expressionComponents[0] - expressionComponents[2];
    case '+':
      return expressionComponents[0] + expressionComponents[2];
    case '*':
      return expressionComponents[0] * expressionComponents[2];
    default:
      return (`ERROR! Unknown operator: "${operator}"`);
  }
};

const calcGame = () => {
  playGame(startQuestion, getCalcExpression, getCorrectAnswer);
};

export default calcGame;
