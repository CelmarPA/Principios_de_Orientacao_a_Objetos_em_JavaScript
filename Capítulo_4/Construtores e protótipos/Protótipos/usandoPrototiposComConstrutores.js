/**
 *      A natureza compartilhada dos protótipos faz com que eles sejam
 *      ideais para definir métodos somente uma vez para todos os objetos
 *      de um dado tipo. Como os métodos tendem a fazer o mesmo para
 *      todas as instâncias, não há razão para que cada instância deva
 *      ter seu próprio conjunto de métodos.
 *
 *      É muito mais eficiente colocar os métodos no protótipo e usar
 *      this para acessar a instância atual. Por exemplo:
 */
function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");

console.log(person1.name); // "Nicholas"
console.log(person2.name); // "Greg"

person1.sayName(); // exibe "Nicholas"
person2.sayName(); // exibe"Greg"

// O exemplo a seguir mostra o que pode acontecer se você não tomar cuidado com o local para onde seus valores de referência apontam:
function Person1(name) {
    this.name = name;
}

Person1.prototype.sayName = function () {
    console.log(this.name);
};

Person1.prototype.favorites = [];

var person3 = new Person1("Nicholas");
var person4 = new Person1("Greg");

person3.favorites.push("Pizza");
person4.favorites.push("Quinoa");

console.log(person3.favorites); // "Pizza, Quinoa"
console.log(person4.favorites); // "Pizza, Quinoa"

/**
 *      A propriedade favorites ❶ é definida no protótipo, o que 
 *      significa que person1.favorites e person2.favorites apontam para 
 *      o mesmo array. Qualquer valor adicionado à propriedade favorites 
 *      de qualquer pessoa será um elemento do array que está no 
 *      protótipo. Esse pode não ser o comportamento que você deseja, 
 *      portanto é importante ter cuidado com o que for definido no 
 *      protótipo.
 * 
 *      Embora você possa adicionar propriedades ao protótipo, uma a uma, 
 *      muitos desenvolvedores usam um padrão mais sucinto que envolve 
 *      substituir o protótipo por um objeto literal:
*/
function Person2(name) {
    this.name = name;
}

Person2.prototype = {
    sayName: function () {
        console.log(this.name);
    },
    toString: function () {
        return "[Person " + this.name + "]";
    }
};

/**
 *      Esse código define dois métodos no protótipo: sayName() e toString
 *      (). Esse padrão se tornou bem popular porque elimina a 
 *      necessidade de digitar Person.prototype diversas vezes. Porém há 
 *      um efeito colateral do qual você deve estar ciente:
*/
var person5 = new Person2("Nicholas");

console.log(person5 instanceof Person2); // true
console.log(person5.constructor === Person2); // false
console.log(person5.constructor === Object); // true

/**
 *      Usar a notação de objeto literal para sobrescrever o protótipo 
 *      alterou a propriedade constructor, de modo que agora ela aponta 
 *      para Object em vez de apontar para Person. Isso aconteceu porque 
 *      a propriedade constructor está no protótipo, e não na instância 
 *      do objeto. Quando uma função é criada, sua propriedade prototype 
 *      é criada com uma propriedade constructor igual à função. Esse 
 *      padrão sobrescreve completamente o objeto referente ao protótipo, 
 *      o que significa que constructor será proveniente do novo objeto 
 *      (genérico) criado, atribuído a Person.prototype. Para evitar 
 *      isso, restaure a propriedade constructor para um valor adequado 
 *      ao sobrescrever o protótipo:
*/
function Person3(name) {
    this.name = name;
}

Person3.prototype = {
    constructor: Person3,
    sayName: function () {
        console.log(this.name);
    },
    toString: function () {
        return "[Person " + this.name + "]";
    }
};

var person6 = new Person3("Nicholas");
var person7 = new Person3("Greg");

console.log(person6 instanceof Person3); // true
console.log(person6.constructor === Person3); // true
console.log(person6.constructor === Object); // false

console.log(person7 instanceof Person3); // true
console.log(person7.constructor === Person3); // true
console.log(person7.constructor === Object); // false
