//function to get the unique strings from an array using map :

n=['sam','dom','eden','harry','sam','mike','dom']

var a=[]

n.forEach(e => {
    if(!a.includes(e))
        a.push(e)
})

console.log(a)