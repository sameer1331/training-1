//matrix multiplication : [[1,2],[3,4]][[5,6],[7,8]]
function matrixMul(a,b){
    const c=[];
    for(let i=0;i<a.length;i++){
        c[i]=[];
       for(let j=0;j<b[0].length;j++){
        c[i][j]=0;
       }
    }for(let i=0;i<a.length;i++){
        for(let j=0;j<b[0].length;j++){
            for(let k=0;k<b.length;k++){
                c[i][j]+=a[i][k]*b[k][j];
            }
        }
    }return c;
}const a=[[1,2],[3,4]];
 const b=[[5,6],[7,8]];
 console.log(matrixMul(a,b));