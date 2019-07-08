var minhaVar = 'minha variavel';

function minhaFunction(x, y) {
    return x + y;
}

//ecmaScript 2015
let num = 2;
const PI = 3.14;

//Pega todos os valores do array e multiplica por 2
let numeros = [1, 2, 3];
numeros.map(function(valor) {
    return valor * 2;
});

/*Arrow function
numeros.map(valor => {
    return valor * 2;
});
*/

//Como só temos uma linha no corpo podemos deixar assim, e tambem não é necessario o retun
numeros.map(valor => valor * 2); //ES 2015

class Matematica {
    soma(x, y){
        return x + y;
    }
}

//Tipagem

var n1: string = 'Eric Ambiel';

//para mais informações doque mudou no ES 6 visite es6-features.org
