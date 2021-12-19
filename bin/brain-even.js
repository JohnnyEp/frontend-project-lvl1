#!/usr/bin/env node
import playGame from '../src/even_game_logic.js';
import greeting from '../src/cli.js';

const userName = greeting();
playGame(userName);
