var searchInsert = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1
        }

    }
    return low

};

const result = searchInsert([1, 3, 5, 6, 7, 9, 12], 13);
console.log(result)