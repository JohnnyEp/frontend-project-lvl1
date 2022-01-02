import readlineSync from 'readline-sync';

const playGame = (startQuestion, getSomeGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(startQuestion);

  for (let i = 0; i < 3; i += 1) {
    const gameData = getSomeGameData();
    const gameExpression = gameData[0];
    const correctAnswer = String(gameData[1]);
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
