/**
 *      Simplesmente definir uma propriedade como null não remove 
 *      totalmente a propriedade do objeto. Essa operação chama [[Set]] 
 *      com o valor null, o que, somente substitui o valor da 
 *      propriedade. Você deve usar o operador delete para remover 
 *      totalmente uma propriedade de um objeto.
 * 
 *      O operador delete atua em uma única propriedade do objeto e chama 
 *      uma operação interna de nome [[Delete]]. Você pode pensar nessa 
 *      operação como a remoção de um par chave/valor de uma tabela hash. 
 *      Se o operador delete conseguir remover a propriedade, ele 
 *      retornará true.
*/
var person1 = {
    name: "Nicholas"
};

console.log("name" in person1); // true

delete person1.name; // true (não exibe nada)

console.log("name" in person1); // false

console.log(person1.name); // undefined
