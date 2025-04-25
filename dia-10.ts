let pilhaDeProdutos = []
const CAPACIDADE_MAXIMA = 10

function empilharProduto(produto: string) {
  if (pilhaDeProdutos.length < CAPACIDADE_MAXIMA) {
    pilhaDeProdutos.push(produto)
    console.log(`Produto ${produto} empilhado.`)
  } else {
    console.log("Caixa cheia. Enviando para selagem e despacho.")
    pilhaDeProdutos = [] // Inicia uma nova pilha
    pilhaDeProdutos.push(produto)
    console.log(`Produto ${produto} empilhado na nova caixa.`)
  }
}

// Simulando a esteira com 40 produtos
const TOTAL_PRODUTOS_ESTEIRA = 40
for (let i = 1; i <= TOTAL_PRODUTOS_ESTEIRA; i++) {
  empilharProduto(`Produto ${i}`)
}
