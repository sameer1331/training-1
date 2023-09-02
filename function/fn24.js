//fn to find sum of all multiples of gn num :
function sumOfMultiples(num,limit){
    let sum=0;
    for(let i=num;i<limit;i+=num){
        sum+=i;
    }return sum;
}var num=3,limit=10;
 console.log(sumOfMultiples(num,limit));