let prompt = require('prompt-sync')()

let numero = parseInt(prompt("digite um numero : "))

do {
    numero = prompt("digite um numero : ")
} while (numero!="0");
