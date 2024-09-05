/**
 *      Quase sempre, as funções são definidas por meio de sua forma 
 *      literal. Na verdade, usar o construtor Function normalmente é 
 *      desaconselhável por ser mais difícil de manter, ler e depurar.
 *      Criar funções é muito mais simples e menos sujeito a erros quando 
 *      usamos a forma literal. Por exemplo:
 */
function reflect(value) {
    return value;
}

// É o mesmo que:
var reflect2 = new Function("value", "return value;");

console.log(reflect("Hello World!"));
console.log(reflect2("Hello World!"));