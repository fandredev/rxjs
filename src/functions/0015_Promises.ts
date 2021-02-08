namespace Promise15 {
  export function generateNumbersBetween(min: number, max: number): Promise<number> {
    if (min > max) [max, min] = [min, max]

    return new Promise((resolve) => {
      const fac = (max - min + 1)
      const random = Math.floor(Math.random() * fac) + min
      resolve(random)
    })
  }
}

Promise15.generateNumbersBetween(1, 60)
  .then((p: number) => p * 10)
  .then((numX10: number) => `O número gerado foi ${numX10}`)
  .then(console.log)
