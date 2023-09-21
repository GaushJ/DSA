function calculateProduct(value) {
    let cache = {};
    let result;
    return function displayValue() {
      result = value * 234567 + 1234567;
      if (cache[value]) {
        return cache[value];
      } else {
        cache[value] = result;
        return result
      }
      
    };
  }
  
  console.time("start")
  const result = calculateProduct(20);
  console.log(result())
  console.timeEnd("end")