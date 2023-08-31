month=2;
year=2010;
if((month==2)&&((year%4==0)||((year%100==0)&&(year%400==0))))
      console.log("No of days is 29");
    else if(month==2)
      console.log("No of days is 28");
    else if(month==1||month==3||month==5||month==7||month==8||month==10||month==12)
      console.log("No of days is 31");
    else console.log("No of days is 30");