// Função construtora
class Product {
  name: string
  price: number
  discount: number
  constructor(name: string, price: number, discount: number = 0.3) {
    this.name = name
    this.price = price
    this.discount = discount
  }

  get priceFinish(): number {
    return this.price * (1 - this.discount)
  }

  set upperCaseName(newName: string) {
    this.name = newName.toUpperCase()
  }
  set newPrice(price: number) {
    price > 0 ? this.price = price : 8.59
  }

  get _name(): string { return this.name }
}
const classProductOne = new Product('Caneta', 8.59, 0.3)
// console.log(classProductOne.discount);
// console.log(classProductOne.priceFinish());
// console.log(classProductOne.priceFinish)
// console.log(classProductOne._name)

// classProductOne.upperCaseName = 'caneta'
// classProductOne.newPrice = 10

// console.log(classProductOne);
