//factorial using recursion :
function fact(n){
    if(n==0){
        return 1;
    }else{
        return n*fact(n-1);
    }
}var num=5;
 console.log(fact(num));