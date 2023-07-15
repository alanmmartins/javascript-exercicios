// let nomes = ["Alana", "Alexia", "Samanta", "Thiago", "Ordilei"]
//           0          1          2         3          4    

/* console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
console.log(nomes[3]);
console.log(nomes[4]); */


//                                        index =+ 10
//                                        index --
/* for (let contador = 0; contador < nomes.length; contador ++) {
    const cadaElemento = nomes[contador];
    console.log(cadaElemento);
    
} */

/* 
nomes.forEach(cadaElemento =>{
    console.log(cadaElemento);
}) */
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\///\\//\\//\\//\\//\\//\\
// const frutas = ["Pera","Uva","Maca","Salada Mista"]

/* for (let contador = 0; contador < frutas.length; contador++) {
    const cadaElemento = frutas[contador];
    console.log(contador, cadaElemento); 
    
}
 */

/* frutas.forEach(cadaElemento =>{
    console.log(cadaElemento);
}) */
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\///\\//\\//\\//\\//\\//\\
/* let salario = 1000;
let contador = 0;

while (salario < 5000){

    contador++;
    salario += 100 ;// salario = salario +100;
    console.log("Seu salario ainda e R$" + salario);
}
 console.log(contador); */
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\///\\//\\//\\//\\//\\//\\
/* let salario = 1000;
let contador = 0;
do {
    salario += 100 ;//salario = salario +100
    contador++;

    console.log("Seu salario ainda e R$" + salario );
} while (salario < 5000);

 console.log(contador); */
 //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\///\\//\\//\\//\\//\\//\\
/* const prompt = require('prompt-sync')()

let numeroEscolhido
do {
    numeroEscolhido = prompt("Digite um numero : ");

    
} while (numeroEscolhido != "5"); */
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\///\\//\\//\\//\\//\\//\\
const prompt = require('prompt-sync')()
let senha

do {
    senha = prompt("Digite a senha : ");
if (senha != "123") {

    console.log("incorreta");
}


} while (senha != "123");
console.log("login");




