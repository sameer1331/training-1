s=110;
d=79;
if((s<120)&&(d<80)){
    console.log("normmal");
}else if(((s<=120)&&(s>=129))&&(d<80)){
    console.log("elevated");
}else if(((s<=130)&&(s>=139))||((d<=80)&&(d>=89))){
    console.log("stage1 hypertension");
}else if((s>=140)||(d>=90))
console.log("stage2 hypertension");
