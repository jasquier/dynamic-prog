import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { gridTraveler, gridTravelerIter } from "./gridTraveler.ts";

type GridTestInput = [m: number, n: number];
type GridTestPair = [input: GridTestInput, expected: number];

describe("gridTraveler", () => {
  it("matches expected values", () => {
    const pairs: GridTestPair[] = [
      [[1, 1], 1],
      [[2, 1], 1],
      [[1, 2], 1],
      [[2, 2], 2],
      [[2, 3], 3],
      [[18, 18], 2_333_606_220],
    ];

    pairs.forEach(([input, expected]) => {
      const [m, n] = input;
      assert.equal(gridTraveler(m, n), expected);
      assert.equal(gridTravelerIter(m, n), expected);
    });
  });
});
