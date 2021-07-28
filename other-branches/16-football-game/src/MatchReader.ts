import { winConstants } from './matchResult.js';
import { dateStringToDate } from './utils.js';
import { MatchData } from './MatchData.js';

interface DataReader {
  read(): void;

  data: string[][];
}

class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [dateStringToDate(row[0]), row[1], row[2], +row[3], +row[4], row[5] as winConstants, row[6]];
    });
  }
}

export { MatchReader };
