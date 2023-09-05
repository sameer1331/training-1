// count the repitition :

var arr=['sameer','muthu','mohan','sameer','mohan','kiruba']

r=arr.reduce( (a,b)  => {
    a[b]= a[b] ? a[b]+1 : 1;

    return a
},{})

console.log(r)