// Fini

var myUnionVar: string | number | boolean;
console.log('myUnionVar before setting a value = ' + myUnionVar);
myUnionVar = 5;
console.log('typeof myUnionVar = ' + typeof myUnionVar);


let union: number | Array<number>;
union = [1,5,6];

if (typeof union === 'object') {
    console.log('union est un objet');
}
if (typeof union === 'number') {
    console.log('union est un number');
}

let type: string = typeof union;
console.log(type);

switch(typeof union) {
    case 'number' :{
        console.log('on sait deja que c\'est un nombre');
        break;
    }
    case 'object' :{
        console.log('oui bah c\'est un tableau donc un objet');
        break;
    }
    default: {
        console.log('ce n\'est ni un nombre ni un objet');
    }
    
}