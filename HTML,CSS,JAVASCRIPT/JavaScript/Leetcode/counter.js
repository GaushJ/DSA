var createCounter = function(n) {
    let counter = n
    return function() {
        return counter++
    };
};

var result = createCounter(-2);
for(let i=0;i<5;i++){
    console.log(result())
}
