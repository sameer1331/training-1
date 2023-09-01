//function to check if a given year is a leap year :
function isLeapYear(year){
    return (y%4==0 && y%100!=0)||(y%400==0);
}var y=2004;
 console.log(isLeapYear(y));