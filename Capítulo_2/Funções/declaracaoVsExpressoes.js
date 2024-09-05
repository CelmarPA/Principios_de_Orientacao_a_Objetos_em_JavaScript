/**
 *      Há duas formas literais para as funções. A primeira é a 
 *      declaração de função, que começa com a palavra-chave function e 
 *      inclui o nome da função logo em seguida. O conteúdo da função é 
 *      definido entre chaves, como mostrado nesta declaração:
*/
function add(num1, num2) {
    return num1 + num2;
}

/**
 *      A segunda forma é a expressão de função, que não exige um nome 
 *      após a palavra-chave function. Essas funções são consideradas 
 *      anônimas porque o objeto função propriamente dito não tem um 
 *      nome. Em vez disso, as expressões de funções normalmente são 
 *      referenciadas por meio de uma variável ou de uma propriedade, 
 *      como nesta expressão:
*/
var add = function(num1,  num2) {
    return num1 + num2;
};

/**
 *      Apesar de essas duas formas serem muito parecidas, elas diferem 
 *      fundamentalmente em relação a um aspecto. As declarações de 
 *      função são “içadas” (hoisted) para o topo do contexto (seja na 
 *      função em que a declaração é feita ou no escopo global) quando o 
 *      código é executado. Isso significa que você pode definir uma 
 *      função depois de ela ter sido utilizada no código, sem que um 
 *      erro seja gerado. Por exemplo:
*/
var result = add2(5, 5);
function add2(num1, num2) {
    return num1+ num2;
}
console.log(result);

/**
 *      O hoisting de funções ocorre somente em declarações de funções  
 *      porque o nome da função é previamente conhecido. Expressões de 
 *      função, por outro lado, não podem sofrer hoisting porque as 
 *      funções podem ser referenciadas somente por meio de uma variável. 
 *      Desse modo, este código  irá causar um erro:
*/
// ERRO!!!
var result2 = add3(5, 5);

var add3 = function(num1, num2) {
    return num1 + num2;
}
