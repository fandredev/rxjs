/*
  Funções que operam em outras funções.
  tomando-as como argumentos ou retornando outras funções (cb)
*/
export function execute(fn, ...params) {
  return (txt: string) => `${txt} - ${fn(params)}`

}
export function sum(a: number, b: number, c: number): number {
  return a + b + c
}


console.log(execute(sum, 1, 2, 3)('O resultado é'))
