
const isPalindrome = require('./isPalindrome');
test('Test case 1: 121 is a isPalindrome', ()=>{
    expect(isPalindrome(121)).toBe(true);
});
test('Test case 2: -121 is not a isPalindrome', ()=>{
    expect(isPalindrome(-121)).toBe(false);
});
test('Test case 3: 10 is not a isPalindrome', ()=>{
    expect(isPalindrome(10)).toBe(false);
});
test('invalid input:"A" is not a valid number', ()=>{
    expect(isPalindrome('A')).toBe('invalid input');
});