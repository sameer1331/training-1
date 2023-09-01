//function to check if a string is palindrome or not :
function ispalindrome(string){
    let reversedString="";
    for(let i=string.length-1;i>=0;i--){
        reversedString+=string[i];
    }return string === reversedString;
}const string="racecar";
 const isPalindrome=ispalindrome(string);
 console.log(isPalindrome);
