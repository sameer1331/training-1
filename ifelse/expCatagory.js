age=26;
workExp=3;
if((age<25)&&(workExp<1)){
    console.log("entry level");
}else if(((age>=25)&&(age<=40))&&((workExp>=1)&&(workExp<=5))){
    console.log("junior");
}else if((age>40)&&((workExp>=5)&&(workExp<=10))){
    console.log("senior");
}else console.log("expert");