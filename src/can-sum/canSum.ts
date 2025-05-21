export function canSum(
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

export function canSumIter(targetSum: number, parts: number[]): boolean {
  const table = Array<boolean>(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let part of parts) {
        table[i + part] = true;
      }
    }
  }

  return table[targetSum] ?? false;
}
