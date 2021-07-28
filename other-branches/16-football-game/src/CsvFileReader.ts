import fs from 'fs';

class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(`src/${this.filename}`, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string) => row.split(','));
  }
}

export { CsvFileReader };
