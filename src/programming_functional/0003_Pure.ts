/**
 * Uma função pura é uma função em que o valor
 * de retorno é determinado apenas por seus valores
 * de entrada, sem efeitos colaterais observavéis
 */

let qntExec = 0

function sumTwoNumbers(a: number, b: typeof a): number {
  qntExec++ //efeitos colaterais observavel
  return a + b
}
console.log(qntExec);

console.log(sumTwoNumbers(68, 31));
console.log(sumTwoNumbers(68, 31));
console.log(sumTwoNumbers(68, 31));
console.log(sumTwoNumbers(68, 31));
console.log(sumTwoNumbers(68, 31));

console.log(qntExec);
