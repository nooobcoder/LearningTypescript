import { MatchReader } from './MatchReader.js';
import { CsvFileReader } from './CsvFileReader.js';
import { ConsoleReport } from './reportTargets/ConsoleReport.js';
import { WinsAnalysis } from './analyzers/WinsAnalysis.js';
import { Summary } from './Summary.js';
// import { HtmlReport } from './reportTargets/HtmlReport.js';

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  // new HtmlReport()
  new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);
