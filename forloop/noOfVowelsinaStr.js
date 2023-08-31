let Vowels='aAeEiIoOuU';
let str="umbrella";let cnt=0;
for(let i=0;i<str.length;i++){
if(Vowels.indexOf(str[i])!==-1)
    cnt+=1;
}console.log(cnt);