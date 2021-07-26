import fs from 'fs';
import { dateStringToDate } from './utils.js';

class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(`src/${this.filename}`, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string) => row.split(','))
      .map((row: string[]): any => {
        return [dateStringToDate(row[0]), ...row.slice(1)];
      });
  }
}

export { CsvFileReader };
