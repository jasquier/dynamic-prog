import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { howSum, howSumIter } from "./howSum.ts";

type HowSumInput = [targetSum: number, numbers: number[]];
type HowSumTestPair = [input: HowSumInput, expected: number[] | null];

describe("howSum", () => {
  it("matches expected values", () => {
    const pairs: HowSumTestPair[] = [
      [
        [7, [2, 3]],
        [2, 2, 3],
      ],
      [
        [7, [5, 3, 4, 7]],
        [3, 4],
      ],
      [[7, [2, 4]], null],
      [
        [8, [2, 3, 5]],
        [2, 2, 2, 2],
      ],
      [[300, [7, 14]], null],
    ];

    pairs.forEach(([input, expected]) => {
      const [targetSum, parts] = input;
      assert.deepEqual(sorted(howSum(targetSum, parts)), expected);
      assert.deepEqual(sorted(howSumIter(targetSum, parts)), expected);
    });
  });
});

function sorted(arr: number[] | null) {
  return arr && arr.sort((a, b) => a - b);
}
