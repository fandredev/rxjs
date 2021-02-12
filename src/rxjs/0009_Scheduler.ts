
/**
 * Por padrão os Observables do RXJS são códigos síncronos.
 * Transformação de um observer gerado a partir do from com assincronismo
 */
import { asyncScheduler, from } from 'rxjs';
import { observeOn } from 'rxjs/operators';


// Bloco Síncrono

console.log('synchronous Start');
from([1, 3, 4, 5, 6]).subscribe(console.log)
console.log('synchronous End');


console.log();
console.log();
console.log();
console.log();
console.log();
console.log();

// Bloco Assíncrono
console.log('asynchronous start')
from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  .pipe(
    observeOn(asyncScheduler)
  )
  .subscribe(console.log)
console.log('asynchronous end')
