// "use strict";
//change
//branch
document.addEventListener('DOMContentLoaded', function() {
  // test();
   // cardsSum();
   mp3();
}, false);





//which is more? $100 a day for 20 days or 0.2 on first day, then double every day for 20 days
function test(){

"use strict";
		var dailyWage = 0.02;
		var totalDays = 20;
		var sum = 0;

	 for(var i = 0; i < totalDays; i++){

	 	sum = sum + dailyWage;
	 	dailyWage = dailyWage * 2;
	 	
	 		console.log("sum "+sum);
	 		console.log("dailywage "+dailyWage);


	 }

	 

	
}


//assuming that in a deck of cards a=1, j=11, q = 12 and king = 13, whast is the sum of all cards? use an array
function  cardsSum(){

	var cards = ["a", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"];
	var sum = 0;

	for(var i = 0; i < cards.length; i++){

		console.log("i = " + i);

		// if(cards[i] === "a"){
			
		// 	sum = sum + 1;
		// 	continue;

		// }

		// if(cards[i] === "j"){
			
		// 	sum = sum + 11;
		// 	continue;

		// }

		// if(cards[i] === "q"){
			
		// 	sum = sum + 12;
		// 	continue;

		// }

		// if(cards[i] === "k"){
			
		// 	sum = sum + 13;
		// 	continue;

		// }

		switch(cards[i]){

			case "a":
				sum = sum + 1;
				continue;

			case "j":
				sum = sum + 11;
				continue;

			case "q":
				sum = sum + 12;
				continue;

			case "k":
				sum = sum + 13;
				continue;			
		}

		sum = sum + parseInt(cards[i]);
		console.log("sum = " + sum);
	}


	console.log("sum = " + sum);


}

//if a mp3 is 3.5 megs, how many songs could you fit on a 100 mb hdd. Dont use divison, must us a while loop
function mp3(){

	var mp3 = 3.5;
	var hdd = 100;
	var count = 0;
	
	while( mp3 < hdd){
		hdd = hdd - mp3;
		count++;
		console.log("count = " + count);
		// sum = sum + mp3;


		
	}
}	