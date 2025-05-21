export function countConstruct(
  target: string,
  words: string[],
  cache: Record<string, number> = {},
) {
  if (cache[target] !== undefined) return cache[target];
  if (target === "") return 1;

  const total = words
    .filter((word) => target.startsWith(word))
    .map((prefix) => target.slice(prefix.length))
    .reduce((sum, suffix) => {
      const ways = countConstruct(suffix, words, cache) ?? 0;
      sum += ways;
      return sum;
    }, 0);

  cache[target] = total;
  return total;
}

export function countConstructIter(target: string, words: string[]) {
  const table = Array<number>(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    const ele = table[i] ?? 0;
    for (const word of words) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] = (table[i + word.length] ?? 0) + ele;
      }
    }
  }

  return table[target.length] ?? 0;
}
