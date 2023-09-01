function checkPalindrome(num) {
    return num === 0 ? false : num === +num.toString().split('').reverse().join('')
}

console.log(checkPalindrome(1001))