// Desafio 1: Renovação da CNH
let idade = 37
let primeiro_carteira = true
let tempo_vencimento: number

if (idade >= 18 && primeiro_carteira) {
  tempo_vencimento = 1
} else if (!primeiro_carteira && idade >= 18 && idade < 50) {
  tempo_vencimento = 10
} else if (!primeiro_carteira && idade >= 50 && idade < 70) {
  tempo_vencimento = 5
} else {
  tempo_vencimento = 3
}

console.log(`Você pode renovar sua CNH em ${tempo_vencimento} anos`)

// Desafio 2: Perfermance de aluno
let nota_aluno = 8

if (nota_aluno < 5) {
  console.log("Insuficiente")
} else if (nota_aluno < 6) {
  console.log("Regular")
} else if (nota_aluno < 7.5) {
  console.log("Bom")
} else if (nota_aluno < 9) {
  console.log("Muito bom")
} else {
  console.log("Otimo")
}

// Desafio 3: Transforme o código em uma condição ternária
let nota = 8
let status: string

status = nota >= 70 ? "Aprovado" : "Reprovado"

console.log(status)

// Desafio 4: Condição ternária com condição mais complexa
let saldo = 1000
let conta_ativa = true

let pode_comprar =
  saldo > 500 && conta_ativa ? "Você pode comprar" : "Você não pode comprar"

console.log(pode_comprar)

// Desafio 5: Cancela de estacioamento
let estado_cancela = 1

switch (estado_cancela) {
  case 1:
    console.log("Cancela aberta")
    break
  case 2:
    console.log("Cancela fechada")
    break
  default:
    console.log("Em manutenção")
}

// Desafio 6: Sistem de PDV
let tipoProduto = "alimento"
let precoProduto = 500
let percentualDesconto: number

switch (tipoProduto) {
  case "alimento":
    percentualDesconto = 0.05
    break
  case "eletronico":
    percentualDesconto = 0.1
    break
  case "vestuario":
    percentualDesconto = 0.2
    break
  case "livro":
    percentualDesconto = 0.5
    break
  default:
    percentualDesconto = 0
}

console.log(`O percentual de desconto é de ${percentualDesconto * 100}%`)
console.log(
  `O preço do produto com desconto é de ${
    precoProduto - precoProduto * percentualDesconto
  }`
)
