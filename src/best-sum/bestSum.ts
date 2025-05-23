export function bestSum(
  targetSum: number,
  numbers: number[],
  cache: Record<number, number[] | null> = {},
): number[] | null {
  if (cache[targetSum] !== undefined) return cache[targetSum];
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

export function bestSumIter(
  targetSum: number,
  numbers: number[],
): number[] | null {
  const table = Array<number[] | null>(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    const ele = table[i];
    if (Array.isArray(ele)) {
      for (let num of numbers) {
        const newSolution = ele.concat(num);
        const curSolutionLen = table[i + num]?.length ?? Infinity;
        if (newSolution.length < curSolutionLen) {
          table[i + num] = newSolution;
        }
      }
    }
  }

  return table[targetSum] ?? null;
}
