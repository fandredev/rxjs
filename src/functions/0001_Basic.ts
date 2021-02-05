// Function Declaration
function sayGoodMorning() : void {
  console.log('Bom dia.');
}
sayGoodMorning()


// Function Expression

const sayGoodAfternoon = function() : void {
  console.log('Boa tarde.');
}

sayGoodAfternoon()

function sum(a: number, b: number) : number {
  return a + b
}

let result = sum(3,4)
console.log(result, 'Resultado');

function applyNames(name: string = 'Juliana') : string {
  return name
}

console.log(applyNames(), '<- vai dar juliana');
console.log(applyNames('Cristiana'), '<- vai dar cristiana');
