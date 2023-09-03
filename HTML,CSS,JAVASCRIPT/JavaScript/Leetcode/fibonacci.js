function calculateFibonacci(num) {
    if (num <= 1) return num;
    return calculateFibonacci(num - 1) + calculateFibonacci(num - 2)
}
const result = calculateFibonacci(7)
console.log(result)