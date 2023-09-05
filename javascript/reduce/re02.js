//cost of prices :

s = [
    { quantity: 2, price: 8  },
    { quantity: 3, price: 12 },
    { quantity: 4, price: 16 }
  ];
  
r=s.reduce((a,b) => a+(b.quantity*b.price),0)

console.log(r)