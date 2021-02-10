// function sumCurrying(a: number) {
//   return (b: number) => (c: number) => a + b + c
// }
// console.log(sumCurrying(1)(2)(3));
namespace Currying12 {

  export function sizeTextBetween(min: number) {
    return (max: number) => (err: string) => (text: string) => { // Lazy evaluation
      const size = (text || '').trim().length

      if (size < min || size > max) {
        throw err
      }
    }
  }

  interface ProductCurrying {
    name: string
    price: number
    discount: number
  }

  export const { name }: ProductCurrying = {
    name: 'a',
    price: 14.9,
    discount: 0.25
  }

  export const defaultPadronizationLen = Currying12.sizeTextBetween(4)(255)
}

function applyValidation(fn) {
  return (v: string) => {
    try {
      fn(v)
    } catch (error) {
      return { error }
    }
  }
}
const _default = Currying12.defaultPadronizationLen('Nome inválido')
const defaultProductNameInvalid = _default(Currying12.name)
const validProductName = applyValidation(defaultProductNameInvalid)('Valor')

console.log(
  // _default,
  // defaultProductNameInvalid,
  validProductName
);
