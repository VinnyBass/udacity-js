var i = 1;
var display = "";
while(i <= 100){
	display = (i % 3 == 0 && i % 5 == 0) ? "FizzBuzz" : i % 3 == 0 ? "Fizz" : i % 5 == 0 ? "Buzz" : i;
	i += 1;
	console.log(display)
} 

var t = 60;
while(t >= 0){
	switch(t){
		case 50:
			console.log("Orbiter transfers from ground to internal power");
			break;
		case 31:
			console.log("Ground launch sequencer is go for auto sequence start");
			break;
		case 16:
			console.log("Activate launch pad sound suppression system");
			break;
		case 10:
			console.log("Activate main engine hydrogen burnoff system");
			break;
		case 6:
			console.log("Main engine start");
			break;
		case 0:
			console.log("Solid rocket booster ignition and liftoff!")
			break;
		default:
			console.log("T-"+t);
	}
	t -= 1;
}

for (var x = 0; x <= 25; x++){
    for(var j = 0; j < 100; j++){
        console.log(x+"-"+j);
    }
}