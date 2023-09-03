//compound Interest :
function CI(p,r,t){
    amt=p*(1+r)**t;
    return amt;
}var p=5000,r=2,t=2;
 console.log(CI(p,r,t));