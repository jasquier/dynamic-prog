import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { canConstruct } from "./canConstruct.ts";

type CanConstructInput = [target: string, words: string[]];
type CanConstructTestPair = [input: CanConstructInput, expected: boolean];

describe("canConstruct", () => {
  it("matches expected values", () => {
    const pairs: CanConstructTestPair[] = [
      [["abcdef", ["ab", "abc", "cd", "def", "abcd"]], true],
      [["skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]], false],
      [["enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]], true],
      [
        [
          "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
          ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"],
        ],
        false,
      ],
    ];

    pairs.forEach(([input, expected]) => {
      const [target, words] = input;
      assert.deepEqual(canConstruct(target, words), expected);
    });
  });
});
