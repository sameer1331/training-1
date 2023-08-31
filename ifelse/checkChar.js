char='$';
if(((char>='a')&&(char<='z'))||((char>='A')&&(char<='Z')))
console.log("alphabet");
else if((char>='0')&&(char<='9'))
console.log("digit");
else console.log("special character");