/**
 *      O tipo Object é somente um entre uma grande variedade de tipos de 
 *      referência que o JavaScript oferece. Os outros tipos próprios são 
 *      mais especializados no que diz respeito ao uso pretendido e podem
 *      ser instanciados a qualquer momento. Os tipos próprios são:
 * 
 *      • Array: uma lista ordenada de valores indexados numericamente
 *      • Date: uma data e uma hora
 *      • Error: um erro de execução (há vários subtipos mais específicos 
 *        de erros)
 *      • Function: uma função  
 *      • Object: um objeto genérico
 *      • RegExp: uma expressão regular
*/

// Você pode instanciar cada tipo próprio usando new, como mostrado aqui:

var items = new Array();

var now = new Date();

var error = new Error("Something bad happened.");

var func = new Function("console.log('Hi');");

var object = new Object();

var re = new RegExp("\\d+");