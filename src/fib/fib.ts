export function fib(n: number, cache: Record<number, number> = {}): number {
  if (cache[n] !== undefined) return cache[n];
  if (n <= 2) return 1;

  const result = fib(n - 1, cache) + fib(n - 2, cache);
  cache[n] = result;
  return result;
}

export function fibIter(n: number) {
  const table = Array<number>(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] = (table[i + 1] ?? 0) + (table[i] ?? 0);
    table[i + 2] = (table[i + 2] ?? 0) + (table[i] ?? 0);
  }

  return table[n];
}
