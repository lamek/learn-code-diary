/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * iterate list
 * add remainder as key (easier to look up)
 * add index as value
 * on each item, calculate remainder
 * if in dict, return it's value (index) and current index
 * if not, remainder and index to dict
 */
var twoSum = function(nums, target) {
    let myNums = {};

    for (let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i];

        if (remainder in myNums) {
            let output = [];
            output[0] = myNums[remainder];
            output[1] = i;

            return output;
        } else {
            myNums[nums[i]] = i;

            // console.log(myNums);
        }
    }

};
