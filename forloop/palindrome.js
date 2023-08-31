let n=131;
let rev=0;
for(let i=n;i>0;i=Math.trunc(i/10)){
   let rem=i%10;
   rev=(rev*10)+rem;}
if(rev==n)
    console.log("palindrome");
 else console.log("not a palindrome");   


