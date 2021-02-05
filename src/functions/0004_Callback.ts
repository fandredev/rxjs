function exec(fn: any, a: number, b: number): number {
  return fn(a, b)
}

const sumInTerminal = (x: number, y: typeof x): void => console.log(x + y);
const subtractInTerminal = (w: number, z: typeof w): void => console.log(w - z);
const subtract = (w: number, z: typeof w): number => w - z


exec(sumInTerminal, 25, 30)
exec(subtractInTerminal, 25, 30)

const r = exec(subtract, 50, 25)
console.log(r);

const cb = () => console.log('Exec');

// setInterval(() => console.log('Exec'), 1000)
setInterval(function () { console.log('Exec 2') }, 1000)
// setInterval(cb, 1000)
