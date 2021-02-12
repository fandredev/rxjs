import { noop, Observable, Subscriber } from 'rxjs';

/**
 * Desafio!
 * Criar uma stream de dados entre min e max com Observables!
 */

function between(min: number, max: number) {
  if (min > max) [min, max] = [max, min]

  return new Observable((subscriber: Subscriber<number>) => {
    Array(max - min).fill(undefined).map((_, i) => {
      subscriber.next(min + i)
    })
    // for (let i = min; i <= max; i++) {
    //   subscriber.next(i)
    // }
    subscriber.complete()
  })

}
between(4, 10).subscribe(console.log, noop, () => console.log('Fim'))
