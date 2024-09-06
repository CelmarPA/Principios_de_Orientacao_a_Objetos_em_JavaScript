/**
 *      Também é possível definir várias propriedades em um objeto 
 *      simultaneamente se Object.defineProperties() for usado no lugar 
 *      de Object.defineProperty().
*/
var person1 = {};

Object.defineProperties(person1, {
    // Propriedade de dados para armazenar informações
    _name: {
        value: "Nicholas",
        enumerable: true,
        configurable: true,
        writable: true
    },

    // Propriedade de acesso
    name: {
        get: function() {
            console.log("Reading name");
            return this._name;
        },
        set: function(value) {
            console.log(`Setting name to ${value}`);
            this._name = value;
        },
        enumerable: true,
        configurable: true
    }
});
