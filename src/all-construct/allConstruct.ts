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

export function allConstructIter(target: string, words: string[]) {
  const table = Array(target.length + 1)
    .fill(null)
    .map((_) => Array<string[]>());
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    const ele = table[i] ?? [];
    for (const word of words) {
      if (target.slice(i, i + word.length) === word) {
        const newCombos = ele.map((subArray) => [...subArray, word]);
        table[i + word.length]?.push(...newCombos);
      }
    }
  }

  return table[target.length] ?? [];
}
