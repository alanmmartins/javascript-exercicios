/* Faça um programa que receba o nome, cargo e salário de um
funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
desse funcionário. */


let prompt = require('prompt-sync')();


let nome = prompt('Digite o nome : ');
let cargo = prompt('Digite o cargo : ');
let salario = parseFloat(prompt('Digite o salario  : '));


if (salario < 1000) { 
    let sal = (nome+" seu salario com acrescimo e "+ salario * 1.1)
    console.log(sal);
}else {
    console.log(nome+" seu salario ja e de nao tera aumento "+salario);
}

/* 
console.log('nomw: ' + nome);
console.log('Cargo: ' + cargo);
console.log('Salário: ' + salario) */