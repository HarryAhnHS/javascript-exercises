const removeFromArray = function(arr, ...args) {
    const outArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!args.includes(arr[i])) outArray.push(arr[i]);
    }  
    return outArray;
};

// Do not edit below this line
module.exports = removeFromArray;