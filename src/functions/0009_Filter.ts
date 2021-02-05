import { cart } from "./0007_Map";

const amountGreatherThanZero: string[] = cart.filter(({ qtde }) => qtde > 0).map(({ name }) => name)
const big: string[] = cart.filter(({ qtde }) => qtde > 1000).map(({ name }) => name)
const bigOrEqualZero: string[] = cart.filter(({ qtde }) => qtde >= 1000).map(({ name }) => name)

console.log(amountGreatherThanZero);
// console.log(big);
// console.log(bigOrEqualZero);
