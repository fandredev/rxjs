type Address = {
  address: string
}
type People = {
  name: string
  height: number
  city: string,
  end: Address
}
const people: People = Object.freeze({
  name: 'Maria',
  city: 'São Paulo',
  height: 1.87,
  end: Object.freeze({
    address: 'Rua x'
  })
})

// Passagem por referencia

function alterPeople(newPeople: People) {
  const people = { ...newPeople }
  people.name = 'João'
  people.city = 'Rio de Janeiro'

  return people
}
const newPeople = alterPeople(people)
console.log(newPeople, 'JOão')
console.log('\n')
console.log(people, 'Maria')


let a = 3
let b = a // atribuição por valor (copia!)

a++

console.log(a);
console.log(b);
