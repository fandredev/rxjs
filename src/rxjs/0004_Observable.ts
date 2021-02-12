import { Observable, Subscriber } from 'rxjs';


const promise = new Promise((resolve) =>
  resolve('Promise has cool.') // Apenas um resolve
)

const obs = new Observable((subscriber: Subscriber<string>) => {
  subscriber.next('Observer has cool')
  subscriber.next('Observer has nice') // Multiplos subscribers
  setTimeout(() => subscriber.next('Observer has wait three seconds'), 3000)
  subscriber.complete()
})

promise.then(console.log)
obs.subscribe(console.log)
obs.subscribe((text: string) => console.log(text.toUpperCase()))
