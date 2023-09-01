//fibonacci series :
function fibonacci(n){
    let a=0,b=1;
    for(let i=0;i<=n;i++){
        c=a+b;
        a=b;
        b=c;
        console.log(c);
    }
}
var n=10;
fibonacci(n);
