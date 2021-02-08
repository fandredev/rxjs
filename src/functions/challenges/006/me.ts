import fs, { PathLike } from 'fs';
import { join } from 'path';

/**
 * Ler arquivo com fs usando Promises
 */

function readFiles() {
  const file: PathLike = join(__dirname, '..', '..', 'data.txt')
  return new Promise((resolve) => {
    resolve(fs.readFile(file, (_, data: Buffer) => console.log(data.toString())))
  })
}

readFiles().then(v => v)
