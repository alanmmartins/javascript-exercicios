/* Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não. */

let prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Digite a data de nascimento : '));
 
if (num1 >= "2005"){
    console.log("  Nao E maior de idade ");
}else{
    console.log("E maior de idade");
}




