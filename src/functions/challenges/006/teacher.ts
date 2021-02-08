import fs, { PathLike } from 'fs';
import { join } from 'path';

/**
 * Ler arquivo com fs usando Promises
 */

const paths = join(__dirname, '..', '..', 'data.txt')

function readFiles(path: PathLike) {
  return new Promise((resolve) => {
    fs.readFile(path, (err: any, data: Buffer) => resolve(data.toString()))
  })
}

readFiles(paths)
  .then((content: any) => content.split('\n'))
  .then(lines => lines.join(','))
  .then(console.log)
