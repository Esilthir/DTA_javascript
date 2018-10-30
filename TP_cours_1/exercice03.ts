// Fini

let obj = {
	nom: 'Schumacher ',
	prenom: 'Nicolas ',
	function() :string{
		return this.nom + this.prenom;
	}
};

console.log(obj.function());