import { from, Observable, Subscriber } from 'rxjs';

function firstElementOperator() {
  return (observable: Observable<any>) => {
    return new Observable((subscriber: Subscriber<number>) => {
      observable.subscribe({
        next(v: number) {
          subscriber.next(v) // Vai pegar o primeiro elemento
          subscriber.complete() // e após pegar o primeiro elemento ele vai completar
        }
      })
    })
  }
}

function lastElementOperator() {
  return (source: any) => {
    return new Observable((subscribe: Subscriber<number>) => {
      let last: number
      source.subscribe({
        next(v: number): void {
          last = v
        },
        complete() {
          if (last !== undefined) {
            subscribe.next(last)
          }
          subscribe.complete()
        }
      })
    })
  }
}

from([1, 2, 3, 4, 5, 10]).pipe(
  firstElementOperator(),
  lastElementOperator()
)
  .subscribe(console.log)

// from([1, 2, 3, 4, 5]).pipe(first()).subscribe(console.log) // Pegando primeiro el do array
// from([1, 2, 3, 4, 5]).pipe(last()).subscribe(console.log) // Pegando ultimo el do array
