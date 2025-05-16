const cache: Record<string, number> = {};

function makeKey(m: number, n: number) {
  return m <= n ? `${m},${n}` : `${n},${m}`;
}

function gridTraveler(m: number, n: number) {
  const key = makeKey(m, n);
  if (key in cache) return cache[key];

  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  cache[key] = gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
  return cache[key];
}

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 1));
console.log(gridTraveler(1, 2));
console.log(gridTraveler(2, 2));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(18, 18).toLocaleString());
