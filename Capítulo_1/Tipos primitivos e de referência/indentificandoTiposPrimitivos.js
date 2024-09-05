// A melhor maneira de identificar tipos primitivos é por meio do operador typeof:
console.log(typeof "Nicholas"); // "string"

console.log(typeof 10); // "number"

console.log(typeof 5.1); // "number"

console.log(typeof true); // "boolean"

console.log(typeof undefined); // "undefined"

// Ao executar typeof null, o resultado é "object".
console.log(typeof null); // "object"

// A melhor maneira de determinar se um valor é null é compará-lo diretamente com null, desta maneira:
var value = null;
console.log(value === null); // true

/**
 *              COMPARANDO SEM CONVERSÃO
 * 
 *      Note que esse código usa o operador de igualdade triplo (===) em 
 *      vez de usar o operador de igualdade duplo. Isso ocorre porque o
 *      operador triplo faz a comparação sem converter a variável para
 *      outro tipo. Para entender o motivo pelo qual isso é importante, 
 *      veja o código a seguir:
 * 
 *      console.log("5" == 5); // true
 *      console.log("5" === 5); // false
 *      console.log(undefined == null); // true
 *      console.log(undefined === null); // false
 * 
 *      Quando a igualdade dupla é utilizada, a string "5" e o número 5
 *      são considerados iguais porque a igualdade dupla converte a 
 *      string em um número antes de fazer a comparação. O operador de
 *      igualdade tripla não considera esses valores iguais porque eles
 *      são de tipos diferentes. Da mesma forma, quando comparamos
 *      undefined e null, a igualdade dupla mostra que eles são 
 *      equivalentes, enquanto a igualdade tripla diz que não. Quando 
 *      estiver tentando identificar um null, use a igualdade tripla para
 *      que você possa identificar o tipo corretamente.
 */
