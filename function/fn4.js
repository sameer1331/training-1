//function to check maximum value :
function max(a){
    let max=a[0];
    for(let i=1;i<a.length;i++){
        if(a[i]>max){
            max=a[i];
        }
    }return max;
}const a=[2,5,8,13,9,7];
      max=max(a);   
console.log(max);


