function bestSum(targetSum, numbers) {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombo = null;

  for (let choice of numbers) {
    const subResult = bestSum(targetSum - choice, numbers);

    if (Array.isArray(subResult)) {
      const result = [choice, ...subResult];
      if (shortestCombo === null || result.length < shortestCombo.length) {
        shortestCombo = result;
      }
    }
  }

  return shortestCombo;
}

console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(300, [7, 14]));
