// Param como função
function goodDay() : void {
  console.log('Bom dia')
}
function goodEvening() : void {
    console.log('Boa tarde')
}
function executeWhatever(fn: any) {
  if(typeof fn === 'function') {
    fn()
  }

  // fn()
}

executeWhatever(3)
executeWhatever(goodEvening)
executeWhatever(goodDay)


function power(base: number) : any {
  return (exp: number) : number => Math.pow(base, exp)
}

const powerTwo = power(2)
console.log(powerTwo(8));

const resultPower = power(3)(4) // Segunda função da função power
console.log(resultPower);
