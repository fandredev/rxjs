// Somar(3)(4)(5)


function somar(a: number) : any {
  return function(b: typeof a) {
    return function(c: typeof a) {
      return a + b + c
    }
  }
}
console.log(somar(1)(2)(10));


// fn -> 3*7=21
// fn -> 3+7=10
// fn -> 3/7=x
// calcular(3)(7)(fn)

function calcular(x: number) : any {
  return function(y: typeof x) : any {
    return function(fn: any) {
      return fn(x, y)
    }
  }
}


function subtrair(a: number, b : typeof a) : typeof b {
  return a - b
}
function multiplicar(a: number, b : typeof a) : typeof b {
  return a * b
}


const r1 = calcular(10)(5)(subtrair)
const r2 = calcular(10)(5)(multiplicar)

console.log(r1, 'Subtrair');
console.log(r2, 'Multiplicar');
