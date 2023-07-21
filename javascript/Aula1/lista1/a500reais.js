let prompt = require('prompt-sync')()

let salario = parseFloat(prompt('Digite o salario  : '));

if (salario < 500) {

    soma = (salario * 30)/100
    novoSalario = salario + soma 

    console.log("aumento de 30% = " + novoSalario  )
 
}else{
     console.log(" Nao tem  aumento de 30%")
 }