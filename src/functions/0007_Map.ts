export interface CartItems {
  name: string
  qtde: number
  price: number
}

export const cart: CartItems[] = [
  { name: 'Caneta', qtde: 1, price: 7.99 },
  { name: 'Impressora', qtde: 0, price: 649.50 },
  { name: 'Caderno', qtde: 4, price: 27.10 },
  { name: 'Lápis', qtde: 3, price: 5.82 },
  { name: 'Tesoura', qtde: 1, price: 19.20 },
]
