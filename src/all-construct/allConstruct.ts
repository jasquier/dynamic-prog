export function allConstruct(
  target: string,
  words: string[],
  cache: Record<string, string[][]> = {},
) {
  if (cache[target] !== undefined) return cache[target];
  if (target === "") return [[]];

  const result: string[][] = [];

  const choices = words.filter((word) => target.startsWith(word));

  for (const choice of choices) {
    const suffix = target.slice(choice.length);
    const suffixWays = allConstruct(suffix, words, cache);
    const targetWays = suffixWays?.map((way) => [choice, ...way]);
    targetWays?.forEach((way) => {
      result.push(way);
    });
  }

  cache[target] = result;
  return result;
}
