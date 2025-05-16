function canConstruct(
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

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]),
);
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]),
);
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ]),
);
