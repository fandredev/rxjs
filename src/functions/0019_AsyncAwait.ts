namespace AsyncAwait2 {
  enum Mess {
    repeat = 'Número repetido!',
    bad = 'Bad numbers!'
  }
  export function _generateNumbersBetween(min: number, max: number, numbersWarning: any): Promise<number | string> {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
      const fac = (max - min + 1)
      const random = Math.floor(Math.random() * fac) + min
      if (numbersWarning.includes(random)) reject(Mess.repeat)
      else resolve(random)
    })
  }
  export async function generateMegaSena(numbers: number, attempts: typeof numbers = 10) {
    const nums: Array<number | string> = []
    try {
      for (let _ of Array(numbers).fill(undefined)) {
        nums.push(await _generateNumbersBetween(1, 60, nums))
      }
    } catch (error) {
      if (attempts > 10) throw Mess.bad
      else return generateMegaSena(numbers, attempts + 1)
    }
    return nums
  }
}
const { _generateNumbersBetween, generateMegaSena } = AsyncAwait2

_generateNumbersBetween(1, 5, [1, 2, 4]).then(console.log).catch(console.log)
generateMegaSena(2)
  .then(console.log)
  .catch(console.log)
