//fn to find the common elements btwn two lists :
function findCommon(a,b){
    const common=[];
    for (const element of a) {
        if(b.includes(element)){
            common.push(element);
        }
        
    }return common;
}    
var a=[2,3,5,1,6];
var b=[1,4,7,2,5]; 
 console.log(findCommon(a,b));