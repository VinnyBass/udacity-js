var i = 1;//i vem da palavra iterador
var display = "";
while(i <= 100){
	//O processo de acessar um item após o outro é chamado de iteração
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

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}

//COntinue pula o bloco do codigo mas não para o loop
for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}