import { CsvFileReader } from './CsvFileReader.js';

const reader = new CsvFileReader('football.csv');
reader.read();

let manUnitedWins = 0;

enum winConstants {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

console.log(reader.data);
for (const match of reader.data) {
  if (match[1] === 'Man United' && match[5] === winConstants.HomeWin) {
    manUnitedWins += 1;
  } else if (match[2] === 'Man United' && match[5] === winConstants.AwayWin) {
    manUnitedWins += 1;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
