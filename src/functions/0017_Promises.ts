type Promises = Promise<number | string>
type Value = number | string

interface ErrorPromise {
  message: string
  error: boolean
}

function workOrNot(value: Value, chanceError: number): Promises {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceError) {
        // erro
        reject({
          error: true,
          message: 'An error occurred in your application'
        })
      }
      else
        resolve(value)
    } catch (error) {
      reject(value)
    }
  })
}
workOrNot('Testando', 0.9)
  .then(v => console.log(`Valor: ${v}`))
  .catch((err: ErrorPromise) => console.log(`${err.error && 'ERRO!'}-${err.message}`)) // Reject
