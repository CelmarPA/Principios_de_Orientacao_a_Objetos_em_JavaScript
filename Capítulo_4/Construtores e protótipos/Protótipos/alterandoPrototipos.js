/**
 *      Como todas as instâncias de um tipo particular referenciam um 
 *      protótipo compartilhado, você pode estender todos esses objetos 
 *      em conjunto a qualquer momento. Lembre-se de que a propriedade 
 *      [[Prototype]] contém somente um ponteiro para o protótipo, e 
 *      qualquer alteração no protótipo estará imediatamente disponível a 
 *      qualquer instância que o referenciar. Isso significa que você 
 *      pode literalmente adicionar novos membros a um protótipo a 
 *      qualquer momento, e essas mudanças serão refletidas nas 
 *      instâncias atuais:
*/
function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    },
    toString: function () {
        return "[Person " + this.name + "]";
    }
};

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");

console.log("sayHi" in person1); // false
console.log("sayHi" in person2); // false

// Adiciona um novo método
Person.prototype.sayHi = function () {
    console.log("Hi");
}

person1.sayHi(); // exibe "Hi"
person2.sayHi(); // exi2e "Hi"

/**
 *      A capacidade de modificar o protótipo a qualquer momento tem 
 *      repercussões interessantes para objetos selados e congelados. 
 *      Quando Object.seal() e Object.freeze() forem utilizados em um 
 *      objeto, você estará agindo somente na instância do objeto e em 
 *      suas propriedades próprias. Não é possível adicionar novas 
 *      propriedades próprias nem mudar as que já existem em objetos 
 *      congelados, mas, certamente, você poderá continuar adicionando 
 *      propriedades ao protótipo e poderá estender esses objetos, como 
 *      mostrado a seguir:
*/
var person3 = new Person("Nicholas");
var person4 = new Person("Greg");

Object.freeze(person3);

person3.sayHi(); // exibe "Hi"
person4.sayHi(); // exibe "Hi"
