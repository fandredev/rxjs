const numsSort: [number, number, number, number, number] = [10, 24, 1, 3, 4]

function order(arr: number[]) {
  return [...arr].sort()
}

const ordened = order(numsSort)
console.log(
  ordened,
  numsSort
);


const slicedNums = numsSort.slice(2)
console.log(slicedNums, numsSort, 'Sliced Items')
