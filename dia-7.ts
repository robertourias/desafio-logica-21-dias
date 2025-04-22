// Saldo das contas
let saldoConta1 = 600
let saldoConta2 = 400

// Limite inicial, juros e configurações de limite
let limite = 0
let jurosLimite = 0
const percentualLimite = 0.1 // 10%
const saldoMinimoLimite = 1000 // R$1000

// Taxa de conversão Dólar -> Real
const taxaConversaoDolar = 5.23

function saldoTotal() {
  let total = saldoConta1 + saldoConta2

  if (total >= saldoMinimoLimite) {
    limite = total * percentualLimite
  }

  return total
}

function alertaSaldo() {
  if (saldoConta1 <= 0) {
    console.log("Conta 1 está sem saldo ou utilizando o limite.")
  }

  if (saldoConta2 <= 0) {
    console.log("Conta 2 está sem saldo ou utilizando o limite.")
  }
}

function depositar(conta, valor) {
  if (conta === 1) {
    if (saldoConta1 < 0) {
      jurosLimite += valor * 0.15
      valor *= 0.85
    }
    saldoConta1 += valor
  } else if (conta === 2) {
    if (saldoConta2 < 0) {
      jurosLimite += valor * 0.15
      valor *= 0.85
    }
    saldoConta2 += valor
  }
}

function debitar(conta, valor) {
  if (conta === 1 && valor <= saldoConta1 + limite) {
    saldoConta1 -= valor
  } else if (conta === 2 && valor <= saldoConta2 + limite) {
    saldoConta2 -= valor
  } else {
    console.log("Saldo insuficiente para débito na conta " + conta)
  }
}

function transferir(valor, contaOrigem, contaDestino) {
  if (contaOrigem === 1 && valor <= saldoConta1) {
    debitar(1, valor)
    depositar(contaDestino, valor)
  } else if (contaOrigem === 2 && valor <= saldoConta2) {
    debitar(2, valor)
    depositar(contaDestino, valor)
  } else {
    console.log("Saldo insuficiente para transferência na conta " + contaOrigem)
  }
}

function converterSaldoParaDolar(conta) {
  if (conta === 1) {
    return saldoConta1 / taxaConversaoDolar
  } else if (conta === 2) {
    return saldoConta2 / taxaConversaoDolar
  }
}

function exibirLimite() {
  return limite
}

function exibirJurosLimite() {
  return jurosLimite
}

// Exemplo de uso
console.log("Saldo total: R$" + saldoTotal())
alertaSaldo()
depositar(1, 100)
debitar(2, 50)
transferir(200, 1, 2)
console.log("Saldo conta 1 em dólares: US$" + converterSaldoParaDolar(1))
console.log("Saldo conta 2 em dólares: US$" + converterSaldoParaDolar(2))
console.log("Limite: R$" + exibirLimite())
console.log("Juros do Limite: R$" + exibirJurosLimite())
