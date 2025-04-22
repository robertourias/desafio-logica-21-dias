// Desafio 1: Recrie funções úteis em arrays
function myIndexOf(array: any[], searchTerm: string) {
  let indice: number = -1
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchTerm) {
      indice = i
      break
    }
  }

  return indice
}

function myIncludes(array: any[], searchTerm: string) {
  let estaIncluso: boolean = false
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchTerm) {
      estaIncluso = true
      break
    }
  }

  return estaIncluso
}

function myLastIndexOf(array: any[], searchTerm: string) {
  let indice: number = -1
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === searchTerm) {
      indice = i
      break
    }
  }

  return indice
}

let arrayElementos = ["React", "Typescript", "HTML", "CSS"]
console.log("Desafio 1:")
console.log(myIncludes(arrayElementos, "Angular"))
console.log(myIncludes(arrayElementos, "Typescript"))

console.log(myIndexOf(arrayElementos, "Angular"))
console.log(myIndexOf(arrayElementos, "Typescript"))

console.log(myLastIndexOf(arrayElementos, "Angular"))
console.log(myLastIndexOf(arrayElementos, "Typescript"))
console.log("----")

// Desafio 2: Um novo Slice

function mySlice(
  array: any[],
  indiceInicial: number = 0,
  qtdElementos: number = array.length
) {
  let novoArray: any[] = []

  for (let i = indiceInicial; i <= qtdElementos; i++) {
    novoArray.push(array[i])
  }

  return novoArray
}

let arrayDesafio2 = [
  "cachorro",
  "passaro",
  "gato",
  "pato",
  "papagaio",
  "Sarue",
  "Arara",
  "Peixe",
]

console.log(mySlice(arrayDesafio2, 1, 3).join(", "))
