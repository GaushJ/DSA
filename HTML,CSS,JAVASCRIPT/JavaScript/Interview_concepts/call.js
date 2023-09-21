let obj1 = {
    firstName: "gauransh",
    lastName: "juneja",
    fullName: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}

let obj2 = {
    firstName: "sara",
    lastName: "makhija",
}
const result = obj1.fullName.call(obj2);