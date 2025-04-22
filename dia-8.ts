// Desafio 1: Filas e mais filas
/* 
Fila de supermercado:
- Existem multiplas filas que vão sendo atendidos cliente a cliente em pararelo (caixas diferentes)

Fila de banco:
- Existem multiplas filas que vão sendo atendidos cliente a cliente em sequencia organizados em categorias de serviços

Fila de pronto atendimento:
- Filas por ordem de gravidade, prioridade e depois ordem de chagada

Fila de pedidos:
- Fila de pedidos de um restaurante são atendidos em ordem, porém são servidos em tempo de preparo

*/

// Desafio 2: Fila de sipermercado em código

let fila: Array<string> = []

// Adiciona um elemento ao final da fila
function entrarNaFila(nome: string) {
  fila[fila.length] = nome // Isso é equivalente a fila.push(nome);
  console.log(`${nome} entrou na fila.`)
}

// Atende o primeiro cliente da fila
function atenderCliente() {
  if (fila.length > 0) {
    let clienteAtendido = fila[0]
    // Agora, vamos remover o primeiro elemento manualmente
    for (let i = 1; i < fila.length; i++) {
      fila[i - 1] = fila[i]
    }
    fila.length = fila.length - 1 // Isso é equivalente a fila.shift();
    console.log(`${clienteAtendido} foi atendido.`)
  } else {
    console.log("Não há clientes na fila para atender.")
  }
}

function mostrarFila() {
  if (fila.length > 0) {
    console.log("Clientes na fila: " + fila.join(", "))
  } else {
    console.log("A fila está vazia.")
  }
}

// Vamos testar as funções
entrarNaFila("João")
entrarNaFila("Maria")
entrarNaFila("Pedro")

mostrarFila()

atenderCliente()

mostrarFila()

atenderCliente()

mostrarFila()
