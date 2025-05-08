function howSum(targetSum, numbers, cache = {}) {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let choice of numbers) {
    const subResult = howSum(targetSum - choice, numbers, cache);
    if (Array.isArray(subResult)) {
      const result = [choice, ...subResult];
      return result;
    }
  }

  return null;
}

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
