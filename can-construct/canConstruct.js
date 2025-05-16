function canConstruct(target, wordBank) {
  if (target === "") return true;

  const choices = wordBank.filter((word) => target.startsWith(word));

  for (const choice of choices) {
    const suffix = target.slice(choice.length);
    if (canConstruct(suffix, wordBank)) return true;
  }

  return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
