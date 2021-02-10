/**
 * Quando uma função lembra do seu escopo léxico
 */

let x = 3
export function out() {
  const x = 97
  function sumX(): number { // A função lembra onde ela foi criada e usa a var x da função
    return x + 3
  }
  return sumX
}
