//this tera o valor do novo objeto, no caso mySundae
const mySundae = new Sundae('Chocolate', ['Sprinkles', 'Hot Fudge']);

//This sera configurado conforme o parametro passado, no caso obj2
const result = obj1.printName.call(obj2);

//Formas de invocar uma função
function multiply(n1,n2){
	return n1 * n2;
}

multiply.call(window,10,5);//O primeiro parametro deve ser o que queremos definir como this
multiply.apply(window,[10,5])//Podemos usar o apply, a diferença é que passamos os parametros por array

const mockingbird = {
  title: 'O Sol é Para Todos',
  describe: function () {
    console.log(`${this.title} é um romance clássico`);
  }
};

const pride = {
  title: 'Orgulho e Preconceito'
};

mockingbird.describe.call(pride); // Ira retornar 'Orgulho e Preconceito é um romance clássico'
mockingbird.describe.apply(pride); // Retorna o mesmo resultado obtido com o metodo call()

const cat = {
	name: "Mickey";
}

function sayHello(message){
	return console.log(`${message}, ${this.name}`);//o this aqui está referenciando o objeto global window
}

sayHello.call(cat, "Seja bem vindo");//agora o this ira referenciar o objeto cat

function invokeTwice(cb){
	cb();
	cb();
}

const dog = {
	age: 5,
	growOneYear: function(){
		this.age += 1;
	}
}

dog.growOneYear();//Ira aumentar a idade para 6

invokeTwice(dog.growOneYear());//Não ira aumentar, pois como estamos passando apenas a função como parametro, o this se refere ao objeto global window e não ao objeto dog
//Se uma função construtora é chamada com o operador new, this é definida como o objeto recém-criado! Se um método é invocado em um objeto, this é definida como o próprio objeto. E se uma função é simplesmente invocada, this é definida como o objeto global: window.
//Para previnirmos esse problema podemos usar o bind(), a diferença etre ele e os metodos call e apply, é que bind retorna uma nova função

const myGrow = invokeTwice(dog.growOneYear.bind(dog));//Assim mesmo sendo chamado como uma função, bind cria uma nova função com o bind sendo o this que definimos no caso dog

const bear = {
	claws: true,
	diet: 'carnivore'
}

function PolarBear(){

}

PolarBear.prototype = bear;//PolarBear herdou as propriedades do object bear
const snowball = new PolarBear; //snowball tem acesso a claws e diet
snowball.color = 'white';
snowball.favoriteDrink = 'cola';


//Melhor forma para herdar de um objeto

const mammal = {
  vertebrate: true,
  earBones: 3
};

const rabbit = Object.create(mammal);//cria um novo __proto__ com referencia ao original, uma subclasse


//Todo objeto está ligado a um prototipo, podemos criar metodos neles, pois se tivermos 101 objetos instanciados logo 101 metodos foram criados, com o prototipo, apenas um sera criado
function Dalmatian (name) {
  this.name = name;
}

Dalmatian.prototype.bark = function() {
  console.log(`${this.name} barks!`);
};


const rodent = {
	favoriteFood: 'cheese',
	hasTail: false
};

function Mouse(){
	this.favoriteFood = 'cheese';
}

Mouse.prototype = rodent;
const ralph = new Mouse();
const result = rodent.isProtorypeOf(ralph)//Igual a true
const myPrototype = Object.getPrototypeOf(ralph);//{ teeth: 'incisors', hasTail: true }

function LongBoard(){
	this.material = "wood";
}

const board = new LongBoard();
console.log(board.constructor);//Retorna a função construtora original 	

//Com notação literal
const rodent = {
  teeth: 'incisors',
  hasTail: true
};

console.log(rodent.constructor);
// function Object() { [native code] }

