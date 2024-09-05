/**
 *      Propriedades são pares de nomes/valores armazenados em um objeto. 
 *      A notação de ponto é a forma mais comum de acessar propriedades 
 *      em JavaScript (e em muitas linguagens orientadas a objetos), mas 
 *      você também pode acessar propriedades em objetos JavaScript 
 *      usando a notação de colchetes com uma string. Por exemplo, você 
 *      pode escrever este código, que usa a notação de ponto:
*/
var array = [];
array.push(12345);

// Com a notação de colchetes, o nome do método passa a ser incluído em uma string dentro de colchetes, como neste exemplo:
var array2 = [];
array["push"](12345);

/**
 *      Essa sintaxe é muito útil quando você precisa decidir 
 *      dinamicamente qual propriedade deverá ser acessada. Por exemplo, 
 *      no caso a seguir, a notação de colchetes permite usar uma 
 *      variável em vez de usar uma string literal para especificar a 
 *      propriedade a ser acessada:
*/
var array3 = [];
var method = "push";
array[method](12345);