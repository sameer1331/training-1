//fn to calculate avg of all even nums :
let a=[1,2,3,4,5,6];
let sum=0,cnt=0;
a.forEach(element => {
    if(element%2==0){
        sum+=element;
        cnt++;
    }
});avg=sum/cnt;
console.log(avg);