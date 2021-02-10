function eager(a: number, b: number): number {
  const value = Math.pow(a, 3)
  const end = Date.now() + 2500
  while (Date.now() < end) { }

  return value + b
}

console.time('#1')
console.log(eager(3, 100))
console.log(eager(3, 200))
console.log(eager(3, 300))
console.timeEnd('#1')

function lazyEvaluation(a: number) {
  const value = Math.pow(a, 3)
  const end = Date.now() + 2500
  while (Date.now() < end) { }

  return (b: number) => value + b
}

console.time('#2')

const lazy3 = lazyEvaluation(3)

console.log(lazy3(100))
console.log(lazy3(200))
console.log(lazy3(300))

console.timeEnd('#2') // Código MUITO mais rápid
