import playGame from '../index.js';

const startQuestion = 'What number is missing in the progression?';

let answerNum;

const getRandomExpression = () => {
  const progLength = Math.round(Math.random() * (10 - 5)) + 5;
  const stepSize = Math.round(Math.random() * (10 - 1)) + 1;
  const startNum = Math.round(Math.random() * (50 - 1)) + 1;
  const prog = [];

  for (let i = 0; i < progLength; i += 1) {
    if (prog.length === 0) {
      prog.push(startNum);
    } else {
      prog.push(prog[i - 1] + stepSize);
    }
  }
  const hidePosition = Math.round(Math.random() * (prog.length - 1));
  answerNum = prog[hidePosition];
  prog[hidePosition] = '..';
  return prog.join(' ');
};

const getCorrectAnswer = () => String(answerNum);

const progressionGame = () => {
  playGame(startQuestion, getRandomExpression, getCorrectAnswer);
};

export default progressionGame;
