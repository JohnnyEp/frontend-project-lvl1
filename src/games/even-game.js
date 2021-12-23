import playGame from '../index.js';

const startQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomExpression = () => Math.ceil(Math.random() * 100);

const isEven = (num) => (num % 2 === 0);
const getCorrectAnswer = (expression) => (isEven(expression) ? 'yes' : 'no');

const evenGame = () => {
  playGame(startQuestion, getRandomExpression, getCorrectAnswer);
};

export default evenGame;
