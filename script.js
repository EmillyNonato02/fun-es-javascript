/*
//Exemplo1
//um bloco de código que só é executado quando for chamado

function mostrarAlerta(){
    let nome= "Marcio"
    alert("Seja bem-vindo(a)," + nome)
}

mostrarAlerta()

//Exemplo2

function somar(valorA, valorB){
    alert(valorA+valorB)
}

somar(20,12)

//Exemplo3

function mensagemBoasVindas (nome, cargo){
    return `Seja bem-vindo(a) ${cargo} ${nome}`
}

let nome=("Digite o nome do funcionário:")
let cargo=("Digite o cargo do funcionário:")

alert(mensagemBoasVindas(nome, cargo))
console.log(mensagemBoasVindas(nome, cargo))

//Exemplo4

function multipicacao(numero1, numero2){
    return numero1*numero2
}

let multiplicacao1 = multiplicacao(6, 7)
let multiplicacao2 = multiplicacao(9, 10)
let multiplicacao3 = multiplicacao(12, 25)

console.log(multiplicacao1)
console.log(multiplicacao2)
console.log(multiplicacao3)

//Exemplo5

function parOuImpar(numero){
    if(numero%2===0){
        return"PAR"
    }
    return "ÍMPAR"
}

console.log(parOuImpar(14))

//Exemplo6
//função anônima antiga

let numero=10

const button=document.querySelector("button")

button.addEventListener("click", function(){
    numero++
    console.log(numero)
})

console.log(numero)

//Exemplo7

let numero=10

const button=document.querySelector("button")

button.addEventListener("click", ()=> {
    numero++
    console.log(numero)
})

console.log(numero)

//Exemplo8

let somar= (valor1, valor2) => valor1+valor2
let multipicacao= (numero1, numero2) => numero1*numero2

console.log(somar(10, 20))
*/