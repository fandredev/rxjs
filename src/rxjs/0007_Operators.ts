/**
 * Os dois tipos de Operadores
  *  1. Operadores de Criação
  *  2. Operadores Encadavéis (Pipeable Op.)
 */


/**
 * pipe - Encadeia funções do rxjs
 * last() - Pega o último elemento da stream de dados
 * map() - Mapeia os elementos
 * of() - Cria um subscriber com stream de dados
 * from - Cria um subscriber com stream de dados em arrays
 */

import { from, of } from 'rxjs'; // Operador de Criação
import { first, last, map } from 'rxjs/operators';

of(1, 2, 'ana', false, 'last').pipe(
  last(),
  map(v => v[0]),
  map(v => `A letra encontrada foi: ${v}`)
)
  .subscribe((v) => console.log(`${v}`))


// Uso para arrays = from
from(['first', 1, 2, 'ana', false, 'last']).pipe(
  first(),
  map(v => v[0]),
  map(v => `A letra encontrada foi: ${v}`)
)
  .subscribe((v) => console.log(`${v}`))
