namespace AsyncAwait {
  // Promises
  export function _waitBy(time: number = 2000): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('')
      }, time);
    })
  }
}
const { _waitBy } = AsyncAwait

function inReturnValue(): Promise<number> {
  return new Promise((resolve, _) =>
    setTimeout(() => resolve(10), 5000)
  )
}


async function executeFn() {
  let value = await inReturnValue()

  await _waitBy()
  console.log(`${value} - Async e Await 1`);
  await _waitBy()
  console.log(`${value + 1} - Async e Await 2`);
  await _waitBy()
  console.log(`${value + 2} - Async e Await 3`);

  return value + 3
}
executeFn()
