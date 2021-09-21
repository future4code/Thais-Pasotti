//                  Exercícios de Interpretação de Código

//          Exercício 1
/* Será impresso no console.log:
Matheus Nachtergaele
Virginia Cavendish 
{canal: 'Globo', horario: '14h'}

//          Exercício 2
a. Será impresso no console:
idade: 3
nome: "Juca"
raca: "SRD"

idade: 3
nome: "Juba"
raca: "SRD"

idade: 3
nome: "Jubo"
raca: "SRD"

b. A sintaxe de três pontos permite criar novo objeto, mantendo propriedades anteriores.

//      Exercício 3
a. Será impresso: false e undefined.
b. Será impresso "false" pois é a propriedade que está em backender e "undefined" porque o objeto pessoa não tem altura atribuído a ele.


//                    Exercícios de escrita de código
//          Exercício 1
const pessoa = {
    nome: "Thais",
    apelidos: ["Thata", " Tha", " Thaisinha"]
}

function descricao(pessoa) {
    console.log(`Me chamo ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos}.`)
}
descricao(pessoa)

const novoObjeto = {...pessoa, apelidos: ["elfa mágica", "bruxa mística", "brilhante"]}
descricao(novoObjeto)

//          Exercício 2

const pessoa1 = {
    nome1: "Sid Vicious",
    idade1: 27,
    profissao1: "anarquista"
}

const pessoa2 = {
    nome2: "Spurgeon",
    idade2: 27,
    profissao2: "terrorista"
}

function retornaArray(pessoa1){
const array = [pessoa1.nome1, pessoa1.nome1.length, pessoa1.idade1,
pessoa1.profissao1, pessoa1.profissao1.length]
return array
}
console.log(retornaArray(pessoa1))

function retornaArraySpurgeon(pessoa2){
    const array2 = [pessoa2.nome2, pessoa2.nome2.length, pessoa2.idade2,
        pessoa2.profissao2, pessoa2.profissao2.length]
        return array2
}
console.log(retornaArray(pessoa2))

//          Exercício 3

const carrinho = []

const frutaSacolao1 = {
    nome: "maracujá",
    disponibilidade: true
}

const frutaSacolao2 = {
    nome: "banana",
    disponibilidade: true
}

const frutasacolao3 = {
    nome: "abacaxi",
    disponibilidade: true
}

function frutasDoCarrinho(frutaSacolao1, frutaSacolao2, frutasacolao3){
    carrinho.push(frutaSacolao1, frutaSacolao2, frutasacolao3)
    return carrinho
}
console.log(frutasDoCarrinho(frutaSacolao1, frutaSacolao2, frutasacolao3))

console.log(carrinho)

*/