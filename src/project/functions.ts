import { readdirSync, readFile } from "fs";
import { join } from 'path';

export function filteredSrtExtensions(array, ext: string = '.srt') {
  return array.filter((el: string) => el.endsWith(ext))
}
function readOneFile(path: string) {
  return new Promise((resolve, reject) => {
    try {
      readFile(path, (err, data) => resolve(data.toString()))
      // resolve(data.toString())
    } catch (error) {
      reject(error)
    }
  })
}

export function readMultiplyFiles(paths: string[]) {
  return Promise.all(paths.map(p => readOneFile(p)))
}

export function removedIfNull(array: string[]) {
  return array.filter((el: string) => el.trim())
}

export function removedTimes(defaultText: string = '-->') {
  return (array: string[]) => array.filter((el: string) => !el.includes(defaultText))
}

export function removedSymbols(symbols: string[]) {
  return (array: string[]) => array.map((el: string) => {
    let textNoSymbols: string = el
    symbols.forEach((symbol: string) => textNoSymbols.split(symbol).join)
    return textNoSymbols
  })
}

export function removedNumbers(array: string[]) {
  return array.filter((el: string) => {
    const num = parseInt(el.trim())

    return num !== num
  })
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

export function separateLines(separate) { return separate.join('\n') }
export function joinContext(separate) { return separate.join(' ') }
export function separateWords(separate) { return separate.split(' ') }
