//1st Approach
// function checkAnagram(string, checkString) {
//    const isAnagram = string.split('').sort().join('') === checkString.split('').sort().join('') 
//    console.log(isAnagram);
//    return isAnagram
// }
const checkAnagram = (s, t) => {
    const sMap = Object.create(null)
    const tMap = Object.create(null)
    if (s.length != t.length) {
        return false
    }
    for (const letter of s) {
        sMap[letter] = sMap[letter] || 0;
        sMap[letter]++
    }
    for (const letter of t) {
        tMap[letter] = tMap[letter] || 0;
        tMap[letter]++
    }
    console.log(Object.keys(tMap),Object.keys(sMap))
    return Object.keys(tMap) === Object.keys(sMap) && Object.values(tMap) === Object.values(sMap)
}
// console.log(checkAnagram('annam', 'manna'))
checkAnagram('annam', 'manna')