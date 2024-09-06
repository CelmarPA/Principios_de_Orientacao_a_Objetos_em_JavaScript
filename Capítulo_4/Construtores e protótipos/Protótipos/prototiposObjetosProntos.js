/**
 *      Todos os objetos prontos têm construtores e, sendo assim, têm 
 *      protótipos que podem ser alterados. Por exemplo, adicionar um 
 *      novo método a ser usado em todos os arrays é simples: basta 
 *      modificar Array.prototype:
*/
Array.prototype.sum = function () {
    return this.reduce(function(previous, current) {
        return previous + current;
    });   
};

var numbers = [1, 2, 3, 4, 5, 6];

var result = numbers.sum();
console.log(result); // 21

/**
 *      Lembre-se de que strings, numbers e booleans têm tipos wrapper 
 *      primitivos prontos, que são usados para acessar valores 
 *      primitivos, como se fossem objetos. Se o protótipo de um tipo 
 *      wrapper primitivo for modificado, como no exemplo a seguir, você 
 *      poderá adicionar mais funcionalidades a esses valores primitivos:
*/
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.substring(1);
};

var message = "hello world";

console.log(message.capitalize()); // "Hello world"
