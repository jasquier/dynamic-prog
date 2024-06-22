const cache = {};

function fib(n) {
  if (n in cache) return cache[n];
  if (n <= 2) return 1;

  cache[n] = fib(n - 1) + fib(n - 2);
  return cache[n];
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));
