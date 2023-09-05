//function to reverse each element in a given array :
a=[1234,5678,2345];
l=a.length-1
a.forEach((e,i) => console.log(a[l-i]))

//method-2 : function to reverse an array using forloop :
a=[1,2,3,4];
const reversedArray= [];
for(let i=a.length-1;i>=0;i--){
    reversedArray.push(a[i]);
}console.log(reversedArray);

//method-3 : using inbuilt method :
a=[3,4,5,6];
a.reverse();
console.log(a);
