ht=168*0.01;
wt=60;
BMI=(wt/(ht*ht));
console.log(BMI);
if(BMI<18.5){
    console.log("underweight");
}else if((BMI>=18.5)&&(BMI<=24.9)){
    console.log("normal weight");
}else if((BMI>=25)&&(BMI<=29.9)){
    console.log("over weight");
}else console.log("obese");