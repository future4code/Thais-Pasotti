// EXERCÍCIO 01
function inverteArray(array) {
  let retorna = []
  for(let i = array.length-1; i >= 0; i--){
    retorna.push(array[i])
  }
  return retorna
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let listaNumerosParesAdois = []
  for(let valor of array){
    if(valor % 2 === 0){
      listaNumerosParesAdois.push(valor ** 2)
    }
  }
  return listaNumerosParesAdois
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let listaDeNumerosPares = []
  for (let item of array){
  if(item % 2 === 0){
    listaDeNumerosPares.push(item)
  } 
  }
  return listaDeNumerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  return Math.max.apply(null, array)
}


// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
const respostas = [false, false, true, true, true]
return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && b === c){
    return "Equilátero"
  } else if (a !== b  && b !== c){
  return "Escaleno"
} else {
  return "Isósceles"
}}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  let retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * (lado1 + lado2)),
    area: lado1 * lado2
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  
pessoa.nome = "ANÔNIMO"

return pessoa
}


// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
