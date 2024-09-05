/**
 *      Para criar um objeto com a sintaxe de objeto literal, você pode 
 *      definir as propriedades de um novo objeto entre chaves. As 
 *      propriedades são compostas de um identificador ou de uma string, 
 *      dois pontos e um valor, com várias propriedades separadas por 
 *      vírgula. Por exemplo:
*/
var book = {
    name: "Princípios de orientação a objetos em JavaScript",
    year: 2014,
};

/**
 *      Você também pode usar strings literais para nomes de propriedade, 
 *      o que é muito útil se você quiser definir o nome de uma 
 *      propriedade usando espaços ou outros caracteres especiais:
*/
var book1 = {
    "name": "Princípios de orientação a objetos em JavaScript",
    "year": 2014,
}

// Esse exemplo é equivalente ao anterior, apesar das diferenças sintáticas. Ambos os exemplos também são logicamente equivalentes a este:
var book2 = new Object;
book2.name = "Princípios de orientação a objetos em JavaScript";
book2.year = 2014;

/**
 *      Você pode definir um literal de array de forma semelhante, 
 *      inserindo qualquer quantidade de valores separados por vírgula 
 *      dentro de colchetes. Por exemplo:
*/
var colors = [ "red", "blue", "green" ];
console.log(colors[0]); // "red"

// Esse código é equivalente a:
var colors2 = new Array("red", "blue", "green");
console.log(colors2[0]); // "red"