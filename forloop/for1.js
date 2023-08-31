//sum of the series: 1+(1/2^2)+(1/3^3)+(1/4^4)+(1/n^n)
let n=5;let sum=0;
for(let i=1;i<=n;i++){
    let m=i**i;
    n=1/m;
    sum+=n;
}console.log(sum);