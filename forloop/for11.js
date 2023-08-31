//sum of series :- (1+11+111+1111+...+n)
let n=10,sum=0,m;
for(let i=1;i<=n;i++){
    m=(sum*10)+1;
    sum+=m;
}console.log(sum);