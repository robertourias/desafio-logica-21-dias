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

let filaDeSupermercado = ["cliente 1", "cliente 2", "cliente 3"]

for (let i = 0; i < filaDeSupermercado.length; i++) {
  console.log(`Atendendo o cliente ${filaDeSupermercado[i]}`)
}
