import { MatchReader } from './MatchReader.js';
import { CsvFileReader } from './CsvFileReader.js';
import { ConsoleReport } from './reportTargets/ConsoleReport.js';
import { WinsAnalysis } from './analyzers/WinsAnalysis.js';
import { Summary } from './Summary.js';
// import { HtmlReport } from './reportTargets/HtmlReport.js';
// Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
var matchReader = new MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary(new WinsAnalysis('Man United'), 
// new HtmlReport()
new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
//# sourceMappingURL=main.js.map