const removeFromArray = function() {

    for (let i = 1; i < arguments.length; i++){
        if (arguments[0].indexOf(arguments[i]) != -1){
            let newArray = arguments[0].splice(arguments[0].indexOf(arguments[i]), 1);

        } 
        
    }
    return arguments[0]

};


// Do not edit below this line
module.exports = removeFromArray;
