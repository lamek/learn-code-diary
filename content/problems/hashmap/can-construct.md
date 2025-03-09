+++
date = '2025-03-08T10:05:55-08:00'
draft = false
title = 'Ransom Note'
+++

In this problem we're given a magazine and a ransom note. We have to determine
if the magazine has enough letters to construct the ransom note. 

The approach I used was a single map. Iterate through the magazine, storing each
letter as a key, and incrementing it's value every time you add an instance of a
letter.

Then, iterate through the ransom note. Each time you evaluate a letter,
check for it in your map. If you don't find it, you can fail early. If you do
find it, decrement the count. Do a quick check to make sure the count didn't go
below 0. If it did, then the magazine does not have enough of that letter.

If you make it all the way through the ransom note, then you can return true.

```javascript
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function(ransomNote, magazine) {
    // check if the note is longer than magazine
    // and if so return false
    if (ransomNote.length > magazine.length) {
        return false;
    }

    // set up our map
    const counts = new Map();

    // create a letter count for magazine
    for (let i = 0; i < magazine.length; i++) {
        const letter = magazine[i]; // should this be const instead of let?
        if (counts.has(letter)) {
            counts.set(letter, (counts.get(letter) || 0) + 1);
        } else {
            counts.set(letter, 1);
        }
    }

    // make a pass through ransomNote, checking
    // against the values in the count map
    for (let j = 0; j < ransomNote.length; j++) {
        const ransomLetter = ransomNote[j];

        // check if the magazine map has this letter
        // and if not return false
        if (!counts.has(ransomLetter)) {
            return false;
        } else {
            // if the map does have the letter, decrement it
            counts.set(ransomLetter, (counts.get(ransomLetter) - 1));
        }

        // check that the letter value didn't go below 0.
        // if it did, return false.
        if (counts.get(ransomLetter) < 0) {
            return false;
        }
    }

    return true;
};
```