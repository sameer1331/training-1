//reverse of a num
let n=12345,s=0;
while(n>0){
    r=n%10;
    s=s*10+r;
    n=Math.trunc(n/10);
}console.log(s);