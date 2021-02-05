// Transforme numa função arrow

// function power(base: number) : any {
//   return (exp: number) : number => Math.pow(base, exp)
// }

const potencia = (base: number) : any => (exp: typeof base) : typeof exp => Math.pow(base, exp)
console.log(potencia(2)(7));
