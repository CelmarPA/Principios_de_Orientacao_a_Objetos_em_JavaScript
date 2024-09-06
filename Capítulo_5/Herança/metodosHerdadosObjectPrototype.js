/**
 *      Os métodos herdados de Object.prototype são:
 * 
 *      • hasOwnProperty() – Determina se uma propriedade própria com o 
 *        nome especificado existe.
 *      • propertyIsEnumerable() – Determina se uma propriedade própria é 
 *        enumerável.
 *      • isPrototypeOf() – Determina se o objeto é protótipo de outro.
 *      • valueOf() – Retorna a representação do valor do objeto.
 *      • toString() – Retorna uma representação do objeto em forma de 
 *        string.
 * 
 *      Esses cinco métodos estão presentes em todos os objetos por meio 
 *      de herança. Os dois últimos são importantes quando você quiser 
 *      que os objetos funcionem de forma consistente em JavaScript e, às 
 *      vezes, você irá querer defini-los por conta própria.
*/

/**
 *      valueOf()
 * 
 *      O método valueOf() é chamado sempre que um operador é usado em um 
 *      objeto. Por padrão, valueOf() simplesmente retorna a instância do 
 *      objeto. Os tipos wrapper primitivos sobrescrevem valueOf() de 
 *      modo que uma string é retornada para String, um booleano é 
 *      retornado para Boolean e um número é retornado para Number. Da 
 *      mesma maneira, o método valueOf() do objeto Date retorna o 
 *      instante no tempo em milissegundos (assim como é feito por Date.
 *      prototype.getTime()). É isso que permite que você escreva um 
 *      código que compare datas desta maneira:
*/
var now = new Date();
var earlier = new Date(2020, 1, 1);

console.log(now > earlier); // true

/**
 *      Nesse exemplo, now é um Date que representa o instante atual, e 
 *      earlier é uma data fixa no passado. Quando o operador maior que ( 
 *      > ) é usado , o método valueOf() é chamado em ambos os objetos 
 *      antes de a comparação ser executada. Você pode até mesmo subtrair 
 *      uma data de outra e obter a diferença de tempo por causa de 
 *      valueOf().
*/

/**
 *      toString()
 * 
 *      O método toString() é chamado como fallback sempre que valueOf() 
 *      retorna um valor de referência no lugar de um valor primitivo. 
 *      Ele também será chamado implicitamente em valores primitivos 
 *      sempre que o JavaScript estiver esperando uma string. Por 
 *      exemplo, quando uma string for usada como um operando da operação 
 *      de adição, o outro operando será automaticamente convertido em 
 *      uma string. Se o outro operando for um valor primitivo, ele será 
 *      convertido para a sua representação em forma de string (por 
 *      exemplo, true se torna "true"), mas se ele for um valor de 
 *      referência, valueOf() será chamado. Se valueOf() retornar um 
 *      valor de referência, toString() será chamado e o valor retornado 
 *      será usado. Por exemplo:
*/
var book = {
    title: "Princípios de orientação a objetos em JavaScript"
};

var message = "Book = " + book;

console.log(message); // "Book = [object Object]"

/**
 *      Esse código constrói a string por meio da combinação de "Book =" 
 *      com book. Como book é um objeto, seu método toString() é chamado. 
 *      Esse método é herdado de Object.prototype e retorna o 
 *      valor-padrão "[object Object]" na maioria das engines de 
 *      JavaScript. Se você estiver satisfeito com esse valor, não haverá 
 *      necessidade de alterar o método toString() de seu objeto. Às 
 *      vezes, porém, é útil definir seu próprio método toString() para 
 *      que as conversões de string retornem um valor que ofereça mais 
 *      informações. Por exemplo:
*/
var book = {
    title: "Princípios de orientação a objetos em JavaScript",
    toString: function () {
        return "[Book " + this.title + "]";
    }
};

var message = "Book " + book;

console.log(message); // "Book = [Book Princípios de orientação a objetos em JavaScript]"
