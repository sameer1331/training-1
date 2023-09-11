//Write a function that takes an array of objects with a price property and returns a new array with only the objects that have a price less than a given amount. Use the filter method to accomplish this. 

const fruits = [
    { name:"apple", price:200 },
    { name:"orange", price:120 },
    { name:"mango", price:100 },
    { name:"grapes", price:110 },
    { name:"pomegranate", price:150 },
  ];
  
  const filteredFruits = fruits.filter((fruit) => fruit.price <= 120);
  
  console.log(filteredFruits);
  