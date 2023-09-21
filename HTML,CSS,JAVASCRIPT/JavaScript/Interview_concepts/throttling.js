var count = 0
function getData() {

    console.log("hello", count++)
}

const throttle = (fn, delay) => {

    let prevDate = 0
    return function () {
        let currentDate = Date.now()
        let context = this;
        let args = arguments;
        

        if(currentDate - prevDate > delay){
            fn.apply(context, args)
            prevDate = currentDate
        }
       

    }
}

const betterFunction = throttle(getData, 1000)