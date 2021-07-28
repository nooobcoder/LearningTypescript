import { OutputTarget } from '../Summary.js';

class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}

export { ConsoleReport };
