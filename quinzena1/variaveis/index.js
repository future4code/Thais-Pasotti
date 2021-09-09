/*****************************************************************************************************************************

    Exercícios de interpretação de código

    1. Primeiramente será impresso no console o valor de b, que é 10. Em seguida será redeclarado o valor de B sendo
    5 e o valor de "a" se manterá como 10.
    Aparecendo no console (10, 5)

    2. No console será impresso 10, 10, 10. Pois "c" adquiriu o valor de "a", que é 10. B teve seu valor alterado
    para 10, visto que que "c" já tinha o valor 10. Por fim, "a" manteve o mesmo valor (10), que era o mesmo que b.
    Todas essas alterações só foram possívevis por conter variáveis do tipo let e uma variável não declarada.

    3. Os nomes sugeridos são: "horasDeTrabalho" e "salarioDiario"

****************************************************************************************************************************/

/*

    // Exercícios de escrita de código

    // 1. 

    // A | B | C 

    let nome 
    let idade 

    console.log(typeof idade)
    console.log(typeof nome)

    
    // D | As variáveis que não tiveram valor atribuído a elas serão impressas no console como Undefined.   


    // E | 

    let nomeUsuario = prompt("Qual é seu nome?")
    let idadeUsuario = prompt("Qual é a sua idade?")

    console.log(nomeUsuario, idadeUsuario)

    // F | 

    console.log(typeof nomeUsuario)
    console.log(typeof idadeUsuario)

    // Notei que as variáveis no console voltam como String, porém a idade do usuário é uma variável de número inteiro
    // pois a caixinha do console enxerga tudo como String, no caso se eu quisesse que a variável idadeUsuario voltasse como
    // número, teria que fazer uma conversão.

    // G |

    console.log (`Olá ${nomeUsuario} você tem idade ${idadeUsuario} anos`)

    // 2. 


    let guardarONome = prompt("Qual o nome do seu cachorro?")

    let perguntaDois= prompt("Você se sente confortável agora?")
    let perguntaTres = prompt("Você já bebeu água hoje?")

    let guardarONomeDoSeuCachorroAqui = guardarONome // Joy


    let respostaDois = perguntaDois
    let respostaTres = perguntaTres


    console.log("Você é feliz?", respostaUm)
    console.log("Você se sente confortável agora?", respostaDois)
    console.log("Você já bebeu água hoje?", respostaTres) 


    let perguntaUm = prompt("Você é feliz?")
    let perguntaDois= prompt("Você se sente confortável agora?")
    let perguntaTres = prompt("Você já bebeu água hoje?")

    let respostaUm = perguntaUm
    let respostaDois = perguntaDois
    let respostaTres = perguntaTres

    console.log("Você é feliz?", respostaUm)
    console.log("Você se sente confortável agora?", respostaDois)
    console.log("Você já bebeu água hoje?", respostaTres) 

    // 3.

    let a = 10
    let b = 25
    let c

    c = b
    b = a
    a = c

    console.log("O novo valor de a é", a)
    console.log("o novo valor de b é", b)

//  console.log(`o novo valor de c é ${c}`) 
//  poderia utilizar inteprolação: ${VARIAVEL}