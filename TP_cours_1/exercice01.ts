// Fini

let tab = [10, 6, 3, 20, 19, 16, 8, 6, 4, 13, 17, 0, 20];

function min(tab: number[]): number {
	let min = tab[0];
	for(let i of tab){
		if (min > i) {
			min = i;
		}
	}
	return min;
}

function max(tab: number[]): number {
	let max = tab[0];
	for(let i of tab){
		if (max < i) {
			max = i;
		}
	}
	return max;
}

function moyenne(tab: number[]): number {
	let moyenne = 0;
	for(let i of tab){
		moyenne += i;
	}
	moyenne = moyenne/tab.length;
	return moyenne;
}

function entre_min_et_max(tab: number[]): number[] {
	let mint = min(tab);
	let maxt = max(tab);
	for(let i = 0; i < tab.length; i++){
		if(tab[i] == mint || tab[i] == maxt){
			let indice = Number(i);
			tab.splice(indice, 1);
			i--;
		}
	}
	return tab;
}
/*console.log('max = ' + max(tab));
console.log('min = ' + min(tab));
console.log('moyenne = ' + moyenne(tab));*/
console.log('entre min et max = ' + entre_min_et_max(tab));