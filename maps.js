//Maps são como os sets, porem sets são valores unicos, e maps tem um conjunto key-value, quem podem faazer combina~oes entre tipos primitivos e objetos por exemplo
//Podemos dizer que sets são como arrays e maps como objetos
//Criando um map

const employees = new Map();

//Para adicionar valores usamos .set() que recebe dois parametros, chave e valor(objeto);
employees.set('vinicius@udacity.com',{
	firstName: 'vinicius',
	lastName: 'bass',
	age: 12
});

//Para remover é so usar delete(chave)
employees.delete('vinicius@udacity.com');
employees.clear();//Remove todos


const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

//Para saber se tem um valor em um map
console.log(members.has('Xavier'));
console.log(members.has('Marcus'))

console.log(members.get('Liam'));//Retorna 20.16

//Quando formos iterar com o for...of, ele ira retornar um array onde o primeiro elemento é a chave e o segundo é o valor
//POdemos corrigir isso usando array destructing

for(const member of members){
	const [key, value] = member;
	console.log(key, value);
}

//POdemos iterar com foreach tambem
members.forEach((value,key) => console.log(value,key));

//WeakMpas, tambem só aceitam objetos
const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);