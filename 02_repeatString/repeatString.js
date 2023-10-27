const repeatString = function(word, times) {
    if (times < 0) return "ERROR";
    
    let outcome = "";
    for (let i = 0; i < times; i++) {
        outcome += word;
    }
    
    return outcome;
};

// Do not edit below this line
module.exports = repeatString;
