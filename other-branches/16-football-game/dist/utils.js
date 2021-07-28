var dateStringToDate = function (dateString) {
    var dateParts = dateString.split('/').map(function (value) { return +value; });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
export { dateStringToDate };
//# sourceMappingURL=utils.js.map