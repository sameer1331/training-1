// function to print all even nums for each element in an array :
a=[10,20,30];
   a.forEach((e)=>{
     arr=[]
     for(let i=2;i<=e;i+=2){
         arr.push(i);
     }
     console.log(arr);
 });
