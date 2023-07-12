let prompt = require('prompt-sync')()/* () */

//  let nome  = prompt("Digite seu nome: ")
// console.log("Ola " + nome ) 
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
// let name = prompt('Informe seu nome:');
// console.log('Olá, ' + name + '!');
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
// sequencia 0  A 20 
/* let n = 20;

for (let i = 0; i <= n; i++) {
  console.log(i);
  if (n === i) {
    console.log("respiraa");
  }
} */
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
// 20 a 10
/* let n = 20;

for (let i = n; i >= 0; i--) {
  console.log(i);
  if (i === 0) {
    console.log("inspira");
  }
} */

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//fibofibo
/* let n = 10;
let fibonacci = [0, 1];

for (let i = 2; i <= n; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Sequência de Fibonacci até " + n + ": " + fibonacci); */

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//mostra posicao array
/* let ordem = ["x1", "y2", "z3"];
console.log("mostra o que vc colocou no array[x,y,z] " + ordem [2]); */

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
/* let n = 10;
let fatorial = 1;

for (let i = 1; i <= n; i++) {
  fatorial *= i;
}

console.log("Fatorial de " + n + ": " + fatorial); */
//n=numero q vc vai fatorar
//exenplo
// 6	720
// 7	5.040
// 8	40.320
// 9	362.880
// 10	3.628.800
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//mostra string numero
/* let str = "42"; // The string to convert
let num = parseInt(str); // Convert the string to an integer

console.log(num); // Output the converted number */
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//so reconhe numero
/* let num1 = 5; 
let num2 = 7; 
let sum = num1 + num2; 

console.log(sum);  */
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//readline 
/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    let soma = parseInt(num1) + parseInt(num2);
    console.log("A soma é: " + soma);

    rl.close();
  });
}); */

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

/* =================================================numerolola  */
// let numero = prompt("Digite um numnero: ")

// if (numero > 10) {
//     console.log("Maior que 10")
// }

// else if (numero == 10) {
//     console.log("E 10 memo")
// }

// else {
//     console.log("Menor que 10")
// }
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
/* ==============================================letra */
// let letra = prompt("digite uma letra: ")
// if (letra == "a") {
//     console.log("a")

// }else if (letra == "letra b") {
//     console.log(" b")

// }else if (letra == "c"){
//     console.log("letra c")

// }else {
//     console.log("errooooouu")
// }
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
/*======================================== switch */
//let letra = prompt("digite uma letra: ")
// switch (letra) {
//     case "a":
//         console.log("letra a")
//         break;

//     case "b":
//         console.log("letra b")
//         break;

//     case "c":
//         console.log("letra c")
//         break;

//     default:
//         console.log("errooooouu")
//         break;
// }
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
/*  let pNum = prompt("digite primeiro numero: ")
 let sNum = prompt("digite segundo numero: ")
 
 let soma = pNum + sNum;
console.log("A soma e: " + soma) */

/* let num1 = prompt('Digite o primeiro número: ');
let num2 = prompt('Digite o segundo número: ');

let soma = parseInt(num1) + parseInt(num2);
console.log("A soma é: " + soma); */
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

/* let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));

let soma = parseInt(num1) + parseInt(num2);
console.log("A soma é: " + soma)
if (soma > 10) {
    console.log("A soma e : " + soma + " e e maior que 10")

}else if (soma == 10) {
    console.log("A soma e : " + soma + " e e igual que 10")
    
}else{
    console.log("A soma e : " + soma + " e e menor que 10")
} */
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
/* let letra = prompt ("Digite uma letra: ")
let numero = prompt ("Digite uma numero: ")

if (letra == "a" && numero == "1") {
    console.log("Acertouuuuu")
    
}else{
    console.log("Errooouu")
} */
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//e par ou impar
// let numero = parseInt( prompt ("Digite um numero: "))


//   if (numero % 2 === 0) {
//     console.log("E par.");
//   } else {
//     console.log("E impar.");
//   }
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

/* let numero = parseInt( prompt ("Digite um numero: "))

let restante = numero % 2

if (restante  != 0 ) {
    console.log("e impar")    

}else{
    console.log("e par")
} */

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\