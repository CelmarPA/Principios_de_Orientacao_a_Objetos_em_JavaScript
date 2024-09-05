/**
 *      Outro aspecto único das funções JavaScript é que você pode passar 
 *      qualquer número de parâmetros para qualquer função sem causar 
 *      erros. Isso ocorre porque os parâmetros de funções são 
 *      armazenados em uma estrutura semelhante a arrays chamada 
 *      arguments. Assim como um array comum em JavaScript, arguments 
 *      pode ser estendido de modo a receber qualquer quantidade de 
 *      valores. Os valores são referenciados por meio de índices 
 *      numéricos, e há uma propriedade length para determinar quantos 
 *      valores estão presentes.
 * 
 *      O objeto arguments está automaticamente disponível em qualquer 
 *      função. Isso significa que parâmetros nomeados em uma função 
 *      existem apenas por conveniência e não limitam o número de 
 *      argumentos que uma função pode aceitar.
 * 
 *      NOTA O objeto arguments não é uma instância de Array e, portanto, 
 *      não tem os mesmos  métodos de um array. Array.isArray(arguments) 
 *      sempre retornará false.
 * 
 *      Por outro lado, o JavaScript também não ignora os parâmetros 
 *      nomeados de uma função. O número de argumentos que uma função 
 *      espera é armazenado na propriedade length da função. Lembre-se de 
 *      que uma função é apenas um objeto, portanto ela pode ter 
 *      propriedades. A propriedade length indica a aridade (arity) da 
 *      função, ou seja, o número de parâmetros que ela espera. Conhecer 
 *      a aridade das funções é importante em JavaScript porque as 
 *      funções não gerarão um erro se você lhes passar parâmetros a mais 
 *      ou a menos.
 * 
 *      A seguir, temos um exemplo simples de uso de arguments e da 
 *      aridade da função:
*/
function reflect(value) {
    return value;
}

console.log(reflect("Hi!")); // "Hi!"
console.log(reflect("Hi!", 25)); // "Hi!"
console.log(reflect.length); // 1

reflect = function() {
    return arguments[0];
};

console.log(reflect("Hi!")); // "Hi!"
console.log(reflect("Hi!", 25)); // "Hi!"
console.log(reflect.length); // 0

/**
 *      Em algumas ocasiões, porém, usar arguments é mais eficiente do 
 *      que utilizar parâmetros nomeados. Por exemplo, suponha que você 
 *      queira criar uma função que aceite qualquer número de parâmetros 
 *      e que retorne a soma deles. Não é possível usar parâmetros 
 *      nomeados porque não sabemos quantos serão necessários, portanto, 
 *      nesse caso, usar arguments é a melhor opção:
*/
function sum() {
    var result = 0,
        i = 0,
        len = arguments.length;
    
        while (i < len) {
            result += arguments[i];
            i++;
        }
        return result;
}

console.log(sum(1, 2)); // 3
console.log(sum(3, 4, 5, 6)); // 18
console.log(sum(50)); // 50
console.log(sum()); // 0