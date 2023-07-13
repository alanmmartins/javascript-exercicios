/* Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
foi bem-sucedido ou não. */

let prompt = require('prompt-sync')();

let nome = prompt('Digite o nome : ');
let senha = prompt('Digite a senha : ');

if (nome === "admin" && senha === "senha123") {
    console.log("Login bem-sucedido!");
} else {
    console.log("ERRROUUUU.");
}