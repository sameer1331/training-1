// Total price of the products in a list :

var a=[
    {name:'shirt',price:1250},
    {name:'pant',price:1500},
    {name:'shoes',price:800},
    {name:'watch',price:2000},
    {name:'sun glasses',price:1000},
    {name:'T-shirt',price:500}
]

m=a.reduce((a,b)=> a+b.price,0)

console.log(m)