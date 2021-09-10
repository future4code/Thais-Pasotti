//                       Exercícios de interpretação de código

/* 
      EXERCÍCIO 1

const bool1 = true
const bool2 = false
const bool3 = !bool2 // true

let resultado = bool1 && bool2 // true && false -> false
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 // true && false && true -> false
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) // true && (true) -> true
console.log("c. ", resultado)

console.log("d. ", typeof resultado) // boolean

        EXERCÍCIO 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero // O colega esqueceu que as variáveis retornam string por padrão e
console.log(soma) //  "une" os dois números, sem somá-los, recebidos pelo prompt. As variáveis precisariam estar com o Number atribuído a elas.

        EXERCÍCIO 3
Essa seria minha solução para o problema: 

let primeiroNumero = Number(prompt("Digite um número:"))
let segundoNumero = Number(prompt("Digite outro número:"))

const soma = primeiroNumero + segundoNumero
console.log(soma)

const diferencaIdade = primeiroNumero - segundoNumero
console.log(diferencaIdade)


                          Exercícios de escrita de código
        
        
      EXERCÍCIO 1 

let idadeUsuario = Number(prompt("Insira sua idade:"))
let idadeAmigo = Number(prompt("Insira a idade de seu melhor amigo ou melhor amiga:"))
let comparaIdades = idadeUsuario > idadeAmigo
console.log("Sua idade é maior do que a do seu amigo?", comparaIdades)

      EXERCÍCIO 2
      
let numeroPar = Number(prompt("Insira um número par:"))
let restoDivisao = numeroPar % 2

console.log(restoDivisao)  //Notei que os restos foram 0 para números pares e 1 para ímpares.


      EXERCÍCIO 3

let idadeAnos = Number(prompt("Insira sua idade em anos:"))
let idadeMeses = idadeAnos * 12
let idadeDias = idadeAnos * 365
let idadeHoras = idadeAnos * 8760

console.log(idadeMeses)
console.log(idadeDias)
console.log(idadeHoras)

      EXERCÍCIO 4
let numeroUm = Number(prompt("Insira um número:"))
let numeroDois = Number(prompt("Insira outro número:"))

let numeroMaior = numeroUm > numeroDois
let numeroIgual = numeroUm === numeroDois

let numeroDivisivel = numeroUm % 2
let numeroDivisivel2 = numeroDois % 2
let comparaDivis = numeroDivisivel === numeroDivisivel2

let divisivelOposto = numeroDois % 2
let diviselOposto2 = numeroUm % 2
let comparaOposto = divisivelOposto !== diviselOposto2


console.log("O primeiro número é maior do que o segundo?", numeroMaior)
console.log("O primeiro número é igual ao segundo?", numeroIgual)
console.log("O primeiro número é divisível pelo segundo?", comparaDivis)
console.log("O segundo número é divisível pelo primeiro?", comparaOposto)


        DESAFIO

===========> FIQUEI MUITO TRISTE PQ O DESAFIO PARECE PARA UM MESTRE EM FÍSICA :'(  <============

*/