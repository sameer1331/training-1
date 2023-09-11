//Write a function that takes an array of strings and returns a new array with only the strings that have a length greater than a given length. Use the filter method to accomplish this.

strings=[{name:'sameer'},{name:'shanmugam'},{name:'bharath'},{name:'jeeva'}];


var  n=strings.filter(e => e.name.length>5)

console.log(n)
  