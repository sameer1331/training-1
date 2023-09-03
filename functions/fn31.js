//fn to find the second largest element in a list:
function secondLargest(list){
    let largest=a[0];
    let secondLargest=a[0];
    for(let i=0;i<a.length;i++){
        if(a[i]>largest){
            secondLargest=largest;
            largest=a[i];
        }else if(a[i]>secondLargest){
            secondLargest=a[i];
        }
    }return secondLargest;
}var a=[5,12,8,4,23,11];
 console.log(secondLargest(a));

