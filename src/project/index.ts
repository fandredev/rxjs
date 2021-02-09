import { join } from 'path';
import {
  filteredSrtExtensions,




  joinContext, readDirectory,
  readMultiplyFiles,
  removedIfNull,
  removedNumbers,

  removedSymbols, removedTimes, separateLines,
  separateWords
} from './functions';

const path = join(__dirname, '..', 'project', 'legends')

const symbols = ['.', '?', '-', '"', '_', '<i>', '</i>', '\r', '♪', '[', ']', '(', ')']


readDirectory(path)
  .then(files => filteredSrtExtensions(files))
  .then(fileStr => readMultiplyFiles(fileStr))
  .then(content => joinContext(content))
  .then(separate => separateLines(separate))
  .then(lines => removedIfNull(lines))
  .then(removedTimes('-->'))
  .then(removedNumber => removedNumbers(removedNumber))
  .then(removedSymbols(symbols))
  .then(noSymbols => joinContext(noSymbols))
  .then(words => separateWords(words))
  .then(lines => removedIfNull(lines))
  .then(console.log)
