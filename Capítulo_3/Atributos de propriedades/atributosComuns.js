/**
 *      Há dois atributos internos que são compartilhados entre as 
 *      propriedades de dados e as propriedades de acesso. Um deles é o 
 *      [[Enumerable]], que determina se você pode iterar pela 
 *      propriedade. O outro é [[Configurable]], que determina se uma 
 *      propriedade pode ser alterada. Uma propriedade configurável pode 
 *      ser removida usando delete e pode ter seus atributos alterados a 
 *      qualquer momento.
 * 
 *      Se quiser mudar os atributos das propriedades, você poderá usar o 
 *      método Object.defineProperty(). Esse método aceita três 
 *      argumentos: o objeto que tem a propriedade, o nome da propriedade 
 *      e um objeto descritor da propriedade que contém os atributos a 
 *      serem definidos. O descritor tem propriedades com o mesmo nome 
 *      que os atributos internos, mas sem os colchetes duplos. Portanto 
 *      você pode usar enumerable para definir [[Enumerable]] e 
 *      configurable para definir [[Configurable]]. Por exemplo:
*/
var person1 = {
    name: "Nicholas"
};

Object.defineProperty(person1, "name", {
    enumerable: false
});

console.log("name" in person1); // true

console.log(person1.propertyIsEnumerable("name")); // false

var properties = Object.keys(person1);

console.log(properties.length); // 0

Object.defineProperty(person1, "name", {
    configurable: false
});

// tenta apagar a propriedade
delete person1.name;

console.log("name" in person1); // true

console.log(person1.name); // "Nicholas"

Object.defineProperty(person1, "name", { // Erro!
    configurable: true
});
