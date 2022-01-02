import playGame from '../index.js';
import getRandomNum from '../random-generator.js';

const startQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const getEvenGameData = () => {
  const randomNum = getRandomNum(1, 100);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
};

const evenGame = () => {
  playGame(startQuestion, getEvenGameData);
};

export default evenGame;
