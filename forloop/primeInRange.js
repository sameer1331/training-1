let n=10;
for(let i=1;i<=n;i++){
    let cnt=0;
    for(j=2;j<i;j++){
        if(i%j==0){
            cnt++;
            break;
        }
    }
if(i>1 && cnt==0)
     console.log(i);}