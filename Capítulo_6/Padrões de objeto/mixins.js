/**
 *      Embora a herança pseudoclássica e a herança por protótipos sejam 
 *      usadas frequentemente em JavaScript, há também um tipo de 
 *      pseudoherança implementada por meio de mixins. Os mixins ocorrem 
 *      quando um objeto adquire as propriedades de outro sem modificar a 
 *      cadeia de protótipos. O primeiro objeto (o receiver [receptor]) 
 *      recebe as propriedades do segundo objeto (o supplier 
 *      [fornecedor]) ao copiar diretamente essas propriedades. 
 *      Tradicionalmente, os mixins são criados por meio de funções como 
 *      esta:
*/
function mixin(receiver, supplier) {
    for (var property in supplier) {
        if (supplier.hasOwnProperty(property)) {
            receiver[property] = supplier[property];
        }
    }
    return receiver;
}

/**
 *      A função mixin() aceita dois argumentos: o receiver (receptor) e 
 *      o supplier (fornecedor). O objetivo da função é copiar todas as 
 *      propriedades enumeráveis do fornecedor para o receptor. Isso é 
 *      feito por meio de um loop for-in que efetua a iteração pelas 
 *      propriedades de supplier e atribui o valor de cada propriedade a 
 *      uma propriedade de mesmo nome no receiver. Tenha em mente que 
 *      essa é uma cópia rasa (shallow copy): se uma propriedade contiver 
 *      um objeto, então tanto o receptor quanto o fornecedor apontarão 
 *      para o mesmo objeto. Esse padrão é usado frequentemente em 
 *      JavaScript para adicionar novos comportamentos já existentes em 
 *      um objeto a outro.
 * 
 *      Por exemplo, um suporte a eventos pode ser adicionado a um objeto 
 *      por meio de um mixin em vez de usar a herança. Inicialmente, 
 *      suponha que você já tenha definido um tipo personalizado para 
 *      usar eventos:
*/
function EventTarget() {

}
EventTarget.prototype = {
    constructor: EventTarget,
        addListener: function(type, listener) {
            // Cria um array se ele não existir
            if (!this.hasOwnProperty("_listeners")) {
                this._listeners = [];
            }
            if (typeof this._listeners[type] === "undefined") {
                this._listeners[type] = [];
            }
            this._listeners[type].push(listener);
        },
        fire: function(event) {
            if (!event.target) {
                event.target = this;
            }
            if (!event.type) { // Falsy
                throw new Error("Event object missing 'type' property");
            }
            if (this._listeners && this._listeners[event.type] instanceof Array) {
                var listeners = this._listeners[event.type];
                for (var i = 0, len = listeners.length; i < len; i++) {
                    listeners[i].call(this, event);
                }
            }
        },
        removeListener: function(type, listener) {
            if (this._listeners && this._listeners[type] instanceof Array) {
                var listeners = this._listeners[type];
                for (var i = 0, len = listeners.length; i < len; i++) {
                    if (listeners[i] === listener) {
                        listeners.splice(i, 1);
                        break;
                    }
                }
            }
        }
};

/**
 *      O tipo EventTarget oferece uma manipulação básica de eventos para 
 *      qualquer objeto. Você pode adicionar ❶ ou remover ❸ listeners 
 *      assim como disparar eventos ❷ diretamente no objeto. Os listeners 
 *      de evento são armazenados na propriedade _listeners, criada 
 *      somente quando addListener() é chamada pela primeira vez (isso 
 *      facilita efetuar a combinação do mixin). Instâncias de 
 *      EventTarget podem ser usadas desta maneira:
*/
var target = new EventTarget();

target.addListener("message", function (event) {
    console.log("Message is " + event.data);
});

target.fire({
    type: "message",
    data: "Hello World!"
});

/**
 *      Se você quiser ter um tipo diferente de objeto que também suporte 
 *      eventos, há algumas opções. Em primeiro lugar, podemos criar uma 
 *      nova instância de EventTarget e adicionar as propriedades 
 *      desejadas:
*/
var person = new EventTarget();

person.name = "Nicholas";
person.sayName = function() {
    console.log(this.name);
    this.fire({ type: "namesaid", name: this.name });
};

// A segunda maneira de resolver esse problema é usar a herança pseudoclássica:
function Person(name) {
    this.name = name;
}

Person.prototype = Object.create(EventTarget.prototype);

Person.prototype.constructor = Person;

Person.prototype.sayName = function() {
    console.log(this.name);
    this.fire({type: "namesaid", name: this.name});
};

var person1 = new Person("Nicholas");

console.log(person1 instanceof Person); // true
console.log(person1 instanceof EventTarget); // true

/**
 *      Ao usar um mixin no lugar dessa solução, é possível reduzir a 
 *      quantidade de código necessária para atribuir essas novas 
 *      propriedades ao protótipo:
*/
function Person1(name) {
    this.name = name;
}

mixin(Person1.prototype, EventTarget.prototype);

mixin(Person.prototype, {
    constructor: Person1,
    sayName: function () {
        console.log(this.name);
        this.fire({type: "namesaid", name: this.name});
    }
});

var person2 = new Person1("Nicholas");

console.log(person2 instanceof Person1); // true
console.log(person2 instanceof EventTarget); // true

/**
 *      Você pode decidir que, ao mesmo tempo que você quer usar as 
 *      propriedades de um objeto, você não quer ter um construtor com 
 *      herança pseudoclássica. Nesse caso, um mixin pode ser usado 
 *      diretamente ao criar o seu novo objeto:
*/
var person3 = mixin(new EventTarget(), {
    name: "Nicholas",
    sayName: function () {
        console.log(this.name);
        this.fire({ type: "namesaid", name: this.name });
    }
});

/**
 *      Um aspecto a se ter em mente sobre o uso de mixins dessa maneira 
 *      é que as propriedades de acesso do fornecedor se tornam 
 *      propriedades de dados no receptor, o que significa que se você 
 *      não for cuidadoso, poderá sobrescrevê-las. Isso acontece porque 
 *      as propriedades do receptor estão sendo criadas por atribuição e 
 *      não pelo método Object.defineProperty(), o que significa que o 
 *      valor da propriedade atual no fornecedor é lido e, em seguida, 
 *      atribuído a uma propriedade de mesmo nome no receptor. Por 
 *      exemplo:
*/
var person4 = mixin(new EventTarget(), {
    get name() {
        return "Nicholas";
    },
    sayName: function () {
        console.log(this.name);
        this.fire({ type: "namesaid", name: this.name });
    }
});

console.log(person4.name); // "Nicholas"

person4.name = "Greg";

console.log(person4.name); // "Greg"

/**
 *      Se você quiser que propriedades de acesso sejam copiadas como 
 *      propriedades de acesso, será necessário ter uma função mixin() 
 *      diferente, como esta:
*/
function mixin(receiver, supplier) {
    Object.keys(supplier).forEach(function(property) {
        var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
        Object.defineProperty(receiver, property, descriptor);
    });
    return receiver;
}

var person5 = mixin(new EventTarget(), {
    get name() {
        return "Nicholas";
    },
    sayName: function() {
        console.log(this.name);
        this.fire({ type: "namesaid", name: this.name})
    }
});

console.log(person5.name); // "Nicholas"
person5.name = "Greg";
console.log(person5.name); // "Nicholas"