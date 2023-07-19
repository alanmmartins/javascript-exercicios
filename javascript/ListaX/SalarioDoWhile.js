/* Faça Enquanto(Do While) -> É possível também fazer com que o while
execute ao menos uma vez seu bloco de código antes da verificação.

Exemplo: Suponha que você tenha um salário inicial de R$1000. Escreva um
código que incremente seu salário em R$100 repetidamente até que ele
atinja R$5000. E a cada aumento, mostre o valor atual do salário.
 */
let aumento = 1000;

do {
console.log("O salário ainda é R$" + aumento);

aumento += 100;
} while (aumento <= 5000)