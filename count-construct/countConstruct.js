function countConstruct(target, words) {
  if (target === "") return 1;

  return words
    .filter((word) => target.startsWith(word))
    .map((prefix) => target.slice(prefix.length))
    .reduce((sum, suffix) => {
      const ways = countConstruct(suffix, words);
      sum += ways;
      return sum;
    }, 0);
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
