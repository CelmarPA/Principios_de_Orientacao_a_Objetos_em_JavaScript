/**
 *      O JavaScript também tem literais para expressões regulares, que 
 *      permitem definir essas expressões sem usar o construtor RegExp. 
 *      Literais de expressões regulares se parecem muito com as 
 *      expressões regulares em Perl: a expressão é definida entre duas 
 *      barras, e qualquer opção adicional corresponde a uma única letra 
 *      após a segunda barra. Por exemplo:
*/
var numbers = /\d+/g;
// É o mesmo que:
var numbers2 = new RegExp("\\d+", "g");