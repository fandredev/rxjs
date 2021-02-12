function generateNumbers() {
  return {
    start(fn: any, interval = 1000) {
      let n = 0
      const int = setInterval(() => fn(n++), interval)

      return {
        stop() {
          clearInterval(int)
        }
      }
    }
  }
}

const temp1 = generateNumbers()
const exec1 = temp1.start((n: number) => console.log(`#1: ${n * 2}`), 1000)


const temp2 = generateNumbers()
const exec2 = temp2.start((a: number) => console.log(`#2: ${a + 100}`), 2000)

setTimeout(() => {
  exec1.stop()
  exec2.stop()
}, 10000)
