// Uma função é o tipo de referência mais fácil de ser identificado porque, ao usar o operador typeof em uma função, ele deverá retornar "function":
function reflect(value) {
    return value;
}
console.log(typeof reflect); // "function"

/**
 *      Outros tipos de referência podem ser mais difíceis de identificar 
 *      porque, para todos os tipos de referência que não sejam funções, 
 *      o operador typeof retornará "object".
 *      O operador instanceof recebe um objeto e um construtor como 
 *      parâmetros. Quando o valor for uma instância do tipo especificado 
 *      pelo construtor, o operador instanceof retornará true. Caso 
 *      contrário, ele retornará false.
*/
var items = [];
var object = {};

function reflect2(value) {
    return value;
}

console.log(items instanceof Array); // true
console.log(object instanceof Object); // true
console.log(reflect2 instanceof Function); // true

/**
 *      O operador instanceof pode identificar tipos herdados. Isso 
 *      significa que todo objeto na verdade é uma instância de Object 
 *      porque todo tipo de referência herda de Object. Para demonstrar, 
 *      o próximo exemplo analisa as três referências anteriormente 
 *      criadas com instanceof:
*/

console.log(items instanceof Array); // true
console.log(items instanceof Object); // true
console.log(object instanceof Object); // true
console.log(object instanceof Array); // false
console.log(reflect instanceof Function); // true
console.log(reflect instanceof Object); // true