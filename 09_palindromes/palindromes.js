const palindromes = function (string) {
    const processed = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    return processed.split("").reverse().join("") == processed;
};

// Do not edit below this line
module.exports = palindromes;
