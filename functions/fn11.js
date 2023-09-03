//function to count the no of vowels in a string :
function vowelsCount(string){
    let cnt=0;
    for(let i=0;i<string.length;i++){
    if(string.charAt(i)=='a'||string.charAt(i)=='e'||string.charAt(i)=='i'||string.charAt(i)=='o'||string.charAt(i)=='u')
          cnt++;    
}return cnt;
}var string="umbrella";
 strCnt=vowelsCount(string);
 console.log(strCnt);