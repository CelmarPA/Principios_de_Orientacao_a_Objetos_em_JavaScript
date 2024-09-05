// Apesar de serem tipos primitivos, strings, numbers e Booleans contêm métodos. (Os tipos null e undefined não contêm métodos). As Strings, em particular, têm vários métodos. Por exemplo:
var name = "Nicholas";

var lowercaseName = name.toLowerCase(); // Converte para minúsculo

var firstLetter = name.charAt(0); // Obtém o primeiro caractere

var middleOfName = name.substring(2, 5); // Obtém os caracteres de 2 a 4

var count = 10;

var fixedCount = count.toFixed(2); // Converte para "10.00"

var hexCount = count.toString(16); // Converte para "a"

var flag = true;

var stringFlag = flag.toString(); // Converte para "true"

console.log(lowercaseName);
console.log(firstLetter);
console.log(middleOfName);
console.log(fixedCount);
console.log(hexCount);
console.log(stringFlag);
