import { Observable, Subscriber } from 'rxjs';
/**
 *  First Order Observable - É o Observable que cria uma stream de dados númericos, booleanos e textuais.

 *  Higher Order Observable - É o Observable que cria novos Observables.

 *  Pull And Push - É o conceito de puxar uma informação e enviar uma informação.

 *  O Observable - É a comunicação push porque ele envia uma informação a quem se subscreveu.
*/


// Example First Order Observable
enum ErrorsFirstOrderObservable {
  error = 'Erro no array de números'
}
function firstOrderObservable(numbers: number[]): Observable<number[]> {
  return new Observable((subscriber: Subscriber<number[]>) => {
    if (Array.isArray(numbers)) {
      subscriber.next(numbers)
      subscriber.complete()
    }
    else {
      subscriber.error(ErrorsFirstOrderObservable.error)
    }
  }
  )
}

const foo = firstOrderObservable([1, 2, 3, 4, 5]) // Push
let errorFoo: any;

// Subscriber é o pull
foo.subscribe((num) => console.log(...num), (error: ErrorsFirstOrderObservable) => {
  if (error) {
    errorFoo = error
  }
}, () => console.log('Completed.'))
