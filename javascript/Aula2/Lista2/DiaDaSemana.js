/* Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
2 representa terça-feira e assim por diante. */

let prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Digite um número de 1 a 7: '));

if (num1 == 1) {
    console.log('segunda');
} else if (num1 == 2) {
    console.log('terca');
}else if (num1 == 3) {
    console.log('quarta');
} else if (num1 == 4 ) {
    console.log('quinta');
} else if (num1 == 5) {
    console.log('sexta');
} else if (num1 == 6) {
    console.log('sabado');
} else if (num1 == 7) {
    console.log('Domingo');
}else
console.log('somente digite numero inteito de 1 a 7');