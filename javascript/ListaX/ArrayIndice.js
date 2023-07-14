/* // Criando um array vazio
let meuArray = [];

// Adicionando elementos ao array
meuArray.push("Maçã");
meuArray.push("Banana");
meuArray.push("Laranja");

// Acessando elementos do array pelo índice
console.log(meuArray[0]); // Saída: "Maçã"
console.log(meuArray[1]); // Saída: "Banana"
console.log(meuArray[2]); // Saída: "Laranja"

// Iterando sobre os elementos do array usando um loop for
for (let i = 0; i < meuArray.length; i++) {
  console.log(meuArray[i]);
}

// Removendo o último elemento do array
meuArray.pop();

// Iterando sobre os elementos do array usando o forEach
meuArray.forEach(function(elemento) {
  console.log(elemento);
});

// Verificando se um elemento existe no array
console.log(meuArray.includes("Banana")); // Saída: true
console.log(meuArray.includes("Uva"));    // Saída: false */
/* 
// Criando um array com elementos
let numeros = [1, 2, 3, 4, 5];

// Acessando o tamanho do array
console.log(numeros.length); // Saída: 5

// Acessando elementos do array pelo índice
console.log(numeros[0]); // Saída: 1
console.log(numeros[3]); // Saída: 4

// Iterando sobre os elementos do array usando o for...of
for (let numero of numeros) {
  console.log(numero);
}

// Adicionando elementos no início do array
numeros.unshift(0); // Agora o array é [0, 1, 2, 3, 4, 5]

// Removendo o último elemento do array
numeros.pop(); // Agora o array é [0, 1, 2, 3, 4]

// Encontrando o índice de um elemento no array
let indice = numeros.indexOf(2);
console.log(indice); // Saída: 2

// Removendo elementos do array usando splice
numeros.splice(1, 2); // Remove 2 elementos a partir do índice 1
console.log(numeros); // Saída: [0, 3, 4]

// Concatenando arrays
let maisNumeros = [5, 6, 7];
let todosNumeros = numeros.concat(maisNumeros);
console.log(todosNumeros); // Saída: [0, 3, 4, 5, 6, 7] */

let prompt = require('prompt-sync')();
// Solicitando ao usuário uma lista de números separados por vírgula
let input = prompt("Digite uma lista de números separados por vírgula:");

// Convertendo a string de entrada em um array
let numeros = input.split(",");

// Exibindo os números digitados pelo usuário
console.log("Números digitados:", numeros);

// Calculando a soma dos números
let soma = 0;
for (let numero of numeros) {
  soma += parseInt(numero);
}

// Exibindo a soma dos números
console.log("Soma dos números:", soma);