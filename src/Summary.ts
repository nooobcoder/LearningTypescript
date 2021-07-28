import { MatchData } from './MatchData.js';

interface Analyzer {
  run(matches: MatchData[]): string;
}

interface OutputTarget {
  print(report: string): void;
}

class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}

export { Analyzer, OutputTarget, Summary };
