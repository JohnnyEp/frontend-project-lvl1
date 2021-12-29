import playGame from '../index.js';
import getRandomNum from '../random-generator.js';

const startQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumforGame = () => getRandomNum(1, 100);

const isEven = (num) => (num % 2 === 0);
const getCorrectAnswer = (expression) => (isEven(expression) ? 'yes' : 'no');

const evenGame = () => {
  playGame(startQuestion, getRandomNumforGame, getCorrectAnswer);
};

export default evenGame;
