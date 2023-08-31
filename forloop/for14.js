let n=20;let k=0, m;
for(let i=2;i<n;i++){
    cnt=0;
}for(let j=2;j<i/2;j++){
    if(i%j==0){
        cnt++;
        break;
    }if(cnt==0)
    m[k]=i;
    k++;
}for(k=0;k<m.length;k++){
    for(j=k+1;j<m.length;m++){
        if(m[k]+m[j]==n)
        console.log(m[k],m[j]);
    }
}