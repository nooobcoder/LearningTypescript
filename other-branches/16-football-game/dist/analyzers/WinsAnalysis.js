import { winConstants } from '../matchResult.js';
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(teamName) {
        this.teamName = teamName;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === 'Man United' && match[5] === winConstants.HomeWin) {
                wins += 1;
            }
            else if (match[2] === 'Man United' && match[5] === winConstants.AwayWin) {
                wins += 1;
            }
        }
        return "Team " + this.teamName + " won " + wins + " games";
    };
    return WinsAnalysis;
}());
export { WinsAnalysis };
//# sourceMappingURL=WinsAnalysis.js.map