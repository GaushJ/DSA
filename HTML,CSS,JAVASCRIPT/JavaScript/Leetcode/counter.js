// var createCounter = function(n) {
//     let counter = n
//     return function() {
//         return counter++
//     };
// };

// var result = createCounter(-2);
// for(let i=0;i<5;i++){
//     console.log(result())
// }

// counter 2
var createCounter = function (init) {
    let value = init
    return {
        value: value,
        increment: function () {
            this.value += 1
            return this.value;
        },
        decrement: function () {
            this.value -= 1
            return this.value ;
        },
        reset: function () {
            this.value = init
            return this.value;
        }
    };
};

const counter = createCounter(0)
console.log(counter.value)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.reset())

