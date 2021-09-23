//                  Exercícios de interpretação de código

//       Exercício 1 
/*
a) O código recebe um número por input do usuário e testa se ele é ou não par.

b) Ele imprime no console "Passou no teste" para todos os números pares.

c) A mensagem é "Não passou no teste" para todos os números ímpares. 

//      Exercício 2
a) Para que serve o código acima? O código serve para que o usuário escolha uma fruta e tenha
o retorno do valor da mesma. Caso o input seja uma fruta não encontrada, o valor é de R$ 5.

b) Se o valor de fruta for `"Maçã"`, a mensagem impressa no console será:
O preço da fruta Maçã é R$ 2.25

c) Se retirássemos o break do item "Pêra" o console imprimiria:
O preço da fruta Pêra é R$ 5. 

//      Exercício 3
a) A primeira linha recebe um input de número do usuário através do prompt.

b) Se o usuário digitasse o número 10, seria impresso no console: "Esse número passou no teste".
Se fosse o número inserido fosse -10, nada seria impresso.

c) Haverá 0 erro "mensagem is not defined", isso porque a variável mensagem está dentro do escopo
local dentro da condicional If, não podendo ser reconhecida no escopo global fora da condicional.


//                  Exercícios de escrita de código

//      Exercício 1
const idadeUsuario = Number(prompt("Digite sua idade:"))

if(idadeUsuario > 18){
    console.log ("Você pode dirigir!")
}else{
    console.log ("Você não pode dirigir ainda, bebê")
}

//      Exercício 2
const verificaTurnoEstudo = prompt("Em qual turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno):")

if (verificaTurnoEstudo === "M"){
    console.log("Bom dia!")
} else if(verificaTurnoEstudo === "V"){
    console.log("Boa tarde!")
}else if(verificaTurnoEstudo === "N"){
    console.log("Boa noite!")
}

//      Exercício 3
const verificaTurnoEstudo = prompt("Em qual turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno):")

switch(verificaTurnoEstudo){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
}

//      Exercício 4

 const generoDoFilme = prompt("Qual o gênero do filme que você quer assistir?")
 const valorIngresso = Number(prompt("Qual valor você está disposto a pagar pelo ingresso?"))

 if(generoDoFilme === "fantasia" && valorIngresso < 15){
     console.log("Bom filme!")
 }else{
     console.log("Escolha outro filme :(")
 }

//                  Desafios

//      Desafio 1

 const generoDoFilme = prompt("Qual o gênero do filme que você quer assistir?")
 const valorIngresso = Number(prompt("Qual valor você está disposto a pagar pelo ingresso?"))
 const lanchinhoPraAcompanharOFilme = prompt("Qual lanchinho você vai comprar?")

 if(generoDoFilme === "fantasia" && valorIngresso < 15){
    console.log(`Bom filme! Aproveite o seu ${lanchinhoPraAcompanharOFilme}!`)
}else{
    console.log("Escolha outro filme :(")
}

//      Desafio 2

let nomeCompleto = prompt("Insira seu nome completo:")
let tipoDeJogo = prompt("Insira o tipo do jogo que quer assistir (IN - Internacional) ou (DO - Doméstico):").toUpperCase()
let etapaDoJogo = prompt("Insira a etapa do jogo que deseja (SF - Semi-final), (DT - Decisão de Terceiro lugar) ou (FI - final):").toUpperCase()
let tipoDoIngresso = Number(prompt("Selecione a categoria (1, 2, 3 ou 4):"))
let quantidadeDeIngresso = Number(prompt("Insira a quantidade de Ingressos desejada:"))

    if (etapaDoJogo === "SF" && tipoDoIngresso === 1) {
        valorDoIngresso = 1320
    } else if (etapaDoJogo === "SF" && tipoDoIngresso === 2){
        valorDoIngresso = 880
    } else if (etapaDoJogo === "SF" && tipoDoIngresso === 3){
        valorDoIngresso = 550
    } else if (etapaDoJogo === "SF" && tipoDoIngresso === 4){
        valorDoIngresso = 220
    } else if (etapaDoJogo === "DT" && tipoDoIngresso === 1){
        valorDoIngresso = 1980
    } else if (etapaDoJogo === "DT" && tipoDoIngresso === 2){
        valorDoIngresso = 1320
    } else if (etapaDoJogo === "DT" && tipoDoIngresso === 3){
        valorDoIngresso = 880
    } else if (etapaDoJogo === "DT" && tipoDoIngresso === 4){
        valorDoIngresso = 330
    } else if (etapaDoJogo === "FI" && tipoDoIngresso === 1){
        valorDoIngresso = 1980
    } else if (etapaDoJogo === "FI" && tipoDoIngresso === 2){
        valorDoIngresso = 1320
    } else if (etapaDoJogo === "FI" && tipoDoIngresso === 3){
        valorDoIngresso = 880
    } else if (etapaDoJogo === "FI" && tipoDoIngresso === 4){
        valorDoIngresso = 330
    }

    if (tipoDeJogo === "DO") {
        valorDoIngresso = valorDoIngresso;
    } else if (tipoDeJogo === "IN") {
        valorDoIngresso = valorDoIngresso / 4.10;
    } else {
        console.log ("Escolha o tipo de jogo entre IN para jogos internacionais ou DO para jogos domésticos")
    }

    let valorTotalDosIngressos = valorDoIngresso * quantidadeDeIngresso;

    if (tipoDeJogo === "DO") {
        tipoDeJogo = "Nacional"
    }
    if (tipoDeJogo === "IN") {
        tipoDeJogo = "Internacional"
    }
    if (etapaDoJogo === "SF") {
        etapaDoJogo = "Semi-final"
    } else if (etapaDoJogo === "DT") {
        etapaDoJogo = "Disputa de 3º Lugar"
    } else if (etapaDoJogo === "FI") {
        etapaDoJogo = "Final"
    }

    if (tipoDeJogo === "Nacional") {
    console.log(
    `--- Dados da compra ---
    Nome do cliente:  ${nomeCompleto} 
    Tipo do jogo:  ${tipoDeJogo} 
    Etapa do jogo:  ${etapaDoJogo} 
    Categoria:  ${tipoDoIngresso} 
    Quantidade de Ingressos:  ${quantidadeDeIngresso} ingressos 
    ---Valores--- 
    Valor do ingresso:  R$ ${valorDoIngresso}
    Valor total:  R$ ${valorTotalDosIngressos}
    `)
    } else {
    console.log(
    `--- Dados da compra ---
    Nome do cliente:  ${nomeCompleto} 
    Tipo do jogo:  ${tipoDeJogo} 
    Etapa do jogo:  ${etapaDoJogo} 
    Categoria:  ${tipoDoIngresso} 
    Quantidade de Ingressos:  ${quantidadeDeIngresso} ingressos 
    ---Valores--- 
    Valor do ingresso:  U$ ${valorDoIngresso}
    Valor total:  U$ ${valorTotalDosIngressos}
    `)   
    }
    */