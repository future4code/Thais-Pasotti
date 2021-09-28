//                  Exercícios de interpretação de código 
/*
//      Exercício 1
// O código está somando os números menores de 5 (1 + 2 + 3 + 4) e adicionando o valor 1 de cada vez em i, somando com o i anterior.

//      Exercício 2
// a) Será impresso no console: 19, 21, 23, 25, 27, 30
// b) Ele é suficiente. Seria apenas retirar a condicional de números maiores que 18 que ele acessaria todos os valores dos índices.

//      Exercício 3
// Será impresso no console:
*
**
***
****

//                  Exercícios de escrita de código
//      Exercício 1 

// COM WHILE:

const howManyPets = Number(prompt("How many pets do you have?"))
const petsNames = []

if (howManyPets === 0){
    console.log("Too bad! You should adopt a pet!")
}else if (howManyPets !== 0) {
    let i = 0
    while(i < howManyPets){ 
        const names = prompt("Write your pet's name:") 
        petsNames.push(names)
        i++ // // acrescente de 1 em 1
    }
    console.log(petsNames)
}

// COM FOR:

const quantidadeBichos = Number(prompt("Insira a quantidade em número de bichinhos que você tem:"))
let comBichinhos = []
if (quantidadeBichos === 0) {
    console.log("Que peninha, bora adotar um pet, companheiro!")
} else {  
    for (let i=0; i< quantidadeBichos; i++) {
    const nomedosPets = prompt('Insira o nome dos seus bichinhos:')
    comBichinhos.push(nomedosPets)
     }       
    }
console.log(comBichinhos) 



//      Exercício 2
// a)
// COM FOR
const arrayOriginal = [20, 40, 60, 80]

const imprimeArrayOriginal = (arrayOriginal) => {
for (i = 0; i < arrayOriginal.length; i++){ 
    const imprimeArray = arrayOriginal[i] 
    console.log(imprimeArray) 
}
}

// COM FOR OF
const imprimeElementosArray = (array) => {
for (const elemento of array) { 
console.log(elemento) 
}
}
imprimeElementosArray(arrayOriginal) 

// b)
const imprimeElementosDivididosPor10 = (array) => { 
for (const elemento of array) {
console.log(elemento / 10) 
}
}
imprimeElementosDivididosPor10(arrayOriginal) 


// c)
const imprimeArrayDePares = (array) => { 
const arrayDePares = [] 
for (const elemento of array) {
if ((elemento % 2) === 0) {
arrayDePares.push(elemento) 
}
}
console.log(arrayDePares)
}
imprimeArrayDePares(arrayOriginal)


// d)
const retornaArrayString = (array) => {
const novoArray = []
for (const elemento of array) {
novoArray.push(`O elemento do índex ${array.indexOf(elemento)} é ${elemento}`)
}
return novoArray
}
console.log(retornaArrayString(arrayOriginal))

// e)
const imprimeMaiorEMenor = (array) => {
let maiorElemento = 0
for (const elemento of array) {
  if (elemento > maiorElemento) {
    maiorElemento = elemento
  }
}
    
let menorElemento = maiorElemento
for (const elemento of array) {
  if (elemento < menorElemento) {
    menorElemento = elemento
  }
}
    
console.log(maiorElemento, menorElemento)
}
    
imprimeMaiorEMenor(arrayOriginal)

*/