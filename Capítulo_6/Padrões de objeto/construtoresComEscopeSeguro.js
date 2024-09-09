/**
 *      Como todos os construtores são apenas funções, eles podem ser 
 *      chamados sem o uso do operador new e, sendo assim, podem afetar o 
 *      valor de this. Fazer isso pode levar a resultados inesperados, 
 *      pois this acaba referenciando o objeto global em modo não 
 *      restrito ou o construtor lançará um erro em modo restrito. Como 
 *      em:
*/
function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

var person1 = Person("Nicholas"); // Falta "new"

console.log(person1 instanceof Person); // false
console.log(typeof person1); // "undefined"
console.log(name); // "Nicholas"

/**
 *      Um construtor de escopo seguro pode ser chamado com ou sem o 
 *      operador new e retorna o mesmo tipo de objeto em qualquer caso. 
 *      Quando new é chamado com uma função, o objeto recém-criado 
 *      representado por this já é uma instância do tipo personalizado 
 *      representado pelo construtor. Portanto instanceof pode ser 
 *      utilizado para determinar se new foi usado na chamada da função:
*/
function Person1(name) {
    if (this instanceof Person) {
        // Chamado com "new"
    } else {
        // Chamado sem "new"
    }
}

// Uma versão de escopo seguro de Person tem o seguinte aspecto:
function Person2(name) {
    if (this instanceof Person2) {
        this.name = name;
    } else {
        return new Person2(name);
    }
}

/**
 *      Para esse construtor, a propriedade name é atribuída como sempre, 
 *      quando new é usado. Se new não for usado, o construtor será 
 *      chamado recursivamente por meio de new para criar uma instância 
 *      apropriada do objeto. Dessa maneira, ambas as opções a seguir são 
 *      equivalentes:
*/
var person2 = new Person2("Nicholas");
var person3 = Person2("Nicholas"); 

console.log(person2 instanceof Person2); // true
console.log(person3 instanceof Person2); // true
