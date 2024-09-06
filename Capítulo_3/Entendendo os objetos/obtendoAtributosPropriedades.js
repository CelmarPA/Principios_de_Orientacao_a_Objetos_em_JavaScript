/**
 *      Se houver necessidade de acessar os atributos das propriedades, 
 *      isso poderá ser feito em JavaScript usando o método Object.
 *      getOwnPropertyDescriptor(). Como o nome sugere, esse método 
 *      somente funciona com propriedades próprias. Ele aceita dois 
 *      argumentos: o objeto a ser manipulado e o nome da propriedade a 
 *      ser acessada. Se a propriedade existir, você deverá receber um 
 *      objeto descritor com quatro propriedades: configurable, 
 *      enumerable e os outros dois valores adequados ao tipo da 
 *      propriedade.
*/
var person1 = {
    name: "Nicholas"
};

var descriptor = Object.getOwnPropertyDescriptor(person1, "name");

console.log(descriptor.enumerable); // true
console.log(descriptor.configurable); // true
console.log(descriptor.writable); // true
console.log(descriptor.value); // "Nicholas"

/**
 *      Nesse caso, uma propriedade chamada name é definida como parte de 
 *      um objeto literal. A chamada a Object.getOwnPropertyDescriptor() 
 *      retorna um objeto com enumerable, configurable, writable e value, 
 *      apesar de esses atributos não terem sido explicitamente definidos 
 *      por meio de Object.defineProperty().
*/
