//function to return factorial :
function fact(num){
    var fact=1;
    for(i=num;i>1;i--){
        fact*=i;   
    }
    return fact;
}console.log(fact(5));