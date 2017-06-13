console.log("-----DO WHILE-----");
// DO WHILE loop
/*
var lcv = 0;
do {
	lcv = lcv + 1 // read from right to left, and it would go 0+1 then do again and 1+1 then 2+1....
	// some code goes here
} while(true || false --> example: lcv < 5)
//get lcv, the do checks the equation of the ++ then it checks the while part (<5)
*/
var lcv = 0;
do{
	lcv = lcv +1;
	console.log(lcv);
} while(lcv < 6);
//counts up to 6 (1-6)

// create a do while loop that counts to 20 by 2s
var lcv1 = 0;
do{
	lcv1 = lcv1 + 2;
	console.log("Counting to 20 by 2s: "+lcv1);
} while (lcv1 <20);

// count from 10 to 0 by 1s
var lcv2 = 11;
do{
	lcv2 = lcv2 - 1;  // or lcv2-- or lcv2 -= 1
	console.log("Counting to 0 by 1s from 10:",lcv2);
} while(lcv2 > 0);


console.log("-----WHILE-----");
// WHILE loop
/* 
var lcv = 0
while(true||false){
	increment || decrement;
}
*/
// counting to 50 by 5s
var counting = 0;
while(counting < 50){
	counting += 5;
	console.log("We are rising in the world,",counting,"chickens at a time.");
	//if put console first, it prints out te 0/the initial number but no 50
}
// countdown from 10 to 0 but 0, print blast off
var countdown = 11;
while(countdown > 0){
	countdown--;
	if(countdown > 0){console.log(countdown)};
	if(countdown == 0){console.log("BLAST OFF!!!")}
}
var countdown = 11;
while(countdown > 0){
	countdown--;
	if(countdown == 0){
		console.log("BLAST OFF!!!");
	} else {
		console.log(countdown);
	};
}

console.log("-----FOR-----");
// FOR loop
/* 
for(lcv = 0; true||false expression; increment||decrement){
	//cofde here
}
*/
for(apples = 0; apples<=10; apples++){  //apples<10 gives 0-9
	console.log(apples);
}
for(apples = 0; apples<=10; apples++){
	console.log(test);  //will first print undefined /c test has no meaning yet
	console.log(apples);
	var test = "test";
}