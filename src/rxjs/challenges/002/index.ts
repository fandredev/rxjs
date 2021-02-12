import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

// Filtre apenas os valores
of('Ana Silva', 'Maria Silva', 'Pedro Rocha')
  .pipe(
    filter((value: string) => value.endsWith('Silva'))
  )
  .subscribe(console.log)
