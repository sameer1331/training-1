// total sal of an emp :

var emp=[
    {name:'sameer',salary:15000},
    {name:'kiruba',salary:25000},
    {name:'mukesh',salary:10000},
    {name:'sasti',salary:12000}
]

sal=emp.reduce((a,b) => a+b.salary,0)

console.log(sal)