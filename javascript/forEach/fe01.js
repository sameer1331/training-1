//sum of each element present in two given arrays : 
const a = [1, 3, 5, 7, 9];
const b = [2, 4, 6, 8, 10];

const sumOfElements = (a, b) => {
  const sum = [];
  for (let i = 0; i < a.length; i++) {
    sum.push(a[i] + b[i]);
  }
  return sum;
};
const result = sumOfElements(a, b);
console.log(result);

