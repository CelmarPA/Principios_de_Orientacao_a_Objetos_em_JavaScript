/**
 *      As propriedades de dados têm dois atributos adicionais que as 
 *      propriedades de acesso não têm. O primeiro é [[Value]], que 
 *      contém o valor da propriedade. Esse atributo é preenchido 
 *      automaticamente quando uma propriedade é criada em um objeto. 
 *      Todos os valores depropriedade são armazenados em [[Value]], 
 *      mesmo que o valor seja uma função. 
 * 
 *      O segundo atributo é [[Writable]], que é um valor booleano para 
 *      indicar se o valor da propriedade pode ser reescrito. Por padrão, 
 *      todas as propriedades podem ser reescritas, a menos que você 
 *      especifique o contrário. 
 * 
 *      Com esses dois atributos adicionais, você pode definir 
 *      completamente uma propriedade de dado usando Object.defineProperty
 *      (), mesmo que a propriedade ainda não exista. Considere este 
 *      código: 
*/
var person1 = {
    name: "Nicholas"
};

// O mesmo resultado pode ser obtido com o código a seguir (mais extenso):
var person1 = {};

Object.defineProperty(person1, "name", {
    value: "Nicholas",
    enumerable: true,
    configurable: true,
    writable: true
});

/**
 *      Quando Object.defineProperty() é chamado, inicialmente ele 
 *      verifica se a propriedade existe. Se não existir, uma nova 
 *      propriedade será adicionada, com os atributos especificados no 
 *      descritor.
 * 
 *      Ao definir uma nova propriedade usando Object.defineProperty(), é 
 *      importante especificar todos os atributos porque, do contrário, 
 *      os atributos booleanos serão definidos automaticamente como false 
 *      por padrão. Por exemplo:
*/
var person1 = {};

Object.defineProperty(person1, "name", {
    value: "Nicholas"
});

console.log("name" in person1); // true

console.log(person1.propertyIsEnumerable("name")); //false

delete person1.name;

console.log("name" in person1); // true

person1.name = "Greg";

console.log(person1.name); // "Nicholas"

/**
 *      Nesse código, você não pode fazer nada com a propriedade name, 
 *      exceto ler o seu valor; qualquer outra operação estará bloqueada. 
 *      Se você estiver alterando uma propriedade que já existe, tenha em 
 *      mente que somente os atributos que você especificar serão   
 *      alterados.
 */