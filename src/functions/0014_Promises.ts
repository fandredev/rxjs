// Callbacks
// setTimeout(() => {
//   console.log('Execute cb...');
//   setTimeout(() => {
//     console.log('Execute cb 2...');
//     setTimeout(() => {
//       console.log('Execute cb 3...');
//     }, 2000)
//   }, 2000)
// }, 2000)

// Promises
function waitBy(time: number = 2000): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('')
    }, time);
  })
}

waitBy(3000)
  .then(() => waitBy(3000))
  .then(() => waitBy(3000))
