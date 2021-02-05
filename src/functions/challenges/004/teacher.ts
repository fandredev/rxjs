import { cart, CartItems } from './../../0007_Map';


const getName = (item: CartItems): string => item.name

console.log(cart.map(getName))

const getPrice = (item: CartItems): number => item.price * item.qtde

console.log(cart.map(getPrice))
