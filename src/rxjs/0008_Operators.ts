import { ajax } from 'rxjs/ajax'
import { concatAll, map } from 'rxjs/operators'
import { XMLHttpRequest } from 'xmlhttprequest'

/**
 * ConcatAll - Transforma Observables em uma stream de dados
 */

ajax({
  url: 'https://api.github.com/users/flubyGit/repos',
  createXHR: () => new XMLHttpRequest()
}).pipe(
  map(resp => JSON.parse(resp.xhr.responseText)),
  concatAll(),
  map((repos: any) => repos?.name)
).subscribe(console.log)

console.log('Fim')
