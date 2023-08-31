//sum of series :- (9+99+999+9999+...+n)terms
let n=5,sum=0,m;
for(let i=1;i<=n;i++){
    m=(sum*10)+9;
    sum+=m;
}console.log(sum);
