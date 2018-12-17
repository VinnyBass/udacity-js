//Dois tipos de escopo, global e function scope
//Devemos usar variaveis globais só em ultimo caso
//Global : definido fora do escopo(corpo da função), pode ser acessado em qualquer parte do programa
//Function: identificador definido dentro da função, pode ser acessado dentro da função 

var bookTitle = "Le Petit Prince";
console.log(bookTitle) //Ira imprimir o titulo em frances

function displayBookEnglish(){
	bookTitle = "The Little Prince";
	console.log(bookTitle) // Ira imprimir em Ingles e ira alterar a variavel
}

function displayBookPortuguese(){
	var bookTitle = "O pequeno principe";
	console.log(bookTitle) // Ira imprimir pt, e não ira alterar a variavel original pois foi definido em um escopo de função
}

displayBookEnglish();
console.log(); //Ira imprimir em ingles

//Hoisting nos permite chamar funções e variaveis antes de serem declaradas, porem no caso dsa variaveis, elas são declaradas, mas não recebem valor

function buildTriangle(n){
	var ast = "";
	for(var i = 0; i <= n;i++){
		ast += "* ";
		console.log(ast);
	}
}

//Expressão de Função, é uma função que é armazenada em uma variavel, o hoisting não funciona com ela, ou seja devem ser chamadas após serem definidas

var catSays = function(max){
	var catMessage = "";
	for (var i = 0; i < max; i++){
		catMessage += "meaow ";
	}
	return catMessage;
}

catSays;

//Funções callback, aquelas que são passadas como parametro

function helloCat(callbackFunc){
	return "Hello " + callbackFunc(3);
}

helloCat(catSays);

//Funções Inline são recomendadas para callbacks de funções ue provavelmente são serão reutilizadas em outro lugar 

// var favoriteMovie = function displayFavorite(movieName) {
//   console.log("My favorite movie is " + movieName);
// };

// function movies(messageFunction, name){
// 	messageFunction(name);
// }

// movies(favoriteMovie, "Finding Nemo");

function movies(messageFunction, name){
	messageFunction(name);
}

movies(function displayFavorite(name){
	console.log("My favourite movie is " + name);
}, "Finding Nemo")

//My favorite movie is Finding Nemo

function emotions(myFelling, myFunction){
	console.log("I am "+ myFelling + myFunction(3));
}

emotions("happy",function(n){
	var risos = "";
	for(var i = 0;i < n;i++){
		risos += "ha";
	}
	return risos += "!";	
})