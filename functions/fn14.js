//function to find the smallest element in a lst :
function findSmallest(a){
    let smallest=a[0];
    for(let i=1;i<a.length;i++){
        if(a[i]<smallest)
          smallest=a[i];
    }return smallest;
}const a=[12,24,8,3,11];
find=findSmallest(a);
console.log(find);
