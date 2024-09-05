/**
 *      O terceiro método para mudar o valor de this é bind(). Esse 
 *      método foi adicionado no ECMAScript 5 e se comporta de modo bem 
 *      diferente dos outros dois. O primeiro argumento de bind() 
 *      corresponde ao valor de this para a nova função. Todos os demais 
 *      argumentos representam parâmetros nomeados que devem ser 
 *      definidos permanentemente na nova função. Você ainda pode passar 
 *      qualquer parâmetro que não seja definido de modo permanente mais 
 *      tarde.
 * 
 *      O código a seguir mostra dois exemplos que utilizam bind(). A 
 *      função sayNameForPerson1() é criada ao efetuar a ligação 
 *      (binding) do valor de this com person1, enquanto sayNameForPerson2
 *      () faz a ligação de this com person2 e do primeiro parâmetro com 
 *      "person2".
*/
function sayNameForAll(label) {
    console.log(label + ": " + this.name);
}

var person1 = {
    name: "Nicholas"
};

var person2 = {
    name: "Greg"
};

// Cria uma função somente para person1
var sayNameForPerson1 = sayNameForAll.bind(person1);

sayNameForPerson1("person1"); // exibe "person1: Nicholas"

// Cria uma função somente para person2
var sayNameForPerson2 = sayNameForAll.bind(person2, "person2");

sayNameForPerson2(); // exibe "person2: Greg"

// Associar um método a um objeto não altera 'this'
person2.sayName = sayNameForPerson1;

person2.sayName("person2"); // exibe "person2: Nicholas"
