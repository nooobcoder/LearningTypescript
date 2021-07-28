import { Analyzer } from '../Summary.js';
import { MatchData } from '../MatchData.js';
import { winConstants } from '../matchResult.js';

class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (const match of matches) {
      if (match[1] === 'Man United' && match[5] === winConstants.HomeWin) {
        wins += 1;
      } else if (match[2] === 'Man United' && match[5] === winConstants.AwayWin) {
        wins += 1;
      }
    }

    return `Team ${this.teamName} won ${wins} games`;
  }
}

export { WinsAnalysis };
