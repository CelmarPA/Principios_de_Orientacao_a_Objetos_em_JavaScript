/**
 *      O segundo método de função que você pode usar para manipular this 
 *      é apply(). O método apply() funciona exatamente como call(), 
 *      exceto pelo fato de ele aceitar somente dois parâmetros: o valor 
 *      de this e um array ou um objeto semelhante a um array contendo os 
 *      parâmetros a serem passados para a função (isso significa que 
 *      você pode usar um objeto arguments como segundo parâmetro). Desse 
 *      modo, em vez de nomear individualmente cada parâmetro usando call
 *      (), você pode facilmente passar arrays para apply() como segundo 
 *      argumento. Exceto por isso, call() e apply() se comportam de modo 
 *      idêntico. Esse exemplo mostra o método apply() em ação
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

sayNameForAll.apply(this,["global"]); // exibe "global: Michael"
sayNameForAll.apply(person1, ["person1"]); // exibe "person1: Nicholas"
sayNameForAll.apply(person2, ["person2"]); // exibe "person2: Greg"
