Array.prototype.last = function () {
        return this.length > 0 ? this[this.length - 1] : -1;
    }
;
let arr1 = [null,6]
console.log(arr1.last())