var removeElement = function (nums, val) {
    let j = 0;
    for (n of nums) {
        if (n !== val) {
            nums[j] = n;
            j++
        }
    }
    return j;

};
const result = removeElement([2, 2, 1, 2, 3, 0, 4, 2], 2)
console.log(result)