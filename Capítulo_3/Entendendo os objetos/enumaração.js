/**
 *      Por padrão, todas as propriedades que você adicionar a um objeto 
 *      são enumeráveis, o que significa que você pode iterar por elas 
 *      usando um loop for-in. Propriedades enumeráveis têm seu atributo 
 *      interno [[Enumerable]] definido como true. O loop for-in enumera 
 *      todas as propriedades enumeráveis de um objeto, atribuindo o nome 
 *      da propriedade a uma variável. Por exemplo, o loop no código a 
 *      seguir exibe os nomes das propriedades de um objeto e os seus 
 *      valores:
*/
var object = {};

var property;

for (property in object) {
    console.log("Name :" + property);
    console.log("Value:" + object[property]);
}

/**
 *      Se você precisar apenas de uma lista das propriedades de um 
 *      objeto para usar posteriormente em seu programa, o ECMAScript5 
 *      introduziu o método Object.keys() para obter um array de nomes de 
 *      propriedades enumeráveis, como mostrado a seguir:
*/
var properties = Object.keys(object);

// Se quiser imitar o comportamento do loop for-in
var i, len;

for (i=0, len=properties.length; i < len; i++) {
    console.log("Name :" + properties[i]);
    console.log("Value:" + object[properties[i]]);
}

/**
 *      Esse exemplo usa o método Object.keys() para obter as 
 *      propriedades enumeráveis de um objeto ❶. Um loop for é então 
 *      usado para iterar pelas propriedades e exibir o nome e o valor. 
 *      Normalmente, Object.keys() será usado em situações em que você 
 *      deseja operar sobre um array de nomes de propriedades e for-in 
 *      quando não precisar de um array
 * 
 *      NOTA Há uma diferença entre as propriedades enumeráveis 
 *      retornadas em um loop for-in e aquelas retornadas por Object.keys
 *      (). O loop for-in também enumera propriedades do protótipo, 
 *      enquanto Object.keys() retorna somente as propriedades próprias 
 *      (da instância).
 * 
 *      Tenha em mente que nem todas as propriedades são enumeráveis. De 
 *      fato, a maioria dos métodos nativos dos objetos tem o seu 
 *      atributo [[Enumerable]] definido como false. Você pode verificar 
 *      se uma propriedade é enumerável usando o método 
 *      propertyIsEnumerable(), que está presente em todos os objetos:
*/
var person1 = {
    name: "Nicholas"
};

console.log("name" in person1); // true

console.log(person1.propertyIsEnumerable("name")); // true

var properties = Object.keys(person1);

console.log("length" in properties); // true

console.log(properties.propertyIsEnumerable("length")); // false
