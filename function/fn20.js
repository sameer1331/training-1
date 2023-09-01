//function to calculate sum of digits of an integer :
function sumOfDigits(n){
    let sum=0;
    while(n>0){
        sum+=n%10;
        n/=10;
    }return sum;
}var num=134562;
 console.log(sumOfDigits(num));