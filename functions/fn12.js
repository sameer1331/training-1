//function to check if a list is sorted in ascending order :
function isSorted(a){
    for(let i=0;i<a.length-1;i++){
        if(a[i]>a[i+1]){
            return false;
        }
    }return true;
}const a=[21,14,16,13,8,5];
 check=isSorted(a);
 console.log(check);