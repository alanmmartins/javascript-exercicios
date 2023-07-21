import promptSync from "prompt-sync"

const prompt = promptSync()

export function DiferenteDeZero() {

let numero = parseInt(prompt("digite um numero : "))

do {
    numero = prompt("digite um numero : ")
} while (numero!="0");

}