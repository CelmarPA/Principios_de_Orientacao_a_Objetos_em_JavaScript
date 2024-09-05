/** 
 *      Há dois tipos diferentes de propriedade: propriedades de dados e 
 *      propriedades de acesso. As propriedades de dados contêm um valor, 
 *      como a propriedade name dos exemplos anteriores deste capítulo. O 
 *      comportamento-padrão do método [[Put]] consiste em criar uma 
 *      propriedade de dado.
 * 
 *      As propriedades de acesso não contêm valores; em vez disso, elas 
 *      definem uma função a ser chamada quando a propriedade é lida 
 *      (chamada getter) e uma função a ser chamada quando a propriedade 
 *      é atualizada (chamada setter). As propriedades de acesso exigem 
 *      somente um getter ou um setter, embora ambas possam existir.
*/
// Há uma sintaxe especial para definir as propriedades de acesso usando um objeto literal:
var person1 = {
    _name: "Nicholas",
    get name() {
        console.log("Reading name");
        return this._name;
    },
    set name(value) {
        console.log("Setting name to %s", value);
        this._name = value;
    }
};

console.log(person1.name); // "Reading name" e em seguida "Nicholas"

person1.name = "Greg";

console.log(person1.name); // "Setting name to Greg" e em seguida "Reading name" "Greg"