//GCD :
function GCD(a,b){
    while(b!=0){
        a=b;
        b=a%b;
    }return a;
}var a=25,b=125;
console.log(GCD(a,b));