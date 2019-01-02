//Promisse, permite que voce inicie algum trabalho de forma assincrona
//Quando criamos uma promisse precisamos entregar como parametro o codigo/função que sera executada de forma assincrona
//Esse código cria uma promise que iniciará alguns segundos após a realização da requisição e, então, executará os passos necessários da função createSundae
//Passamos como parametros da funçaõ que sera executada, funções para sabermos se a tarefa teve sucesso ou não
const mySundae = new Promise(function(resolve,reject){
	window.setTimeout(function createSunday(flavor = 'chocolate'){
		const sundae = {cone: false;};
		// request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        if(!sundae.cone){
        	reject("Sorry we have no more sundaes");
        }
		resolve(sundae);//recebe o objeto que queremos retornar
	}, Math.random * 2000);
})

//Uma promisse retorna um objeto imediatamente
//Esse objeto tem o metodo .then() que recebe duas funções como parametro, uma para ser executada caso tenha dado certo, e outra caso a req tenha falhado

mySundae.then((sundae) => console.log(`I gonna eat my delicius ${sundae}`),
	(msg) => console.log(msg)); //Os parametros sundae e msg, são qq são passados para resolve e reject