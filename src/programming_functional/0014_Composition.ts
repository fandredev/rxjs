function composition(...fns: Array<any>) {
  return (value: string | number) => fns.reduce((acc, fnNow) => fnNow(acc), value)
}

function shoutOut(t: string): string {
  return t.toUpperCase()
}
function emphasize(t: string): string {
  return `${t}!!!`
}
function slow(text: string): string {
  return text.split('').join(' ')
}

const exemple = composition(
  shoutOut,
  emphasize,
  slow
)
const exemple2 = composition(
  shoutOut,
  emphasize,

)

const resultComposition = exemple('stop')
const resultComposition2 = exemple2('continue')

console.log(resultComposition)
console.log(resultComposition2)
