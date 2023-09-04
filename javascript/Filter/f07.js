//function to filter email by name :
a=[{name:'sameer',email:'sam007@gmail.com'},{name:'kiruba',email:'kiruba003@gmail.com'},{name:'kavin',email:'kavin123@gmail.com'},{name:'mohan',email:'mohan233@gmail.com'}];
f=a.filter((e)=>e.email.includes('kavin'));
console.log(f);