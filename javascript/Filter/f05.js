//function to filter objects by hobby :
a=[{name:'sameer',hobbies:['reading books','listening music','playing games']},
   {name:'shanmugam',hobbies:['playing games','listening music','watching movies']},
   {name:'kiruba',hobbies:['playing games','listening music','chatting']}];

 f=a.filter((e)=>e.hobbies.includes('chatting'));
 console.log(f);  