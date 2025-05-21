import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { bestSum, bestSumIter } from "./bestSum.ts";

type BestSumInput = [targetSum: number, numbers: number[]];
type BestSumTestPair = [input: BestSumInput, expected: number[] | null];

describe("bestSum", () => {
  it("matches expected values", () => {
    const pairs: BestSumTestPair[] = [
      [
        [7, [2, 3]],
        [2, 2, 3],
      ],
      [[7, [5, 3, 4, 7]], [7]],
      [[7, [2, 4]], null],
      [
        [8, [2, 3, 5]],
        [3, 5],
      ],
      [[300, [7, 14]], null],
    ];

    pairs.forEach(([input, expected]) => {
      const [targetSum, parts] = input;
      assert.deepEqual(sorted(bestSum(targetSum, parts)), expected);
      assert.deepEqual(sorted(bestSumIter(targetSum, parts)), expected);
    });
  });
});

function sorted(arr: number[] | null) {
  return arr && arr.sort((a, b) => a - b);
}
