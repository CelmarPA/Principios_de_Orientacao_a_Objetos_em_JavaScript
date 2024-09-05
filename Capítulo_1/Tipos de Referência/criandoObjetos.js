/**
 *      Existem algumas maneiras de criar, ou seja, de instanciar um 
 *      objeto. A primeira é por meio do operador new e um construtor. 
 *      (Um construtor é simplesmente uma função que usa new para criar 
 *      um objeto – qualquer função pode ser um construtor.) Por 
 *      convenção, os nomes dos construtores em JavaScript iniciam com 
 *      uma letra maiúscula para distingui-los de funções que não são
 *      construtoras. Por exemplo:
*/

var object = new Object();

/**
 *      Os tipos de referência não armazenam o objeto diretamente na 
 *      variável à qual ele foi atribuído, portanto a variável object 
 *      nesse exemplo não contém a instância do objeto. Em vez disso, ela 
 *      armazena um ponteiro (ou uma referência) para a posição de 
 *      memória em que esse objeto está.
 * 
 *      Quando um objeto for atribuído a uma variável, você estará, na 
 *      verdade, atribuindo-lhe um ponteiro. Isso significa que se você 
 *      atribuir uma variável a outra, cada variável terá uma cópia dessa 
 *      referência, e ambos continuarão referenciando o mesmo objeto na 
 *      memória. Por exemplo:
 */

var object1 = new Object();
var object2 = object1;