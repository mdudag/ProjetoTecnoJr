/* var nome = prompt("Qual é o seu nome?")
alert("Muito prazer, " + nome + "!")
alert("Bem-vindo ao meu site!") */

/* (number + number) para adição
(string + string) para concatenação */

// para transformar string em número: Number()

/* var n1 = Number(prompt("Informe um número"))
var n2 = Number(prompt("Informe outro número"))
var s = n1 + n2
alert("A soma desses números é " + s) */

// para transformar número em string: String(variável) ou variável.toString()

/* var n1 = Number(prompt("Informe um número"))
var n2 = Number(prompt("Informe outro número"))
var s = n1 + n2
alert("A soma desses números é " + String(s)) */

// usando Template String: ${variável}

/* var nome = "Maria"
var idade = 19
var nota = 9.1

alert(`A aluna ${nome} de ${idade} anos tirou a nota ${nota} na prova de hoje`)

var n1 = Number(prompt("Informe um número"))
var n2 = Number(prompt("Informe outro número"))
var s = n1 + n2

alert(`A soma entre o número ${n1} e o número ${n2} é igual a ${String(s)}`) */

/* variável.length - para saber o tamanho da string
    variável.toUpperCase() - para jogar para letras maiúsculas
    variável.LowerCase() - tudo para letra minúscula
*/ 

// usando o variável.length, variável.toUpperCase() e variável.toLowerCase()


// \n || \t

// document.write - para escrever no site; document.writeln - para escrever no site e pular uma linha

/* var nome = prompt("Informe seu nome")

document.writeln(`Olá <strong> ${nome} </strong>! Seu nome tem ${nome.length} letras <br>`)
document.write(`Seu nome em letras maiúsculas fica assim: ${nome.toUpperCase()} </br>`)
document.write(`Seu nome em letras minúsculas fica assim: ${nome.toLowerCase()}`) */

// usando variável.toFixed(casa decimais) e variável.toFixed(casa decimais).replace('', '')

/* var n1 = 1201.3

alert(`Valor de n1: ${n1.toFixed(2)}`)
alert(`Valor de n1 com vírgula: R$ ${n1.toFixed(3).replace('.', ',')}`)
alert(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})) */

// operador de identidade

/* alert(2 === 2) // true
alert(2 === '2') // fase  */

// selecionando 

/*
var corpo = document.body
corpo.style.background = 'black'

var b = document.div
b.innerText


var c = document.getElementsByName('div')[1]

var a = document.getElementById('cabeçalho')

var d = document.querySelector('#cabeçalho')
*/

