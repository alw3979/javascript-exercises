

const palindromes = function (orig) {
    function removePunct(string) {
        return string.replace(/[\.,?!\s]/g, "")
    };

    let cleanOrig = removePunct(orig.toLowerCase())

    let reversedString = cleanOrig.split("").reverse().join("")

    if (cleanOrig==reversedString) {
        return true
    } else {
        return false
    }
    
};

// Do not edit below this line
module.exports = palindromes;
