/**
 *      O primeiro método para manipular this é call(), que executa a 
 *      função com um determinado valor de this e com parâmetros 
 *      específicos. O primeiro parâmetro de call() é o valor que this 
 *      deve ter quando a função for executada. Todos os parâmetros 
 *      seguintes correspondem aos parâmetros que devem ser passados para 
 *      a função. Por exemplo, suponha que  sayNameForAll() receba um 
 *      parâmetro:
*/
function sayNameForAll(label) {
    console.log(label + ": " + this.name);
}
var person1 = {
    name: "Nicholas"
};

var person2 = {
    name: "Greg"
}

this.name = "Michael";

sayNameForAll.call(this, "global"); // exibe "global: Michael"
sayNameForAll.call(person1,"person1"); // exibe "person1: Nicholas"
sayNameForAll.call(person2,"person2"); // exibe "person2: Greg"

/**
 *      Nesse exemplo, sayNameForAll() aceita um parâmetro que é usado 
 *      como label para exibir o valor de saída. Em seguida, a função é 
 *      chamada três vezes. Note que não há parênteses depois do nome da 
 *      função porque ela é acessada como um objeto em vez de ser 
 *      acessada como um código a ser executado. A primeira chamada de 
 *      função utiliza o this global e passa o parâmetro "global" para 
 *      ser exibido em "global: Michael". A mesma função é chamada mais 
 *      duas vezes, uma para person1 e outra para person2. Como o método 
 *      call() está sendo usado, não é preciso adicionar a função 
 *      diretamente a cada objeto – você especifica explicitamente o 
 *      valor de this em vez de deixar a engine do JavaScript fazer isso 
 *      automaticamente. 
*/
