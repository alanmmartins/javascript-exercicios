//fibofibo Imprimir os primeiros 10 números da sequência de Fibonacci.
/*  let n = 10;
let fibonacci = [0, 1];

for (let i = 2; i <= n; i++) {
  fibonacci[i] = fibonacci[i - 1]  + fibonacci[i - 2] ;
}

console.log("Sequência de Fibonacci até " + n + ": " + fibonacci);  */

/* let fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci,((1),(2),(3),(4),(5),(6),(7),(8),(9),(10))); */
export function Fibo() {

let anterior = 0;
let atual = 1;
console.log(anterior);
console.log(atual);
for (let i = 0; i <= 8; i++) {
  console.log(atual);

  let proximo = anterior + atual;

  anterior = atual;

  atual = proximo;

  /* anterior = atual; */

}}