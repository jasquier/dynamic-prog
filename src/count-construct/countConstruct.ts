export function countConstruct(
  target: string,
  words: string[],
  cache: Record<string, number> = {},
) {
  if (target in cache) return cache[target];
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
