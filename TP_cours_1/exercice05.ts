// Fini

interface Surface2D{
	aire: () => number;
	perimetre: () => number;
}

class Rectangle implements Surface2D {
	largeur: number;
	longueur: number;
	constructor(largeur :number, longueur :number) {
		this.largeur = largeur;
		this.longueur = longueur;
	}
	aire = () => this.largeur * this.longueur;
	perimetre = () => (this.largeur + this.longueur) * 2;
}

class Carre extends Rectangle {
	constructor(cote: number){
		super(cote, cote);
	}
}

let rectangle = new Rectangle(5,4);
let carre = new Carre(5,5);

console.log('Rectangle aire : ' + rectangle.aire());
console.log('Rectangle perimetre : ' + rectangle.perimetre());

console.log('Carre aire : ' + carre.aire());
console.log('Carre perimetre : ' + carre.perimetre());