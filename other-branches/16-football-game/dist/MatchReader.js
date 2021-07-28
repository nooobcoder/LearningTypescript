import { dateStringToDate } from './utils.js';
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return [dateStringToDate(row[0]), row[1], row[2], +row[3], +row[4], row[5], row[6]];
        });
    };
    return MatchReader;
}());
export { MatchReader };
//# sourceMappingURL=MatchReader.js.map