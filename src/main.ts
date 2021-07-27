import { winConstants } from './matchResult.js';
import { MatchReader } from './MatchReader.js';

const reader = new MatchReader('football.csv');
reader.read();

let manUnitedWins = 0;

for (const match of reader.data) {
  if (match[1] === 'Man United' && match[5] === winConstants.HomeWin) {
    manUnitedWins += 1;
  } else if (match[2] === 'Man United' && match[5] === winConstants.AwayWin) {
    manUnitedWins += 1;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
