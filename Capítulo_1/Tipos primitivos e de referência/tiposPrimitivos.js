/**
 *  Há cinco tipos primitivos em JavaScript:
 * 
 *      -Boolean: true ou false
 *      -Number: Qualquer valor numérico inteiro ou de ponto flutuante
 *      -String: Um caractere ou uma sequência de caracteres delimitados
 *      tanto por aspas simples como por aspas duplas
 *      -Null: Um tipo primitivo que tem apenas um valor: null
 *      -Undefined: Um tipo primitivo que tem apenas um valor: undefined
 *      (undefined é o valor atribuído a uma variável não inicializada)
 */

// Strings
var name = "Nicholas";
var selection = "a";

// Number
var count = 25;
var cost = 1.51;

// Noolean
var found = true;

// Null
var object = null;

// Undefined
var flag = undefined;
var ref; // undefined é atribuído automaticamente

// Quando um valor primitivo é atribuído a uma variável, o valor é copiado para essa variável. Por exemplo:
var color1 = "red";
var color2 =  color1;

console.log(color1); // "red"
console.log(color2); // "red"

// Como cada variável que contém um valor primitivo usa seu próprio espaço de armazenamento, as alterações em uma variável não afetam a outra. Por exemplo:
color1 = "blue";

console.log(color1); // "blue"
console.log(color2); // "red"