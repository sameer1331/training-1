//function to get the unique strings from an array using map :
function getUniqueStrings(array) {
    const stringMap = new Map();
    const uniqueStrings = [];
  
    for (const string of array) {
      if (!stringMap.has(string)) {
        uniqueStrings.push(string);
        stringMap.set(string, true);
      }
    }
  
    return uniqueStrings;
  }
  const array = ["sam", "dom", "helen", "sam"];

  const uniqueStrings = getUniqueStrings(array);
  
  console.log(uniqueStrings);
    