type Names = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa', 'Bete']
type Nums = [1, 2, 3, 4, 5]

const nums: Nums = [1, 2, 3, 4, 5]

// const fullParametersMap = (n: number, i: number, arr: Array<number>) => n * 2 + i + arr.length
const double = (n: number) => n * 2

console.log(nums.map(double));


const names: Names = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa', 'Bete']

const firstLetter = (text: string) => text[0]
const letters = names.map(firstLetter)

console.log(names, letters);
