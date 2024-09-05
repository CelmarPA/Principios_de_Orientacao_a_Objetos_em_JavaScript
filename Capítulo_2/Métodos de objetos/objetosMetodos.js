/**
 *      No código a seguir, a variável person recebe um objeto literal 
 *      com uma propriedade chamada name e um método chamado sayName:
*/
var person = {
    name: "Nicholas",
    sayName: function () {
        console.log(person.name);
    }
};
person.sayName(); // exibe "Nicholas"

/**
 *      Note que a sintaxe para o valor de uma propriedade de qualquer 
 *      tipo e um método é a mesma: um identificador seguido de 
 *      dois-pontos e o valor. No caso de sayName, o valor é uma função. 
 *      Você pode então chamar o método diretamente a partir do objeto, 
 *      como em person.sayName("Nicholas").
*/
