//function to calculate the power of num raised to an exponent :
function power(num,exp){
    let result=1;
    for(let i=0;i<exp;i++){
        result*=num;
    }return result;
}var num=5,exp=4;
ans=power(num,exp);
console.log(ans);