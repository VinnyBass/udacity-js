// let = limita o seu uso ao escopo em que foi declarado
//Função construtora, primeira letra em maiusculo e uso do new
function SoftwareDeveloper(name){
	this.favoriteLanguage = 'JavaScript';
	this.name = name;
}

let developer = new SoftwareDeveloper('Vinicius');
console.log(developer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Vinicius' }

//Criando função construtora, nela this vai ter o valor do objeto instanciado x this = taylor
function Hero(name, role){
	this.name = name;
	this.role = role;

	this.introduce = function(){
		console.log('My name is ${this.name} and I am a ${this.role}.');
	}
}

//Instanciando o objeto Hero

const taylor = new Hero('Taylor','Mother');
const tite = new Hero('Tite','coach');

taylor.name;//Resulta em Taylor
taylor.introduce();//Resulta na frse com o name and the role

//JavaScript não é uma linguagem baseada em classes, usa funções para criar objetos e conecta objetos via herança de prototipos


//Criando classes ES5 com heranças de prototipos e funções construtoras que criam objetos
function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

// O metodo sera adicionado ao prototipo e herdado pelos objetos 
Plane.prototype.startEngines = function () {
  console.log('starting engines...');
  this.enginesActive = true;
};

const richardsPlane = new Plane(1);
richardsPlane.startEngines();

const jamesPlane = new Plane(4);
jamesPlane.startEngines();

//Criando uma classe no ES6, a classe é apenas uma função
class Plane {
	//O metodo construtor não está no prototype
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  //Está no prototipo
  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}

const myPlane = new Plane();


//Subclasses

class Tree {
  constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }

  changeSeason(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }
}

class Maple extends Tree {
  constructor(syrupQty = 15, size, leaves) {
    //EM uma função construtora de uma subclasse, super deve ser chamada antes do this
    super(size, leaves);
    this.syrupQty = syrupQty;
  }

  changeSeason(season) {
    super.changeSeason(season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }

  gatherSyrup() {
    this.syrupQty -= 3;
  }
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');

//Outro exemplo

class Veiculo {
	constructor(color = 'blue',wheels = 4,horn = 'beep beep'){
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn(){
		console.log(this.horn);
	}
}

class Bicycle extends Veiculo {
	constructor(color = 'red', wheels = 2, horn = 'duup duup'){
		super(color,wheels,horn);
	}
}

const myCar = new Veiculo();
myCar.honkHorn();//Ira sair beep beep
const myBike = new Bicycle();
myBike.honkHorn();//Ira sair duup duup