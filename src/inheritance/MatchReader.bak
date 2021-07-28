import { CsvFileReader } from './CsvFileReader.js';
import { dateStringToDate } from './utils.js';
import { winConstants } from './matchResult.js';

type MatchData = [Date, string, string, number, number, winConstants, string];

class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [dateStringToDate(row[0]), row[1], row[2], +row[3], +row[4], row[5] as winConstants, row[6]];
  }
}

export { MatchReader };
