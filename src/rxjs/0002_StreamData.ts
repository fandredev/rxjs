const numsStreamData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function generateElements(array: Array<number | string>) {
  return {
    start(fn: any) {
      let index = 0
      const i = setInterval(() => {
        if (index >= array.length) {
          clearInterval(i)
        }
        else {
          fn(array[index])
          index++
        }
      }, 1000)

      return {
        stop(): void {
          clearInterval(i)
        }
      }
    }
  }
}

export const temp1 = generateElements(numsStreamData)
export const subscription = temp1.start((n: number) => console.log(Math.pow(2, n)))


setTimeout(() => subscription.stop(), 4000)
generateElements(['Ana', 'Bia', 'Carlos']).start(console.log)
