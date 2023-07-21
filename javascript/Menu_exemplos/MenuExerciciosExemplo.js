import promptSync from "prompt-sync"

const prompt = promptSync()

import { ZeroaDez } from "../Aula3/0a10for_1.js";
import { Pares1a10 } from "../Aula3/ParesFor-2.js";
import { Impares0a50 } from "../Aula3/ImparesFor-3.js";
import { Tabuada } from "../Aula3/TabuadaFor_4.js";
import { Fibo } from "../Aula3/Fibonacci_5.js";
import { Pares0a20 } from "../Aula3/ParesWhile_6.js";
import { SomarNumerosAte100 } from "../Aula3/Soma100While_7.js";
/* import { MaiorIdadade } from "../Aula3/Maior18_8.js";
import { RegressivaAteZero } from "../Aula3/RegressivaWhile_9.js";
import { DiferenteDeZero } from "../Aula3/Diferente0While_10.js"; */

/* import {a500reais} from "..//Aula1/lista1/a500reais" */
/* import { verificarMaiorIdade } from "../Aula2/Exercicios17_07/WHILEexe3.js"; */  //importando o arquivo

let exercicio;
let continuar;

do {
    exercicio = parseInt(prompt("Digite um numero que represente um exercicio de 1 a 10: "))

    switch (exercicio) {

        case 1:
            ZeroaDez()
            break;

        case 2:
            Pares1a10()
            break;
        case 3:
            Impares0a50()
            break;

        case 4:
            Tabuada()
            break;
        case 5:
            Fibo()
            break;

        case 6:
            Pares0a20()
            break;
        case 7:
            SomarNumerosAte100()
            break;

      /*   case 8:
            MaiorIdadade()
            break;

        case 9:
            RegressivaAteZero()
            break;

        case 10:
            DiferenteDeZero()
            break; */
        


        default:

            break;
    }
    continuar = prompt("Deseja continuar? Digite s para sim ou n para nao: ")

} while (continuar.toLocaleLowerCase() === "s");  //toLocaleLowerCase() - funçao que força a string ser minuscula "s" != "S'  === compara valor e tipo




/* 
const prompt = promptSync(); */

/* ZeroaDez();
Pares1a10();
Impares0a50();
Tabuada();
Fibo();
Pares0a20();
SomarNumerosAte100();
MaiorIdadade();
RegressivaAteZero();
DiferenteDeZero();
 */













/* 
//menu para escolher qual exercicio o usuario escolher - (proprio arquivo)

let exercicio;
let continuar;

do {

    exercicio = parseInt( prompt("Digite um numero que represente um exercicio de 1 a 4: "))
   
        switch (exercicio) {
            case 1:
                //chamando função helloWorld();
                helloWorld("Hello, world!");
                break;

            case 2:
                //objeto
               let aluno = {
                nome: "Alan.;'[]",
                idade: 19,
                hardSkils: ["figma","HTML", "CSS", "web responsivo"]
               }
               console.log(aluno.nome, aluno.idade, aluno.hardSkils);
            //    console.log("Objeto aluno", aluno);
            //    console.log("Olá", aluno.nome);
                break;

            case 3:
                verificarMaiorIdade();
                break;

            default:
                console.log("Digite um numero de 1 a 4: ");
                break;
        }

        continuar = prompt("Deseja continuar? Digite s para sim ou n para nao: ")


} while (continuar.toLocaleLowerCase() === "s");  //toLocaleLowerCase() - funçao que força a string ser minuscula "s" != "S'  === compara valor e tipo



function helloWorld(frase){
    console.log(frase);
} */