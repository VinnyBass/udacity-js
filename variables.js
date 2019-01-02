function getClothing(isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!';
  } else {
    var hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}

getClothing(false);//Não retorna nada devido ao hoisting, as variaveis sobem, são definidas porem não tem valor atribuido a elas

//Para evitar problemas usamos let ou const(precisa ter uma valor atribuido qundo declarada)
// Variáveis declaradas com let podem ter seu valor reatribuído, mas não podem ser redeclaradas no mesmo escopo.
// Variáveis declaradas com const devem ter um valor inicial atribuído, mas não podem ser redeclaradas no mesmo escopo e não podem ter seu valor reatribuído.

// use let quando você pretender reatribuir novos valores para uma variável.
// use const quando você não pretender reatribuir novos valores para uma variável.

//Uso do template literal que substitui o uso das aspas e a concatenação normal
const myName = 'Vinny Bass';
const greeting = `hello, my name is ${myName}`;
console.log(greeting);


