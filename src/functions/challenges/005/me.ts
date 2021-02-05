import { CartItems } from './../../0007_Map';
/**
 * 1 - Apenas os elementos com fragil = true
 * 2 - Pegar quantidade e preco e multiplicar
 * 3 - Média dos totais
 *
 * Usar as 3 funções
 */

interface CartItemsChallenge extends CartItems {
  fragile: boolean
}
interface Acc {
  qtde: number
  total: number
  media: number
}

const _cart: CartItemsChallenge[] = [
  { name: 'Caneta', qtde: 1, price: 7.99, fragile: false },
  { name: 'Impressora', qtde: 0, price: 649.50, fragile: true },
  { name: 'Caderno', qtde: 4, price: 27.10, fragile: true },
  { name: 'Lápis', qtde: 3, price: 5.82, fragile: true },
  { name: 'Tesoura', qtde: 1, price: 19.20, fragile: true },
]

const getFilteredFragile = (({ fragile }) => fragile)
const getPrices = (({ qtde, price }) => qtde * price)

const reducer = ({ qtde, total }: Acc, el: number) => {
  const newQtde = qtde + 1
  const newTotal = total + el
  console.log(qtde, total, el)
  return {
    qtde: newQtde,
    total: newTotal,
    media: newTotal / newQtde
  }
}

const INITIAL_MEDIA: Acc = {
  qtde: 0,
  total: 0,
  media: 0
}

const media = _cart.filter(getFilteredFragile).map(getPrices).reduce(reducer, INITIAL_MEDIA)

console.log(media)
