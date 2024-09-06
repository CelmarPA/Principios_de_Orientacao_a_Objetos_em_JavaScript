/**
 *      Os objetos, assim como as propriedades, têm atributos internos 
 *      que definem seu comportamento. Um desses atributos é 
 *      [[Extensible]] – um valor booleano que indica se o objeto pode 
 *      ser modificado. Todos os objetos que você criar serão extensíveis 
 *      por padrão, o que significa que novas propriedades podem ser 
 *      adicionadas ao objeto a qualquer momento. Ao definiR 
 *      [[Extensible]] com false, você pode evitar que novas propriedades 
 *      sejam adicionadas a um objeto.
*/

/**
 *      Evitando extensões:
 *      
 *      Uma maneira de criar objetos não extensíveis é com o método 
 *      Object.preventExtensions(). Esse método aceita apenas um 
 *      argumento, que é o objeto que você deseja tornar não extensível. 
 *      Assim que esse método for usado em um objeto, você jamais poderá 
 *      adicionar novas propriedades a ele novamente. O valor de 
 *      [[Extensible]] pode ser verificado com o método Object.
 *      isExtensible().
*/
var person1 = {
    name: "Nicholas"
};

console.log(Object.isExtensible(person1)); // true

Object.preventExtensions(person1);

console.log(Object.isExtensible(person1)); // false

person1.sayName = function() {
    console.log(this.name);
};

console.log("sayName" in person1); // false

/**
 *      Selando objetos
 * 
 *      A segunda maneira de criar um objeto não extensível é selar o 
 *      objeto. Um objeto selado é não extensível, e todas as suas 
 *      propriedades não são configuráveis. Isso significa que você não 
 *      pode adicionar, remover nem mudar o tipo (de dados para acesso ou 
 *      vice-versa) das propriedades. Se um objeto estiver selado, você 
 *      poderá somente ler e atualizar as suas propriedades.
 * 
 *      O método Object.seal() pode ser usado em um objeto para selá-lo. 
 *      Quando isso acontecer, o atributo [[Extensible]] será definido 
 *      como false e todas as propriedades terão seu atributo 
 *      [[Configurable]] definido como false. Você pode verificar se um 
 *      objeto está selado usando Object.isSealed()
*/
var person2 = {
    name: "Nicholas"
};

console.log(Object.isExtensible(person2)); // true
console.log(Object.isSealed(person2)); // false

Object.seal(person2);

console.log(Object.isExtensible(person2)); // false
console.log(Object.isSealed(person2)); // true

person2.sayName = function() {
    console.log(this.name);
};

console.log("sayName" in person2); // false

person2.name = "Greg";
console.log(person2.name); // "Greg"

delete person2.name;

console.log("name" in person2); // true
console.log(person2.name); // "Greg"

var descriptor = Object.getOwnPropertyDescriptor(person2, "name");

console.log(descriptor.configurable); // false

/**
 *      Congelando objetos
 * 
 *      A última maneira de criar objetos não extensíveis é congelá-los. 
 *      Se um objeto estiver congelado, não será possível adicionar nem 
 *      remover propriedades, mudar seus tipos nem atualizar qualquer 
 *      propriedade de dados. Objetos congelados não podem ser 
 *      “descongelados”, portanto eles permanecem no estado em que 
 *      estavam quando foram congelados. Um objeto pode ser congelado por 
 *      meio de Object.freeze(), e podemos determinar se um objeto está 
 *      congelado usando Object.isFrozen(). Por exemplo:
*/
var person3 = {
    name: "Nicholas"
};

console.log(Object.isExtensible(person3)); // true
console.log(Object.isSealed(person3)); // false
console.log(Object.isFrozen(person3)); // false

Object.freeze(person3); 

console.log(Object.isExtensible(person3)); // false
console.log(Object.isSealed(person3)); // true
console.log(Object.isFrozen(person3)); // true

person3.sayName = function() {
    console.log(this.name);
};

console.log("sayName" in person3); // false

person3.name = "Greg";

console.log(person3.name); // "Nicholas"

delete person3.name;

console.log("name" in person3); // true
console.log(person3.name); // "Nicholas"

var descriptor = Object.getOwnPropertyDescriptor(person3, "name");

console.log(descriptor.configurable); // false
console.log(descriptor.writable); // false
