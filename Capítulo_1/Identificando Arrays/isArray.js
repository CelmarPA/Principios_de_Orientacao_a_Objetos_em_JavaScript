/**
 *      O ECMAScript 5 introduziu Array.isArray(), que identifica 
 *      definitivamente o valor como uma instância de Array, sem se 
 *      importar com a origem do valor. Esse método deve retornar true 
 *      quando receber um valor que seja um array nativo de qualquer  
 *      contexto.
*/
var items = [];
console.log(Array.isArray(items)); // true