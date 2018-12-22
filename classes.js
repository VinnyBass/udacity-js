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

