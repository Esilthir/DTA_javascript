// Fini

class Personne {
	nom: string;
	prenom: string;
	constructor(nom: string, prenom: string){
		this.nom = nom;
		this.prenom = prenom;
	}
	getPersonne() :string{
		return this.nom + this.prenom;
	}
};

let personne = new Personne('Schumacher ', 'Nicolas ');
console.log(personne.getPersonne());