import readlineSync from 'readline-sync';

const playGame = (startQuestion, randomExpression, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(startQuestion);

  for (let i = 0; i < 3; i += 1) {
    const expression = randomExpression();
    const answer = readlineSync.question(`Question: ${expression}\nYour answer: `);
    if (answer === correctAnswer(expression)) {
      console.log('Correct!');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer(expression)}".\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;