// function sumCurrying(a: number) {
//   return (b: number) => (c: number) => a + b + c
// }
// console.log(sumCurrying(1)(2)(3));

function sizeTextBetween(min: number, max: number, err: string, text: string) {
  const size = (text || '').trim().length

  if (size < min || size > max) {
    throw err
  }
}

interface ProductCurrying {
  name: string
  price: number
  discount: number
}

const p1: ProductCurrying = {
  name: 'a',
  price: 14.9,
  discount: 0.25
}
sizeTextBetween(4, 255, 'Nome inválido', p1.name)
