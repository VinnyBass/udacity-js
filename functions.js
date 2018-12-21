//Funções no js são de primeira classe, com isso podemos:
//Armazena-las em variaveis, e chamalas pelo nome da variavel
const myFunction = function howdy(n1, n2){
	return n1 * n2;
}

myFunction(4,8)

//Retornar uma função:
function alertThenReturn() {
  alert('Message 1!');

  return function () {
    alert('Message 2!');
  };
}
//FUncção de ordem superior
function higherOrderFunction(){
	return function(){
		return 8
	}
}

const teste = alertThenReturn();
const eigth = higherOrderFunction();
//Vai imprimir nada e Message 2!
higherOrderFunction()
teste()
//Para executar as duas basta usar, ou pegar o resultado da função retornada
teste()()
eigth()

//Funções Callback, são funções passadas como parametro
function callAndAdd(n, callbackFunction){
	return n + callbackFunction();
}

function returnsThree(){
	return 3;
}

//Vai retornar 5
callAndAdd(2,returnsThree);

//Foreach executa a função para cada elemento da matriz
array = [1, 5, 2, 4, 6, 3]
function logIfOdd(n){
	if( n % 2 !== 0){
		console.log(n)
	}
}

array.forEach(logIfOdd)
//Ou
array.forEach(function (n){
	if ( n % 2 !== 0){
		console.log(n);
	}
});

//O metodo .map() tem a mesma funcionalidade do foreach porem ele retorna uma matriz com o resultado de cada iteração
const name = ['Vinicius','Eder','Tiago','Barcelos']
const nameLengths = name.map(function(name){
						return name.length;
					});

//nameLengths vai conter uma matriz com o tamanho de cada nome
  const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(function(album){
	return album.name+" by "+album.artist+" sold " + album.sales+" copies" 
})

//O metodo filter tem a mesma funcionalidade de maps, porem ele retorna uma matriz apenas com os resultados que passaram no teste da função
const shortNames = name.filter(function(name){
	return name.length < 6;
});

//Uma função tem acesso a:
//Argumentos passados como parametro, variaveis locais (ciradas dentro do escopo da função), variaveis dentro do escopo da sua função pai, e variaveis globais
//O escopo global se refere ao objeto window quado rodamos em um navegador por exemplo
//Para acessar variaveis o js usa a cadeia de escopos indo do interno para o externo
//Closure/fechamento  = combinação entre uma função e o seu ambiente lexico(escopo da função(oque ela pode acessar)), todas tem fechamento
function outerFunction() {
  let num1 = 5;//Não pode ser acessada fora deste escopo

  return function(num2) {
  	//tem uma referencia do escopo da função pai(outerfunction)
    console.log(num1 + num2);
  };
}

let result = outerFunction();

result(10); // retorna 15


//Declaração de função, não exige que uma variavel seja atribuida a ela
function returnHello() {
  return 'Oi!';
}

//expressão de função, atribuidas a uma variavel
const otherFunction = function() {
  return 'Oi!';
};

//IIFE = Expressões de função invocadas imediatamente após serem criadas, são usadas para se criar escopos privados, o objetivo é invoca-la apenas uma vez
(function sayHi(){
    alert('Olá!');
  }
)(); //Colocando os parenteses na função ela vira uma expressão de função, e os () no final informam que ela deve ser chama imediatamente
//Passando parametros para uma IIFE
(function (name){
    alert('Oi, ' + name);
  }
)('Andrew');

//OUtro exemplo

const myFunction = (
  function () {
    const hi = 'Oi!';
    delete hi; //Só funciona em objetos, logo não surtira efeito aqui
    return function () {
      console.log(hi);
    }
  }
)();
