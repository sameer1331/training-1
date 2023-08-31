let n=20,a=0,b=1;
for(let i=0;i<n;i++){
    let c=a+b;
    a=b;
    b=c;
    console.log(c);
}