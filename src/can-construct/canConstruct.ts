export function canConstruct(
  target: string,
  words: string[],
  cache: Record<string, boolean> = {},
) {
  if (target in cache) return cache[target];
  if (target === "") return true;

  const choices = words.filter((word) => target.startsWith(word));

  for (const choice of choices) {
    const suffix = target.slice(choice.length);
    if (canConstruct(suffix, words, cache)) return true;
  }

  cache[target] = false;
  return false;
}
