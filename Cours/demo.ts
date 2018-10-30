let e: number = 1;
let r: number = 1.2;

console.log('mon entier ' + e);
console.log('mon reel ' + r);

let b: boolean = true;
let str: string = 'string';
let strNb: string = '123 est un chiffre';
console.log('result: '+ parseInt(strNb));
console.log(strNb.split(' '));
console.log(strNb.slice(3,7));
console.log(strNb.slice(-3));

let tab: number[] = [];
let tab1 : Array<number> = [];
let tabinit = [1,2,3,4];
tab.push(0);
for (let index = 0; index < tabinit.length; index++) {
    const element = tabinit[index];
    console.log('for classique ' + element);
}
for(let i in tabinit) {    // indice
    console.log('let in '+i);
}
for(let i of tabinit) {    // element
    console.log('let of '+i);
}
tabinit.forEach((e,i) => console.log('for each ' + i + ' : ' + e));
tabinit.forEach(e => console.log('for each ' + e));

let carre = tabinit.map(e => Math.pow(e,2));
console.log(carre);
let somme = tabinit.reduce((a,e) => a += e);
console.log(somme);
// filter : lambda boolean, sort : lambda : 0, -1 ou 1
enum monEnum {A, B, C};
let eu : monEnum = monEnum.A;

function carreFt(x: number): number {
    return Math.pow(x, 2);
}
let carreLambda = (x: number) => Math.pow(x,2);
let puissance = (x: number, p?: number) =>
    p === undefined ? Math.pow(x,2) : Math.pow(x, p);
let sommeLambda = (x: number, ...autres: number[]) =>
    autres.reduce((s,e)=> s+=e) + x;
sommeLambda(1,2,3,9,8);

// objet à la volée
let totoObjet = {
    nom: 'toto',
    prenom: 'titi',
    affiche: function() {
        console.log('je mappelle ' + this.prenom);
    }
}

class Personne{
    nom: string;
    prenom: string;
    constructor(nom: string, prenom: string) {
        this.nom = nom;
        this.prenom = prenom;
    }
    affiche(): void {
        console.log(`${this.nom} ${this.prenom}`)
    }
}
let mickey = new Personne('mickey', 'mouse');
totoObjet.affiche();
mickey.affiche();
totoObjet = mickey;

interface Figure {
    aire : () => number;
}
// import {Rectangle, Carre} from './demo.ts'
export class Rectangle implements Figure{
    largeur: number;
    longueur: number;
    constructor(largeur: number, longueur: number) {
        this.largeur = largeur;
        this.longueur = longueur;
    }
    aire(): number {
        return this.largeur * this.longueur;
    }
}
export class Carre extends Rectangle{
    constructor(cote: number) {
        super(cote,cote);
    }
}

let [d, g , ...autres] = [0, 9];
console.log('d = ' + d + ' et g = ' + g + ' et autres = ' + autres);