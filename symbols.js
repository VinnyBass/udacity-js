//Como temos dois objetos bananas, o ultimo ira sobescrever o primeiro, restando apenas um objeto banana
const bowl = {
	apple: {color: 'red', weigth: 138.076},
	'banana': { color: 'yellow', weight: 183.151 },
  	'orange': { color: 'orange', weight: 170.097 },
  	'banana': { color: 'yellow', weight: 176.845 }
}

//Podemos resolver isso usando symbol

const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};

const sym1 = Symbol('banana');
const sym2 = Symbol('banana');

console.log(sym1 === sym2);//Ira retornar false