// Desafio 1: Vamos fazer as contas!

// SOMA 1
let pontuacao = 0
let novaPontuacao = 10
let total = pontuacao + novaPontuacao

// SOMA 2
let segundaFeira = 8
let terçaFeira = 6
let quartaFeira = 7
let quintaFeira = 9
let sextaFeira = 10

let totalHoras =
  segundaFeira + terçaFeira + quartaFeira + quintaFeira + sextaFeira

// SOMA 3
let salario1 = 1000
let salario2 = 2000
let salario3 = 3000
let totalSalarios = salario1 + salario2 + salario3

// Subração 1
let compra_a = 100
let compra_b = 200
let compra_c = 300
let estorno_a = 50

let total_compra = compra_a + compra_b + compra_c - estorno_a

// Subração 2
let ano_atual = 2025
let ano_nascimento = 1990
let minha_idade = ano_atual - ano_nascimento

// Subração 3
let total_moedas = 1000
let preco_artefato_1 = 100
let preco_artefato_2 = 200
let preco_artefato_3 = 300

let total_artefatos = preco_artefato_1 + preco_artefato_2 + preco_artefato_3

let troco = total_moedas - total_artefatos

// Multiplicação 1
let preco_produto_1 = 10
let quantidade = 3
let valor_total_compra = preco_produto_1 * quantidade

// Multiplicação 2
let largura = 5
let comprimento = 10
let areaRetangulo = largura * comprimento

// Multiplicação 3
let horas_trabalhadas = 160
let valor_hora = 100
let salario = horas_trabalhadas * valor_hora

//Divisão 1
let nota_1 = 10
let nota_2 = 8
let nota_3 = 7
let nota_4 = 9

let media = (nota_1 + nota_2 + nota_3 + nota_4) / 4

//Divisão 2
let metros = 10000
let quilometros = metros / 1000

// Desafio 2: Para ou ímpar
let num = 11

if (num % 2 === 0) {
  console.log("Par")
} else {
  console.log("Ímpar")
}

// Desafio 3: Calculo do IMC
let peso = 91
let altura = 1.75
let imc = peso / (altura * altura)

if (imc < 18.5) {
  console.log("Abaixo do peso")
}

if (imc >= 18.5 && imc < 24.9) {
  console.log("Peso normal")
}

if (imc >= 24.9 && imc < 29.9) {
  console.log("Sobrepeso")
}

if (imc >= 29.9) {
  console.log("Obesidade")
}

// Desafio 4: Calculo de distância de viagem e custo de combustível
let distancia = 100
let preco_combustivel = 6
let consumo_carro = 10

let combustivel_necessario = distancia / consumo_carro
let custo_viagem = combustivel_necessario * preco_combustivel

console.log(
  `O custo da viagem é de ${custo_viagem} reais e precisaremos de ${combustivel_necessario} litros de combustivel`
)
