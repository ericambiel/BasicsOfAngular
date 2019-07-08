var minhaVar = 'minha variavel';
function minhaFunction(x, y) {
    return x + y;
}
//ecmaScript 2015
var num = 2;
var PI = 3.14;
//Pega todos os valores do array e multiplica por 2
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
/*Arrow function
numeros.map(valor => {
    return valor * 2;
});
*/
//Como só temos uma linha no corpo podemos deixar assim, e tambem não é necessario o retun
numeros.map(function (valor) { return valor * 2; }); //ES 2015
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
//Tipagem
var n1 = 'Eric Ambiel';
//para mais informações doque mudou no ES 6 visite es6-features.org
