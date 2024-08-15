const fs = require('fs');
const { readInput, isGameOver, getWinningPos, announceWinner, nextMove } = require('./utils/index.js');

const input = fs.readFileSync('resource/input.txt', { encoding: 'utf-8'});
const { snakes, ladders, players: { names, positions } } = readInput(input);
const numPlayers = positions.length;

let turn = 0;
while(!isGameOver(positions)) {
    nextMove(turn, positions, names, snakes, ladders);
    turn = (turn+1)%numPlayers
}

const winInd = getWinningPos(positions);
announceWinner(names[winInd]);