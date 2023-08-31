let n=12345;
let sum=0;
while(n!=0){
    sum=sum+(n%10);
     n=Math.trunc(n/10);
}console.log(sum);