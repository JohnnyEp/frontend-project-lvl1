import playGame from '../index.js';
import getRandomNum from '../random-generator.js';

const startQuestion = 'What number is missing in the progression?';

const getProgressionGameData = () => {
  const startNum = getRandomNum(1, 50);
  const incrementStep = getRandomNum(1, 10);
  const progressionLength = getRandomNum(5, 10);
  const hidePosition = getRandomNum(0, progressionLength - 1);
  const createProgression = (start, step, length) => {
    const tempProgression = [start];
    for (let i = 0; i < length; i += 1) {
      tempProgression.push(tempProgression[i] + step);
    }
    return tempProgression;
  };
  const progression = createProgression(startNum, incrementStep, progressionLength);
  const correctAnswer = String(progression[hidePosition]);
  progression[hidePosition] = '..';
  const progExpression = progression.join(' ');
  return [progExpression, correctAnswer];
};

const progressionGame = () => {
  playGame(startQuestion, getProgressionGameData);
};

export default progressionGame;
