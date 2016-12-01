/*
Write a function that will check if a string contains the given substring,
and return the index of the first letter of the substring.

Examples:

findSubStr('she has a cat.', 'cat')
output => 10

findSubStr('abcdde', 'de')
output => 4

findSubStr('happy holiday', 'a')
output => 1
*/

function findSubStr (string, substring) {
  // write your code here
}


// Solution with one while loop
function findSubStr (string, substring) {
  let index = -1;
  let j = 0;
  let i = 0;
  while ( i < string.length ) {
    if (string[i] === substring[j]) {
      if (j === 0) {
        index = i;
      }
      i++;
      j++;
    } else {
      index = -1;
      i++;
      j = 0;
    }
  }
  return index;
}

findSubStr('abcde', 'cd') // 2
findSubStr('this is a cat', 'a cat') // 8
findSubStr('abced', 'k') // -1
