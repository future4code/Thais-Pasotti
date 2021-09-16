//                 Exercícios Interpretação de Código

//       Exercício 1

/* let array
console.log('a. ', array) // Será impresso: a. undefined, pois não há nada no array

array = null
console.log('b. ', array) // Será impresso: b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // Será impresso no console o tamanho do Array: c.11

let i = 0
console.log('d. ', array[i]) // Será impresso o número 3 pois é o índice 0 do Array: d.3

array[i+1] = 19
console.log('e. ', array) // Será impresso: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]. 
// isso porque o código substituiu o "4" por "19". Índice 0 + 1 é o índice 1, substituído por um novo valor.

const valor = array[i+6] 
console.log('f. ', array) // NAO ENTENDI ESSA LOGICA. NÃO ENTENDI REAL.

//       Exercício 2

O valor impresso será: SUBI NUM ÔNIBUS EM MIRROCOS 27

//                     Exercícios de Escrita de Código

//       Exercício 1

const nomeUsuario = prompt("Digite seu nome:")
const emailUsuario = prompt("Agora, digite seu e-mail:")
console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeUsuario}!`)


//       Exercício 2

const comidasFavoritas = ["temaki", "panqueca", "feijoada", "coxinha", "bolo"]
console.log(comidasFavoritas)

console.log(`Essas são minhas comidas favoritas:
 ${comidasFavoritas[0]},
 ${comidasFavoritas[1]},
 ${comidasFavoritas[2]},
 ${comidasFavoritas[3]},
 ${comidasFavoritas[4]}.
 `)

const comidaFavoritaUsuario = prompt("Insira sua comida favorita:")
const novaArray = comidasFavoritas.splice (1,1,comidaFavoritaUsuario)
console.log(comidasFavoritas)

//       Exercício 3

const listaDeTarefas = []
const primeiraTarefaUsuario = prompt("Digite uma tarefa do seu dia-a-dia:")
const segundaTarefaUsuario = prompt("Digite uma segunda tarefa do seu dia-a-dia:")
const terceiraTarefaUsuario = prompt("Digite uma terceira tarefa do seu dia-a-dia:")

listaDeTarefas.push(primeiraTarefaUsuario, segundaTarefaUsuario, terceiraTarefaUsuario)

console.log(listaDeTarefas)

const indiceTarefa = Number(prompt("Insira o índice da tarefa já realizada: 0, 1 ou 2:"))

listaDeTarefas.splice(indiceTarefa, 1)
console.log(listaDeTarefas)


// DESAFIOS

const frase = prompt("Insira uma frase:")
const retornaArray = frase.split(" ")

console.log(retornaArray)
*/