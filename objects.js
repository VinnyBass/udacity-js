const bicycle = {
	color: 'blue',
	type: 'mountain bike',
	wheels: {
		diameter: 18,
		width: 8
	},
	owenrs: ['vinny','bass']
};

//criando um objeto vazio, melhor usar a notação literal dq a função
const myObject = {};
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