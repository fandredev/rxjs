// Transforme numa função arrow

// function power(base: number) : any {
//   return (exp: number) : number => Math.pow(base, exp)
// }

const arrowFnPower = (base: number) : any => (exp: number) : typeof exp => Math.pow(base, exp)

console.log(arrowFnPower(5)(3));
