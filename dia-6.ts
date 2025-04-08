// Desafio 1: Calcular o IMC
function calcularIMC(peso: number, altura: number): number {
  return peso / altura ** 2
}

console.log(calcularIMC(91, 1.75))

// Desafio 2: Dia da semana por extenso
function diaDaSemana(numero: number): string {
  const diasDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ]
  return diasDaSemana[numero]
}

console.log(diaDaSemana(1))

// Deasfio 3: Aplicação financeira
function valorFinalInvestimento(
  valorAplicado: number,
  taxaJuros: number,
  periodo: number
): number {
  return valorAplicado * (1 + taxaJuros) ** periodo
}

console.log(valorFinalInvestimento(1000, 0.05, 12))
