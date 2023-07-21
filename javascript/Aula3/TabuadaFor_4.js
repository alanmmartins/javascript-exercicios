import promptSync from "prompt-sync"
export function Tabuada()
 {

const prompt = promptSync()

let numero = parseInt(prompt("Digite um número inteiro: "));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

}