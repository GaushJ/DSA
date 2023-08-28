//memoiazation
//storing in cache
let sum = 0;
const calc = (n) => {
    for (let i = 0; i < n; i++) {
        sum += i
    }
    return sum;
}
function memoize(fun) {
    let cache = {};
    return function (args) {

        let n = JSON.stringify(args)

        if (n in cache) {
            console.log("cache");
            return cache[n];
        } else {
            console.log("element not found")
            const result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}

console.time();

const memoizedFunction = memoize(calc);
console.log(memoizedFunction(15))
console.timeEnd();

console.time();
console.log(memoizedFunction(15))
console.timeEnd()

