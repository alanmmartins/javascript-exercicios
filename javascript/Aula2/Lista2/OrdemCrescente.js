/* Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
crescente. Exibindo uma mensagem indicando se os números estão em ordem . */

let prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));
let num3 = parseInt(prompt('Digite o terceiro número: '));

if (num1 <= num2 && num1 <= num3) {
    
    if (num2 <= num3) {
        console.log('Ordem crescente: ' + num1 + '- ' + num2 + '- ' + num3);
    } else {
        console.log('Ordem crescente: ' + num1 + '- ' + num3 + '- ' + num2);
    }



} else if (num2 <= num1 && num2 <= num3) {
    if (num1 <= num3) {
        console.log('Ordem crescente: ' + num2 + '- ' + num1 + '- ' + num3);
    } else {
        console.log('Ordem crescente: ' + num2 + '- ' + num3 + '- ' + num1);
    }


} else {


    if (num1 <= num2) {
        console.log('Ordem crescente: ' + num3 + '- ' + num1 + '- ' + num2);
    } else {
        console.log('Ordem crescente: ' + num3 + '- ' + num2 + '- ' + num1);
    }
}