/**
 *      Todos os objetos herdam de Object.prototype por padrão, portanto 
 *      mudanças em Object.prototype afetam todos os objetos. Essa é uma
 *      situação muito perigosa. Observe o que pode acontecer se    
 *      modificar Object.prototype:
*/
Object.prototype.add = function (value) {
    return this + value;
};

var book = {
    title: "Princípios de orientação a objetos em JavaScript"
};

console.log(book.add(5)); // "[object Object]5"
console.log("title".add("end")); // "titleend"

// Em um web browser
// console.log(document.add(true)); // "[object HTMLDocument]true"
// console.log(window.add(5)); // "[object Window]5"

var empty = {}

// No exemplo anterior, Object.prototype.add() é uma propriedade enumerável, o que significa que ela irá aparecer em um loop for-in, como em:
for (var property in empty) {
    console.log(property);
}

/**
 *      Considerando a frequência com que a estrutura for-in é usada em 
 *      JavaScript, modificar Object.prototype com propriedades 
 *      enumeráveis tem o potencial de afetar muito código. Por essa 
 *      razão, Douglas Crockford recomenda sempre usar hasOwnProperty() 
 *      em loops for-in1, como em:
*/
var empty = {};
for (var property in empty) {
    if (empty.hasOwnProperty(property)) {
        console.log(property);
    }
}

/**
 *      Se, por um lado, essa abordagem é eficiente contra possíveis 
 *      propriedades indesejadas dos protótipos, por outro, ela também 
 *      limita o uso do loop for-in apenas às propriedades próprias, que 
 *      pode ou não ser o que você quer. Sua melhor aposta para ter o 
 *      máximo de flexibilidade é não modificar Object.prototype.
*/
