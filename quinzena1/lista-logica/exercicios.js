// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const alturaRetangulo = Number(prompt("Insira a altura de um retângulo:"))
  const larguraRetangulo = Number(prompt("Insira a largura de um retângulo:"))
  console.log(alturaRetangulo*larguraRetangulo)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt("Insira o ano atual:"))
  const anoNascimento = Number(prompt("Insira o ano de seu nascimento:"))
  console.log(anoAtual - anoNascimento)
}

// Exercício 3
function calculaIMC() {
  const pesoEmKg = Number(prompt("Insira seu peso em kg:"))
  const alturaUsuario = Number(prompt("Insira sua altura em metros:"))
  console.log(pesoEmKg / (alturaUsuario*alturaUsuario))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Digite seu nome:")
  const idadeUsuario = prompt("Digite sua idade:")
  const emailUsuario = prompt("Digite seu e-mail:")
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let coresFavoritas = []
  const primeiraCor = prompt("Digite uma cor que você ama:")
  const segundaCor = prompt("Agora digite uma segunda:")
  const terceiraCor = prompt("Por fim, digite a terceira:")
coresFavoritas.push(primeiraCor, segundaCor, terceiraCor)
console.log(coresFavoritas)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const fraseUsuario = prompt("Insira uma string:")
    console.log(fraseUsuario.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  let custoEspetaculo = Number(prompt("Insira o custo de um espetáculo:"))
  const valorPorIngresso = Number(prompt("Insira o valor do ingresso:"))
 console.log(custoEspetaculo / valorPorIngresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const stringsUsuario = prompt("Insira uma frase:")
  const segundaStringUsuario = prompt("Insira outra frase:")
  const comparaFrases = stringsUsuario.length === segundaStringUsuario.length
  console.log(comparaFrases)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const primeiraString = prompt("Insira uma frase:")
  const segundaString = prompt("Insira outra frase:")
  const comparaStrings = primeiraString.toLowerCase() === segundaString.toLowerCase()
  console.log(comparaStrings)
}

// Exercício 10
function checaRenovacaoRG() {
  const anoPresente = Number(prompt("Insira o ano atual:"))
  const anoNascimentoUsuario = Number(prompt("Insira o ano em que você nasceu:"))
  const anoCarteiraIdentidade = Number(prompt("Insira o ano em que tirou sua Carteira de Identidade:"))
  const idadeDoUsuario = anoPresente - anoNascimentoUsuario
  const validadeRg = anoPresente - anoCarteiraIdentidade
  const resultadoValidacaoRg = (idadeDoUsuario <= 20 && validadeRg >= 5) || (idadeDoUsuario > 20 && idadeDoUsuario <= 50) && (validadeRg >= 10) || (idadeDoUsuario > 50 && validadeRg >= 15)
  console.log(resultadoValidacaoRg)

}

// Exercício 11
function checaAnoBissexto() {
  const ano = Number(prompt("Em que ano estamos?"))
  const condicaoPrimeira = (ano % 400) === 0 
  const condicaoSegunda = ((ano % 4) === 0) && ((ano % 100) != 0)
  console.log(condicaoPrimeira || condicaoSegunda)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem mais de 18 anos? (sim / nao)")
  const escolaridade = prompt("Você possui ensino médio completo? (sim / nao)")
  const disponibilidadeHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (sim / nao)")
  const aprovacaoLabenu = (idade === "sim") && (escolaridade === "sim") && (disponibilidadeHorario === "sim")
  console.log(aprovacaoLabenu)
}