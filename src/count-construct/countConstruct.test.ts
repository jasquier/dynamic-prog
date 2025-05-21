import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { countConstruct } from "./countConstruct.ts";

type CountConstructInput = [target: string, words: string[]];
type CountConstructTestPair = [input: CountConstructInput, expected: number];

describe("countConstruct", () => {
  it("matches expected values", () => {
    const pairs: CountConstructTestPair[] = [
      [["abcdef", ["ab", "abc", "cd", "def", "abcd"]], 1],
      [["skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]], 0],
      [["enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]], 4],
      [
        [
          "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
          ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"],
        ],
        0,
      ],
    ];

    pairs.forEach(([input, expected]) => {
      const [target, words] = input;
      assert.deepEqual(countConstruct(target, words), expected);
    });
  });
});
