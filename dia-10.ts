// Desafio 1: Braço mecânico para empilhar produtos

let produtos = [
  "sapato",
  "bolsa",
  "perfume",
  "celular",
  "microfone",
  "cadeira",
  "mesa",
  "monitor",
  "relógio",
  "Boné",
  "Casaco",
  "teclado",
  "Violão",
  "webcam",
  "maquina fotografica",
  "gopro",
  "drone",
  "tablet",
  "cafeteira",
  "moedor de café",
  "Kindle",
  "Ventilador",
]

let despachados: any[] = []

function esteira() {
  let caixa: any[] = []

  for (let item of produtos) {
    if (caixa.length && caixa.length % 10 === 0) {
      console.log(`Caixa cheia e despachada`)
      console.log("-----------")
      despachados.push([...caixa])
      caixa = []
    }
    caixa.push(item)
    console.log(`Produto "${item}" add a esteira`)
  }
}

esteira()
console.log("despachados", despachados)
console.log("produtos", produtos)
