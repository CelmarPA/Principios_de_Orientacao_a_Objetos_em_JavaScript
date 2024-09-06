/**
 *      Como a herança é implementada por meio de cadeias de protótipos 
 *      em JavaScript, não é preciso chamar o construtor do supertipo de 
 *      um objeto. Se quiser chamar o construtor do supertipo a partir do 
 *      construtor do subtipo, você deverá tirar vantagem do modo como as 
 *      funções em JavaScript funcionam.
 * 
 *      Os métodos call() e apply(), permitem que as funções sejam 
 *      chamadas com um valor this diferente. É exatamente dessa maneira 
 *      que o furto de construtor (constructor stealing) funciona. Basta 
 *      chamar o construtor do supertipo a partir do construtor do 
 *      subtipo usando call() ou apply() para passar o objeto 
 *      recém-criado. De fato, você estará roubando o construtor do 
 *      supertipo para o seu próprio objeto, como neste exemplo:
*/
function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function() {
    return this.length * this.width;
}

Rectangle.prototype.toString = function() {
    return "[Rectangle " + this.length + "x" + this.width + "]";
}

// Herda de Rectangle
function Square(size) {
    Rectangle.call(this, size, size);
    // optional: adiciona novas propriedades ou sobrescreve as
    // propriedades existentes aqui
}

Square.prototype = Object.create(Rectangle.prototype, {
                        constructor: {
                            configurable: true,
                            enumerable: true,
                            value: Square,
                            writable: true
                        }
                    });

Square.prototype.toString = function() {
    return "[Square " + this.length + "x" + this.width + "]";
};

var square = new Square(6);

console.log(square.length); // 6
console.log(square.width); // 6
console.log(square.getArea()); // 36
