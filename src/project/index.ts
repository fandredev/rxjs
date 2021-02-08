import { join } from 'path';
import { filteredSrtExtensions, readDirectory, readMultiplyFiles, removedIfNull } from './functions';

const path = join(__dirname, '..', 'project', 'legends')

readDirectory(path)
  .then(files => filteredSrtExtensions(files))
  .then(fileStr => readMultiplyFiles(fileStr))
  .then(content => content.join('\n'))
  .then(separate => separate.split('\n'))
  .then(lines => removedIfNull(lines))
  .then(console.log)
