import { cart, CartItems } from "./0007_Map";

const getTotal = ({ qtde, price }: CartItems) => qtde * price
const sum = (acc: number, el: number): number => acc + el


const total = cart.map(getTotal).reduce(sum, 0)
console.log(total);
