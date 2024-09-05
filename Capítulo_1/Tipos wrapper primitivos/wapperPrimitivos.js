/**
 *      Talvez uma das partes mais confusas do JavaScript seja o conceito 
 *      de tipos wrapper primitivos. Há três tipos wrapper primitivos: 
 *      String, Number e Boolean. Esses tipos de referência especiais 
 *      existem para fazer com que trabalhar com valores primitivos seja 
 *      tão simples quanto trabalhar com objetos (seria muito confuso se 
 *      você tivesse que usar uma sintaxe diferente ou mudar para o 
 *      estilo de programação procedural somente para obter uma substring 
 *      de um texto).
 * 
 *      Os tipos wrapper primitivos são tipos de referência criados 
 *      automaticamente por baixo dos panos sempre que strings, numbers 
 *      ou booleans são lidos. Repare que, na primeira linha do próximo 
 *      exemplo, um valor primitivo de string é atribuído a name. A 
 *      segunda linha trata name como um objeto e chama charAt(0) usando 
 *      a notação de ponto:
*/
var name = "Nicholas";
var firstChar = name.charAt(0);
console.log(firstChar); // "N"

// Isto é o que acontece internamente:
// O que a engine do JavaScript faz
var name = "Nicholas";
var temp = new String(name);
var firstChar = temp.charAt(0);
temp = null;
console.log(firstChar); // "N"

/**
 *      Como a segunda linha (do primeiro exemplo) usa uma string (que é 
 *      um primitivo) como um objeto, a engine do JavaScript cria uma 
 *      instância de String para que charAt(0) funcione. O objeto String 
 *      existe somente em uma   instrução antes de ser destruído (um 
 *      processo chamado de autoboxing). Para  testar isso, tente 
 *      adicionar uma propriedade a uma string como se ela fosse um 
 *      objeto comum:
*/
var name = "Nicholas";
name.last = "Zakas";
console.log(name.last); //undefined

/**
 *      Com tipos wrapper primitivos, as propriedades parecem desaparecer 
 *      porque o objeto no qual a propriedade foi definida é destruído 
 *      imediatamente na sequência. Aqui está o que realmente aconteceu 
 *      na engine do JavaScript:
*/

// O que a engine de JavaScript faz
var name = "Nicholas";
var temp = new String(name);
temp.last = "Zakas";
temp = null; // objeto temporário é destruído
var temp = new String(name);
console.log(temp.last); // undefined
temp = null;

/**
 *      Embora valores de referência sejam criados automaticamente para 
 *      valores primitivos, quando o tipo desses valores é verificado por 
 *      meio deinstanceof, o resultado é false:
*/
var name = "Nicholas";
var count = 10;
var found = false;
console.log(name instanceof String); // false
console.log(count instanceof Number); // false
console.log(found instanceof Boolean); // false

/**
 *      O operador instanceof retorna false porque um objeto temporário é 
 *      criado somente quando um valor é lido. E como instanceof na 
 *      verdade não lê nada, nenhum objeto temporário é criado, e ele nos 
 *      diz que esses valores não são instâncias de tipos wrapper 
 *      primitivos. Você pode criar tipos wrapper primitivos manualmente, 
 *      mas há alguns efeitos colaterais:
*/
var name = new String("Nicholas");
var count = new Number(10);
var found = new Boolean(false);
console.log(typeof name); // "object"
console.log(typeof count); // "object"
console.log(typeof found); // "object"

/**
 *      Como você pode ver, criar uma instância de um tipo wrapper 
 *      primitivo apenas dá origem a outro objeto, o que significa que 
 *      typeof não pode identificar o tipo de dado que você pretende  
 *      armazenar. Além do mais, você não pode usar objetos String, 
 *      Number ou Boolean como faria com valores primitivos. Por exemplo, 
 *      o próximo código utiliza um objeto Boolean. O objeto Boolean é 
 *      false, embora console.log("Found") continue sendo executado 
 *      porque um objeto será sempre considerado true em instruções 
 *      condicionais. Não importa se o objeto representa false; ele é um 
 *      objeto, portanto será avaliado como true. 
*/
var found = new Boolean(false);
if (found) {
    console.log("Found"); // isso é executado
}
