/**
 *      Outro aspecto interessante sobre os objetos em JavaScript é que 
 *      você pode adicionar ou remover propriedades a qualquer momento.
 *      Por exemplo:
*/

var object1 = new Object();
var object2 = object1;

object1.myCustomProperty = "Awesome!";
console.log(object2.myCustomProperty); // "Awesome!"

/**
 *      Nesse caso, myCustomProperty é adicionada a object1 com valor 
 *      igual a "Awesome!". Essa propriedade também é acessível em 
 *      object2 porque tanto object1 quanto object2 apontam para o mesmo 
 *      objeto.
*/
