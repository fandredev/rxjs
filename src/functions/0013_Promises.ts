let p: Promise<number> = new Promise((resolve) => {
  resolve(3)
  // resolve({ name: 'Cristiana' })
  // resolve('Felipe')
  // resolve([1,2,3,4])
  // resolve(['Bia','Mariana','Maria'])
  // resolve(true)
})

function triple(n: number): void {
  console.log(n * n);
}

p.then((value: number) => value)
  .then((i: number) => i * 3)
  .then((i: number) => triple(i))
