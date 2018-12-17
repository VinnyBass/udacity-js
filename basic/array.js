//Arrays são um tipo especial de objetos
var personagens = ['Rick','Uncle','Morty','Beth','Summer'];

//Propriedades de um array	
//Quantidade de elementos

personagens.length

//Metodos
personagens.reverse() //Reverte a ordem

personagens.sort()//Ordena os elementos de um array
//Para que sort ordene sem converter para unicode:
personagens.sort(function(a,b){
	return a - b; //orderm crescente
})

personagens.pop()//Remove um elemento do fim do array
personagens.push()//Adiciona um elemento ao final do array
personagens.shift()// Remove o primeiro elemento
personagens.slice(ini,fim)//retorna uma copida do array do ini até o fim
personagens.join()//Transforma os elementos em uma só string


//Splice pode remover e adicionar elementos, o primeiro parametro: indice inicial onde serão feitas as alterações
//Segundo parametro: numero de elementos a serem removidos a partir do primeiro parametro
//Restante ds argumentos são os elementos a serem adicionados
personagens.splice(1,1,"Jerry")//Retorna Rick Jerry Morty Beth Summer


//Fazer uma operação para cada item no array

var donuts = ["jelly donut","chocolate donut","glazed donut"];
donuts.foreach(function(donut){
	donut += " holle";
	donut.toUpperCase();
	console.log(donut);
})

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

//ForEach Aceita 3 parametros, elemento, index e Arrays
test.forEach(function(n,i){
    if(n % 3 === 0){
        test[i] += 100;
        //console.log(n);
    }
});

console.log(test)

//Foreach não modifica os dados do array diretamente, para fazer isso e obter um novo array cm o resultado usamos o map
var newDonuts = donuts.map(function(donut){
	donut += "holle";
	donut = donut.toUpperCase();
	return donut;
})

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function(n){
    n += n * 0.15;
    return Number(n.toFixed(2));
});

console.log(totals);

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for (var r = 0; r <= numbers.length; r++){
    for (var c = 0; c <= numbers[r].length;c++){
        numbers[r][c] % 2 === 0 ? numbers[r][c] = "even" : numbers[r][c] = "odd";
    }
}

console.log(numbers);