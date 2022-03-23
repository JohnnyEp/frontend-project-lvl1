import readlineSync from 'readline-sync';

const playGame = (gameQuestion, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameQuestion);

  for (let round = 0; round < 3; round += 1) {
    const [gameExpression, correctAnswer] = getGameData();
    const answer = readlineSync.question(`Question: ${gameExpression}\nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
