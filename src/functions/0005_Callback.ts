import fs from 'fs';
import { join } from 'path';


const _path = join(__dirname, 'data.txt')

function showContext(_: any, data: any) {
  console.log(data.toString());
}

// fs.readFile(_path, showContext)
// fs.readFile(_path, (_, content) => console.log(content.toString()))

console.log('Start async');

const content: Buffer = fs.readFileSync(_path) // Síncrona
console.log(content.toString());

console.log('End async');
