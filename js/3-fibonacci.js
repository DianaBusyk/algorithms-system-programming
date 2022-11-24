// 1, 1, 2, 3, 5, 8, 13, 21, 34...

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// console.log(fib(9));

// array

function fibonacci(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2);
  }

  return `${n} number: ${result[n]}`;
}

console.log(fibonacci(13));
