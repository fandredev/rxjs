import { cart } from './../../0007_Map';
// Fazer duas funções com o map

// 1 - que pega apenas os nomes dos itens do carrinho
// 2 - que pega apenas a qntd e multiplica pelo preco

// 1
const namesCart = cart.map(({ name }) => name)
console.log(namesCart);

// 2
const priceWithQuantity = cart.map(({ qtde, price }) => qtde * price)
console.log(priceWithQuantity);
