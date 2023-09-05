//function to check if a string contains the letter 'y' :
var a="agdauysdkj"
var n=a.split('')
var flag=0
n.forEach(e =>{
    if (e =='y')
         flag=1
    })
if(flag)
    console.log("yes")
else
    console.log("no")