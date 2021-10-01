//                  Exercícios de interpretação de código

//          Exercício 1
// a) Será impresso no console: cada item do Array, com seus respectivos index e o array inteiro:
/*
{nome: 'Amanda Rangel', apelido: 'Mandi'} 
apelido: "Mandi"
nome: "Amanda Rangel"
0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
1: {nome: 'Laís Petra', apelido: 'Laura'}
2: {nome: 'Letícia Chijo', apelido: 'Chijo'}
length: 3

{nome: 'Laís Petra', apelido: 'Laura'}
apelido: "Laura"
nome: "Laís Petra"
0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
1: {nome: 'Laís Petra', apelido: 'Laura'}
2: {nome: 'Letícia Chijo', apelido: 'Chijo'}
length: 3

{nome: 'Letícia Chijo', apelido: 'Chijo'}
apelido: "Chijo"
nome: "Letícia Chijo"
0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
1: {nome: 'Laís Petra', apelido: 'Laura'}
2: {nome: 'Letícia Chijo', apelido: 'Chijo'}
length: 3

//          Exercício 2
a) Será impresso no console um array com os nomes: "Amanda Rangel", "Laís Petra", "Letícia Chijo".

//          Exercício 3
a) Será impresso no console um novo array somente com itens que não possuem a string "Chijo".
Isso porque cada "item" é a linha toda do Array:

0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
1: {nome: 'Laís Petra', apelido: 'Laura'}
*/

//                  Exercícios de escrita de código

//          Exercício 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a)
 const nomeDosDoguinhos = pets.map((item) => {
   console.log(item.nome)
 })

//b)
const salsichinhas = pets.filter((item) => {
    return item.raca === "Salsicha"
 })
 
 console.log(salsichinhas)

// c)

const somentePoodles = (item) => {
    return item.raca === "Poodle"
 }
 
const descontoPoodles = pets.filter(somentePoodles)

const nomeDosPoodles = (item) => {
return  item.nome
}

const descontoParaPoodles = descontoPoodles.map(nomeDosPoodles)
console.log([
"Você ganhou um cupom de desconto de 10% para tosar o/a " + descontoParaPoodles[0],
"Você ganhou um cupom de desconto de 10% para tosar o/a " + descontoParaPoodles[1]
])

//          Exercício 2


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a)
 const nomesProdutos = produtos.map((item) => {
    console.log(item.nome)})

// b)
const descontoAplicado = produtos.map((preco) => {
    const nomes = preco.nome
    const desconto = (preco.preco * 0.95).toFixed(2)
    return {nomes, desconto}
})
console.log(descontoAplicado)

// c) 
const somenteBebidas = (item) => {
    return item.categoria === "Bebidas"
}

const bebidasOnly = produtos.filter(somenteBebidas)

const bebidasApenas = (item) =>{
    return item.nome
}
const mostraBebidas = bebidasOnly.map(bebidasApenas)
console.log([mostraBebidas])

// d)
const retornaProdutosYpe = produtos.filter((item) => {
return item.nome.includes("Ypê")
})
console.log(retornaProdutosYpe)

//e)
const nomeEprecoProdutosYpe = retornaProdutosYpe.map((item) => {
return "Compre " + item.nome + " " + "por R$ " + Number(item.preco).toFixed(2)
})
console.log(nomeEprecoProdutosYpe)