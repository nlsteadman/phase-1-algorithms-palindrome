function isPalindrome(word) {
  let reverseInput = word.split('').reverse().join('');
  if (word === reverseInput) {
    return true;
  } else {
    return false;
  }
  
}

/* 
  Add your pseudocode here
  define a function called isPalindrome with a string as an argument
    let string equals string lowercase
    let new string equal string with split to isolate letters of word
    use reverse to reverse letters of word
    use join to join the letters back into a word
    if lowercase string equals reverse string
      return true
    
    else return false
*/

/*
  Add written explanation of your solution here
  the first step is to save the lowercase version of the input as a variable.
  then split up the letters, reverse the order of the letters, and join them back together.
  compare the first input variable with the reverse variable as a boolean.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Hello"));
}

module.exports = isPalindrome;
