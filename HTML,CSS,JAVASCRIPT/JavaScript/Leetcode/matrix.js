var searchMatrix = function (matrix, target) {

    let subArrayLength = matrix[0].length
    let mid = Math.floor(matrix.length / 2)
    let low = 0;
    let high = matrix.length - 1
    while (low <= mid) {
        mid = Math.floor(m(low + high) / 2)
    }
    if (matrix[mid][0] > target && matrix[mid][subArrayLength - 1] > target) {
        //check if the value exists in the array
        if (target in matrix[mid]) {
            return true
        } return false
    } else if (matrix[mid][subArrayLength - 1] > target) {

    }

    // for (let i = 0; i < matrix.length; i++) {
    //     for (let j = 0; j < matrix[i].length; j++) {
    //         if (matrix[i][j] === target) {
    //             return true
    //         }
    //     }

    // }
    return false
};
// searchMatrix([[1],[2],[3]], 3)
console.log(searchMatrix([[1], [2], [3], [4]], 2))