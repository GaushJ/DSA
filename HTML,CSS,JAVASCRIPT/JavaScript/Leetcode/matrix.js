var searchMatrix = function (matrix, target) {

    let subArrayLength = matrix[0].length
    let mid = Math.floor(matrix.length / 2)

    let low = 0;
    let high = matrix.length - 1

    while (low <= mid) {

        mid = Math.floor((low + high) / 2)

        if (matrix[mid][0] < target && matrix[mid][subArrayLength - 1] > target) {
            //check if the value exists in the array
            for (let i = 0; i < matrix[mid].length; i++) {
                console.log(target, matrix[mid][i])
                if (target === matrix[mid][i]) {

                    return true
                } return false
            }

        } else if (matrix[mid][subArrayLength - 1] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }




};
// searchMatrix([[1],[2],[3]], 3)
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))