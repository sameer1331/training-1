//function to find the avg of gn array using reduce :

var arr=[12,34,9,8,24,10]

avg=function(a,b){
    return a+b
}

r=arr.reduce(avg)

console.log(r/arr.length)