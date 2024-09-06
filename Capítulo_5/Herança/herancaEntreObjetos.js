/**
 *      O tipo mais simples de herança é a herança entre objetos. Tudo o 
 *      que você deve fazer é especificar que objeto deve ser o 
 *      [[Prototype]] do novo objeto. Objetos literais têm seu 
 *      [[Prototype]] definido como Object.prototype implicitamente, mas 
 *      [[Prototype]] também pode ser explicitamente especificado no 
 *      método Object.create().
 * 
 *      O método Object.create() aceita dois argumentos. O primeiro 
 *      argumento é o objeto que corresponderá ao [[Prototype]] do novo 
 *      objeto. O segundo argumento opcional é um objeto contendo 
 *      descritores de propriedade no mesmo formato usado por Object.
 *      defineProperties()
*/
var book = {
    title: "Princípios de orientação a objetos em JavaScript"
};

// É o mesmo que:
var book = Object.create(Object.prototype, {
    title: {
        configurable: true,
        enumerable: true,
        value: "Princípios de orientação a objetos em JavaScript",
        writable: true
    }
});

/**
 *      O objeto book resultante de cada declaração se comporta 
 *      exatamente da mesma maneira. Mas é provável que você jamais vá 
 *      escrever código que herde de Object.prototype diretamente, pois 
 *      isso já é padrão. Herdar de outros objetos é muito mais 
 *      interessante:
*/
var person1 = {
    name: "Nicholas",
    sayName: function () {
        console.log(this.name);
    }
};

var person2 = Object.create(person1, {
    name: {
        configurable: true,
        enumerable: true,
        value: "Greg",
        writable: true
    }
});

person1.sayName(); // exibe "Nicholas"
person2.sayName(); // exibe "Greg"

console.log(person1.hasOwnProperty("sayName")); // true
console.log(person1.isPrototypeOf(person2)); // true
console.log(person2.hasOwnProperty("sayName")); // false

// Você também pode criar objetos com um [[Prototype]] igual a null por meio de Object.create(), como mostrado a seguir:
var nakedObject = Object.create(null);

console.log("toString" in nakedObject); // false
console.log("valueOf" in nakedObject); // false