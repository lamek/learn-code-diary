---
title: "Letter Combinations"
date: 2024-02-26T08:03:17-08:00
leetcode_link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
category: "backtracking"
difficulty: "medium"
status: "green"
last_reviewed: 2025-02-28
type: problem
---

## Letter Combinations of a Phone Number

**My Quick Description:** Given a string of "phone number" digits, determine how many letter combinations those digits could represent.


{{ readFile "static/code/test.txt" }}



```javascript
// we have to iterate through the digits input and build an array
// of all possible letter combinations.

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // check the base case
    if (!digits) {
        return [];
    }
    
    let count = digits.length; // controls how long we will recurse for
    let combos = []; // stores our answers
    
    // build a lookup map to represnt a phone keypad
    const digitMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    
    // take the index of digits, and the current answer array
    // each recrusive call will add to the array
    function makeCombo(index, currentCombo) {
        if (index === digits.length) { // check length, exit when we're at the end of digits
            combos.push(currentCombo);
            return;
        }

        const digit = digits[index]; // pull the current number from digits
        const letters = digitMap[digit]; // look up the letters associated with that number

        for (const letter of letters) { // for each letter, call makeCombo
            makeCombo(index + 1, currentCombo + letter);
        }
    }

    makeCombo(0, ''); // Initial call to the helper function

    return combos;
};

```