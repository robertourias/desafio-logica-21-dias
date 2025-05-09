// Inicializando a fila de drive-thru
let filaDriveThru: Array<any> = []

// Função para um carro entrar na fila
function entrarNaFilaDriveThru(placaDoCarro: string, pedido: string) {
  filaDriveThru.push([placaDoCarro, pedido]) // Adiciona ao final da fila
  console.log(`Carro ${placaDoCarro} entrou na fila com o pedido: ${pedido}.`)
}

// Função para atender o carro
function atenderCarro() {
  if (filaDriveThru.length === 0) {
    console.log("Não há carros na fila.")
  } else {
    let carroAtendido = filaDriveThru.shift() // Remove o carro do início da fila
    console.log(`Carro ${carroAtendido[0]} com o pedido: ${carroAtendido[1]}.`)
  }
}

// Função para exibir o status da fila
function statusDaFila() {
  console.log(`Total de carros na fila: ${filaDriveThru.length}`)
  if (filaDriveThru.length > 0) {
    console.log(
      "Fila atual: " + filaDriveThru.map((carro) => carro[0]).join(", ")
    )
  }
}

// Simulação de carros entrando na fila
entrarNaFilaDriveThru("ABC1234", "Café")
entrarNaFilaDriveThru("XYZ5678", "Chá")
entrarNaFilaDriveThru("DEF9012", "Sanduíche")

// Atendendo um carro
atenderCarro()

// Verificando o status da fila
statusDaFila()

// Atendendo mais carros
atenderCarro()
atenderCarro()

// Verificando o status da fila
statusDaFila()
