//function to check if a gn str is valid email address :
function isValidEmail(email){
    const indexOfAt=email.indexOf("@");
    const indexOfDot=email.lastIndexOf(".");
    if(indexOfAt<0||indexOfDot<0||indexOfAt>indexOfDot){
        return false;
    }return true;
}const email="mohideensameer786@gmail.com";
 const isValid=isValidEmail(email);
 console.log(isValid);
    