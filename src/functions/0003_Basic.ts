// arrow function

const happy = () : void => console.log('Feliz natal!');

happy()

const salutation = (name: string = 'Ju'): void => console.log(`Falei seu nome, ${name}.`);

salutation('Cris')
salutation()

const _sum = (...array: Array<number>) : number => {
  let total: number = 0

  for(let n of array) {
    total += n
  }

  return total
}

console.log(_sum(1,2,3,4,5,6,7,8,9,10));
console.log(_sum(1,2));
console.log(_sum(1,2,4,5));
