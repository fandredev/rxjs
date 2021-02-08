import { readdirSync, readFileSync } from "fs";
import { join } from 'path';

export function filteredSrtExtensions(array, ext: string = '.srt') {
  return array.filter((el: string) => el.endsWith(ext))
}
function readOneFile(path: string) {
  return new Promise((resolve, reject) => {
    try {
      const data = readFileSync(path, {
        encoding: 'utf-8'
      })
      resolve(data.toString())
    } catch (error) {
      reject(error)
    }
  })
}
export function readMultiplyFiles(paths: Array<string>) {
  return Promise.all(paths.map(p => readOneFile(p)))
}
export function removedIfNull(array: Array<string>) {
  return array.filter((el: string) => el.trim())
}
export function readDirectory(path: string) {
  let files: string[] = readdirSync(path)
  return new Promise((resolve, reject): void => {
    try {
      files.map((file: string) => join(path, file))
      resolve(files)
    } catch (error) {
      console.log(error, 'Erro!')
      reject(error)
    }
  })
}
