function allConstruct(target, words) {
  if (target === "") return [[]];

  const result = [];

  const choices = words.filter((word) => target.startsWith(word));

  for (const choice of choices) {
    const suffix = target.slice(choice.length);
    const suffixWays = allConstruct(suffix, words);
    const targetWays = suffixWays.map((way) => [choice, ...way]);
    result.push(...targetWays);
  }

  return result;
}

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]),
);
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]),
);
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ]),
);
