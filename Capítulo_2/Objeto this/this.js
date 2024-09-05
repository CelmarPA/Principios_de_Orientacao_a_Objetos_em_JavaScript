/**
 *      Você pode ter notado algo estranho no exemplo anterior. O método 
 *      sayName() referencia person.name diretamente, o que gera um alto 
 *      nível de acoplamento entre o método e o objeto. Isso representa 
 *      um problema por vários motivos. Em primeiro lugar, se o nome da 
 *      variável for alterado, você terá de se lembrar de alterar a 
 *      referência a esse nome no método. Em segundo lugar, esse tipo de 
 *      alto acoplamento faz com que seja difícil usar a mesma função em 
 *      diferentes objetos.
 * 
 *      Todo escopo em JavaScript tem um objeto this que representa o 
 *      objeto que chama a função. No escopo global, this representa o 
 *      objeto global (window em web browsers). Quando uma função 
 *      associada a um objeto é chamada, por padrão, o valor de this é 
 *      igual a esse objeto. Portanto, em vez de referenciar diretamente 
 *      um objeto em um método, this pode ser referenciado em seu lugar. 
 *      Por exemplo:
*/
var person = {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};

person.sayName(); // exibe "Nicholas"

/**
 *      Você pode facilmente alterar o nome da variável ou até mesmo 
 *      reutilizar a função em objetos diferentes.
*/
function sayNameForAll() {
    console.log(this.name);
}

var person1 = {
    name: "Nicholas",
    sayName: sayNameForAll
};

var person2 = {
    name: "Greg",
    sayName: sayNameForAll
};

name = "Michael";
person1.sayName(); // exibe "Nicholas"
person2.sayName(); // exibe "Greg"
sayNameForAll(); // exibe "Michael"

/**
 *      Nesse exemplo, uma função chamada sayNameForAll() inicialmente é 
 *      criada. Em seguida, dois objetos literais são criados, em que 
 *      sayName é definido para que seja igual à função sayNameForAll. As 
 *      funções são apenas valores de referência, portanto elas podem ser 
 *      definidas como valores de propriedade em qualquer objeto. Quando 
 *      sayName() é chamada em person1, "Nicholas" é exibido; quando é 
 *      chamada em person2, "Greg" é exibido. Isso ocorre porque this é 
 *      definido quando a função é chamada, portanto this.name estará 
 *      correto.
 *      A última parte desse exemplo define uma variável global chamada 
 *      name. Quando sayNameForAll() é chamada diretamente, ela exibe 
 *      "Michael" porque a variável global é considerada uma propriedade 
 *      do objeto global.
*/
