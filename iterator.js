//O protocolo iterator é utilizado para definir uma maneira padrão para que um objeto produza uma sequência de valores. Isso significa que você agora possui um processo para definir como um objeto irá iterar. Isso é feito pela implementação do método .next()
//A função next retorna um objeto que informa a key, o valor e done para sabermos se ja acaram as propriedades
const james = {
	name: 'James',
	weight: 70.0,
	height: 185,
	[Symbol.iterator](){
		const keys = Objetc.keys(this);
		let i = 0;
		return {
			next: () => {
				const key = keys[i++];
				const value = this[key];
				const done = i >= keys.length;
				return {key, value, done};
			}
		}
	} 
}

const iterator = james[Symbol.iterator]();
console.log(iterator.next().value); // 'James'
console.log(iterator.next().value); // `5'10`
console.log(iterator.next().value); // 185


//Set, é um objeto que armazena itens unicos
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games); // Ele ira considerar apenas um mario bros
games.add("Fifa");//Adiciona um elemento ao set
games.delete('Fifa')//Deleta m elemento do set
games.clear();//Removve todos os elementos do set
games.size();//Retorna a quantidade de itens de um set
games.has('Mario Kart');//Verifica se a propriedade existe no set
games.values();//Retorna todos os itens de um Set, retorna um setIterable

const gameIterator = games.values();
gameIterator.next();//Retorna Super mario bros
gameIterator.next();//Retorna Banjo-Kazooie

//Tambem podemos usar o for of, da no mesmo
for(const game of games){
	console.log(game);
}


//WeakSet, é um set que só aceita objetos, e não tem o metodo clear
//Podemos remover objetos dele apontando eles para null
//WeakSet não é um iterable, ou seja, não podemos iterar(passar um por um) sobre eles

const student1 = { name: 'James', age: 26, gender: 'male' };
const student2 = { name: 'Julia', age: 27, gender: 'female' };
const student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
student3 = null;//A agarbage collector ira remover este objeto
console.log(roster);