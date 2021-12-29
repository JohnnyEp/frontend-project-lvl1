import playGame from '../index.js';
import getRandomNum from '../random-generator.js';

const startQuestion = 'What number is missing in the progression?';

let answerNum;

const getRandomProgressionLine = () => {
  const progLength = getRandomNum(5, 10);
  const incrementStep = getRandomNum(1, 10);
  const startNum = getRandomNum(50, 1);
  const hidePosition = getRandomNum(0, progLength - 1);
  const prog = [startNum];

  for (let i = 0; i < progLength; i += 1) {
    prog.push(prog[i] + incrementStep);
  }
  answerNum = prog[hidePosition];
  prog[hidePosition] = '..';
  return prog.join(' ');
};

const getCorrectAnswer = () => answerNum;

const progressionGame = () => {
  playGame(startQuestion, getRandomProgressionLine, getCorrectAnswer);
};

export default progressionGame;
