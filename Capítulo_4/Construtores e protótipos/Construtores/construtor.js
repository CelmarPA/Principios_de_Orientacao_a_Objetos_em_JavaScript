/**
 *      Um construtor é simplesmente uma função usada com o operador new
 *      para criar um objeto. A vantagem dos construtores é que os
 *      objetos criados com o mesmo construtor têm as mesmas propriedades
 *      e os mesmos métodos. Se quiser criar vários objetos semelhantes,
 *      você poderá implementar seus próprios construtores e, portanto,
 *      seus próprios tipos de referência.
 *
 *      Como um construtor é somente uma função, ele deve ser definido da
 *      mesma maneira. A única diferença é que os nomes dos construtores
 *      devem começar com uma letra maiúscula para diferenciá-lo de
 *      outras funções. Por exemplo.
 */
function Person() {
    // intencionalmente vazia
}

// Após o construtor ter sido definido, você pode começar a criar instâncias:
var person1 = new Person();

var person2 = new Person();

// Se não houver parâmetros para passar para o construtor, você poderá até mesmo omitir os parênteses!

// O código a seguir mostra instanceof em ação com os objetos recém-criados:
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true

/**
 *      Você também pode verificar o tipo de uma instância usando a
 *      propriedade constructor. Toda instância de objeto é
 *      automaticamente criada com uma propriedade chamada constructor
 *      que contém uma referência à função construtora que a criou. Para
 *      objetos genéricos (aqueles criados por meio de uma notação
 *      literal de objeto ou com o construtor Object), a propriedade
 *      constructor é definida como Object, enquanto para objetos criados
 *      com um construtor personalizado, constructor apontará para esse
 *      construtor. Por exemplo, Person corresponde à propriedade
 *      constructor de person1 e de person2:
 */
console.log(person1.constructor === Person); // true
console.log(person2.constructor === Person); // true

/**
 *      O propósito de um construtor é fazer com que seja fácil criar
 *      mais objetos com as mesmas propriedades e os mesmos métodos.
 *      Exemplo:
 */
function Person1(name) {
    this.name = name;
    this.sayName = function () {
        console.log(this.name);
    };
}

// Agora você pode usar o construtor Person para criar objetos com uma propriedade name inicializada:
var person3 = new Person1("Nicholas");
var person4 = new Person1("Greg");

console.log(person3.name); // "Nicholas"
console.log(person4.name); // "Greg"

person3.sayName(); // exibe "Nicholas"
person4.sayName(); // exibe "Greg"

/**
 *      Os construtores permitem inicializar uma instância de um tipo de 
 *      maneira consistente, efetuando todas as configurações de 
 *      propriedades necessárias antes que o objeto possa ser usado. Por 
 *      exemplo, Object.defineProperty() pode ser usado em um construtor 
 *      para ajudar a inicializar a instância:
*/
function Person2(name) {
    Object.defineProperty(this, "name", {
        get: function() {
            return name;
        },
        set: function(newName) {
            name = newName;
        },
        enumerable: true,
        configurable: true
    });
    this.sayName = function() {
        console.log(this.name);
    };
}

// Considere o que acontece no código a seguir:
var person5 = Person2("Nicholas"); // nota: "new"está ausente

console.log(person5 instanceof Person2); // false
console.log(typeof person5); // "undefined"
console.log(name); // "Nicholas"
