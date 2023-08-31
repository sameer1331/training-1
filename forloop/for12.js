//sum of num divisible by 9 in range
let sum=0;
for(let i=100;i<200;i++){
    if(i%9==0){
        console.log(i);
        sum++;
    }
}console.log("sum of numbers divisible by 9 is: "+sum);