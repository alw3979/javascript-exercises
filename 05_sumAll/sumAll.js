const sumAll = function() {
    let sum=0
    if ((arguments[0] < 0) || (arguments[1] < 0) || (typeof arguments[0] != 'number') || (typeof arguments[1] != 'number')) {
        return 'ERROR'
    } else {
        for (let i=Math.min(arguments[0], arguments[1]); i<=Math.max(arguments[0], arguments[1]); i++){
        sum += i
    }
}
    return sum
};

// Do not edit below this line
module.exports = sumAll;
