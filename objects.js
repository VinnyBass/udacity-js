const bicycle = {
	color: 'blue',
	type: 'mountain bike',
	wheels: {
		diameter: 18,
		width: 8
	},

	owenrs: ['vinny','bass']
};

//criando um objeto vazio, melhor usar a notação literal dq a função, um objeto é apenas um conjunto de pares de chave/valor
const myObject = {};
//Object() é a função construtora cuja palavra chave é new
const newObject = new Object();

const cat = {
  age: 2,
  name: 'Bailey',
  meow: function () {
    console.log('Meow!');
  },
  greet: function (name) {
    console.log(`Hello ${name}`);
  }
};

cat['age'] += 1;
cat.name = 'Bambi';
cat.owner = 'Vinicius'
cat.sleep = function() {
	console.log('ZZZ')
}
delete cat.owner
//Ao tentar acessar uma propriedade que não existe retorna undefined

function mudaPraOito(n){
	n = 8
}

let n = 7;
//Isso ira retornar 8 pois é um tipo de dado primitivo
mudaPraOito(n);

//Porem objetos são mutaveis, logo se passarmos como parametro já que passamos a referencia eles podem ser alterados

let originalObject = {
	color: 'red'
};

function setToBlue(object){
	object.color = 'blue'
}

//Vai mudar a cor do originalObject para blue
setToBlue(originalObject)

const developer = {
	name: 'Vinicius',
}

developer.sayHello = function(){
	console.log('Hello World')
}

developer.sayHello()

//this. permite acessar as proproedades e metodos apenas do objeto, referencia apenas o objeto
const dog = {
	name: 'Bass',
	age: 7,
	whatIsThis: function(){
		console.log(this)
	},
	woof: function(){
		console.log(this.name + 'says "Au-Au"')
	},
	ageOneYear: function(){
		this.age += 1
		console.log("Current Age: ${this.age}")
	}
}

function whoIs(){
	this.tricksh = true
}

//Quando a função é chamada como metodo, this representa tudo que esta á esquerda do ponto
dog.woof()

//Quando é apenas uma funcção sem objeto, this representa o objeto window ( Objeto que contem inumeras informações e metodos sobre a pagina em questão)
const sayWoof = dog.woof;

//Retornar as chaves ou valores  de um objeto
Object.keys(dog)
Object.values(dog)

const country = {
	bigger: "Brasil",
	smaller: "Argentina",
	danger: {
		zl: true
	}
}

//loop com um objeto

const result = []

for(const name in country){
	result.push(name)
}

//Usando destructuring para extrair valores de um objeto
const gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
};

const {type, karat} = gemstone;
const {color} = gemstone;//Precisa ser o mesmo nome da propriedade

console.log(type, color, karat);

//Ao inves de repetirmos as palavras ao declararmos um objeto desta forma
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat,
  calculateWorth() {

  }//não precisamos de fato usar a palavra function se ela for anonima
};

//Podemos mudar para

const gemstone = {type,color,carat}//Tera o mesmo resultado