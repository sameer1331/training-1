//sum of series: (1*1)+(2*2)+(3*3)+...+(n*n)
let n=5;let sum=0;
for(let i=1;i<=n;i++){
    n=i*i;
    sum+=n;
}console.log(sum);