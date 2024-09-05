/**
 *      Como as propriedades podem ser adicionadas a qualquer momento, às 
 *      vezes é necessário verificar se uma propriedade já existe em um 
 *      objeto. Desenvolvedores JavaScript iniciantes muitas vezes usam 
 *      padrões incorretos, como mostrado no próximo exemplo, para 
 *      verificar se uma propriedade existe: 
*/
var person1 = {
    name: "Nicholas"
};

person1.age = "Redacted";

// Não é confiável
if (person1.age) {
    // faz algo com a idade (age)
}

/**
 *      O problema com esse padrão está no modo como as conversões de 
 *      tipo do JavaScript afetam o resultado. A condição if é avaliada 
 *      como true se o valor for truthy (um objeto, uma string não vazia, 
 *      um número diferente de zero ou true) e é avaliada como false se o 
 *      valor for falsy (null, undefined, 0, NaN ou uma string vazia). 
 *      Como uma propriedade de objeto pode conter qualquer um desses 
 *      valores falsy, o exemplo anterior pode resultar em um falso 
 *      negativo. Por exemplo, se person1.age for 0, a condição if não 
 *      será verdadeira, mesmo que a propriedade exista. Uma maneira mais 
 *      confiável de testar a existência de uma propriedade é por meio do 
 *      operador in.
 * 
 *      O operador in procura uma propriedade com um determinado nome em 
 *      um objeto específico e retorna true se ela for encontrada. Com 
 *      efeito, o operador in verifica se a chave especificada existe na 
 *      tabela hash. Por exemplo, aqui está o que acontece quando in é 
 *      usado para verificar se algumas propriedades existem no objeto 
 *      person1:
*/
console.log("name" in person1); // true
console.log("age" in person1); // true
console.log("title" in person1); // false

/**
 *      Tenha em mente que os métodos são apenas propriedades que 
 *      referenciam funções, portanto você pode verificar a existência de 
 *      um método da mesma forma. O exemplo a seguir adiciona uma nova 
 *      função sayName() a person1 e utiliza in para confirmar a sua 
 *      existência:
*/
var person1 = {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};

console.log("sayName" in person1); // true

/**
 *      Em outros casos, no entanto, você pode querer verificar a 
 *      existência de uma propriedade somente se ela for uma propriedade 
 *      própria. O operador in verifica tanto as propriedades próprias 
 *      quanto as propriedades de protótipos, de modo que você deverá 
 *      adotar uma abordagem diferente. Use o método hasOwnProperty(), 
 *      que está presente em todos os objetos e retorna true somente se a 
 *      propriedade dada existir e for uma propriedade própria. Por 
 *      exemplo, o código a seguir compara o resultado do uso de in em 
 *      relação a hasOwnProperty() em diferentes propriedades de person1:
*/
console.log("name" in person1); // true
console.log(person1.hasOwnProperty("name")); // true
console.log("toString" in person1); // true
console.log(person1.hasOwnProperty("toString")); // false

/**
 *      O método toString(), entretanto, é uma propriedade do 
 *      protótipo, presente em todos os objetos. O operador in retorna  
 *      true para toString(), mas hasOwnProperty retorna false.
*/