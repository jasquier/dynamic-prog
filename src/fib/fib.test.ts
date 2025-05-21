import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fib, fibIter } from "./fib.ts";

type FibTestPair = [input: number, expected: number];

describe("fib", () => {
  it("matches expected values", () => {
    const pairs: FibTestPair[] = [
      [6, 8],
      [7, 13],
      [8, 21],
      [50, 12586269025],
    ];

    pairs.forEach(([input, expected]) => {
      assert.equal(fib(input), expected);
      assert.equal(fibIter(input), expected);
    });
  });
});
