const fibonacci = function(num) {
    let iter = 1
    let prev = 1
    let current = 1
    let next = 1

    if (num == 1 || num == 2){
        return 1
    } else if (num < 1) {
        return 'OOPS'

    }
    for (iter; iter <= num - 2; iter++){
        next = current + prev
        prev = current
        current = next
    }
    return next

};

// Do not edit below this line
module.exports = fibonacci;
