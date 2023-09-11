//  function to filter date within range :

var n=[
    {name:"sam",age:24,date:'1-6-2001'},
    {name:"john",age:22,date:'11-2-2002'},
    {name:"mike",age:20,date:'3-9-2003'},
    {name:'dom',age:21,date:'22-3-2002'}
]

const startDate = new Date('1-1-2001');
const endDate = new Date('31-12-2002');

const filteredData = n.filter(person => {
  const date = new Date(person.date);
  return date >= startDate && date <= endDate;
});

console.log(filteredData);