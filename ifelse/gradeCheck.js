phy=85;che=80;bio=70;math=90;
total=(phy+che+bio+math);
perc=(total/400)*100;
if(perc>=90)
    console.log("Grade A");
else if(perc>=80)
    console.log("Grade B");
else if(perc>=70)
    console.log("Grade C");
else if(perc>=60)
    console.log("Grade D");
else if(perc>=50)
   console.log("Grade E");
else if(perc<40)
   console.log("Grade F");  