import fs from 'fs';
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs
            .readFileSync("src/" + this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map(function (row) { return row.split(','); });
    };
    return CsvFileReader;
}());
export { CsvFileReader };
//# sourceMappingURL=CsvFileReader.js.map