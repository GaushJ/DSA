var containsDuplicate = function (nums) {
    var obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++
            return true
        } else {
            obj[nums[i]] = 1
        }
    }
    return false

};

console.log(containsDuplicate([1, 2, 3, 5, 5]))