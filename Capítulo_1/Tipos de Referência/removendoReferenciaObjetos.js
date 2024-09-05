/**
 *      O JavaScript é uma linguagem que tem garbage-collection (coletor 
 *      de lixo), portanto não é realmente necessário se preocupar com 
 *      alocações de memória ao usar tipos de referência. Entretanto é 
 *      melhor remover a referência aos objetos que não sejam mais 
 *      necessários para que o coletor de lixo possa liberar essa 
 *      memória. A melhor maneira de fazer isso é atribuir null à 
 *      variável do objeto.
*/
var object1 = new Object();
// faça algo
object1 = null; // remove a referência
