//Para criar um objeto proxy, usamos o construtor new Proxy() com dois parametros
//1 o objeto do qual ele sera proxy
//O handler, que contem uma lista de metodos para tratar o acesso aos dados do 1 parametro

const richard = {status: 'Looking for work'};
const agent = new Proxy(richard,{});
console.log(agent.status);//Retorna looking for work

//Para tornar o proxy util, devemos usar o handler
const vinicius = {status: 'Working'};
const handler = {
	get(target, propName){
		console.log(target);//Retorna o "alvo"/objeto vinicius
		console.log(propName);//Nome da propriedade sendo acessada
		return target[propName];
	}
}
const agent1 = new Proxy(vinicius,handler);
console.log(agent1.status);//Ira retornar vinicius(target), status(propName), Working

//Se quisermos fazer com que o objeto nem seja acessado
//Quando tentarem acessar uma propriedade de ratAgent a armadilha get entra em ação
const mickey = {status:'Looking for cheese'};
const handler2 = {
	get(target,propName){
		return "He is trying to found the golde cheese";
	}
}
const ratAgent = new Proxy(mickey, handler2);

//Armadilha set, é para quando tentarem modificar uma propriedade, tem 3 parametros
//1 - objeto alvo do proxy
//2 - propriedade que esta sendo alterada
//3 - o novo valor para proxy
const bass = {status: 'Looking for a jazz professor'};
const setHandler = {
	set(target, propName, value) {
		if(propName === 'payRate'){
			value = value * 0.85;
		}
		target[propName] = value;
	}
};
const agent = new Proxy(bass, setHandler);
agent.payRate = 1000;//Vai criar a propriedade payRate
agent.payRate;//Muda para o valor de 850

//Um objeto proxy fica entre um objeto real e o código que o invoca. O código invocador interage com o proxy em vez de interagir diretamente com o objeto