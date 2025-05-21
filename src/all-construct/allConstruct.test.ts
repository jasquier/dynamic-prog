import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { allConstruct } from "./allConstruct.ts";

type AllConstructInput = [target: string, words: string[]];
type AllConstructTestPair = [input: AllConstructInput, expected: string[][]];

describe("allConstruct", () => {
  it("matches expected values", () => {
    const pairs: AllConstructTestPair[] = [
      [["abcdef", ["ab", "abc", "cd", "def", "abcd"]], [["abc", "def"]]],
      [["skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]], []],
      [
        ["enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]],
        [
          ["enter", "a", "p", "ot", "ent", "p", "ot"],
          ["enter", "a", "p", "ot", "ent", "p", "o", "t"],
          ["enter", "a", "p", "o", "t", "ent", "p", "ot"],
          ["enter", "a", "p", "o", "t", "ent", "p", "o", "t"],
        ],
      ],
      [
        [
          "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
          ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"],
        ],
        [],
      ],
    ];

    pairs.forEach(([input, expected]) => {
      const [target, words] = input;
      assert.deepEqual(allConstruct(target, words), expected);
    });
  });
});
