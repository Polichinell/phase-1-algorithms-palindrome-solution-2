function isPalindrome(word) {
 const rword = word.toLowerCase();
  const reverse = rword.split('').reverse().join('');
  return rword === reverse;
}

/* 
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true
*/

/*
 The algorithm checks whether a word is a palindrome. It compares characters from both ends towards the middle. 
 If all pairs match, it confirms a palindrome and returns true. A single mismatch proves it's not a palindrome, 
 triggering a false result.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Cersei"));

   console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

}

module.exports = isPalindrome;
