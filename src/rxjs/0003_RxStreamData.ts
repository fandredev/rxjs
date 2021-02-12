import { interval } from 'rxjs'

const generateNumbersInterval = interval(500)


const subscription = generateNumbersInterval.subscribe((num: number) => console.log(Math.pow(2, num)))
const subscription2 = generateNumbersInterval.subscribe(console.log)


setTimeout(() => {
  subscription.unsubscribe()
}, 8000)
setTimeout(() => {
  subscription2.unsubscribe()
}, 6000)

// from([1, 2, 3]).subscribe(console.log)
