+++
date = '2025-03-08T10:47:49-08:00'
draft = false
title = 'Combinations'
+++

Given 2 integers, n and k, return all possible combinations
of length k, for numbers 1 through n. 1,2 and 2,1 are the same.
i.e. order doesn't matter


```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    // initialzie your answer array
    let combos = [];

    // define a recursive function
    // the function takes a start point, n and k, and the current combo.
    // the function will recurse down until the current combo is the same length
    // as k.
    // Then it will push that combo to the answer array, and go up a step, finishing
    // building the combos for the next letters.
    function makeCombo(start, n, k, currentCombo) {
        // exit check. Once the currentCombo reaches length k, we need to exit and go up a level
        // in our stack.
        if (currentCombo.length === k) {
            combos.push([...currentCombo]);
            return;
        }

        // call the recursive function.
        // Call once for each number, from i through n
        // This avoids duplicating numbers
        for (let i = start; i <= n; i++) {
            // you'll only hit a combo at the "bottom" of the stack
            currentCombo.push(i);
            // increment i, and continue with all the other values
            makeCombo(i + 1, n, k, currentCombo);
            // we only reach this point when exiting the stack.
            // becase we JUST pushed the current combo, pop it
            // before exiting up 1 level.
            currentCombo.pop();
        }
    }
    // make the initial call to your recursive function
    makeCombo(1, n, k, []);
    // return the results array
    return combos;
};
```