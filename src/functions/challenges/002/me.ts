// Somar(3)(4)(5)

// fn -> 3*7=21
// fn -> 3+7=10
// fn -> 3/7=x
// calcular(3)(7)(fn)


function sumValues(n1: number) : any {
  return (n2: typeof n1) => (n3: typeof n1) => console.log(n1 + n2 + n3);
}
sumValues(3)(4)(5)


function fnCalcValues(n1: number = 0, n2: typeof n1 = 0) : typeof n1 {
  return n1 + n2
}

function calculateValues(n1: number = 0) : any {
  return (n2: typeof n1) => {
    return fnCalcValues(n1, n2)
  }
}


calculateValues(3)(3)
