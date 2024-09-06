/**
 *      A herança de objetos em JavaScript também é a base da herança de 
 *      construtores. Essa propriedade prototype é automaticamente 
 *      definida para conter um novo objeto genérico que herda de Object.
 *      prototype e que tem uma única propriedade própria chamada 
 *      constructor. Na verdade, a engine do JavaScript faz o seguinte:
*/

// Você escreve isto:
function YourConstrutor () {
    // Inicialização
}

// A engine do JavaScript faz isto internamente
YourConstrutor.prototype = Object.create(Object.prototype, {
                            constructor: {
                                configurable: true,
                                enumerable: true,
                                value: YourConstrutor,
                                writable: true
                            }
                        });

/**
 *      Sem fazer nada adicional, esse código define a propriedade 
 *      prototype do construtor com um objeto que herda de Object.
 *      prototype, o que significa que qualquer instância de 
 *      YourConstrutor também herdará de Object.prototype. YourConstrutor 
 *      é um subtipo de Object, e Object é um supertipo de YourConstrutor.
 * 
 *      Como a propriedade prototype pode ser atualizada, a cadeia de 
 *      protótipos pode ser alterada ao ser sobrescrita. Considere o 
 *      exemplo a seguir:
*/
function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function () {
    return this.length * this.width;
};

Rectangle.prototype.toString = function () {
    return "[Rectangle " + this.length + "x" + this.width + "]";
};

// Herda de Rectangle
function Square(size) {
    this.length = size;
    this.width = size;
}

Square.prototype = new Rectangle();

Square.prototype.constructor = Square;

Square.prototype.toString = function () {
    return "[Square " + this.length + "x" + this.width + "]";
};

var rect = new Rectangle(5, 10);
var square = new Square(6);

console.log(rect.getArea()); // 50
console.log(square.getArea()); // 36

console.log(rect.toString()); // "[Rectangle 5x10]"
console.log(square.toString()); // "[Square 6x6]"

console.log(rect instanceof Rectangle); // true
console.log(rect instanceof Object) // true

console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true
console.log(square instanceof Object); // true


// Você pode simplificar esse exemplo usando Object.create() novamente:
// Herda de Rectangle
function Square2(size) {
    this.length = size;
    this.width = size;
}

Square2.prototype = Object.create(Rectangle.prototype, {
                        constructor: {
                            configurable: true,
                            enumerable: true,
                            value: Square2,
                            writable: true
                        }
                    });

Square2.prototype.toString = function () {
    return "[Square " + this.length + "x" + this.width + "]";
};
