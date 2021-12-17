import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('Добро пожаловать на Мозговой Штурм!\nКакое имя выбрали для тебя родители?\n');
  console.log(`Неполохо! Приветсвую тебя, ${name}!`);
};

 export default greeting;