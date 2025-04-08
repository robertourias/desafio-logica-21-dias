// Desafio 1: Rendimento de aplicação financeira
let capital_investido = 1000
let taxa_juros_ano = 0.12
let anos_investidos

for (let i = 0; i <= anos_investidos; i++) {
  capital_investido += capital_investido * taxa_juros_ano
}

console.log(`O montante da aplicação é de R$${capital_investido.toFixed(2)}`)

// Desafio 2: Contagem regressiva para lançamento de foguete
let segundos_restantes = 10

for (let i = segundos_restantes; i >= 0; i--) {
  if (i === 3) {
    console.log("Atenção!", i)
  } else if (i === 0) {
    console.log("Lançamento!", i)
  } else {
    console.log(i)
  }
}

// Desafio 3: Calculo de juros
let valor_investido = 1000
let taxa_juros_anual = 0.05
let valor_meta = valor_investido * 2
let anos_investidos = 0

while (valor_investido < valor_meta) {
  valor_investido += valor_investido * taxa_juros_anual
  anos_investidos++
}

console.log(
  `O valor investido será de R$${valor_investido.toFixed(
    2
  )} em ${anos_investidos} anos`
)

// Desafio 4: Compra parcelada
let valor_compra = 1000
let numero_parcelas = 12
let valor_parcela = valor_compra / numero_parcelas

for (let i = 0; i < numero_parcelas; i++) {
  console.log(
    `Parcela ${i + 1}: R$${valor_parcela.toFixed(2)}, resta pagar ${
      numero_parcelas - i
    } parcelas no total de R$${(valor_compra - valor_parcela * i).toFixed(2)}`
  )
}
