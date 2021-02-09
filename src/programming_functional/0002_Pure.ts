
// Pura ou impura?
// Impura - Você não consegue determinar com a saída da função, pois você depende do Math.random
namespace Pure {
  export function generateRandomicNumber(min: number, max: typeof min): number {
    const factor: number = max - min + 1

    return Math.floor(Math.random() * factor) + min
  }
}
const { generateRandomicNumber } = Pure

console.log(generateRandomicNumber(1, 10000));
console.log(generateRandomicNumber(1, 10000));
console.log(generateRandomicNumber(1, 10000));
console.log(generateRandomicNumber(1, 10000));
console.log(generateRandomicNumber(1, 10000));
