import playGame from '../index.js';
import getRandomNum from '../random-generator.js';

const startQuestion = 'What number is missing in the progression?';

const getProgressionGameData = () => {
  const progLength = getRandomNum(5, 10);
  const incrementStep = getRandomNum(1, 10);
  const startNum = getRandomNum(50, 1);
  const hidePosition = getRandomNum(0, progLength - 1);
  const progLine = [startNum];
  for (let i = 0; i < progLength; i += 1) {
    progLine.push(progLine[i] + incrementStep);
  }
  const correctAnswer = progLine[hidePosition];
  progLine[hidePosition] = '..';
  const progExpression = progLine.join(' ');
  return [progExpression, correctAnswer];
};

const progressionGame = () => {
  playGame(startQuestion, getProgressionGameData);
};

export default progressionGame;
