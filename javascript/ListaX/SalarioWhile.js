/* Enquanto(While) -> Executa uma instrução até que uma condição
especifica seja verdadeira.
Exemplo: Suponha que você tenha um salário inicial de R$1000. Escreva
um código que incremente seu salário em R$100 repetidamente até que
ele atinja R$5000. E a cada aumento, mostre o valor atual do salário. */

let salario = 1000

while (salario < 5000) {
salario += 100;
console.log("O salário ainda é R$" + salario);
}