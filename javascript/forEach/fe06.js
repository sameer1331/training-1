//function to check if a string is palindrome using forEach loop :

var a='hannah'

var cnt=0

n=a.split('')

var l=a.length-1

n.forEach(function (e,i){
        if(e == n[l-i])
            cnt+=1
})

if(cnt == l+1)
   console.log("it is palindrom")
else
   console.log("not a palindrom")