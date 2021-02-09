const numbers = [4, 8, 3, 2, 9, 1, 9, 3]

/**
 * #1 - Dados mútaveis - Função imperativa, função impura.
 */
// let total = 0

// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i]
// }

// console.log(total)


/**
 * #2 - Reduce - Programação declarativa, função pura
 */
// const sumReducer = (a: number, b: number): number => a + b

// const total = numbers.reduce(sumReducer)
// console.log(total);

/**
 * #3 - Recursividade
 */

// function sumItems(array: Array<number>, total: number = 0) {
//   if (!array) {
//     return total
//   }
//   return sumItems(array.slice(1), total + array[0])
// }
// const exceed = sumItems(numbers)
// console.log(exceed);
