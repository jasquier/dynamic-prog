import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { canSum, canSumIter } from "./canSum.ts";

type CanSumInput = [targetSum: number, parts: number[]];
type CanSumTestPair = [input: CanSumInput, expected: boolean];

describe("canSum", () => {
  it("matches expected values", () => {
    const pairs: CanSumTestPair[] = [
      [[7, [2, 3]], true],
      [[7, [5, 3, 4, 7]], true],
      [[7, [2, 4]], false],
      [[8, [2, 3, 5]], true],
      [[300, [7, 14]], false],
    ];

    pairs.forEach(([input, expected]) => {
      const [targetSum, parts] = input;
      assert.equal(canSum(targetSum, parts), expected);
      assert.equal(canSumIter(targetSum, parts), expected);
    });
  });
});
