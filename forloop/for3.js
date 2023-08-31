//sum of series: 1+(1+2)+(1+2+3)+...+(1+2+3+4+...+n)
let n=5;let sum=0;
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        sum+=j;
    }
}console.log(sum);