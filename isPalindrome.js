const { default: test } = require("node:test");

function isPalindrome(x) {
    // Check if the input is a valid integer
    if (typeof x !== 'number' || !Number.isInteger(x)) {
        return "Invalid Input";
    }

    // Negative numbers and numbers ending with 0 (except 0 itself) are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    // Reverse the integer
    let reversed = 0;
    let isPalindrome = x;

    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return reversed === isPalindrome;
}
module.exports={
    test,
};

