function howSum(
  targetSum: number,
  numbers: number[],
  cache: Record<number, number[] | null> = {},
) {
  if (targetSum in cache) return cache[targetSum];
  if (targetSum === 0) return [] satisfies number[];
  if (targetSum < 0) return null;

  for (let choice of numbers) {
    const subResult = howSum(targetSum - choice, numbers, cache);
    if (Array.isArray(subResult)) {
      const result: number[] = [choice, ...subResult];
      cache[targetSum] = result;
      return result;
    }
  }

  cache[targetSum] = null;
  return null;
}

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
