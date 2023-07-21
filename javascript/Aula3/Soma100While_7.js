export function SomarNumerosAte100() {
let soma = 0;
let numero = 1;

while (numero <= 100) {
    
  soma += numero;
  numero++;
}

console.log(`A soma dos números de 1 a 100 é ${soma}.`);
}