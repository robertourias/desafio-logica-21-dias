// Desafio 1: Recrie funções úteis em arrays
function myIndexOf(array: any[], searchTerm: string) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchTerm) {
      return i
    }
  }

  return -1
}

function myIncludes(array: any[], searchTerm: string) {
  for (let item of array) {
    if (item === searchTerm) {
      return true
    }
  }

  return false
}

function myLastIndexOf(array: any[], searchTerm: string) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === searchTerm) {
      return i
    }
  }

  return -1
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

  for (let i = indiceInicial; i <= qtdElementos && i < array.length; i++) {
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
