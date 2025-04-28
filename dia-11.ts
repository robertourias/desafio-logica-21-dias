// Desafio 1: Controle de Navegação em navegadores Web

let arrayVoltar: Array<string> = []
let arrayAvancar: string[] = []
let paginaAtual: string = ""

function voltar() {
  if (!arrayVoltar.length) {
    console.log("Não existe página anterior (Desabilitar botão de voltar)")
    return
  }
  paginaAtual && arrayAvancar.push(paginaAtual)
  paginaAtual = arrayVoltar.pop() || ""
}

function avancar() {
  if (!arrayAvancar.length) {
    console.log("Não existe próxima página (Desabilitar botão de avançar)")
    return
  }

  paginaAtual && arrayVoltar.push(paginaAtual)
  paginaAtual = arrayAvancar.pop() || ""
}

function navegar(url: string) {
  paginaAtual && arrayVoltar.push(paginaAtual)
  paginaAtual = url
}

// Simulando navegação
navegar("google")
navegar("youtube")
navegar("reddit")
navegar("netflix")
navegar("instagram")
voltar()
voltar()
voltar()
avancar()
avancar()

console.log("arrayVoltar: ", arrayVoltar)
console.log("página atual: ", paginaAtual)
console.log("arrayAvancar: ", arrayAvancar)
