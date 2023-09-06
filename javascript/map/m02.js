//function to map each object capitalized :

var a=[{name:'sameer'},{name:'suriya'},{name:'bharathi'},{name:'mohan'}]

n= a.map((e)=> {
    emp={}
    x="";
    x+=e.name.charAt(0).toUpperCase();
    for(i=1;i<e.name.length;i++){
        x+=e.name[i];
    }
    emp.name=x;
    return emp;
});

console.log(n)