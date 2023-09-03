//function to find the avg of a list of nums :
function findAvg(a){
    let sum=0;
    for(i=0;i<a.length;i++){
        sum+=a[i];
    }return sum/a.length;
}const a=[1,5,8,6,3,2];
console.log(findAvg(a));
