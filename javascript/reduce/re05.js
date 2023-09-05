// largest strng in a list :

var str=['sameer','kiruba','mohan','muthuvel','sathish']

m=str.reduce((acc,b) => acc= acc.length<b.length ? b:acc)

console.log(m)