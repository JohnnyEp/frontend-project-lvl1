import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?\n');
  console.log(`Hello, ${name}!`);
};

export default greeting;
