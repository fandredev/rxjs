import { Observable, Subscriber } from 'rxjs'

const obs$ = Observable.create((subscriber: Subscriber<string>) => {
  subscriber.next('RxJS') // Dado resolvido. Vá para o próximo
  subscriber.next('is')
  subscriber.next('strong')

  if (Math.random() > 0.5) {
    subscriber.complete() // Completa o observable
  }
  else {
    subscriber.error('Problem...') // Deu um erro nos dados.
  }
})

// obs$.subscribe((value: string) => {
//   console.log(`Valor: ${value}`) // Valor recebido
// }, (err) => {
//   console.log(`Erro: ${err}`) // Erro ao pegar valor
// }, () => console.log('Finish')) // Executado no subscriber.complete()



obs$.subscribe({
  next(value: string): void {
    console.log(`Valor: ${value}`)
  },
  error(err: string): void {
    console.log(`Erro: ${err}`)
  },
  complete(): void {
    console.log('Finish')
  }
})


// obs$.subscribe((value: string) => {
//   console.log(`Valor: ${value}`)
// }, noop, // Não quero realizar nada aqui
//   () => console.log('Finish'))
