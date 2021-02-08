namespace Promise16 {
  function generateNumbersBetween(min: number, max: number, time: number = 2000): Promise<number> {
    if (min > max) [max, min] = [min, max]

    return new Promise((resolve) => {
      setTimeout(() => {
        const fac = (max - min + 1)
        const random = Math.floor(Math.random() * fac) + min
        resolve(random)
      }, time)
    })
  }
  export function generateMultiplyNumbers(): Promise<number[]> {
    return Promise.all([
      generateNumbersBetween(1, 60, 1000),
      generateNumbersBetween(1, 60, 500),
      generateNumbersBetween(1, 60, 4000),
      generateNumbersBetween(1, 60, 100),
      generateNumbersBetween(1, 60, 1500),
    ])
  }
}
const { generateMultiplyNumbers } = Promise16

console.time('promise')
generateMultiplyNumbers().then((nums: Array<number>) => nums).then(_ => console.timeEnd('promise'))
