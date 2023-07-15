/* Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
não. */
let prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));
let num3 = parseInt(prompt('Digite o terceiro número: '));

if (num1 <= num2 && num1 <= num3) {
    console.log("e crescente :"+ num1 + " " + num2 + " " + num3);
}else{
    console.log("non e crescente");
}