/**
 *      Há duas formas básicas de criar seus próprios objetos: usando o 
 *      construtor Object ou usando um objeto literal. Por exemplo: var 
 *      person1
*/

var person1 = {
    name: "Nicholas"
};

var person2 = new Object();

person2.name = "Nicholas";

person1.age = "Redacted";

person2.age = "Redacted";

person1.name = "Greg";

person2.name = "Michael";

/**
 *      Quando uma propriedade é adicionada pela primeira vez a um 
 *      objeto, o JavaScript utiliza um método interno chamado [[Put]] no 
 *      objeto. O método [[Put]] cria um espaço no objeto para armazenar 
 *      a propriedade. Isso pode ser comparado à adição de uma chave em 
 *      uma tabela hash pela primeira vez. Essa operação especifica não 
 *      somente o valor inicial como também alguns atributos da 
 *      propriedade. Desse modo, no exemplo anterior, quando as 
 *      propriedades name e age são inicialmente definidas em cada 
 *      objeto, o método [[Put]] é chamado para cada uma delas.
 * 
 *      O resultado da chamada a [[Put]] é a criação de uma propriedade 
 *      própria no objeto. Uma propriedade própria simplesmente indica 
 *      que a instância específica do objeto tem aquela propriedade. A 
 *      propriedade é armazenada diretamente na instância e todas as 
 *      operações sobre a propriedade devem ser executadas por meio desse 
 *      objeto.
 * 
 *      Quando um novo valor é atribuído a uma propriedade, uma operação 
 *      diferente chamada [[Set]] é executada. Essa operação substitui o 
 *      valor atual da propriedade pelo novo valor. No exemplo anterior, 
 *      atribuir um novo valor a name resulta em uma chamada a [[Set]].
*/
