/*
Write a function that will print out a right triangle with a given number

Examples:

rightTriangle(3)
output => *
          **
          ***

rightTriangle(5)
output => *
          **
          ***
          ****
          *****
*/


function rightTriangle (number) {
  // write your code here
}

// Solution shown at the meet up with a few tiny changes
function rightTriangle (number) {
  let result = '';
  for (let i=1; i<=number; i++) {
    for (let j=1; j<=i; j++) {
      result += '*'
    }
    if (i<number) {
      result +='\n';
    }
  }
  return result;
}

console.log(rightTriangle(3));
