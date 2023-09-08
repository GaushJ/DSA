var generate = function (nums) {
    if (nums < 1) return [];
    if (nums === 1) return [[1]];

    const triangle = [[1]];

    for (let i = 1; i < nums; i++) {
        let prevRow = triangle[i - 1]
        let currRow = [];

        currRow.push(1);

        for (let j = 1; j < prevRow.length; j++) {
            currRow[j] = prevRow[j] + prevRow[j - 1]
        }
        currRow.push(1);

        triangle.push(currRow)
    }

    console.log(triangle);
}

generate(5)
