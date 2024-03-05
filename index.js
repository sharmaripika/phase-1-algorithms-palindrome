function isPalindrome(str){
  let lowerStr= str.toLowerCase();
  let reverStr = lowerStr.split('').reverse().join('')
  if(lowerStr===reverStr){
    return true;
  }
  return false;
}

console.log(isPalindrome("ab"))
console.log(isPalindrome("abba"));
console.log(isPalindrome("a"));
console.log(isPalindrome("robot"));
console.log(isPalindrome("racecar"));


module.exports = isPalindrome;