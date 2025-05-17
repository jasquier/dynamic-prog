function fib(n: number, cache: Record<number, number> = {}): number {
  if (cache[n] !== undefined) return cache[n];
  if (n <= 2) return 1;

  const result = fib(n - 1, cache) + fib(n - 2, cache);
  cache[n] = result;
  return result;
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));
