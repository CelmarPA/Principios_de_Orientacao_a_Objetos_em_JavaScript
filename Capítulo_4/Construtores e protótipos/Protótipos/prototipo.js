/**
 *      Você pode pensar em um protótipo como uma receita para um objeto. 
 *      Quase todas as funções (com exceção de algumas funções prontas) 
 *      têm uma propriedade prototype, que é usada durante a criação de 
 *      novas instâncias. Esse protótipo é compartilhado entre todas as 
 *      instâncias do objeto, e essas instâncias podem acessar as 
 *      propriedades do protótipo. Por exemplo, o método hasOwnProperty() 
 *      é definido no protótipo Object genérico, mas pode ser acessado a 
 *      partir de qualquer objeto como se fosse uma propriedade própria, 
 *      como mostrado neste exemplo:
*/
var book = {
    title: "Princípios de orientação a objetos em JavaScript"
};

console.log("title" in book); // true
console.log(book.hasOwnProperty("title")); // true
console.log("hasOwnProperty" in book); // true
console.log(book.hasOwnProperty("hasOwnProperty")); // false
console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); // true

/**
 *      IDENTIFICANDO UMA PROPRIEDADE DE PROTÓTIPO
 * 
 *      É possível determinar se uma propriedade está em um protótipo ao 
 *      usar uma função como esta:
*/
function hasPrototypeProperty(object, name) {
    return name in object && !object.hasOwnProperty(name);
}

console.log(hasPrototypeProperty(book, "title")); // false
console.log(hasPrototypeProperty(book, "hasOwnProperty")); // true

// Se a propriedade estiver em um objeto, mas hasOwnProperty() retornar false, então ela estará no protótipo.

/**
 *      A propriedade [[Prototype]]
 * 
 *      Uma instância mantém o controle de seu protótipo por meio de uma 
 *      propriedade interna chamada [[Prototype]]. Essa propriedade é um 
 *      ponteiro para o objeto referente ao protótipo que a instância 
 *      está usando. Quando um novo objeto é criado usando new, a 
 *      propriedade prototype do construtor é atribuída à propriedade 
 *      [[Prototype]] desse novo objeto.
 * 
 *      O valor da propriedade [[Prototype]] pode ser lido por meio do 
 *      método Object.getPrototypeOf() de um objeto. Por exemplo, o 
 *      código a seguir verifica o [[Prototype]] de um objeto genérico e 
 *      vazio:
*/
var object = {};

var prototype = Object.getPrototypeOf(object);

console.log(prototype === Object.prototype); // true

// Também é possível verificar se um objeto é protótipo de outro usando o método isPrototypeOf(), que está incluído em todos os objetos:
var object = {};

console.log(Object.prototype.isPrototypeOf(object)); // true

// Considere o código a seguir, em que um objeto é inicialmente criado sem nenhuma propriedade própria:
var object = {};

console.log(object.toString()); // "[object Object]"

object.toString = function() {
    return "[object Custom]";
};

console.log(object.toString()); // "[object Custom]"

//Apaga a propriedade própria
delete object.toString;

console.log(object.toString()); // "[object Object]"

// Sem efeito, pois delete só funciona em propriedades próprias
delete object.toString;

console.log(object.toString()); // "[object Object]"
