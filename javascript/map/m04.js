//function to group objects by category :

var n=[
  {
      name:'tiger',
      type:'animal'
  },
  {
      name:'eagle',
      type:'birds'
  },
  {
      name:'dog',
      type:'animal'
  },
  {
      name:'snake',
      type:'reptile'
  },
  
  {
      name:'pigeon',
      type:'birds'
  }  
]

a=[]
b=[]
c=[]

n.forEach(e => {
  if(e.type == 'animal')
      a.push(e.name)
  else if(e.type == 'birds')
      b.push(e.name)
  else
      c.push(e.name)    
})

var r=[]

r.birds=b
r.animals=a
r.reptile=c

console.log(r)