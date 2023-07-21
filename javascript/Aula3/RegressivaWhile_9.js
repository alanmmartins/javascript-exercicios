/* Faça um programa que receba um número do usuário e mostre
no console a contagem regressiva até 0. */
let prompt = require('prompt-sync')()
export function RegressivaAteZero() {



let numero = parseInt(prompt("Digite um número:"));

while (numero >= 0) {
  console.log(numero--);
 // numero--;
}}