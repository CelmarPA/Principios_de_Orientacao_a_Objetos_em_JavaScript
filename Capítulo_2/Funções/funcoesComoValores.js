/**
 *      Como o JavaScript tem funções de primeira classe, você pode 
 *      usá-las assim como faria com qualquer outro objeto. Você pode 
 *      atribuí-las a variáveis, adicioná-las a objetos, passá-las para 
 *      outras funções como argumentos e retorná-las a partir de outras 
 *      funções. Basicamente, uma função pode ser usada em qualquer local 
 *      em que outro valor de referência pode ser utilizado. Considere o 
 *      exemplo a seguir:
*/
function sayHi() {
    console.log("Hi!");
}

sayHi(); // Exibe "Hi!"

var sayHi2 = sayHi;

sayHi2(); // Exibe "Hi!"

/**
 *      Nesse código, há uma declaração de função para sayHi ❶. Uma 
 *      variável chamada sayHi2 é criada e recebe o valor de sayHi ❷. 
 *      Tanto sayHi quanto sayHi2 apontam para a mesma função, e isso 
 *      significa que qualquer uma delas pode ser executada gerando o 
 *      mesmo resultado
 
*/
var sayHi3 = new Function("console.log('Hi!');");

sayHi3(); // Exibe "Hi!"

var sayHi4 = sayHi3;

sayHi4(); // Exibe "Hi!"

/**
 *      O construtor Function deixa mais explícito o fato de que sayHi 
 *      possa ser atribuído como qualquer outro objeto. Quando você tem 
 *      em mente que funções são objetos, muitos comportamentos começam a 
 *      fazer sentido. 
 * 
 *      Por exemplo, você pode passar uma função para outra função como 
 *      argumento. O método sort() de arrays em JavaScript aceita uma 
 *      função de comparação como parâmetro opcional. A função de 
 *      comparação é chamada sempre que dois valores do array tiverem de 
 *      ser comparados. Se o primeiro valor for menor que o segundo, a 
 *      função de comparação deverá retornar um número negativo. Se o 
 *      primeiro valor for maior que o segundo, a função retornará um 
 *      número positivo. Se os dois valores forem iguais, a função 
 *      retornará zero. 
 * 
 *      Por padrão, sort() converte todos os itens de um array em uma 
 *      string e, em seguida, efetua a comparação. Isso significa que 
 *      você não poderá  ordenar um array de números de forma precisa sem 
 *      especificar uma    função de comparação. Por exemplo, é 
 *      necessário incluir uma função de   comparação para ordenar um 
 *      array numérico de modo preciso, como em:
*/
var numbers = [1, 5, 8, 4, 7, 10, 2, 6];

numbers.sort(function(first, second) {
    return first - second;
});

console.log(numbers); // "[1, 2, 4, 5, 6, 7, 8, 10]"

numbers.sort();

console.log(numbers); // "[1, 10, 2, 4, 5, 6, 7, 8]"
