//function to get the char count of a string using map :
function getCharCounts(string) {
    const charCounts = new Map();
  
    for (const char of string) {
      if (charCounts.has(char)) {
        charCounts.set(char, charCounts.get(char) + 1);
      } else {
        charCounts.set(char, 1);
      }
    }
  
    return charCounts;
  }
const string= "hello,world!!";
const charCounts=getCharCounts(string);
console.log(charCounts);  
