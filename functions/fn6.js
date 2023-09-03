//function to reverse a given list of numbers :
function ListReverse(a){
   const reversedList= []; 
   for(let i=a.length-1;i>=0;i--){
      reversedList.push(a[i]);
   }    return reversedList;
}const a=[1,5,8,6,3];
 const reversedList= ListReverse(a);
 console.log(reversedList);