function fib(n: number, cache: Record<number, number> = {}): number {
  if (cache[n] !== undefined) return cache[n];
  if (n <= 2) return 1;

  const result = fib(n - 1, cache) + fib(n - 2, cache);
  cache[n] = result;
  return result;
}

function fibIter(n: number) {
  const table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  return table[n];
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));
console.log(fibIter(100));
