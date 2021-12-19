import readlineSync from 'readline-sync';

const isEven = (num) => (num % 2 === 0);

const playGame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.ceil(Math.random() * 200);
    const answer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
