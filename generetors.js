//Generator functions são funções "pausaveis", com um asterisco entre a palavra function e o seu nome
function* getEmployee(){
	console.log('This is the init of the function');

	const employees = ['Vinicius','Eder','Maradei','Barcelos'];

	for(const employee of employees){
		console.log(employee);
		yield
	}

	console.log('This is the end of the function');
}

getEmployee();//não gera nenhum resultado pois ele retorna um iterator, que é utilizado para executar o codigo dentro da função

const generatorIterator = getEmployee();
generatorIterator.next();//Ira chamar o codigo da função até a palavra yield ou seja frase inicial e vinicius
generatorIterator.next();//retorna eder

//quando usamos .next() podemos passar um parametro que subistuira a palavra yield dentro da função

function* getEmployee(){
	const names = ['Mickey','SponjeBob','Patrick'];
	const facts = [];

	for(const name of names){
		facts.push(yield name);
	}

	return facts
}

const generatorIterator = getEmployee();
generatorIterator.next('Is a mouse');
generatorIterator.next('Is a sponje');
generatorIterator.next('Is a lazy star');


function* getEmployee() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    const facts = [];

    for (const name of names) {
        // yield *out* each name AND store the returned data into the facts array
        facts.push(yield name); 
    }

    return facts;
}

const generatorIterator = getEmployee();

// get the first name out of the generator
let name = generatorIterator.next().value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value; 

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value; 
