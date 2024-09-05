/**
 *      As propriedades de acesso também têm dois atributos adicionais. 
 *      Como não há nenhum valor armazenado nessas propriedades, os 
 *      atributos [[Value]] e [[Writable]] não são necessários. Em seu 
 *      lugar, as propriedades de acesso têm [[Get]] e [[Set]], que 
 *      contêm as funções getter e setter, respectivamente. Como na forma 
 *      literal de getters e setters, é preciso definir apenas um desses 
 *      atributos para criar a propriedade.
 * 
 *      A vantagem de usar atributos de propriedades de acesso em vez de 
 *      utilizar a notação literal de objeto para definir as propriedades 
 *      de acesso é que você também pode definir essas propriedades em 
 *      objetos que já existem. Se quiser usar a notação literal de 
 *      objeto, você deve definir as propriedades de acesso quando o 
 *      objeto for criado. Como ocorre com as propriedades de dados, você 
 *      também poderá especificar se as propriedades de acesso são 
 *      configuráveis ou enumeráveis.
*/
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

// Esse código também pode ser escrito da seguinte maneira:
var person1 = {
    _name: "Nicholas"
};

Object.defineProperty(person1, "name", {
    get: function() {
        console.log("Reading name");
        return this._name;
    },
    set: function(value) {
        console.log("Setting name to %s", value);
        this._name = value;
    },
    enumerable: true,
    configurable: true
});

/**
 *      Definir os outros atributos ([[Enumerable]] e [[Configurable]]) 
 *      permite alterar o modo como a propriedade de acesso funciona. Por 
 *      exemplo, você pode criar uma propriedade não configurável, não 
 *      enumerável e que não pode ser atualizada desta maneira:
*/
var person1 = {
    _name: "Nicholas"
};

Object.defineProperty(person1, "name", {
    get: function() {
    console.log("Reading name");
    return this._name;
    }
});

console.log("name" in person1); // true

console.log(person1.propertyIsEnumerable("name")); // false

delete person1.name;

console.log("name" in person1); // true

person1.name = "Greg";

console.log(person1.name); // "Nicholas"

/**
 *      Nesse código, name é uma propriedade de acesso que tem somente um 
 *      getter. Não há setter nem outros atributos explicitamente 
 *      definidos como true, portanto o valor poderá ser lido, mas não 
 *      poderá ser alterado.
*/
