n=3;
cnt=0;
for(i=2;i<=n/2;i++){
    if(n%i==0){
        cnt++;
        break;
    }
    }if(cnt==0)
        console.log("prime");
     else console.log("not a prime");   
