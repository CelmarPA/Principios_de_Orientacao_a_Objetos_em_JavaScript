/**
 *      A abordagem que o JavaScript tem para lidar com a herança 
 *      chama-se cadeia de protótipos ou herança prototípica.
 *      As instâncias dos objetos herdam as propriedades do protótipo. 
 *      Como o protótipo também é um objeto, ele tem seu próprio 
 *      protótipo e herda suas propriedades. Essa é a cadeia de 
 *      protótipos: um objeto herda de seu protótipo, enquanto esse 
 *      protótipo, por sua vez, herda de seu protótipo, e assim por 
 *      diante.
 * 
 *      Todos os objetos, incluindo aqueles que você mesmo define, 
 *      automaticamente herdam de Object, a menos que você especifique o 
 *      contrário. Mais especificamente, todos os objetos herdam de 
 *      Object.prototype. Qualquer objeto definido por meio de notação 
 *      literal tem seu [[Prototype]] definido com Object.prototype, o 
 *      que significa que ele herda as propriedades de Object.prototype, 
 *      como a variável book a seguir:
*/
var book = {
    title: "Princípios de orientação a objetos em JavaScript"
};

var prototype = Object.getPrototypeOf(book);

console.log(prototype === Object.prototype); // true

/**
 *      Nesse caso, book tem um protótipo igual a Object.prototype. 
 *      Nenhum código adicional é necessário para que isso aconteça, pois 
 *      esse é o comportamento-padrão quando novos objetos são criados. 
 *      Essa relação significa que book automaticamente recebe os métodos 
 *      de Object.prototype.
 */
