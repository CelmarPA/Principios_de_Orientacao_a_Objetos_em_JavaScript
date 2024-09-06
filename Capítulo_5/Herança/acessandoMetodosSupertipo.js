/**
 *      É bastante comum sobrescrever os métodos do supertipo com novas 
 *      funcionalidades no subtipo; mas e se você quiser continuar 
 *      acessando o método do supertipo?
 *      É possível acessar diretamente o método do protótipo referente ao 
 *      supertipo e usar tanto call() quanto apply() para executar o 
 *      método no objeto referente ao subtipo. Por exemplo:
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
}

Square.prototype = Object.create(Rectangle.prototype, {
                        constructor: {
                            configurable:true,
                            enumerable: true,
                            value: Square,
                            writable: true
                        }
                    });

// Chama o método do supertipo
Square.prototype.toString = function() {
    var text = Rectangle.prototype.toString.call(this);
    return text.Rectangle("Rectangle", "Square");
};
