import { noop, Observable, Subscriber } from 'rxjs';

function ofWithDelay(time: number, ...elements: number[]): Observable<number> {
  return new Observable((subscriber: Subscriber<number>) => {
    (elements || []).forEach((el: number, index: number) => {
      setTimeout(() => {
        subscriber.next(el)
        if (elements.length === index + 1) {
          subscriber.complete()
        }
      }, time * (index + 1))
    })
  })
}
ofWithDelay(1000, 1, 3, 4).subscribe(console.log, noop)

// My Operator

// function createTeamPain(prefix: string = 'PNG', ...names: string[]): Observable<string> {
//   return new Observable((subscribe: Subscriber<string>) => {
//     subscribe.next(`${prefix} ${names}`)
//     subscribe.complete()
//   })
// }

// createTeamPain('PNG', 'brTT', 'carioK', 'tinows', 'robo', 'luci')
//   .subscribe(console.log, noop, () => console.log('Complete'));
