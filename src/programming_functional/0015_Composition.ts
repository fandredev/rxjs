namespace CompositionPromises {

  export function composition(...fns: Array<any>) {
    return (value: string | number) => fns.reduce(async (acc, fnNow) => {
      if (Promise.resolve(acc) === acc) {
        return fnNow(await acc)
      } else
        return fnNow(acc)
    }, value)
  }

  export function shoutOut(t: string): string {
    return t.toUpperCase()
  }
  export function emphasize(t: string): string {
    return `${t}!!!`
  }
  export function slow(text: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(text.split('').join(' '))
      }, 3000)
    })
  }
}

const respPromiseComposition = CompositionPromises.composition(
  CompositionPromises.shoutOut,
  CompositionPromises.emphasize,
  CompositionPromises.slow
)
const respPromiseComposition2 = CompositionPromises.composition(
  CompositionPromises.shoutOut,
  CompositionPromises.emphasize,
)
respPromiseComposition('Ok').then(console.log)
respPromiseComposition2('Ok2').then(console.log)
