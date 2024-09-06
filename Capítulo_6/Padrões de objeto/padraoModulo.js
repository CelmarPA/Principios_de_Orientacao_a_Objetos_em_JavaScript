/**
 *      O padrão de módulo é um padrão de criação de objetos concebido 
 *      para criar objetos únicos (singleton) com dados privados. A 
 *      abordagem básica consiste em usar uma IIFE (Immediately Invoked 
 *      Function Expression, ou expressão de função imediatamente 
 *      invocada) que retorna um objeto. Uma IIFE é uma expressão de 
 *      função definida e chamada imediatamente para gerar um resultado. 
 *      Essa expressão de função pode conter qualquer número de variáveis 
 *      locais que não sejam acessíveis de fora dessa função. Como o 
 *      objeto retornado é definido dentro dessa função, os métodos do 
 *      objeto têm acesso aos dados. (Todos os objetos definidos em uma 
 *      IIFE têm acesso às mesmas variáveis locais.) Os métodos que 
 *      acessam dados privados dessa maneira são chamados de métodos 
 *      privilegiados. Aqui está o formato básico do padrão de módulo:
*/
var yourObject = (function() {
    // Variáveis referentes a dados privados

    return {
        // Métodos e propriedades públicas
    };
})();

/**
 *      O padrão de módulo permite usar variáveis normais como 
 *      propriedades de objetos que não são expostas publicamente. Isso é 
 *      feito por meio da criação de funções de closure como métodos do 
 *      objeto. As closures são simplesmente funções que têm acesso a 
 *      dados fora de seu escopo. Por exemplo, sempre que um objeto 
 *      global é acessado em uma função, por exemplo, window em um web 
 *      browser, essa função está acessando uma variável fora de seu 
 *      próprio escopo. A diferença em relação às funções do padrão de 
 *      módulo está no fato de que as variáveis são declaradas na IIFE, e 
 *      uma função que também é declarada na IIFE acessa essas variáveis. 
 *      Por exemplo:
*/
var person = (function () {
    var age = 25;
    return {
        name: "Nicholas",
        getAge: function () {
            return age;
        },
        growOlder: function () {
            age++;
        }
    };
})();

console.log(person.name); // "Nicholas";
console.log(person.getAge()); // 25

person.age = 100;

console.log(person.getAge()); // 25

person.growOlder(); 

console.log(person.getAge()); // 26

/**
 *      Há uma variação do padrão de módulo chamada revealing module 
 *      pattern (padrão de módulo revelador), que organiza todas as 
 *      variáveis e os métodos no início da IIFE e simplesmente os 
 *      atribui ao objeto retornado. O exemplo anterior pode ser escrito 
 *      usando esse padrão desta maneira:
*/
var person1 = (function () {
    var age = 25;
    function getAge() {
        return age;
    }
    function growOlder() {
        age++;
    }

    return {
        name: "Nicholas",
        getAge: getAge,
        growOlder: growOlder
    }
}());

console.log(person1.name); // "Nicholas";
console.log(person1.getAge()); // 25

person1.age = 100;

console.log(person1.getAge()); // 25

person1.growOlder(); 

console.log(person1.getAge()); // 26

/**
 *      No revealing module pattern, age, getAge() e growOlder() são 
 *      todos definidos como locais na IIFE. As funções getAge() e 
 *      growOlder() são então atribuídas ao objeto retornado, 
 *      efetivamente “revelando-as” para fora da IIFE.
*/
