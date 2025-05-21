export function howSum(
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

export function howSumIter(
  targetSum: number,
  numbers: number[],
): number[] | null {
  const table = Array<number[] | null>(targetSum + 1).fill(null);
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
