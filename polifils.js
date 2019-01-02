//São maneiras de implementar funções que não são suportadas pelo navegador
if(!String.prototype.startWiths){
	String.prototype.startWiths = function (searchString, position){
		position = position || 0;
		return this.substr(position, searchString.length) === searchString;
	};
}

'Udacity'.startWiths('Udac');//Retorna true
'Udacity'.startWiths('Udac', 2);//Retorna false