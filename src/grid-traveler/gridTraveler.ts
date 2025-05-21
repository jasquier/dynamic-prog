function makeKey(m: number, n: number) {
  return m <= n ? `${m},${n}` : `${n},${m}`;
}

export function gridTraveler(
  m: number,
  n: number,
  cache: Record<string, number> = {},
): number {
  const key = makeKey(m, n);
  if (cache[key] !== undefined) return cache[key];

  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  cache[key] = gridTraveler(m - 1, n, cache) + gridTraveler(m, n - 1, cache);
  return cache[key];
}

export function gridTravelerIter(m: number, n: number) {
  const table = Array(m + 1)
    .fill(null)
    .map((_) => Array<number>(n + 1).fill(0));

  table![1]![1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const cur = table![i]![j] ?? 0;

      if (j + 1 <= n) table![i]![j + 1]! += cur;
      if (i + 1 <= m) table![i + 1]![j]! += cur;
    }
  }

  return table![m]![n] ?? 0;
}
