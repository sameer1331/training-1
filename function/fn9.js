//function to check if a num is prime or not :
function isPrime(n) {
    if(n<=1)
    return false;
    for(let i=2;i*i<=n;i++){
        if(n%i==0){
            return false;
        }
    }return true;
}const a= 53;
const check=isPrime(a);
 console.log(check);