let prompt = require('prompt-sync')()

/* Faça um programa receba dois valores e imprima qual é o maior
número digitado. */

let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));

if (num1 > num2) {
    console.log("o numero maior e  : " + num1)
  
} else if (num2 > num1) {
    console.log("o numero maior e  : " + num2)

} else {
  console.log("Os números são iguais.");
}
