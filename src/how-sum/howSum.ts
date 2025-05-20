function howSum(
  targetSum: number,
  numbers: number[],
  cache: Record<number, number[] | null> = {},
) {
  if (cache[targetSum] !== undefined) return cache[targetSum];
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

function howSumIter(targetSum: number, numbers: number[]): number[] | null {
  const table: (number[] | null)[] = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    const ele = table[i];
    if (Array.isArray(ele)) {
      for (let num of numbers) {
        table[i + num] = ele.concat(num);
      }
    }
  }

  return table[targetSum] ?? null;
}

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
console.log(howSumIter(300, [7, 14]));
