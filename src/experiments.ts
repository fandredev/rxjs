// function main() : void {
//   fn1()
// }
// function fn1() : void {
//   fn2()
// }
// function fn2() : void {
//   fn3()
// }
// function fn3() : void {
//   setTimeout(() => fn4(), 3000)
//   console.log('fn3');
// }
// function fn4() : void {
//   fn5()
// }
// function fn5() : void {
//   console.log('timeout');
// }
// main()
// console.log('Fim');


function waitFor(time: number) : void {
  const future = Date.now() + time
  while(Date.now() < future) {}
}

setTimeout(() => console.log('Exec #001'), 400)
setTimeout(() => {
  waitFor(3000)
  console.log('Exec #002');

},300)

waitFor(5000)
console.log('Fim!');
