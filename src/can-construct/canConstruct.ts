export function canConstruct(
  target: string,
  words: string[],
  cache: Record<string, boolean> = {},
) {
  if (cache[target] !== undefined) return cache[target];
  if (target === "") return true;

  const choices = words.filter((word) => target.startsWith(word));

  for (const choice of choices) {
    const suffix = target.slice(choice.length);
    if (canConstruct(suffix, words, cache)) return true;
  }

  cache[target] = false;
  return false;
}

export function canConstructIter(target: string, words: string[]) {
  const table = Array<boolean>(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (const word of words) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length] ?? false;
}
