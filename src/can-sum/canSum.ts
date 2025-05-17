function canSum(
  targetSum: number,
  parts: number[],
  cache: Record<number, boolean> = {},
) {
  if (cache[targetSum] !== undefined) return cache[targetSum];
  if (targetSum === 0) return true;

  const choices = parts.filter((part) => part <= targetSum);

  for (let choice of choices) {
    if (canSum(targetSum - choice, parts, cache)) {
      cache[targetSum] = true;
      return true;
    }
  }

  cache[targetSum] = false;
  return false;
}

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
