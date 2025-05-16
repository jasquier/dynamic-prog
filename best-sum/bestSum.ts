function bestSum(
  targetSum: number,
  numbers: number[],
  cache: Record<number, number[] | null> = {},
) {
  if (targetSum in cache) return cache[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombo: number[] | null = null;

  for (let choice of numbers) {
    const subResult = bestSum(targetSum - choice, numbers, cache);

    if (Array.isArray(subResult)) {
      const result = [choice, ...subResult];
      if (shortestCombo === null || result.length < shortestCombo.length) {
        shortestCombo = result;
      }
    }
  }

  cache[targetSum] = shortestCombo;
  return shortestCombo;
}

console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(300, [7, 14]));
console.log(bestSum(100, [1, 2, 5, 25]));
