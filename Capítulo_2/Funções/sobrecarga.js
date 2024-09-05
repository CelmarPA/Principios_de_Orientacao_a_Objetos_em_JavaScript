/**
 *      A maioria das linguagens orientadas a objetos suporta sobrecarga 
 *      de função, que é a possibilidade de uma função ter diversas 
 *      assinaturas. A assinatura de uma função é composta do nome da 
 *      função e da quantidade e dos tipos de parâmetros esperados pela 
 *      função. Assim, uma única função pode ter uma assinatura que 
 *      aceite apenas uma string como argumento e outra que aceite dois 
 *      números.
 * 
 *      A ausência de assinatura nas funções também significa a ausência 
 *      de sobrecarga de função. Observe o que acontece quando você tenta 
 *      declarar duas funções com o mesmo nome:
*/     
function sayMessage(message) {
    console.log(message);
}

function sayMessage() {
    console.log("Default message");
}
sayMessage("Hello!"); // exibe "Default message"

// Mais uma vez, usar objetos ajuda a entender essa situação:
var sayMessage = new Function("message","console.log(message);");

sayMessage = new Function("console.log(\"Default message\");");

sayMessage("Hello!"); // exibe "Default message"

/**
 *      O fato de as funções não terem assinatura em JavaScript não quer 
 *      dizer que você não possa imitar o comportamento da sobrecarga de 
 *      função. O número de parâmetros passados pode ser obtido por meio 
 *      do objeto arguments, e essa informação pode ser usada para 
 *      decidir o que deve ser feito. Por exemplo:
*/
function sayMessage2(message) {
    if (arguments.length === 0) {
        message = "Default message";
    }
    console.log(message);
}

sayMessage2("Hello!"); // exibe "Hello!"
sayMessage2(); // exibe "Default message"