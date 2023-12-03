function reverseWord(word) {
  return word.split(``).reverse().join(``)

}


function isPalindrome(word) {
  // Write your algorithm here

  return word === reverseWord(word)
}





/* 
  Add your pseudocode here
  see if reversed string in reverse is == to string
  return true if it does

  1: split the word
  2: reverse the letters/place in variable
  3: convert from array to string
  4: compare

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
