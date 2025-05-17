function countConstruct(
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

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]),
);
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]),
);
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ]),
);
