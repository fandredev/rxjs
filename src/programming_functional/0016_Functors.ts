// São objetos que implementam a função MAP
// que também é um wrapper de um valor


// Array é um exemplo de functor
const numsFunctors: [...number[]] = [1, 2, 3, 4, 5, 6]

const newNums = numsFunctors.map((el: number) => el + 10).map(el => el * 2)

// console.log(numsFunctors, newNums)


function secureType(v: string | null) {
  return {
    v,
    invalid() {
      return this.v === null || this.v === undefined
    },
    map(fn: any) {
      if (this.invalid()) {
        return secureType(null)
      }
      else {
        const newValue = fn(this.v)
        return secureType(newValue)
      }
    }
  }
}

const resultFunctor = secureType('Esse é um texto')
  .map((t: string) => t.toUpperCase())
  .map((t: string) => `${t}!!!`)
  .map((t: string) => t.split('').join(' '))


console.log(resultFunctor.v);
